import type { ExamPart, Lesson, LessonProgress } from "@/lib/types";
import { TopicCard } from "./TopicCard";

interface TopicListProps {
  parts: ExamPart[];
  lessons: Lesson[];
  lessonProgress: LessonProgress[];
}

export function TopicList({ parts, lessons, lessonProgress }: TopicListProps) {
  const getLessonProgress = (lessonId: string) =>
    lessonProgress.find((lp) => lp.lessonId === lessonId);

  return (
    <div className="space-y-8">
      {parts.map((part) => {
        const partLessons = lessons
          .filter((l) => l.examPartId === part.id)
          .sort((a, b) => a.order - b.order);

        if (partLessons.length === 0) return null;

        const completedCount = partLessons.filter(
          (l) => getLessonProgress(l.id)?.completed
        ).length;

        return (
          <section key={part.id}>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {part.icon && (
                  <span className="text-lg" aria-hidden>
                    {part.icon}
                  </span>
                )}
                <h2 className="font-semibold">{part.name}</h2>
              </div>
              <span className="text-sm text-muted-foreground">
                {completedCount}/{partLessons.length}
              </span>
            </div>

            <div className="space-y-2">
              {partLessons.map((lesson) => (
                <TopicCard
                  key={lesson.id}
                  lesson={lesson}
                  progress={getLessonProgress(lesson.id)}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
