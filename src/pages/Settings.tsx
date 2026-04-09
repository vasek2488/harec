import { useProgressStore } from "@/stores/progress-store";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { ThemeToggle } from "@/components/settings/ThemeToggle";
import { FontSizeToggle } from "@/components/settings/FontSizeToggle";
import { ResetProgress } from "@/components/settings/ResetProgress";
import { Button } from "@/components/ui/button";
import { HardDrive, Download } from "lucide-react";
import { cs } from "@/../content/i18n/cs";

export function buildExportData(progressState: {
  lessonProgress: unknown[];
  questionStats: unknown[];
  examHistory: unknown[];
}): string {
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      version: 1,
      ...progressState,
    },
    null,
    2
  );
}

export function Settings() {
  const progressStore = useProgressStore();

  const totalAnswered = progressStore.questionStats.reduce(
    (sum, qs) => sum + qs.timesAnswered,
    0
  );
  const examsCount = progressStore.examHistory.length;
  const lessonsCount = progressStore.lessonProgress.filter(
    (lp) => lp.completed
  ).length;

  const handleExport = () => {
    const data = buildExportData({
      lessonProgress: progressStore.lessonProgress,
      questionStats: progressStore.questionStats,
      examHistory: progressStore.examHistory,
    });
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `harec-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Header title="Nastavení" />
      <PageContainer>
        <div className="space-y-6 pb-24">
          {/* Appearance */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Vzhled
            </h2>
            <div className="space-y-2">
              <p className="text-sm font-medium">Barevné schéma</p>
              <ThemeToggle />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Velikost písma</p>
              <FontSizeToggle />
            </div>
          </section>

          {/* Data */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Data a pokrok
            </h2>

            {/* Storage info */}
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <HardDrive className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="flex-1 space-y-1 text-sm">
                <p className="font-medium">Lokální úložiště</p>
                <p className="text-xs text-muted-foreground">
                  Data jsou uložena pouze v tomto prohlížeči. Žádná
                  synchronizace ani záloha do cloudu.
                </p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded bg-muted p-2 text-center">
                    <p className="font-semibold">{lessonsCount}</p>
                    <p className="text-muted-foreground">lekcí</p>
                  </div>
                  <div className="rounded bg-muted p-2 text-center">
                    <p className="font-semibold">{totalAnswered}</p>
                    <p className="text-muted-foreground">odpovědí</p>
                  </div>
                  <div className="rounded bg-muted p-2 text-center">
                    <p className="font-semibold">{examsCount}</p>
                    <p className="text-muted-foreground">testů</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Export */}
            <Button
              variant="outline"
              className="w-full"
              onClick={handleExport}
            >
              <Download className="mr-2 h-4 w-4" />
              Exportovat pokrok (JSON)
            </Button>

            {/* Reset */}
            <ResetProgress />
          </section>

          {/* App info */}
          <section className="space-y-1 text-xs text-muted-foreground">
            <p className="font-medium text-foreground">{cs.settings.appName}</p>
            <p>{cs.settings.appDescription}</p>
          </section>
        </div>
      </PageContainer>
    </>
  );
}
