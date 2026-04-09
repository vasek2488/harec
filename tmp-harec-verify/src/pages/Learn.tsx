import { useProgressStore } from "@/stores/progress-store";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { TopicList } from "@/components/learn/TopicList";
import { getLessons, getConfig } from "@/lib/content-loader";

export function Learn() {
  const lessonProgress = useProgressStore((s) => s.lessonProgress);

  const lessons = getLessons();
  const config = getConfig();

  const totalLessons = lessons.length;
  const completedLessons = lessonProgress.filter((lp) => lp.completed).length;

  return (
    <>
      <Header />
      <PageContainer>
        <div className="space-y-4 pb-20">
          {/* Summary bar */}
          <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
            <span className="text-sm font-medium">Lessons completed</span>
            <span className="text-sm font-semibold">
              {completedLessons}/{totalLessons}
            </span>
          </div>

          <TopicList
            parts={config.parts}
            lessons={lessons}
            lessonProgress={lessonProgress}
          />
        </div>
      </PageContainer>
    </>
  );
}
