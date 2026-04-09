import { createBrowserRouter, Outlet } from "react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Dashboard } from "@/pages/Dashboard";
import { Welcome } from "@/pages/Welcome";
import { Learn } from "@/pages/Learn";
import { LessonPage } from "@/pages/LessonPage";
import { DrillSetup } from "@/pages/DrillSetup";
import { DrillSession } from "@/pages/DrillSession";
import { DrillResults } from "@/pages/DrillResults";
import { ExamSetup } from "@/pages/ExamSetup";
import { ExamSession } from "@/pages/ExamSession";
import { ExamResults } from "@/pages/ExamResults";
import { ExamReview } from "@/pages/ExamReview";
import { Mistakes } from "@/pages/Mistakes";
import { Glossary } from "@/pages/Glossary";
import { Formulas } from "@/pages/Formulas";
import { Settings } from "@/pages/Settings";
import { useProgressStore } from "@/stores/progress-store";

function RootLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

function HomePage() {
  const lessonProgress = useProgressStore((s) => s.lessonProgress);
  const questionStats = useProgressStore((s) => s.questionStats);

  const hasProgress =
    lessonProgress.some((lp) => lp.completed) ||
    questionStats.some((qs) => qs.timesAnswered > 0);

  return hasProgress ? <Dashboard /> : <Welcome />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "learn", element: <Learn /> },
      { path: "learn/:lessonId", element: <LessonPage /> },
      { path: "drill", element: <DrillSetup /> },
      { path: "drill/session", element: <DrillSession /> },
      { path: "drill/results", element: <DrillResults /> },
      { path: "exam", element: <ExamSetup /> },
      { path: "exam/session", element: <ExamSession /> },
      { path: "exam/results", element: <ExamResults /> },
      { path: "exam/review", element: <ExamReview /> },
      { path: "mistakes", element: <Mistakes /> },
      { path: "glossary", element: <Glossary /> },
      { path: "formulas", element: <Formulas /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
