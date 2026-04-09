import { ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { usePreferencesStore } from '@/stores/preferences-store';
import { BottomNav } from './BottomNav';
import { cn } from '@/lib/utils';
import { cs } from '@/../content/i18n/cs';
import {
  BarChart3,
  BookOpen,
  Zap,
  ClipboardCheck,
  AlertCircle,
  BookMarked,
  Calculator,
  Settings,
} from 'lucide-react';

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

const sidebarNav = [
  { path: '/', label: cs.nav.dashboard, icon: BarChart3 },
  { path: '/learn', label: cs.nav.learn, icon: BookOpen },
  { path: '/drill', label: cs.nav.drill, icon: Zap },
  { path: '/exam', label: cs.nav.exam, icon: ClipboardCheck },
  { path: '/mistakes', label: cs.more.mistakes, icon: AlertCircle },
  { path: '/glossary', label: cs.more.glossary, icon: BookMarked },
  { path: '/formulas', label: cs.more.formulas, icon: Calculator },
  { path: '/settings', label: cs.more.settings, icon: Settings },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-background">
      <div className="flex h-14 items-center border-b border-border px-6">
        <span className="text-sm font-bold tracking-tight">HAREC</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {sidebarNav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                'hover:bg-muted',
                isActive(item.path)
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
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
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 pb-20 lg:pl-64 lg:pb-0">
        {children}
      </main>

      {/* Bottom navigation (mobile only) */}
      <BottomNav />
    </div>
  );
}
