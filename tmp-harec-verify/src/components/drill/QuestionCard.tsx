import type { Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
  current: number;
  total: number;
}

export function QuestionCard({ question, current, total }: QuestionCardProps) {
  return (
    <div className="space-y-3">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Question {current} of {total}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>

      {/* Question text */}
      <div className="rounded-lg border border-border bg-card p-4">
        <p className="text-base font-medium leading-relaxed">{question.wording}</p>
      </div>
    </div>
  );
}
