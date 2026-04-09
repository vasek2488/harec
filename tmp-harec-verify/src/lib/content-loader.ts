import { examConfig } from "@content/exam.config";
import { lessons } from "@content/lessons/index";
import { questions } from "@content/questions/index";
import { glossary } from "@content/glossary";
import { formulas } from "@content/formulas";
import type {
  ExamConfig,
  Lesson,
  Question,
  GlossaryTerm,
  Formula,
} from "@/lib/types";

export function getConfig(): ExamConfig {
  return examConfig;
}

export function getLessons(): Lesson[] {
  return lessons;
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByPart(examPartId: string): Lesson[] {
  return lessons.filter((l) => l.examPartId === examPartId);
}

export function getQuestions(): Question[] {
  return questions;
}

export interface QuestionFilter {
  examPartId?: string;
  sectionId?: string;
  tags?: string[];
}

export function getQuestionsByFilter(filter: QuestionFilter): Question[] {
  return questions.filter((q) => {
    if (filter.examPartId && q.examPartId !== filter.examPartId) return false;
    if (filter.sectionId && q.sectionId !== filter.sectionId) return false;
    if (filter.tags && filter.tags.length > 0) {
      if (!filter.tags.some((tag) => q.tags.includes(tag))) return false;
    }
    return true;
  });
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}

export function getGlossary(): GlossaryTerm[] {
  return glossary;
}

export function getFormulas(): Formula[] {
  return formulas;
}
