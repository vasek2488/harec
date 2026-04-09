import { describe, it, expect } from "vitest";
import type { Question, QuestionStat } from "@/lib/types";

// Mirrors DrillSetup filter logic
function filterQuestions(
  allQuestions: Question[],
  questionStats: QuestionStat[],
  settings: {
    partFilter: string[];
    sectionFilter: string[];
    onlyMistakes: boolean;
    onlyMarkedDifficult: boolean;
    questionCount: number;
  }
): Question[] {
  let filtered = allQuestions;

  if (settings.partFilter.length > 0) {
    filtered = filtered.filter((q) =>
      settings.partFilter.includes(q.examPartId)
    );
  }

  if (settings.sectionFilter.length > 0) {
    filtered = filtered.filter((q) =>
      settings.sectionFilter.includes(q.sectionId)
    );
  }

  if (settings.onlyMistakes) {
    filtered = filtered.filter((q) => {
      const stat = questionStats.find((s) => s.questionId === q.id);
      if (!stat) return false;
      return stat.timesCorrect < stat.timesAnswered;
    });
  }

  if (settings.onlyMarkedDifficult) {
    filtered = filtered.filter((q) => {
      const stat = questionStats.find((s) => s.questionId === q.id);
      return stat?.markedDifficult === true;
    });
  }

  return filtered.slice(0, settings.questionCount);
}

const makeQuestion = (
  id: string,
  partId: string,
  sectionId = "s1"
): Question => ({
  id,
  examPartId: partId,
  sectionId,
  wording: `Question ${id}`,
  choices: [
    { id: "a", text: "A" },
    { id: "b", text: "B" },
  ],
  correctChoiceId: "a",
  explanation: "Explanation",
  relatedLessonIds: [],
  tags: [],
});

const makeStat = (
  questionId: string,
  timesAnswered: number,
  timesCorrect: number,
  markedDifficult = false
): QuestionStat => ({
  questionId,
  timesAnswered,
  timesCorrect,
  lastAnswered: new Date().toISOString(),
  markedDifficult,
  consecutiveCorrect: 0,
});

describe("Drill question filtering", () => {
  const questions = [
    makeQuestion("q1", "A"),
    makeQuestion("q2", "A"),
    makeQuestion("q3", "B"),
    makeQuestion("q4", "B"),
  ];

  it("returns all questions with no filters", () => {
    const result = filterQuestions(questions, [], {
      partFilter: [],
      sectionFilter: [],
      onlyMistakes: false,
      onlyMarkedDifficult: false,
      questionCount: 50,
    });
    expect(result.length).toBe(4);
  });

  it("filters by part", () => {
    const result = filterQuestions(questions, [], {
      partFilter: ["A"],
      sectionFilter: [],
      onlyMistakes: false,
      onlyMarkedDifficult: false,
      questionCount: 50,
    });
    expect(result.length).toBe(2);
    expect(result.every((q) => q.examPartId === "A")).toBe(true);
  });

  it("caps at questionCount", () => {
    const result = filterQuestions(questions, [], {
      partFilter: [],
      sectionFilter: [],
      onlyMistakes: false,
      onlyMarkedDifficult: false,
      questionCount: 2,
    });
    expect(result.length).toBe(2);
  });

  it("filters mistakes only", () => {
    const stats = [
      makeStat("q1", 3, 1), // mistake (1/3 correct)
      makeStat("q2", 2, 2), // perfect
    ];
    const result = filterQuestions(questions, stats, {
      partFilter: [],
      sectionFilter: [],
      onlyMistakes: true,
      onlyMarkedDifficult: false,
      questionCount: 50,
    });
    expect(result.map((q) => q.id)).toContain("q1");
    expect(result.map((q) => q.id)).not.toContain("q2");
  });

  it("filters marked difficult", () => {
    const stats = [
      makeStat("q1", 1, 1, true),  // difficult
      makeStat("q2", 1, 1, false), // not difficult
    ];
    const result = filterQuestions(questions, stats, {
      partFilter: [],
      sectionFilter: [],
      onlyMistakes: false,
      onlyMarkedDifficult: true,
      questionCount: 50,
    });
    expect(result.map((q) => q.id)).toContain("q1");
    expect(result.map((q) => q.id)).not.toContain("q2");
  });

  it("excludes unanswered questions when mistakes-only is set", () => {
    // Questions with no stat are excluded when onlyMistakes=true
    const result = filterQuestions(questions, [], {
      partFilter: [],
      sectionFilter: [],
      onlyMistakes: true,
      onlyMarkedDifficult: false,
      questionCount: 50,
    });
    expect(result.length).toBe(0);
  });
});
