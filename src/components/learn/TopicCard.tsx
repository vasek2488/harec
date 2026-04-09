import { useNavigate } from "react-router";
import type { Lesson, LessonProgress } from "@/lib/types";
import { CheckCircle2, Clock, ChevronRight } from "lucide-react";

interface TopicCardProps {
  lesson: Lesson;
  progress?: LessonProgress;
}

export function TopicCard({ lesson, progress }: TopicCardProps) {
  const navigate = useNavigate();
  const isCompleted = progress?.completed ?? false;

  return (
    <button
      onClick={() => navigate(`/learn/${lesson.id}`)}
      className="w-full rounded-lg border border-border bg-card p-4 text-left shadow-sm transition-colors hover:bg-muted/50 active:bg-muted"
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
            isCompleted
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <span className="text-xs font-semibold">{lesson.order}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className={`font-medium leading-tight ${
              isCompleted ? "text-muted-foreground line-through" : ""
            }`}
          >
            {lesson.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {lesson.objective}
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{lesson.estimatedMinutes} min</span>
          </div>
        </div>

        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
      </div>
    </button>
  );
}
