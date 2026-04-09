import { useNavigate } from 'react-router';
import { Moon, Sun, Type, ArrowLeft } from 'lucide-react';
import { usePreferencesStore } from '@/stores/preferences-store';
import { examConfig } from '@/../content/exam.config';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Header({ title, subtitle, className }: HeaderProps) {
  const navigate = useNavigate();
  const theme = usePreferencesStore((state) => state.theme);
  const fontSize = usePreferencesStore((state) => state.fontSize);
  const setTheme = usePreferencesStore((state) => state.setTheme);
  const setFontSize = usePreferencesStore((state) => state.setFontSize);

  const handleThemeToggle = () => {
    const nextTheme =
      theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(nextTheme);
  };

  const handleFontSizeToggle = () => {
    const nextSize = fontSize === 'normal' ? 'large' : 'normal';
    setFontSize(nextSize);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
      data-testid="header"
    >
      <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl px-4 py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {title && (
            <button
              onClick={() => navigate(-1)}
              className="shrink-0 p-2 hover:bg-accent/10 rounded-lg transition-colors"
              title="Zpět"
              data-testid="back-button"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="text-sm font-semibold truncate">
              {title || examConfig.name}
            </h1>
            {subtitle && (
              <p className="text-xs text-muted-foreground truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleFontSizeToggle}
            className={cn(
              'p-2 hover:bg-accent/10 rounded-lg transition-colors',
              fontSize === 'large' && 'bg-accent/10 text-accent'
            )}
            title={
              fontSize === 'normal'
                ? 'Zvětšit písmo'
                : 'Zmenšit písmo'
            }
            data-testid="font-size-toggle"
          >
            <Type className="w-5 h-5" />
          </button>

          <button
            onClick={handleThemeToggle}
            className={cn(
              'p-2 hover:bg-accent/10 rounded-lg transition-colors',
              theme === 'dark' && 'bg-accent/10 text-accent'
            )}
            title={
              theme === 'light'
                ? 'Tmavý režim'
                : theme === 'dark'
                  ? 'Systémové nastavení'
                  : 'Světlý režim'
            }
            data-testid="theme-toggle"
          >
            {theme === 'light' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
