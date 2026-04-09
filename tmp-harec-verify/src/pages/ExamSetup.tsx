import { useNavigate } from "react-router";
import { useSessionStore } from "@/stores/session-store";
import { getQuestions, getConfig } from "@/lib/content-loader";
import { generateExamSession } from "@/lib/exam-engine";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2, AlertCircle } from "lucide-react";

export function ExamSetup() {
  const navigate = useNavigate();
  const startSession = useSessionStore((s) => s.startSession);

  const config = getConfig();
  const allQuestions = getQuestions();
  const rules = config.examRules;
  const examSession = generateExamSession(config, allQuestions);
  const canStartExam = examSession.questionIds.length > 0;

  const handleStart = () => {
    if (!canStartExam) return;
    startSession("exam", examSession.questionIds);
    navigate("/exam/session");
  };

  return (
    <>
      <Header title="Zkušební test" />
      <PageContainer>
        <div className="space-y-6 pb-28">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Pravidla testu</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>Celkem {rules.totalQuestions} otázek</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Časový limit: {rules.timeLimitMinutes} minut</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <AlertCircle className="h-4 w-4 shrink-0 text-primary" />
                <span>
                  Pro úspěch: alespoň {rules.passPercentage} % správných
                  odpovědí
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-3 font-semibold">Rozdělení otázek</h2>
            <div className="space-y-2">
              {config.parts.map((part) => (
                <div
                  key={part.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3"
                >
                  <span className="text-sm">{part.name}</span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {part.examQuestionCount} otázek
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Otázky jsou náhodně zamíchány. Po spuštění nelze test pozastavit.
          </p>

          {!canStartExam && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300">
              Chyba integrity obsahu: databanka otázek je prázdná nebo neobsahuje
              žádné použitelné otázky, takže test nelze spustit.
            </div>
          )}
        </div>
      </PageContainer>

      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur">
        <Button
          className="w-full"
          size="lg"
          onClick={handleStart}
          disabled={!canStartExam}
        >
          Spustit test
        </Button>
      </div>
    </>
  );
}
