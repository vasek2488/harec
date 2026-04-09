import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cs } from "@/../content/i18n/cs";

interface SlideNavProps {
  current: number;
  total: number;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  onComplete: () => void;
  isLast: boolean;
}

export function SlideNav({
  current,
  total,
  canNext,
  onPrev,
  onNext,
  onComplete,
  isLast,
}: SlideNavProps) {
  return (
    <div className="fixed bottom-16 left-0 right-0 z-10 border-t border-border bg-background/90 backdrop-blur px-4 py-3 lg:bottom-0">
      {/* Progress bar */}
      <div className="mb-3 h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <span className="text-sm text-muted-foreground">
          {current + 1} / {total}
        </span>

        {isLast ? (
          <Button onClick={onComplete} disabled={!canNext} size="sm">
            {cs.common.finish}
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            disabled={!canNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
