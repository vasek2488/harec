import { describe, it, expect } from "vitest";
import {
  getConfig,
  getLessons,
  getLessonById,
  getLessonsByPart,
  getQuestions,
  getQuestionsByFilter,
  getQuestionById,
  getGlossary,
  getFormulas,
} from "@/lib/content-loader";

describe("content-loader", () => {
  describe("getConfig", () => {
    it("returns exam config with required fields", () => {
      const config = getConfig();
      expect(config.id).toBeTruthy();
      expect(config.name).toBeTruthy();
      expect(config.parts).toBeInstanceOf(Array);
      expect(config.parts.length).toBeGreaterThan(0);
    });

    it("returns same reference on repeated calls", () => {
      expect(getConfig()).toBe(getConfig());
    });
  });

  describe("getLessons", () => {
    it("returns an array", () => {
      expect(getLessons()).toBeInstanceOf(Array);
    });
  });

  describe("getLessonById", () => {
    it("returns undefined for unknown id", () => {
      expect(getLessonById("nonexistent-id")).toBeUndefined();
    });

    it("returns the correct lesson when it exists", () => {
      const lessons = getLessons();
      const first = lessons.at(0);
      if (first) {
        expect(getLessonById(first.id)).toBe(first);
      }
    });
  });

  describe("getLessonsByPart", () => {
    it("returns an array", () => {
      expect(getLessonsByPart("regulations")).toBeInstanceOf(Array);
    });

    it("returns only lessons matching the examPartId", () => {
      const lessons = getLessons();
      const first = lessons.at(0);
      if (first) {
        const byPart = getLessonsByPart(first.examPartId);
        expect(byPart.every((l) => l.examPartId === first.examPartId)).toBe(true);
      }
    });

    it("returns empty array for unknown part", () => {
      expect(getLessonsByPart("nonexistent-part")).toEqual([]);
    });
  });

  describe("getQuestions", () => {
    it("returns an array", () => {
      expect(getQuestions()).toBeInstanceOf(Array);
    });
  });

  describe("getQuestionsByFilter", () => {
    it("returns all questions when filter is empty", () => {
      expect(getQuestionsByFilter({})).toEqual(getQuestions());
    });

    it("filters by examPartId", () => {
      const questions = getQuestions();
      const first = questions.at(0);
      if (first) {
        const filtered = getQuestionsByFilter({ examPartId: first.examPartId });
        expect(filtered.every((q) => q.examPartId === first.examPartId)).toBe(true);
      }
    });

    it("filters by sectionId", () => {
      const questions = getQuestions();
      const first = questions.at(0);
      if (first) {
        const filtered = getQuestionsByFilter({ sectionId: first.sectionId });
        expect(filtered.every((q) => q.sectionId === first.sectionId)).toBe(true);
      }
    });

    it("filters by tags", () => {
      const questions = getQuestions();
      const tagged = questions.filter((q) => q.tags.length > 0);
      const first = tagged.at(0);
      if (first) {
        const tag = first.tags.at(0);
        if (tag) {
          const filtered = getQuestionsByFilter({ tags: [tag] });
          expect(filtered.every((q) => q.tags.includes(tag))).toBe(true);
        }
      }
    });

    it("returns empty array when no questions match filter", () => {
      expect(getQuestionsByFilter({ sectionId: "nonexistent-section" })).toEqual([]);
    });
  });

  describe("getQuestionById", () => {
    it("returns undefined for unknown id", () => {
      expect(getQuestionById("nonexistent-id")).toBeUndefined();
    });

    it("returns the correct question when it exists", () => {
      const questions = getQuestions();
      const first = questions.at(0);
      if (first) {
        expect(getQuestionById(first.id)).toBe(first);
      }
    });
  });

  describe("getGlossary", () => {
    it("returns an array", () => {
      expect(getGlossary()).toBeInstanceOf(Array);
    });
  });

  describe("getFormulas", () => {
    it("returns an array", () => {
      expect(getFormulas()).toBeInstanceOf(Array);
    });
  });
});
