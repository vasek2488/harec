import { useState } from "react";
import { useProgressStore } from "@/stores/progress-store";
import { getQuestionById, getConfig } from "@/lib/content-loader";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { MistakeCard } from "@/components/mistakes/MistakeCard";
import type { QuestionStat } from "@/lib/types";

type SortMode = "recent" | "most";

export function sortMistakes(
  stats: QuestionStat[],
  mode: SortMode
): QuestionStat[] {
  const withMistakes = stats.filter(
    (s) => s.timesAnswered > 0 && s.timesCorrect < s.timesAnswered
  );

  if (mode === "recent") {
    return [...withMistakes].sort(
      (a, b) =>
        new Date(b.lastAnswered).getTime() - new Date(a.lastAnswered).getTime()
    );
  }

  // mode === "most": sort by mistake count desc, then total answered desc
  return [...withMistakes].sort((a, b) => {
    const mistakesA = a.timesAnswered - a.timesCorrect;
    const mistakesB = b.timesAnswered - b.timesCorrect;
    if (mistakesB !== mistakesA) return mistakesB - mistakesA;
    return b.timesAnswered - a.timesAnswered;
  });
}

export function filterByPart(
  stats: QuestionStat[],
  partId: string | null
): QuestionStat[] {
  if (!partId) return stats;
  return stats.filter((s) => {
    const q = getQuestionById(s.questionId);
    return q?.examPartId === partId;
  });
}

export function Mistakes() {
  const questionStats = useProgressStore((s) => s.questionStats);
  const config = getConfig();

  const [sortMode, setSortMode] = useState<SortMode>("recent");
  const [partFilter, setPartFilter] = useState<string | null>(null);

  const sorted = sortMistakes(questionStats, sortMode);
  const filtered = filterByPart(sorted, partFilter);

  return (
    <>
      <Header title="Chyby" />
      <PageContainer>
        <div className="space-y-4 pb-24">
          {/* Sort + filter controls */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSortMode("recent")}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                sortMode === "recent"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              Nejnovější
            </button>
            <button
              onClick={() => setSortMode("most")}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                sortMode === "most"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              Nejvíce chyb
            </button>
          </div>

          {/* Part filter chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPartFilter(null)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                !partFilter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              Vše
            </button>
            {config.parts.map((part) => (
              <button
                key={part.id}
                onClick={() =>
                  setPartFilter(partFilter === part.id ? null : part.id)
                }
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  partFilter === part.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                {part.name}
              </button>
            ))}
          </div>

          {/* Mistake count */}
          {filtered.length > 0 && (
            <p className="text-xs text-muted-foreground">
              {filtered.length} otázek s chybami
            </p>
          )}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-4xl">🎉</p>
              <p className="mt-3 font-medium">Žádné chyby</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {questionStats.length === 0
                  ? "Začněte procvičovat a vaše chyby se zobrazí zde."
                  : "V tomto filtru nejsou žádné chyby."}
              </p>
            </div>
          )}

          {/* Mistake cards */}
          {filtered.map((stat) => {
            const question = getQuestionById(stat.questionId);
            if (!question) return null;
            return (
              <MistakeCard key={stat.questionId} question={question} stat={stat} />
            );
          })}
        </div>
      </PageContainer>
    </>
  );
}
