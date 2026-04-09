import { usePreferencesStore } from "@/stores/preferences-store";

type FontSize = "normal" | "large";

const options: { value: FontSize; label: string; sample: string }[] = [
  { value: "normal", label: "Normální", sample: "Aa" },
  { value: "large", label: "Velký", sample: "Aa" },
];

export function FontSizeToggle() {
  const fontSize = usePreferencesStore((s) => s.fontSize);
  const setFontSize = usePreferencesStore((s) => s.setFontSize);

  return (
    <div className="flex rounded-lg border border-border bg-muted p-1 gap-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setFontSize(opt.value)}
          className={`flex flex-1 flex-col items-center rounded-md py-2.5 text-xs font-medium transition-colors ${
            fontSize === opt.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span
            className={`font-semibold leading-none ${
              opt.value === "large" ? "text-xl" : "text-base"
            }`}
          >
            {opt.sample}
          </span>
          <span className="mt-1">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
