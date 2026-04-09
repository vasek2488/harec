import { describe, it, expect } from "vitest";
import { calculateScore, calculatePartScores } from "@/lib/exam-engine";
import { formatTime, shuffleArray } from "@/pages/ExamSession";
import type { ExamAnswer, ExamConfig, Question } from "@/lib/types";

// ---------------------------------------------------------------------------
// formatTime
// ---------------------------------------------------------------------------

describe("formatTime", () => {
  it("formats 0 seconds", () => expect(formatTime(0)).toBe("0:00"));
  it("formats exactly 1 minute", () => expect(formatTime(60)).toBe("1:00"));
  it("pads single-digit seconds", () => expect(formatTime(65)).toBe("1:05"));
  it("formats 2 hours", () => expect(formatTime(7200)).toBe("120:00"));
  it("formats 5-minute warning threshold", () =>
    expect(formatTime(300)).toBe("5:00"));
  it("formats 59 seconds", () => expect(formatTime(59)).toBe("0:59"));
});

// ---------------------------------------------------------------------------
// calculateScore
// ---------------------------------------------------------------------------

describe("calculateScore", () => {
  const makeRules = (totalQuestions: number) => ({
    totalQuestions,
    timeLimitMinutes: 120,
    passPercentage: 60,
    shuffleQuestions: false,
    shuffleChoices: false,
  });

  const makeAnswer = (id: string, correct: boolean): ExamAnswer => ({
    questionId: id,
    selectedChoiceId: correct ? "correct" : "wrong",
    correct,
    timeSpentSeconds: 10,
  });

  it("returns 100% for all correct answers", () => {
    const answers = Array.from({ length: 10 }, (_, i) =>
      makeAnswer(`q${i}`, true)
    );
    const score = calculateScore(answers, makeRules(10));
    expect(score.percentage).toBe(100);
    expect(score.correct).toBe(10);
    expect(score.passed).toBe(true);
  });

  it("returns 0% for all wrong answers", () => {
    const answers = Array.from({ length: 10 }, (_, i) =>
      makeAnswer(`q${i}`, false)
    );
    const score = calculateScore(answers, makeRules(10));
    expect(score.percentage).toBe(0);
    expect(score.passed).toBe(false);
  });

  it("passes at exactly the pass threshold (60%)", () => {
    const answers = [
      ...Array.from({ length: 6 }, (_, i) => makeAnswer(`c${i}`, true)),
      ...Array.from({ length: 4 }, (_, i) => makeAnswer(`w${i}`, false)),
    ];
    const score = calculateScore(answers, makeRules(10));
    expect(score.percentage).toBe(60);
    expect(score.passed).toBe(true);
  });

  it("fails one point below the pass threshold (59%)", () => {
    const answers = [
      ...Array.from({ length: 59 }, (_, i) => makeAnswer(`c${i}`, true)),
      ...Array.from({ length: 41 }, (_, i) => makeAnswer(`w${i}`, false)),
    ];
    const score = calculateScore(answers, makeRules(100));
    expect(score.percentage).toBe(59);
    expect(score.passed).toBe(false);
  });

  it("returns 0% gracefully when answers array is empty", () => {
    const score = calculateScore([], makeRules(80));
    expect(score.percentage).toBe(0);
    expect(score.total).toBe(80);
    expect(score.passed).toBe(false);
  });

  it("counts unanswered questions as incorrect", () => {
    const score = calculateScore(
      [
        makeAnswer("q1", true),
        makeAnswer("q2", true),
      ],
      makeRules(4)
    );

    expect(score.correct).toBe(2);
    expect(score.total).toBe(4);
    expect(score.percentage).toBe(50);
    expect(score.passed).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// calculatePartScores
// ---------------------------------------------------------------------------

const testConfig: ExamConfig = {
  id: "test",
  name: "Test",
  fullName: "Test Exam",
  locale: "en",
  parts: [
    {
      id: "partA",
      name: "Part A",
      examQuestionCount: 2,
      sections: [
        {
          id: "secA",
          name: "Section A",
          topicSlug: "a",
          examQuestionCount: 2,
          bankQuestionCount: 5,
        },
      ],
    },
    {
      id: "partB",
      name: "Part B",
      examQuestionCount: 2,
      sections: [
        {
          id: "secB",
          name: "Section B",
          topicSlug: "b",
          examQuestionCount: 2,
          bankQuestionCount: 5,
        },
      ],
    },
  ],
  examRules: {
    totalQuestions: 4,
    timeLimitMinutes: 10,
    passPercentage: 60,
    shuffleQuestions: false,
    shuffleChoices: false,
  },
  theme: {},
};

const testQuestions: Question[] = [
  {
    id: "q1",
    examPartId: "partA",
    sectionId: "secA",
    wording: "Q1",
    choices: [],
    correctChoiceId: "a",
    explanation: "",
    relatedLessonIds: [],
    tags: [],
  },
  {
    id: "q2",
    examPartId: "partA",
    sectionId: "secA",
    wording: "Q2",
    choices: [],
    correctChoiceId: "a",
    explanation: "",
    relatedLessonIds: [],
    tags: [],
  },
  {
    id: "q3",
    examPartId: "partB",
    sectionId: "secB",
    wording: "Q3",
    choices: [],
    correctChoiceId: "a",
    explanation: "",
    relatedLessonIds: [],
    tags: [],
  },
  {
    id: "q4",
    examPartId: "partB",
    sectionId: "secB",
    wording: "Q4",
    choices: [],
    correctChoiceId: "a",
    explanation: "",
    relatedLessonIds: [],
    tags: [],
  },
];

describe("calculatePartScores", () => {
  it("calculates per-part scores correctly", () => {
    const answers: ExamAnswer[] = [
      { questionId: "q1", selectedChoiceId: "a", correct: true, timeSpentSeconds: 5 },
      { questionId: "q2", selectedChoiceId: "b", correct: false, timeSpentSeconds: 5 },
      { questionId: "q3", selectedChoiceId: "a", correct: true, timeSpentSeconds: 5 },
      { questionId: "q4", selectedChoiceId: "a", correct: true, timeSpentSeconds: 5 },
    ];

    const partScores = calculatePartScores(answers, testQuestions, testConfig);
    const scoreA = partScores.find((ps) => ps.partId === "partA");
    const scoreB = partScores.find((ps) => ps.partId === "partB");

    expect(scoreA?.correct).toBe(1);
    expect(scoreA?.total).toBe(2);
    expect(scoreA?.percentage).toBe(50);
    expect(scoreB?.correct).toBe(2);
    expect(scoreB?.total).toBe(2);
    expect(scoreB?.percentage).toBe(100);
  });

  it("returns empty array when no answers provided", () => {
    const partScores = calculatePartScores([], testQuestions, testConfig);
    expect(partScores).toHaveLength(0);
  });

  it("assigns correct partName from config", () => {
    const answers: ExamAnswer[] = [
      { questionId: "q1", selectedChoiceId: "a", correct: true, timeSpentSeconds: 0 },
    ];
    const partScores = calculatePartScores(answers, testQuestions, testConfig);
    const scoreA = partScores.find((ps) => ps.partId === "partA");
    expect(scoreA?.partName).toBe("Part A");
  });
});

// ---------------------------------------------------------------------------
// Answer persistence (mirrors session-store recordAnswer logic)
// ---------------------------------------------------------------------------

describe("exam answer persistence", () => {
  type StoredAnswer = {
    questionId: string;
    selectedChoiceId: string | null;
    correct: boolean;
  };

  function recordAnswer(
    existing: StoredAnswer[],
    next: StoredAnswer
  ): StoredAnswer[] {
    const idx = existing.findIndex((a) => a.questionId === next.questionId);
    if (idx >= 0) {
      const updated = [...existing];
      updated[idx] = next;
      return updated;
    }
    return [...existing, next];
  }

  it("appends a new answer", () => {
    const result = recordAnswer([], {
      questionId: "q1",
      selectedChoiceId: "a",
      correct: true,
    });
    expect(result).toHaveLength(1);
    expect(result[0]?.selectedChoiceId).toBe("a");
  });

  it("overwrites an existing answer for the same question", () => {
    const initial: StoredAnswer[] = [
      { questionId: "q1", selectedChoiceId: "a", correct: false },
    ];
    const result = recordAnswer(initial, {
      questionId: "q1",
      selectedChoiceId: "b",
      correct: true,
    });
    expect(result).toHaveLength(1);
    expect(result[0]?.selectedChoiceId).toBe("b");
    expect(result[0]?.correct).toBe(true);
  });

  it("keeps other answers intact when overwriting", () => {
    const initial: StoredAnswer[] = [
      { questionId: "q1", selectedChoiceId: "a", correct: true },
      { questionId: "q2", selectedChoiceId: "b", correct: false },
    ];
    const result = recordAnswer(initial, {
      questionId: "q1",
      selectedChoiceId: "c",
      correct: false,
    });
    expect(result).toHaveLength(2);
    expect(result.find((a) => a.questionId === "q2")?.selectedChoiceId).toBe("b");
  });
});

// ---------------------------------------------------------------------------
// shuffleArray
// ---------------------------------------------------------------------------

describe("shuffleArray", () => {
  it("returns same number of elements", () => {
    const arr = [1, 2, 3, 4];
    expect(shuffleArray(arr)).toHaveLength(4);
  });

  it("contains all original elements", () => {
    const arr = ["a", "b", "c", "d"];
    const result = shuffleArray(arr);
    expect(result.sort()).toEqual(["a", "b", "c", "d"]);
  });

  it("does not mutate the original array", () => {
    const arr = [1, 2, 3];
    const original = [...arr];
    shuffleArray(arr);
    expect(arr).toEqual(original);
  });

  it("returns a new array instance", () => {
    const arr = [1, 2, 3];
    expect(shuffleArray(arr)).not.toBe(arr);
  });

  it("handles empty array", () => {
    expect(shuffleArray([])).toEqual([]);
  });

  it("handles single-element array", () => {
    expect(shuffleArray([42])).toEqual([42]);
  });
});
