import { useState, useEffect, useRef } from "react";
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

export function DrillSession() {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();
  const recordAnswer = useProgressStore((s) => s.recordAnswer);
  const shuffleChoices = getConfig().examRules.shuffleChoices;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const questionStartRef = useRef<number>(0);

  const { questionIds, currentQuestionIndex } = sessionStore;
  const progress = sessionStore.getProgress();
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
      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur">
        {!submitted ? (
          <Button
            className="w-full"
            size="lg"
            onClick={handleSubmit}
            disabled={!selectedId}
          >
            Submit
          </Button>
        ) : (
          <Button className="w-full" size="lg" onClick={handleNext}>
            {isLast ? "See Results" : "Next Question"}
          </Button>
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
