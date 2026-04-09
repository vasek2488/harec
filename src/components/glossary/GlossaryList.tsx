import { useNavigate } from "react-router";
import type { GlossaryTerm } from "@/lib/types";
import { BookOpen } from "lucide-react";

interface GlossaryListProps {
  terms: GlossaryTerm[];
}

export function GlossaryList({ terms }: GlossaryListProps) {
  const navigate = useNavigate();

  if (terms.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-4xl">📖</p>
        <p className="mt-3 font-medium">Žádné výsledky</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Zkuste jiný vyhledávací dotaz.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {terms.map((term) => (
        <div
          key={term.id}
          className="rounded-lg border border-border bg-card p-4"
        >
          <p className="font-semibold">{term.term}</p>
          <p className="mt-1 text-sm text-muted-foreground">{term.definition}</p>

          {term.relatedLessonIds.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {term.relatedLessonIds.map((lessonId) => (
                <button
                  key={lessonId}
                  onClick={() => navigate(`/learn/${lessonId}`)}
                  className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted"
                >
                  <BookOpen className="h-3 w-3" />
                  {lessonId}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
