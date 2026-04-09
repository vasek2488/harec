import { useState, useEffect, useRef } from "react";
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

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function ExamSession() {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();
  const config = getConfig();
  const shuffleChoices = config.examRules.shuffleChoices;

  const { questionIds, currentQuestionIndex, answers } = sessionStore;
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerInitRef = useRef(false);

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
  const displayChoices = question
    ? shuffleChoices
      ? shuffleChoicesForQuestion(
          question.choices,
          `${sessionStore.sessionStartedAt ?? "session"}:${question.id}`
        )
      : [...question.choices]
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
      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur">
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

function shuffleChoicesForQuestion(choices: Choice[], seed: string): Choice[] {
  const random = createSeededRandom(seed);
  const shuffled = [...choices];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const current = shuffled[i];
    shuffled[i] = shuffled[j] as Choice;
    shuffled[j] = current as Choice;
  }

  return shuffled;
}

function createSeededRandom(seed: string): () => number {
  let value = 2166136261;

  for (let i = 0; i < seed.length; i += 1) {
    value ^= seed.charCodeAt(i);
    value = Math.imul(value, 16777619);
  }

  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
