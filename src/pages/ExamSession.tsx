import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router";
import { useSessionStore } from "@/stores/session-store";
import { getQuestionById, getConfig } from "@/lib/content-loader";
import { validateAnswer } from "@/lib/exam-engine";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { QuestionCard } from "@/components/drill/QuestionCard";
import { AnswerInput } from "@/components/drill/AnswerInput";
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle } from "lucide-react";
import type { Choice } from "@/lib/types";

export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j] as T;
    copy[j] = tmp as T;
  }
  return copy;
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function buildChoiceMap(
  questionIds: string[],
  shuffleChoices: boolean
): Record<string, Choice[]> {
  if (!shuffleChoices) return {};

  return questionIds.reduce<Record<string, Choice[]>>((map, questionId) => {
    const question = getQuestionById(questionId);
    if (question) {
      map[questionId] = shuffleArray(question.choices);
    }
    return map;
  }, {});
}

export function ExamSession() {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();
  const config = getConfig();

  const { questionIds, currentQuestionIndex, answers } = sessionStore;
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerInitRef = useRef(false);
  const shuffledChoicesMap = useMemo(
    () => buildChoiceMap(questionIds, config.examRules.shuffleChoices),
    [questionIds, config.examRules.shuffleChoices]
  );

  // Redirect if no active exam session
  useEffect(() => {
    if (
      !sessionStore.isSessionActive() ||
      sessionStore.sessionType !== "exam" ||
      questionIds.length === 0
    ) {
      navigate("/exam");
    }
  }, [navigate, questionIds.length, sessionStore]);

  // Initialize countdown timer once on mount
  useEffect(() => {
    if (timerInitRef.current) return;
    timerInitRef.current = true;

    const totalSeconds = config.examRules.timeLimitMinutes * 60;
    const startedAt = sessionStore.sessionStartedAt;
    const elapsed = startedAt
      ? Math.floor((Date.now() - new Date(startedAt).getTime()) / 1000)
      : 0;
    const remaining = Math.max(0, totalSeconds - elapsed);

    setTimeRemaining(remaining);

    const id = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    timerRef.current = id;
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-finish when timer hits zero
  useEffect(() => {
    if (timeRemaining === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      sessionStore.endSession();
      navigate("/exam/results");
    }
  }, [timeRemaining, navigate, sessionStore]);

  const questionId = questionIds[currentQuestionIndex];
  const question = questionId ? getQuestionById(questionId) : undefined;

  const displayChoices: Choice[] = question
    ? shuffledChoicesMap[question.id] ?? question.choices
    : [];

  if (!question) return null;

  const currentAnswer = answers.find((a) => a.questionId === question.id);
  const selectedId = currentAnswer?.selectedChoiceId ?? null;
  const answeredCount = answers.length;
  const unansweredCount = questionIds.length - answeredCount;
  const isWarning = timeRemaining !== null && timeRemaining <= 300;
  const isLast = currentQuestionIndex === questionIds.length - 1;

  const handleSelect = (choiceId: string) => {
    const correct = validateAnswer(question.id, choiceId, question);
    sessionStore.recordAnswer({
      questionId: question.id,
      selectedChoiceId: choiceId,
      correct,
      timeSpentSeconds: 0,
    });
  };

  const handleFinish = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    sessionStore.endSession();
    navigate("/exam/results");
  };

  return (
    <>
      <Header title="Zkušební test" />

      {/* Timer banner */}
      <div
        className={`sticky top-14 z-10 flex items-center justify-between border-b px-4 py-2 text-sm ${
          isWarning
            ? "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30"
            : "border-border bg-background"
        }`}
      >
        <div
          className={`flex items-center gap-1.5 font-medium ${
            isWarning ? "text-red-600 dark:text-red-400" : ""
          }`}
        >
          {isWarning && <AlertTriangle className="h-4 w-4" />}
          <Clock className="h-4 w-4" />
          <span>
            {timeRemaining !== null ? formatTime(timeRemaining) : "--:--"}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {answeredCount}/{questionIds.length} zodpovězeno
          {unansweredCount > 0 && ` · ${unansweredCount} zbývá`}
        </span>
      </div>

      <PageContainer>
        <div className="space-y-4 pb-28">
          <QuestionCard
            question={question}
            current={currentQuestionIndex + 1}
            total={questionIds.length}
          />

          <AnswerInput
            choices={displayChoices}
            selectedId={selectedId}
            onSelect={handleSelect}
            submitted={false}
          />
        </div>
      </PageContainer>

      {/* Navigation */}
      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur lg:bottom-0">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => sessionStore.goToPreviousQuestion()}
            disabled={currentQuestionIndex === 0}
          >
            Předchozí
          </Button>

          {isLast ? (
            <Button className="flex-1" onClick={handleFinish}>
              Odevzdat test
            </Button>
          ) : (
            <Button
              className="flex-1"
              onClick={() => sessionStore.goToNextQuestion()}
            >
              Další
            </Button>
          )}
        </div>

        {isLast && unansweredCount > 0 && (
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Ještě {unansweredCount} nezodpovězených otázek
          </p>
        )}
      </div>
    </>
  );
}
