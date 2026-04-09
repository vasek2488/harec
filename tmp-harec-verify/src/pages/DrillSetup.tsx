import { useNavigate } from "react-router";
import { usePreferencesStore } from "@/stores/preferences-store";
import { useProgressStore } from "@/stores/progress-store";
import { useSessionStore } from "@/stores/session-store";
import { getQuestions, getConfig } from "@/lib/content-loader";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { FilterPanel } from "@/components/drill/FilterPanel";
import { Button } from "@/components/ui/button";
import type { Question } from "@/lib/types";

export function DrillSetup() {
  const navigate = useNavigate();
  const drillSettings = usePreferencesStore((s) => s.drillSettings);
  const updateDrillSettings = usePreferencesStore((s) => s.updateDrillSettings);
  const questionStats = useProgressStore((s) => s.questionStats);
  const startSession = useSessionStore((s) => s.startSession);

  const allQuestions = getQuestions();
  const config = getConfig();

  const filterQuestions = (): Question[] => {
    let filtered = allQuestions;

    // Filter by part
    if (drillSettings.partFilter.length > 0) {
      filtered = filtered.filter((q) =>
        drillSettings.partFilter.includes(q.examPartId)
      );
    }

    // Filter by section
    if (drillSettings.sectionFilter.length > 0) {
      filtered = filtered.filter((q) =>
        drillSettings.sectionFilter.includes(q.sectionId)
      );
    }

    // Mistakes only
    if (drillSettings.onlyMistakes) {
      filtered = filtered.filter((q) => {
        const stat = questionStats.find((s) => s.questionId === q.id);
        if (!stat) return false;
        return stat.timesCorrect < stat.timesAnswered;
      });
    }

    // Marked difficult
    if (drillSettings.onlyMarkedDifficult) {
      filtered = filtered.filter((q) => {
        const stat = questionStats.find((s) => s.questionId === q.id);
        return stat?.markedDifficult === true;
      });
    }

    // Shuffle and cap at questionCount
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, drillSettings.questionCount);
  };

  const handleStart = () => {
    const questions = filterQuestions();
    if (questions.length === 0) return;
    startSession("drill", questions.map((q) => q.id));
    navigate("/drill/session");
  };

  const filtered = filterQuestions();

  return (
    <>
      <Header title="Procvičování" />
      <PageContainer>
        <div className="space-y-6 pb-24">
          <FilterPanel
            config={config}
            settings={drillSettings}
            onChange={updateDrillSettings}
          />
        </div>
      </PageContainer>

      {/* Sticky start button */}
      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-background/90 px-4 py-3 backdrop-blur">
        <Button
          className="w-full"
          size="lg"
          onClick={handleStart}
          disabled={filtered.length === 0}
        >
          Start{filtered.length > 0 ? ` (${filtered.length} questions)` : " — no questions match"}
        </Button>
      </div>
    </>
  );
}
