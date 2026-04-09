import { useNavigate } from "react-router";
import { useSessionStore } from "@/stores/session-store";
import { getQuestionById, getConfig } from "@/lib/content-loader";
import { calculatePartScores } from "@/lib/exam-engine";
import { getQuestions } from "@/lib/content-loader";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cs } from "@/../content/i18n/cs";

export function DrillResults() {
  const navigate = useNavigate();
  const { answers } = useSessionStore();

  const allQuestions = getQuestions();
  const config = getConfig();

  const total = answers.length;
  const correct = answers.filter((a) => a.correct).length;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;

  const partScores = calculatePartScores(answers, allQuestions, config);
  const wrongAnswers = answers.filter((a) => !a.correct);

  if (total === 0) {
    // No session - redirect
    navigate("/drill");
    return null;
  }

  return (
    <>
      <Header title={cs.drill.results} />
      <PageContainer>
        <div className="space-y-6 pb-24">
          {/* Score summary */}
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <p className="text-6xl font-bold">{score}%</p>
            <p className="mt-2 text-muted-foreground">
              {cs.drill.correctCount(correct, total)}
            </p>
          </div>

          {/* Part breakdown */}
          {partScores.length > 0 && (
            <div>
              <h2 className="mb-3 font-semibold">{cs.drill.byPart}</h2>
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
                            ps.percentage >= 75 ? "bg-green-500" : ps.percentage >= 50 ? "bg-yellow-500" : "bg-red-500"
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

          {/* Wrong answers */}
          {wrongAnswers.length > 0 && (
            <div>
              <h2 className="mb-3 font-semibold">
                {cs.drill.mistakes(wrongAnswers.length)}
              </h2>
              <div className="space-y-3">
                {wrongAnswers.map((answer) => {
                  const q = getQuestionById(answer.questionId);
                  if (!q) return null;
                  const selectedChoice = q.choices.find(
                    (c) => c.id === answer.selectedChoiceId
                  );
                  const correctChoice = q.choices.find(
                    (c) => c.id === q.correctChoiceId
                  );
                  return (
                    <div
                      key={answer.questionId}
                      className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20"
                    >
                      <p className="text-sm font-medium">{q.wording}</p>
                      <div className="mt-2 space-y-1 text-xs">
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                          <XCircle className="h-3 w-3 shrink-0" />
                          <span>{cs.drill.yourAnswer}: {selectedChoice?.text ?? cs.common.noAnswer}</span>
                        </div>
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                          <CheckCircle2 className="h-3 w-3 shrink-0" />
                          <span>{cs.drill.correctAnswer}: {correctChoice?.text}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </PageContainer>

      {/* Bottom CTAs */}
      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur lg:bottom-0">
        <div className="flex gap-3 max-w-md mx-auto lg:max-w-5xl">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/drill")}
          >
            {cs.drill.newDrill}
          </Button>
          <Button className="flex-1" onClick={() => navigate("/")}>
            {cs.nav.dashboard}
          </Button>
        </div>
      </div>
    </>
  );
}
