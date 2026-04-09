import type { Choice } from "@/lib/types";
import { CheckCircle2, XCircle } from "lucide-react";

interface AnswerInputProps {
  choices: Choice[];
  selectedId: string | null;
  correctId?: string; // only shown after submit
  onSelect: (id: string) => void;
  submitted: boolean;
}

export function AnswerInput({
  choices,
  selectedId,
  correctId,
  onSelect,
  submitted,
}: AnswerInputProps) {
  return (
    <div className="space-y-2">
      {choices.map((choice) => {
        const isSelected = selectedId === choice.id;
        const isCorrect = correctId && choice.id === correctId;
        const isWrong = submitted && isSelected && !isCorrect;

        let cls =
          "w-full rounded-lg border p-4 text-left text-sm transition-colors";
        if (submitted && isCorrect) {
          cls += " border-green-500 bg-green-500/10";
        } else if (isWrong) {
          cls += " border-red-500 bg-red-500/10";
        } else if (isSelected) {
          cls += " border-primary bg-primary/10";
        } else {
          cls += " border-border bg-card hover:bg-muted";
        }

        return (
          <button
            key={choice.id}
            onClick={() => !submitted && onSelect(choice.id)}
            disabled={submitted}
            className={cls}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  isSelected ? "border-primary bg-primary" : "border-border"
                }`}
              >
                {isSelected && (
                  <div className="h-2 w-2 rounded-full bg-white" />
                )}
              </div>
              <span className="flex-1">{choice.text}</span>
              {submitted && isCorrect && (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
              )}
              {isWrong && (
                <XCircle className="h-4 w-4 shrink-0 text-red-600" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
