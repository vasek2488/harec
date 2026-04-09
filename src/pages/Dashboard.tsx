import { useNavigate } from "react-router";
import { useProgressStore } from "@/stores/progress-store";
import type { QuestionStat, LessonProgress } from "@/lib/types";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { StatCard } from "@/components/dashboard/StatCard";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { Button } from "@/components/ui/button";
import { getLessons } from "@/lib/content-loader";
import { cs } from "@/../content/i18n/cs";
import {
  BookOpen,
  CheckCircle2,
  Award,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export function Dashboard() {
  const navigate = useNavigate();
  const progressStore = useProgressStore();

  const allLessons = getLessons();

  // Calculate stats
  const lessonsCompleted = progressStore.lessonProgress.filter(
    (lp: LessonProgress) => lp.completed
  ).length;
  const questionsAnswered = progressStore.questionStats.filter(
    (qs: QuestionStat) => qs.timesAnswered > 0
  ).length;
  const examsCompleted = progressStore.examHistory.length;

  // Calculate accuracy
  const totalAttempts = progressStore.questionStats.reduce(
    (sum: number, qs: QuestionStat) => sum + qs.timesAnswered,
    0
  );
  const totalCorrect = progressStore.questionStats.reduce(
    (sum: number, qs: QuestionStat) => sum + qs.timesCorrect,
    0
  );
  const overallAccuracy =
    totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  // Find weak areas (questions with accuracy < 50%)
  const weakAreas = progressStore.questionStats
    .filter((qs: QuestionStat) => {
      if (qs.timesAnswered === 0) return false;
      const accuracy = (qs.timesCorrect / qs.timesAnswered) * 100;
      return accuracy < 50;
    })
    .slice(0, 3);

  // Get the last lesson in progress or the first uncompleted one
  const lastLessonInProgress = [...progressStore.lessonProgress].sort(
    (a: LessonProgress, b: LessonProgress) =>
      new Date(b.completedAt || 0).getTime() -
      new Date(a.completedAt || 0).getTime()
  )[0];

  const nextLessonId = lastLessonInProgress
    ? lastLessonInProgress.lessonId
    : allLessons[0]?.id;

  const progressPercentage = allLessons.length
    ? Math.round((lessonsCompleted / allLessons.length) * 100)
    : 0;

  return (
    <>
      <Header />
      <PageContainer>
        <div className="space-y-6 pb-20 lg:pb-0">
        {/* Main Progress Ring */}
        <div className="flex justify-center pt-6">
          <ProgressRing
            percentage={progressPercentage}
            label={cs.dashboard.overallProgress}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <StatCard
            label={cs.dashboard.lessons}
            value={`${lessonsCompleted}/${allLessons.length}`}
            icon={<BookOpen className="h-5 w-5" />}
          />
          <StatCard
            label={cs.dashboard.questions}
            value={questionsAnswered}
            icon={<CheckCircle2 className="h-5 w-5" />}
          />
          <StatCard
            label={cs.dashboard.exams}
            value={examsCompleted}
            icon={<Award className="h-5 w-5" />}
          />
        </div>

        {/* Accuracy Card */}
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {cs.dashboard.overallAccuracy}
              </p>
              <p className="mt-2 text-3xl font-semibold">{overallAccuracy}%</p>
            </div>
            <div className="text-4xl font-semibold text-primary">
              {overallAccuracy >= 75 ? "✓" : "→"}
            </div>
          </div>
        </div>

        {/* Weak Areas */}
        {weakAreas.length > 0 && (
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
            <div className="mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <h3 className="font-medium text-destructive">{cs.dashboard.needsPractice}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {cs.dashboard.needsPracticeDetail(weakAreas.length)}
            </p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="space-y-3 pt-4">
          <Button
            onClick={() =>
              navigate(nextLessonId ? `/learn/${nextLessonId}` : "/learn")
            }
            className="w-full"
            size="lg"
          >
            {cs.dashboard.continueLearning}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => navigate("/drill")}
            variant="outline"
            className="w-full"
            size="lg"
          >
            {cs.dashboard.practiceQuestions}
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="space-y-2 border-t border-border pt-6">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {cs.dashboard.sessionStats}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-muted-foreground">{cs.dashboard.questionsAnswered}</p>
              <p className="mt-1 text-lg font-semibold">{totalAttempts}</p>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <p className="text-muted-foreground">{cs.dashboard.correctAnswers}</p>
              <p className="mt-1 text-lg font-semibold">{totalCorrect}</p>
            </div>
          </div>
        </div>
        </div>
      </PageContainer>
    </>
  );
}
