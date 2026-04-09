import { useLocation, useNavigate } from 'react-router';
import {
  BarChart3,
  BookOpen,
  Zap,
  MoreHorizontal,
} from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { cs } from '@/../content/i18n/cs';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface NavItemMore {
  path: string;
  label: string;
}

const mainNavItems: NavItem[] = [
  {
    path: '/',
    label: cs.nav.dashboard,
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    path: '/learn',
    label: cs.nav.learn,
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    path: '/drill',
    label: cs.nav.drill,
    icon: <Zap className="w-6 h-6" />,
  },
  {
    path: '/exam',
    label: cs.nav.exam,
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

const moreNavItems: NavItemMore[] = [
  { path: '/mistakes', label: cs.more.mistakes },
  { path: '/glossary', label: cs.more.glossary },
  { path: '/formulas', label: cs.more.formulas },
  { path: '/settings', label: cs.more.settings },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isMoreActive = moreNavItems.some((item) => isActive(item.path));

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 border-t border-border bg-background dark:bg-slate-950 z-40 lg:hidden"
        data-testid="bottom-nav"
      >
        <div className="flex justify-between items-stretch max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
          {mainNavItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={cn(
                'flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 min-h-16 transition-colors',
                'hover:bg-accent/10 active:bg-accent/20',
                isActive(item.path)
                  ? 'text-accent bg-accent/10'
                  : 'text-muted-foreground'
              )}
              title={item.label}
              data-testid={`nav-${item.path}`}
            >
              {item.icon}
              <span className="text-xs font-medium truncate max-w-full">
                {item.label}
              </span>
            </button>
          ))}

          <button
            onClick={() => setMoreOpen(true)}
            className={cn(
              'flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 min-h-16 transition-colors',
              'hover:bg-accent/10 active:bg-accent/20',
              isMoreActive ? 'text-accent bg-accent/10' : 'text-muted-foreground'
            )}
            title={cs.nav.more}
            data-testid="nav-more"
          >
            <MoreHorizontal className="w-6 h-6" />
            <span className="text-xs font-medium">{cs.nav.more}</span>
          </button>
        </div>
      </nav>

      {/* More menu dialog */}
      <Dialog open={moreOpen} onOpenChange={setMoreOpen}>
        <DialogContent className="w-full max-w-xs rounded-t-2xl bottom-0 top-auto translate-y-0">
          <DialogHeader>
            <DialogTitle>{cs.nav.more}</DialogTitle>
            <DialogDescription>
              Další sekce aplikace
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2">
            {moreNavItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  handleNavClick(item.path);
                  setMoreOpen(false);
                }}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                  'hover:bg-accent/10 active:bg-accent/20',
                  isActive(item.path)
                    ? 'bg-accent/10 text-accent font-medium'
                    : 'text-foreground'
                )}
                data-testid={`more-nav-${item.path}`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
