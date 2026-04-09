import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router";
import { useSessionStore } from "@/stores/session-store";
import { useProgressStore } from "@/stores/progress-store";
import { getQuestionById, getConfig } from "@/lib/content-loader";
import { validateAnswer } from "@/lib/exam-engine";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { QuestionCard } from "@/components/drill/QuestionCard";
import { AnswerInput } from "@/components/drill/AnswerInput";
import { Button } from "@/components/ui/button";
import type { Choice } from "@/lib/types";
import { cs } from "@/../content/i18n/cs";

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = copy[i];
    copy[i] = copy[j] as T;
    copy[j] = current as T;
  }

  return copy;
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

export function DrillSession() {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();
  const recordAnswer = useProgressStore((s) => s.recordAnswer);
  const config = getConfig();

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const questionStartRef = useRef<number>(0);

  const { questionIds, currentQuestionIndex } = sessionStore;
  const shuffledChoicesMap = useMemo(
    () => buildChoiceMap(questionIds, config.examRules.shuffleChoices),
    [questionIds, config.examRules.shuffleChoices]
  );
  const progress = sessionStore.getProgress();
  const questionId = questionIds[currentQuestionIndex];
  const question = questionId ? getQuestionById(questionId) : undefined;

  // Redirect if no active session; track question start time
  useEffect(() => {
    if (!sessionStore.isSessionActive() || questionIds.length === 0) {
      navigate("/drill");
    }
    questionStartRef.current = Date.now();
  }, [navigate, questionIds.length, sessionStore]);

  if (!question) {
    return null;
  }

  const displayChoices = shuffledChoicesMap[question.id] ?? question.choices;

  const handleSubmit = () => {
    if (!selectedId) return;
    const correct = validateAnswer(question.id, selectedId, question);
    setSubmitted(true);

    // Record to session store
    sessionStore.recordAnswer({
      questionId: question.id,
      selectedChoiceId: selectedId,
      correct,
      timeSpentSeconds: Math.round((Date.now() - questionStartRef.current) / 1000),
    });

    // Record to progress store (spaced repetition)
    recordAnswer(question.id, selectedId, correct);
  };

  const handleNext = () => {
    const isLast = currentQuestionIndex === questionIds.length - 1;
    if (isLast) {
      sessionStore.endSession();
      navigate("/drill/results");
    } else {
      sessionStore.goToNextQuestion();
      setSelectedId(null);
      setSubmitted(false);
      questionStartRef.current = Date.now();
    }
  };

  const isLast = currentQuestionIndex === questionIds.length - 1;

  return (
    <>
      <Header title="Procvičování" />
      <PageContainer>
        <div className="space-y-4 pb-28">
          <QuestionCard
            question={question}
            current={progress.current}
            total={progress.total}
          />

          <AnswerInput
            choices={displayChoices}
            selectedId={selectedId}
            correctId={submitted ? question.correctChoiceId : undefined}
            onSelect={setSelectedId}
            submitted={submitted}
          />

          {/* Explanation */}
          {submitted && question.explanation && (
            <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
              {question.explanation}
            </div>
          )}
        </div>
      </PageContainer>

      {/* Bottom action */}
      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur lg:bottom-0">
        <div className="max-w-md mx-auto lg:max-w-5xl">
          {!submitted ? (
            <Button
              className="w-full"
              size="lg"
              onClick={handleSubmit}
              disabled={!selectedId}
            >
              {cs.common.confirm}
            </Button>
          ) : (
            <Button className="w-full" size="lg" onClick={handleNext}>
              {isLast ? cs.drill.results : cs.common.next}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
