import { useNavigate } from "react-router";
import { useSessionStore } from "@/stores/session-store";
import type { Question, QuestionStat } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { BookOpen, Dumbbell } from "lucide-react";

interface MistakeCardProps {
  question: Question;
  stat: QuestionStat;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function MistakeCard({ question, stat }: MistakeCardProps) {
  const navigate = useNavigate();
  const startSession = useSessionStore((s) => s.startSession);

  const accuracy =
    stat.timesAnswered > 0
      ? Math.round((stat.timesCorrect / stat.timesAnswered) * 100)
      : 0;
  const mistakes = stat.timesAnswered - stat.timesCorrect;

  const correctChoice = question.choices.find(
    (c) => c.id === question.correctChoiceId
  );

  const handleDrill = () => {
    startSession("drill", [question.id]);
    navigate("/drill/session");
  };

  const relatedLesson = question.relatedLessonIds[0];

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20">
      <p className="text-sm font-medium leading-snug">{question.wording}</p>

      {/* Correct answer */}
      {correctChoice && (
        <p className="mt-2 text-xs text-green-700 dark:text-green-300">
          Správně: {correctChoice.text}
        </p>
      )}

      {/* Explanation */}
      {question.explanation && (
        <p className="mt-1 text-xs italic text-muted-foreground">
          {question.explanation}
        </p>
      )}

      {/* Stats row */}
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {stat.timesCorrect}/{stat.timesAnswered} správně
              {" · "}
              {mistakes} chyb
            </span>
            <span>{formatDate(stat.lastAnswered)}</span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full ${
                accuracy >= 75
                  ? "bg-green-500"
                  : accuracy >= 50
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
              style={{ width: `${accuracy}%` }}
            />
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-3 flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="flex-1 text-xs"
          onClick={handleDrill}
        >
          <Dumbbell className="mr-1.5 h-3 w-3" />
          Procvičit
        </Button>
        {relatedLesson && (
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-xs"
            onClick={() => navigate(`/learn/${relatedLesson}`)}
          >
            <BookOpen className="mr-1.5 h-3 w-3" />
            Lekce
          </Button>
        )}
      </div>
    </div>
  );
}
