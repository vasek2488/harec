import { describe, it, expect } from "vitest";
import { examConfig } from "./exam.config";

describe("exam.config", () => {
  it("has required fields", () => {
    expect(examConfig.id).toBeTruthy();
    expect(examConfig.name).toBeTruthy();
    expect(examConfig.fullName).toBeTruthy();
    expect(examConfig.locale).toBeTruthy();
    expect(examConfig.parts.length).toBe(3);
  });

  it("has valid exam rules", () => {
    const { examRules } = examConfig;
    expect(examRules.totalQuestions).toBe(80);
    expect(examRules.timeLimitMinutes).toBeGreaterThan(0);
    expect(examRules.passPercentage).toBe(60);
  });

  it("parts have unique ids", () => {
    const ids = examConfig.parts.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("sections have unique ids across all parts", () => {
    const ids = examConfig.parts.flatMap((p) => p.sections.map((s) => s.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("part exam question counts sum to total", () => {
    const sum = examConfig.parts.reduce((acc, p) => acc + p.examQuestionCount, 0);
    expect(sum).toBe(examConfig.examRules.totalQuestions);
  });

  it("section exam question counts sum to part total", () => {
    for (const part of examConfig.parts) {
      const sum = part.sections.reduce((acc, s) => acc + s.examQuestionCount, 0);
      expect(sum).toBe(part.examQuestionCount);
    }
  });

  it("has correct total sections (3+6+10)", () => {
    const totalSections = examConfig.parts.reduce(
      (acc, p) => acc + p.sections.length,
      0,
    );
    expect(totalSections).toBe(19);
  });

  it("total bank questions sum to 584", () => {
    const totalBank = examConfig.parts.reduce(
      (acc, p) =>
        acc + p.sections.reduce((sacc, s) => sacc + s.bankQuestionCount, 0),
      0,
    );
    expect(totalBank).toBe(584);
  });
});
