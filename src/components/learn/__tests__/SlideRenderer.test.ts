import { describe, it, expect } from "vitest";
import type { LessonSlide } from "@/lib/types";

// Logic helpers extracted from SlideRenderer

function isPassiveSlide(slide: LessonSlide): boolean {
  return slide.type === "explain" || slide.type === "reveal";
}

function isInteractiveSlide(slide: LessonSlide): boolean {
  return !isPassiveSlide(slide);
}

function checkFillBlank(selected: string, blank: string): boolean {
  return selected === blank;
}

function checkSelectAnswer(
  selectedId: string,
  correctId: string
): boolean {
  return selectedId === correctId;
}

function checkSlider(
  value: number,
  correctValue: number,
  tolerance: number
): boolean {
  return Math.abs(value - correctValue) <= tolerance;
}

function checkHighlight(
  selected: Set<number>,
  terms: { text: string; correct: boolean }[]
): boolean {
  const correctIndices = terms
    .map((t, i) => (t.correct ? i : -1))
    .filter((i) => i !== -1);
  return (
    correctIndices.every((i) => selected.has(i)) &&
    selected.size === correctIndices.length
  );
}

describe("Slide type detection", () => {
  it("marks explain as passive", () => {
    const slide: LessonSlide = { type: "explain", content: "text" };
    expect(isPassiveSlide(slide)).toBe(true);
  });

  it("marks reveal as passive", () => {
    const slide: LessonSlide = {
      type: "reveal",
      prompt: "?",
      answer: "A",
    };
    expect(isPassiveSlide(slide)).toBe(true);
  });

  it("marks select-answer as interactive", () => {
    const slide: LessonSlide = {
      type: "select-answer",
      question: "Q",
      choices: [{ id: "a", text: "A" }],
      correctId: "a",
      explanation: "E",
    };
    expect(isInteractiveSlide(slide)).toBe(true);
  });

  it("marks fill-blank as interactive", () => {
    const slide: LessonSlide = {
      type: "fill-blank",
      textBefore: "X",
      blank: "Y",
      distractors: ["Z"],
      textAfter: ".",
    };
    expect(isInteractiveSlide(slide)).toBe(true);
  });
});

describe("fill-blank correctness", () => {
  it("returns true when correct answer selected", () => {
    expect(checkFillBlank("antenna", "antenna")).toBe(true);
  });

  it("returns false when distractor selected", () => {
    expect(checkFillBlank("resistor", "antenna")).toBe(false);
  });
});

describe("select-answer correctness", () => {
  it("returns true when correct choice selected", () => {
    expect(checkSelectAnswer("b", "b")).toBe(true);
  });

  it("returns false for wrong choice", () => {
    expect(checkSelectAnswer("a", "b")).toBe(false);
  });
});

describe("slider correctness", () => {
  it("returns true when within tolerance", () => {
    expect(checkSlider(145, 144, 2)).toBe(true);
  });

  it("returns true when exact match", () => {
    expect(checkSlider(144, 144, 0)).toBe(true);
  });

  it("returns false when outside tolerance", () => {
    expect(checkSlider(150, 144, 2)).toBe(false);
  });
});

describe("highlight correctness", () => {
  const terms = [
    { text: "A", correct: true },
    { text: "B", correct: false },
    { text: "C", correct: true },
  ];

  it("returns true when all correct terms selected", () => {
    expect(checkHighlight(new Set([0, 2]), terms)).toBe(true);
  });

  it("returns false when a correct term is missed", () => {
    expect(checkHighlight(new Set([0]), terms)).toBe(false);
  });

  it("returns false when extra wrong term selected", () => {
    expect(checkHighlight(new Set([0, 1, 2]), terms)).toBe(false);
  });
});
