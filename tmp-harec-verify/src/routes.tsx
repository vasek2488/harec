import { createBrowserRouter, Outlet } from "react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Dashboard } from "@/pages/Dashboard";
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

function RootLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
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
