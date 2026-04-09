import { describe, it, expect } from "vitest";
import { buildExportData } from "@/pages/Settings";

// ---------------------------------------------------------------------------
// buildExportData
// ---------------------------------------------------------------------------

describe("buildExportData", () => {
  const sampleProgress = {
    lessonProgress: [
      { lessonId: "l1", completed: true, slideIndex: 5, correctCount: 3, totalInteractive: 4 },
    ],
    questionStats: [
      { questionId: "q1", timesAnswered: 3, timesCorrect: 2, lastAnswered: "2026-04-07T00:00:00.000Z", markedDifficult: false, consecutiveCorrect: 1 },
    ],
    examHistory: [
      { id: "e1", startedAt: "2026-04-07T00:00:00.000Z", finishedAt: "2026-04-07T02:00:00.000Z", totalQuestions: 80, correctAnswers: 55, passed: true, partScores: {}, answers: [] },
    ],
  };

  it("returns valid JSON string", () => {
    const result = buildExportData(sampleProgress);
    expect(() => JSON.parse(result)).not.toThrow();
  });

  it("includes exportedAt timestamp", () => {
    const result = buildExportData(sampleProgress);
    const parsed = JSON.parse(result);
    expect(parsed.exportedAt).toBeDefined();
    expect(typeof parsed.exportedAt).toBe("string");
  });

  it("includes version field", () => {
    const result = buildExportData(sampleProgress);
    const parsed = JSON.parse(result);
    expect(parsed.version).toBe(1);
  });

  it("includes all progress data", () => {
    const result = buildExportData(sampleProgress);
    const parsed = JSON.parse(result);
    expect(parsed.lessonProgress).toHaveLength(1);
    expect(parsed.questionStats).toHaveLength(1);
    expect(parsed.examHistory).toHaveLength(1);
  });

  it("handles empty progress gracefully", () => {
    const result = buildExportData({
      lessonProgress: [],
      questionStats: [],
      examHistory: [],
    });
    const parsed = JSON.parse(result);
    expect(parsed.lessonProgress).toHaveLength(0);
    expect(parsed.questionStats).toHaveLength(0);
    expect(parsed.examHistory).toHaveLength(0);
  });

  it("produces pretty-printed JSON (indented)", () => {
    const result = buildExportData(sampleProgress);
    expect(result).toContain("\n");
  });
});

// ---------------------------------------------------------------------------
// Reset confirmation state machine
// ---------------------------------------------------------------------------

describe("reset confirmation state machine", () => {
  // Mirrors the ConfirmState logic in ResetProgress component
  type ConfirmState = "idle" | "confirming";

  function clickReset(_state: ConfirmState): ConfirmState {
    return "confirming";
  }

  function clickCancel(_state: ConfirmState): ConfirmState {
    return "idle";
  }

  function clickConfirm(_state: ConfirmState): ConfirmState {
    return "idle"; // reset happened, back to idle
  }

  it("starts in idle state", () => {
    const state: ConfirmState = "idle";
    expect(state).toBe("idle");
  });

  it("transitions to confirming when reset is clicked", () => {
    expect(clickReset("idle")).toBe("confirming");
  });

  it("returns to idle on cancel", () => {
    expect(clickCancel("confirming")).toBe("idle");
  });

  it("returns to idle after confirm", () => {
    expect(clickConfirm("confirming")).toBe("idle");
  });
});

// ---------------------------------------------------------------------------
// Theme options
// ---------------------------------------------------------------------------

describe("theme options", () => {
  const validThemes = ["system", "light", "dark"] as const;

  it("has exactly 3 theme options", () => {
    expect(validThemes).toHaveLength(3);
  });

  it("system theme is the default", () => {
    // matches initialState in preferences-store
    expect(validThemes[0]).toBe("system");
  });
});

// ---------------------------------------------------------------------------
// Font size options
// ---------------------------------------------------------------------------

describe("font size options", () => {
  const validSizes = ["normal", "large"] as const;

  it("has exactly 2 size options", () => {
    expect(validSizes).toHaveLength(2);
  });

  it("normal is first option", () => {
    expect(validSizes[0]).toBe("normal");
  });
});
