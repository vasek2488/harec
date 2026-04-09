import { useState } from "react";
import { useProgressStore } from "@/stores/progress-store";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

type ConfirmState = "idle" | "confirming";

export function ResetProgress() {
  const resetProgress = useProgressStore((s) => s.resetProgress);
  const [state, setState] = useState<ConfirmState>("idle");

  const handleReset = () => {
    resetProgress();
    setState("idle");
  };

  if (state === "confirming") {
    return (
      <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4">
        <div className="flex items-center gap-2 text-destructive">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <p className="text-sm font-medium">Opravdu smazat veškerý pokrok?</p>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Tato akce je nevratná. Lekce, procvičování i výsledky testů budou
          smazány.
        </p>
        <div className="mt-3 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => setState("idle")}
          >
            Zrušit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="flex-1"
            onClick={handleReset}
          >
            Smazat
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      className="w-full border-destructive/50 text-destructive hover:bg-destructive/5 hover:text-destructive"
      onClick={() => setState("confirming")}
    >
      Smazat veškerý pokrok
    </Button>
  );
}
