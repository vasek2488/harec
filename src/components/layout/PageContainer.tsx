import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        'w-full max-w-md mx-auto md:max-w-2xl lg:max-w-4xl px-4 py-6',
        className
      )}
      data-testid="page-container"
    >
      {children}
    </div>
  );
}
