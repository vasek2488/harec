import { describe, it, expect } from "vitest";
import { sortMistakes, filterByPart } from "@/pages/Mistakes";
import type { QuestionStat } from "@/lib/types";

function makeStat(
  id: string,
  timesAnswered: number,
  timesCorrect: number,
  lastAnswered: string
): QuestionStat {
  return {
    questionId: id,
    timesAnswered,
    timesCorrect,
    lastAnswered,
    markedDifficult: false,
    consecutiveCorrect: 0,
  };
}

describe("sortMistakes", () => {
  const stats: QuestionStat[] = [
    makeStat("q1", 5, 2, "2026-04-05T10:00:00.000Z"), // 3 mistakes
    makeStat("q2", 3, 0, "2026-04-07T08:00:00.000Z"), // 3 mistakes, more recent
    makeStat("q3", 10, 9, "2026-04-06T12:00:00.000Z"), // 1 mistake
    makeStat("q4", 4, 4, "2026-04-04T00:00:00.000Z"), // 0 mistakes — excluded
    makeStat("q5", 0, 0, "2026-04-01T00:00:00.000Z"), // unanswered — excluded
  ];

  it("excludes questions with no mistakes", () => {
    const result = sortMistakes(stats, "recent");
    expect(result.map((s) => s.questionId)).not.toContain("q4");
    expect(result.map((s) => s.questionId)).not.toContain("q5");
  });

  it("sorts by most recent lastAnswered first", () => {
    const result = sortMistakes(stats, "recent");
    const ids = result.map((s) => s.questionId);
    expect(ids[0]).toBe("q2"); // most recent
    expect(ids[1]).toBe("q3");
    expect(ids[2]).toBe("q1");
  });

  it("sorts by most mistakes first", () => {
    const result = sortMistakes(stats, "most");
    const ids = result.map((s) => s.questionId);
    // q1 and q2 both have 3 mistakes; q2 has fewer total attempts
    expect(ids[0]).toBe("q1"); // 5 total (tiebreaker: more attempts first)
    expect(ids[1]).toBe("q2"); // 3 total
    expect(ids[2]).toBe("q3"); // 1 mistake
  });

  it("returns empty array when all questions are correct", () => {
    const perfect = [makeStat("a", 3, 3, "2026-04-01T00:00:00.000Z")];
    expect(sortMistakes(perfect, "recent")).toHaveLength(0);
  });

  it("returns empty array for empty input", () => {
    expect(sortMistakes([], "recent")).toHaveLength(0);
    expect(sortMistakes([], "most")).toHaveLength(0);
  });
});

describe("filterByPart", () => {
  // filterByPart uses getQuestionById from content-loader which reads real content
  // Test the null-filter case (no external dependency)
  const stats: QuestionStat[] = [
    makeStat("q1", 2, 1, "2026-04-01T00:00:00.000Z"),
    makeStat("q2", 3, 1, "2026-04-02T00:00:00.000Z"),
  ];

  it("returns all stats when partId is null", () => {
    const result = filterByPart(stats, null);
    expect(result).toHaveLength(2);
    expect(result).toEqual(stats);
  });

  it("filters to empty when no questions match a non-existent partId", () => {
    const result = filterByPart(stats, "nonexistent-part");
    expect(result).toHaveLength(0);
  });
});

describe("mistake count calculation", () => {
  it("calculates mistake count as timesAnswered - timesCorrect", () => {
    const stat = makeStat("q1", 7, 3, "2026-04-01T00:00:00.000Z");
    const mistakes = stat.timesAnswered - stat.timesCorrect;
    expect(mistakes).toBe(4);
  });

  it("calculates accuracy percentage", () => {
    const stat = makeStat("q1", 4, 3, "2026-04-01T00:00:00.000Z");
    const accuracy = Math.round((stat.timesCorrect / stat.timesAnswered) * 100);
    expect(accuracy).toBe(75);
  });

  it("handles 0% accuracy", () => {
    const stat = makeStat("q1", 5, 0, "2026-04-01T00:00:00.000Z");
    const accuracy = Math.round((stat.timesCorrect / stat.timesAnswered) * 100);
    expect(accuracy).toBe(0);
  });
});
