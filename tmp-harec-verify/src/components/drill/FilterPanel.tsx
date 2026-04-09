import type { ExamConfig } from "@/lib/types";
import type { DrillSettings } from "@/lib/types";
import { Switch } from "@/components/ui/switch";

interface FilterPanelProps {
  config: ExamConfig;
  settings: DrillSettings;
  onChange: (settings: DrillSettings) => void;
}

export function FilterPanel({ config, settings, onChange }: FilterPanelProps) {
  const allPartIds = config.parts.map((part) => part.id);

  const togglePart = (partId: string) => {
    const selectedPartIds =
      settings.partFilter.length === 0 ? allPartIds : settings.partFilter;
    const allSelected = selectedPartIds.length === allPartIds.length;

    let next = allSelected
      ? [partId]
      : selectedPartIds.includes(partId)
        ? selectedPartIds.filter((id) => id !== partId)
        : [...selectedPartIds, partId];

    if (next.length === allPartIds.length) {
      next = [];
    }

    onChange({ ...settings, partFilter: next });
  };

  return (
    <div className="space-y-6">
      {/* Parts filter */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Parts
        </h3>
        <div className="space-y-2">
          {config.parts.map((part) => {
            const active = settings.partFilter.length === 0 || settings.partFilter.includes(part.id);
            return (
              <label
                key={part.id}
                className="flex cursor-pointer items-center justify-between rounded-lg border border-border p-3"
              >
                <div className="flex items-center gap-2">
                  {part.icon && <span aria-hidden>{part.icon}</span>}
                  <span className="text-sm font-medium">{part.name}</span>
                </div>
                <Switch
                  checked={active}
                  onCheckedChange={() => togglePart(part.id)}
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* Question count */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Question Count
        </h3>
        <div className="space-y-2">
          <input
            type="range"
            min={5}
            max={50}
            step={5}
            value={settings.questionCount}
            onChange={(e) =>
              onChange({ ...settings, questionCount: Number(e.target.value) })
            }
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>5</span>
            <span className="font-semibold text-foreground">
              {settings.questionCount} questions
            </span>
            <span>50</span>
          </div>
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-3">
        <label className="flex items-center justify-between rounded-lg border border-border p-3">
          <div>
            <p className="text-sm font-medium">Mistakes only</p>
            <p className="text-xs text-muted-foreground">Questions you got wrong</p>
          </div>
          <Switch
            checked={settings.onlyMistakes}
            onCheckedChange={(v) => onChange({ ...settings, onlyMistakes: v })}
          />
        </label>

        <label className="flex items-center justify-between rounded-lg border border-border p-3">
          <div>
            <p className="text-sm font-medium">Marked difficult</p>
            <p className="text-xs text-muted-foreground">Questions you flagged</p>
          </div>
          <Switch
            checked={settings.onlyMarkedDifficult}
            onCheckedChange={(v) =>
              onChange({ ...settings, onlyMarkedDifficult: v })
            }
          />
        </label>
      </div>
    </div>
  );
}
