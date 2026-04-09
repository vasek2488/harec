import { usePreferencesStore } from "@/stores/preferences-store";
import { Monitor, Sun, Moon } from "lucide-react";

type Theme = "system" | "light" | "dark";

const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: "system", label: "Systém", icon: <Monitor className="h-4 w-4" /> },
  { value: "light", label: "Světlý", icon: <Sun className="h-4 w-4" /> },
  { value: "dark", label: "Tmavý", icon: <Moon className="h-4 w-4" /> },
];

export function ThemeToggle() {
  const theme = usePreferencesStore((s) => s.theme);
  const setTheme = usePreferencesStore((s) => s.setTheme);

  return (
    <div className="flex rounded-lg border border-border bg-muted p-1 gap-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-2 text-xs font-medium transition-colors ${
            theme === opt.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt.icon}
          {opt.label}
        </button>
      ))}
    </div>
  );
}
