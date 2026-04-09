import { ReactNode, useEffect } from 'react';
import { usePreferencesStore } from '@/stores/preferences-store';
import { BottomNav } from './BottomNav';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  const theme = usePreferencesStore((state) => state.theme);
  const fontSize = usePreferencesStore((state) => state.fontSize);

  // Determine if dark mode should be active
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.fontSize = fontSize;
  }, [fontSize]);

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-background text-foreground',
        isDark && 'dark',
        className
      )}
      data-testid="app-shell"
    >
      {/* Main content area */}
      <main className="flex-1 pb-20 px-4 py-6 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl w-full">
        {children}
      </main>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
