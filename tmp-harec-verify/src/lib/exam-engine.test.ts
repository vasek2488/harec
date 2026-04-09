import { describe, it, expect } from 'vitest';
import {
  validateAnswer,
  calculateScore,
  generateExamSession,
  calculatePartScores,
  calculateNextReviewDate,
} from '@/lib/exam-engine';
import { Question, ExamAnswer } from '@/lib/types';
import { examConfig } from '@/../content/exam.config';

describe('exam-engine', () => {
  describe('validateAnswer', () => {
    it('should return true for correct answer', () => {
      const question: Question = {
        id: 'q1',
        examPartId: 'part1',
        sectionId: 'section1',
        wording: 'Test question',
        choices: [
          { id: 'a1', text: 'Option A' },
          { id: 'a2', text: 'Option B' },
        ],
        correctChoiceId: 'a1',
        explanation: 'Explanation',
        relatedLessonIds: [],
        tags: [],
      };

      expect(validateAnswer('q1', 'a1', question)).toBe(true);
    });

    it('should return false for incorrect answer', () => {
      const question: Question = {
        id: 'q1',
        examPartId: 'part1',
        sectionId: 'section1',
        wording: 'Test question',
        choices: [
          { id: 'a1', text: 'Option A' },
          { id: 'a2', text: 'Option B' },
        ],
        correctChoiceId: 'a1',
        explanation: 'Explanation',
        relatedLessonIds: [],
        tags: [],
      };

      expect(validateAnswer('q1', 'a2', question)).toBe(false);
    });

    it('should return false for null selection', () => {
      const question: Question = {
        id: 'q1',
        examPartId: 'part1',
        sectionId: 'section1',
        wording: 'Test question',
        choices: [{ id: 'a1', text: 'Option A' }],
        correctChoiceId: 'a1',
        explanation: 'Explanation',
        relatedLessonIds: [],
        tags: [],
      };

      expect(validateAnswer('q1', null, question)).toBe(false);
    });
  });

  describe('calculateScore', () => {
    it('should calculate score and pass status', () => {
      const answers: ExamAnswer[] = [
        {
          questionId: 'q1',
          selectedChoiceId: 'a1',
          correct: true,
          timeSpentSeconds: 30,
        },
        {
          questionId: 'q2',
          selectedChoiceId: 'a2',
          correct: true,
          timeSpentSeconds: 25,
        },
        {
          questionId: 'q3',
          selectedChoiceId: 'a3',
          correct: false,
          timeSpentSeconds: 20,
        },
      ];

      const result = calculateScore(answers, examConfig.examRules);

      expect(result.correct).toBe(2);
      expect(result.total).toBe(3);
      expect(result.percentage).toBe(67);
      expect(result.passed).toBe(true);
    });

    it('should mark as failed when below pass percentage', () => {
      const answers: ExamAnswer[] = [
        {
          questionId: 'q1',
          selectedChoiceId: 'a1',
          correct: true,
          timeSpentSeconds: 30,
        },
        {
          questionId: 'q2',
          selectedChoiceId: 'a2',
          correct: false,
          timeSpentSeconds: 25,
        },
        {
          questionId: 'q3',
          selectedChoiceId: 'a3',
          correct: false,
          timeSpentSeconds: 20,
        },
      ];

      const result = calculateScore(answers, examConfig.examRules);

      expect(result.percentage).toBe(33);
      expect(result.passed).toBe(false);
    });

    it('should handle empty answers', () => {
      const result = calculateScore([], examConfig.examRules);

      expect(result.correct).toBe(0);
      expect(result.total).toBe(0);
      expect(result.percentage).toBe(0);
      expect(result.passed).toBe(false);
    });
  });

  describe('generateExamSession', () => {
    it('should generate session with correct question count', () => {
      // Create mock questions for all sections
      const mockQuestions: Question[] = [];
      examConfig.parts.forEach((part) => {
        part.sections.forEach((section) => {
          for (let i = 0; i < section.bankQuestionCount; i++) {
            mockQuestions.push({
              id: `${section.id}-q${i}`,
              examPartId: part.id,
              sectionId: section.id,
              wording: `Question ${i}`,
              choices: [
                { id: 'a1', text: 'Option A' },
                { id: 'a2', text: 'Option B' },
              ],
              correctChoiceId: 'a1',
              explanation: 'Explanation',
              relatedLessonIds: [],
              tags: [],
            });
          }
        });
      });

      const session = generateExamSession(examConfig, mockQuestions);

      expect(session.questionIds.length).toBe(examConfig.examRules.totalQuestions);
      expect(session.totalTimeSeconds).toBe(
        examConfig.examRules.timeLimitMinutes * 60
      );
    });

    it('should return unique question IDs', () => {
      const mockQuestions: Question[] = [];
      examConfig.parts.forEach((part) => {
        part.sections.forEach((section) => {
          for (let i = 0; i < section.bankQuestionCount; i++) {
            mockQuestions.push({
              id: `${section.id}-q${i}`,
              examPartId: part.id,
              sectionId: section.id,
              wording: `Question ${i}`,
              choices: [{ id: 'a1', text: 'Option A' }],
              correctChoiceId: 'a1',
              explanation: 'Explanation',
              relatedLessonIds: [],
              tags: [],
            });
          }
        });
      });

      const session = generateExamSession(examConfig, mockQuestions);
      const uniqueIds = new Set(session.questionIds);

      expect(uniqueIds.size).toBe(session.questionIds.length);
    });
  });

  describe('calculatePartScores', () => {
    it('should calculate scores by part', () => {
      const answers: ExamAnswer[] = [
        {
          questionId: 'reg-q1',
          selectedChoiceId: 'a1',
          correct: true,
          timeSpentSeconds: 30,
        },
        {
          questionId: 'reg-q2',
          selectedChoiceId: 'a2',
          correct: false,
          timeSpentSeconds: 25,
        },
      ];

      const questions: Question[] = [
        {
          id: 'reg-q1',
          examPartId: 'regulations',
          sectionId: 'itu',
          wording: 'Test',
          choices: [{ id: 'a1', text: 'Option A' }],
          correctChoiceId: 'a1',
          explanation: 'Explanation',
          relatedLessonIds: [],
          tags: [],
        },
        {
          id: 'reg-q2',
          examPartId: 'regulations',
          sectionId: 'itu',
          wording: 'Test',
          choices: [{ id: 'a1', text: 'Option A' }],
          correctChoiceId: 'a1',
          explanation: 'Explanation',
          relatedLessonIds: [],
          tags: [],
        },
      ];

      const scores = calculatePartScores(answers, questions, examConfig);

      const regScore = scores.find((s) => s.partId === 'regulations');
      expect(regScore).toBeDefined();
      expect(regScore?.correct).toBe(1);
      expect(regScore?.total).toBe(2);
      expect(regScore?.percentage).toBe(50);
    });
  });

  describe('calculateNextReviewDate', () => {
    it('should schedule 1 day for incorrect answer', () => {
      const date = new Date(calculateNextReviewDate(0));
      const now = new Date();
      const diffDays = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

      expect(diffDays).toBeGreaterThan(0.9);
      expect(diffDays).toBeLessThan(1.1);
    });

    it('should schedule 3 days for 1 consecutive correct', () => {
      const date = new Date(calculateNextReviewDate(1));
      const now = new Date();
      const diffDays = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

      expect(diffDays).toBeGreaterThan(2.9);
      expect(diffDays).toBeLessThan(3.1);
    });

    it('should schedule 7 days for 2 consecutive correct', () => {
      const date = new Date(calculateNextReviewDate(2));
      const now = new Date();
      const diffDays = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

      expect(diffDays).toBeGreaterThan(6.9);
      expect(diffDays).toBeLessThan(7.1);
    });

    it('should schedule 14 days for 3+ consecutive correct', () => {
      const date = new Date(calculateNextReviewDate(3));
      const now = new Date();
      const diffDays = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

      expect(diffDays).toBeGreaterThan(13.9);
      expect(diffDays).toBeLessThan(14.1);
    });
  });
});
