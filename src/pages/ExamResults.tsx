import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSessionStore } from "@/stores/session-store";
import { useProgressStore } from "@/stores/progress-store";
import { getQuestions, getConfig } from "@/lib/content-loader";
import { calculateScore, calculatePartScores } from "@/lib/exam-engine";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import type { ExamResult } from "@/lib/types";

export function ExamResults() {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();
  const saveExamResult = useProgressStore((s) => s.saveExamResult);

  const {
    answers,
    questionIds,
    sessionId,
    sessionStartedAt,
    sessionEndedAt,
    sessionType,
  } = sessionStore;
  const allQuestions = getQuestions();
  const config = getConfig();

  const score = calculateScore(answers, config.examRules);
  const partScores = calculatePartScores(answers, allQuestions, config);

  useEffect(() => {
    if (questionIds.length === 0 || sessionType !== "exam" || !sessionId)
      return;

    const partScoresRecord: Record<string, { correct: number; total: number }> =
      {};
    partScores.forEach((ps) => {
      partScoresRecord[ps.partId] = { correct: ps.correct, total: ps.total };
    });

    const result: ExamResult = {
      id: sessionId,
      startedAt: sessionStartedAt ?? new Date().toISOString(),
      finishedAt: sessionEndedAt ?? new Date().toISOString(),
      totalQuestions: questionIds.length,
      correctAnswers: score.correct,
      passed: score.passed,
      partScores: partScoresRecord,
      answers,
    };

    saveExamResult(result);
  }, [
    answers,
    partScores,
    questionIds.length,
    saveExamResult,
    score.correct,
    score.passed,
    sessionEndedAt,
    sessionId,
    sessionStartedAt,
    sessionType,
  ]);

  // Redirect if no exam data available
  if (questionIds.length === 0 || sessionType !== "exam") {
    navigate("/exam");
    return null;
  }

  return (
    <>
      <Header title="Výsledky testu" />
      <PageContainer>
        <div className="space-y-6 pb-28">
          {/* Pass/Fail banner */}
          <div
            className={`rounded-xl border p-6 text-center shadow-sm ${
              score.passed
                ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20"
                : "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20"
            }`}
          >
            {score.passed ? (
              <CheckCircle2 className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-green-400" />
            ) : (
              <XCircle className="mx-auto mb-2 h-10 w-10 text-red-600 dark:text-red-400" />
            )}
            <p
              className={`text-3xl font-bold ${
                score.passed
                  ? "text-green-700 dark:text-green-300"
                  : "text-red-700 dark:text-red-300"
              }`}
            >
              {score.passed ? "Úspěch!" : "Neúspěch"}
            </p>
            <p className="mt-1 text-4xl font-bold">{score.percentage}%</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {score.correct} / {score.total} správně · minimum{" "}
              {config.examRules.passPercentage}%
            </p>
          </div>

          {/* Part breakdown */}
          {partScores.length > 0 && (
            <div>
              <h2 className="mb-3 font-semibold">Výsledky podle části</h2>
              <div className="space-y-3">
                {partScores.map((ps) => (
                  <div
                    key={ps.partId}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium">{ps.partName}</p>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full ${
                            ps.percentage >= 75
                              ? "bg-green-500"
                              : ps.percentage >= 50
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                          style={{ width: `${ps.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-semibold">
                      {ps.correct}/{ps.total}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </PageContainer>

      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur lg:bottom-0">
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/exam/review")}
          >
            Přehled odpovědí
          </Button>
          <Button className="flex-1" onClick={() => navigate("/exam")}>
            Nový test
          </Button>
        </div>
      </div>
    </>
  );
}
