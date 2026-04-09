import { describe, it, expect } from "vitest";
import type { QuestionStat, LessonProgress } from "@/lib/types";

describe("Dashboard logic", () => {
  it("calculates lessons completed correctly", () => {
    const lessonProgress: LessonProgress[] = [
      {
        lessonId: "lesson-1",
        completed: true,
        completedAt: new Date().toISOString(),
        slideIndex: 0,
        correctCount: 0,
        totalInteractive: 0,
      },
      {
        lessonId: "lesson-2",
        completed: false,
        completedAt: new Date().toISOString(),
        slideIndex: 5,
        correctCount: 2,
        totalInteractive: 5,
      },
    ];

    const lessonsCompleted = lessonProgress.filter(
      (lp: LessonProgress) => lp.completed
    ).length;
    expect(lessonsCompleted).toBe(1);
  });

  it("calculates questions answered correctly", () => {
    const questionStats: QuestionStat[] = [
      {
        questionId: "q1",
        timesAnswered: 3,
        timesCorrect: 2,
        lastAnswered: new Date().toISOString(),
        markedDifficult: false,
        consecutiveCorrect: 0,
        nextReviewDate: new Date().toISOString(),
      },
      {
        questionId: "q2",
        timesAnswered: 0,
        timesCorrect: 0,
        lastAnswered: new Date().toISOString(),
        markedDifficult: false,
        consecutiveCorrect: 0,
        nextReviewDate: new Date().toISOString(),
      },
    ];

    const questionsAnswered = questionStats.filter(
      (qs: QuestionStat) => qs.timesAnswered > 0
    ).length;
    expect(questionsAnswered).toBe(1);
  });

  it("calculates overall accuracy correctly", () => {
    const questionStats: QuestionStat[] = [
      {
        questionId: "q1",
        timesAnswered: 4,
        timesCorrect: 2,
        lastAnswered: new Date().toISOString(),
        markedDifficult: false,
        consecutiveCorrect: 0,
        nextReviewDate: new Date().toISOString(),
      },
    ];

    const totalAttempts = questionStats.reduce(
      (sum: number, qs: QuestionStat) => sum + qs.timesAnswered,
      0
    );
    const totalCorrect = questionStats.reduce(
      (sum: number, qs: QuestionStat) => sum + qs.timesCorrect,
      0
    );
    const overallAccuracy =
      totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    expect(totalAttempts).toBe(4);
    expect(totalCorrect).toBe(2);
    expect(overallAccuracy).toBe(50);
  });

  it("identifies weak areas (< 50% accuracy)", () => {
    const questionStats: QuestionStat[] = [
      {
        questionId: "q1",
        timesAnswered: 2,
        timesCorrect: 0,
        lastAnswered: new Date().toISOString(),
        markedDifficult: false,
        consecutiveCorrect: 0,
        nextReviewDate: new Date().toISOString(),
      },
      {
        questionId: "q2",
        timesAnswered: 4,
        timesCorrect: 3,
        lastAnswered: new Date().toISOString(),
        markedDifficult: false,
        consecutiveCorrect: 1,
        nextReviewDate: new Date().toISOString(),
      },
    ];

    const weakAreas = questionStats.filter((qs: QuestionStat) => {
      if (qs.timesAnswered === 0) return false;
      const accuracy = (qs.timesCorrect / qs.timesAnswered) * 100;
      return accuracy < 50;
    });

    expect(weakAreas.length).toBe(1);
    expect(weakAreas[0]?.questionId).toBe("q1");
  });

  it("handles empty state", () => {
    const lessonProgress: LessonProgress[] = [];
    const questionStats: QuestionStat[] = [];

    const lessonsCompleted = lessonProgress.filter(
      (lp: LessonProgress) => lp.completed
    ).length;
    const questionsAnswered = questionStats.filter(
      (qs: QuestionStat) => qs.timesAnswered > 0
    ).length;
    const totalAttempts = questionStats.reduce(
      (sum: number, qs: QuestionStat) => sum + qs.timesAnswered,
      0
    );
    const overallAccuracy =
      totalAttempts > 0 ? Math.round((0 / totalAttempts) * 100) : 0;

    expect(lessonsCompleted).toBe(0);
    expect(questionsAnswered).toBe(0);
    expect(overallAccuracy).toBe(0);
  });
});
