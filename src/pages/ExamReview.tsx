import { useNavigate } from "react-router";
import { useSessionStore } from "@/stores/session-store";
import { getQuestionById } from "@/lib/content-loader";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

export function ExamReview() {
  const navigate = useNavigate();
  const { questionIds, answers, sessionType } = useSessionStore();

  if (questionIds.length === 0 || sessionType !== "exam") {
    navigate("/exam");
    return null;
  }

  return (
    <>
      <Header title="Přehled odpovědí" />
      <PageContainer>
        <div className="space-y-3 pb-24">
          {questionIds.map((qId, idx) => {
            const question = getQuestionById(qId);
            const answer = answers.find((a) => a.questionId === qId);

            if (!question) return null;

            const selectedChoice = question.choices.find(
              (c) => c.id === answer?.selectedChoiceId
            );
            const correctChoice = question.choices.find(
              (c) => c.id === question.correctChoiceId
            );
            const isCorrect = answer?.correct === true;
            const isUnanswered = !answer;

            return (
              <div
                key={qId}
                className={`rounded-lg border p-4 ${
                  isUnanswered
                    ? "border-border bg-card"
                    : isCorrect
                      ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20"
                      : "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    {isUnanswered ? (
                      <MinusCircle className="h-4 w-4 text-muted-foreground" />
                    ) : isCorrect ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <p className="text-xs font-medium text-muted-foreground">
                      Otázka {idx + 1}
                    </p>
                    <p className="text-sm font-medium leading-snug">
                      {question.wording}
                    </p>

                    {isUnanswered ? (
                      <p className="text-xs text-muted-foreground">
                        Nezodpovězeno
                      </p>
                    ) : isCorrect ? (
                      <p className="text-xs text-green-600 dark:text-green-400">
                        {selectedChoice?.text}
                      </p>
                    ) : (
                      <div className="space-y-0.5 text-xs">
                        <p className="text-red-600 dark:text-red-400">
                          Vaše: {selectedChoice?.text ?? "–"}
                        </p>
                        <p className="text-green-600 dark:text-green-400">
                          Správně: {correctChoice?.text}
                        </p>
                      </div>
                    )}

                    {!isCorrect && !isUnanswered && question.explanation && (
                      <p className="text-xs italic text-muted-foreground">
                        {question.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>

      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur lg:bottom-0">
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/exam/results")}
          >
            Výsledky
          </Button>
          <Button className="flex-1" onClick={() => navigate("/exam")}>
            Nový test
          </Button>
        </div>
      </div>
    </>
  );
}
