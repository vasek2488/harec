import { describe, it, expect } from "vitest";
import type { Lesson, LessonProgress, ExamPart } from "@/lib/types";

// Helper that mirrors TopicList grouping logic
function groupLessonsByPart(parts: ExamPart[], lessons: Lesson[]) {
  return parts.map((part) => ({
    part,
    lessons: lessons
      .filter((l) => l.examPartId === part.id)
      .sort((a, b) => a.order - b.order),
  }));
}

function countCompleted(
  lessons: Lesson[],
  lessonProgress: LessonProgress[]
): number {
  return lessons.filter((l) =>
    lessonProgress.find((lp) => lp.lessonId === l.id && lp.completed)
  ).length;
}

const makeLesson = (
  id: string,
  partId: string,
  order: number
): Lesson => ({
  id,
  examPartId: partId,
  order,
  title: `Lesson ${id}`,
  objective: "Test objective",
  estimatedMinutes: 10,
  slides: [],
  relatedQuestionIds: [],
  tags: [],
});

const makePart = (id: string): ExamPart => ({
  id,
  name: `Part ${id}`,
  sections: [],
  examQuestionCount: 10,
});

describe("TopicList grouping logic", () => {
  it("groups lessons by part", () => {
    const parts = [makePart("A"), makePart("B")];
    const lessons = [
      makeLesson("l1", "A", 1),
      makeLesson("l2", "B", 1),
      makeLesson("l3", "A", 2),
    ];

    const groups = groupLessonsByPart(parts, lessons);
    expect(groups[0]?.lessons.length).toBe(2);
    expect(groups[1]?.lessons.length).toBe(1);
  });

  it("sorts lessons by order within part", () => {
    const parts = [makePart("A")];
    const lessons = [makeLesson("l3", "A", 3), makeLesson("l1", "A", 1), makeLesson("l2", "A", 2)];

    const groups = groupLessonsByPart(parts, lessons);
    const orders = groups[0]?.lessons.map((l) => l.order);
    expect(orders).toEqual([1, 2, 3]);
  });

  it("counts completed lessons correctly", () => {
    const lessons = [makeLesson("l1", "A", 1), makeLesson("l2", "A", 2)];
    const lessonProgress: LessonProgress[] = [
      {
        lessonId: "l1",
        completed: true,
        completedAt: new Date().toISOString(),
        slideIndex: 0,
        correctCount: 0,
        totalInteractive: 0,
      },
    ];

    expect(countCompleted(lessons, lessonProgress)).toBe(1);
  });

  it("handles parts with no lessons", () => {
    const parts = [makePart("A"), makePart("B")];
    const lessons = [makeLesson("l1", "A", 1)];

    const groups = groupLessonsByPart(parts, lessons);
    expect(groups[0]?.lessons.length).toBe(1);
    expect(groups[1]?.lessons.length).toBe(0);
  });

  it("returns empty progress for unstarted lessons", () => {
    const lessons = [makeLesson("l1", "A", 1)];
    const lessonProgress: LessonProgress[] = [];
    expect(countCompleted(lessons, lessonProgress)).toBe(0);
  });
});
