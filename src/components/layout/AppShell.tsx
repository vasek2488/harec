import { ReactNode, useEffect, useState } from 'react';
import { usePreferencesStore } from '@/stores/preferences-store';
import { BottomNav } from './BottomNav';
import { cn } from '@/lib/utils';
interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export function resolveIsDark(
  theme: 'light' | 'dark' | 'system',
  systemDark: boolean
): boolean {
  return theme === 'dark' || (theme === 'system' && systemDark);
}

export function fontSizeClass(fontSize: 'normal' | 'large'): string {
  return fontSize === 'large' ? 'text-lg' : 'text-base';
}

function useSystemDark(): boolean {
  const [systemDark, setSystemDark] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return systemDark;
}

export function AppShell({ children, className }: AppShellProps) {
  const theme = usePreferencesStore((state) => state.theme);
  const fontSize = usePreferencesStore((state) => state.fontSize);
  const systemDark = useSystemDark();

  const isDark = resolveIsDark(theme, systemDark);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.fontSize = fontSize;

    return () => {
      delete document.documentElement.dataset.fontSize;
    };
  }, [fontSize]);

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-background text-foreground',
        isDark && 'dark',
        className
      )}
      data-font-size={fontSize}
      data-testid="app-shell"
    >
      {/* Main content area */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
