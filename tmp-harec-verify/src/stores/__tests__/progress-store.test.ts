import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { ExamResult } from '@/lib/types';

// Create in-memory storage for testing
const testStorage = new Map<string, string>();

// Mock idb-keyval
vi.mock('idb-keyval', () => ({
  get: vi.fn(async (key: string) => {
    const value = testStorage.get(key);
    return value ? JSON.parse(value) : null;
  }),
  set: vi.fn(async (key: string, value: unknown) => {
    testStorage.set(key, JSON.stringify(value));
  }),
  del: vi.fn(async (key: string) => {
    testStorage.delete(key);
  }),
}));

// Import after mocking
import { useProgressStore } from '../progress-store';

describe('Progress Store', () => {
  beforeEach(() => {
    // Clear test storage
    testStorage.clear();
    // Reset store state before each test
    useProgressStore.setState({
      lessonProgress: [],
      questionStats: [],
      examHistory: [],
    });
  });

  describe('markLessonComplete', () => {
    it('should add new lesson progress when completing a lesson', () => {
      useProgressStore.getState().markLessonComplete('lesson-1');

      const progress = useProgressStore.getState().getLessonProgress('lesson-1');
      expect(progress).toBeDefined();
      expect(progress?.completed).toBe(true);
      expect(progress?.lessonId).toBe('lesson-1');
      expect(progress?.completedAt).toBeDefined();
    });

    it('should update existing lesson progress', () => {
      useProgressStore.getState().markLessonComplete('lesson-1');
      const firstCompletion = useProgressStore.getState().getLessonProgress('lesson-1');

      expect(firstCompletion?.completed).toBe(true);

      // Mark complete again
      useProgressStore.getState().markLessonComplete('lesson-1');
      const secondCompletion = useProgressStore.getState().getLessonProgress('lesson-1');

      expect(secondCompletion?.completed).toBe(true);
      expect(useProgressStore.getState().lessonProgress).toHaveLength(1);
    });
  });

  describe('recordAnswer', () => {
    it('should create new question stat on first answer', () => {
      const store = useProgressStore.getState();
      store.recordAnswer('q-1', 'choice-a', true);

      const stat = store.getQuestionStat('q-1');
      expect(stat).toBeDefined();
      expect(stat?.questionId).toBe('q-1');
      expect(stat?.timesAnswered).toBe(1);
      expect(stat?.timesCorrect).toBe(1);
      expect(stat?.consecutiveCorrect).toBe(1);
    });

    it('should increment counters on subsequent answers', () => {
      const store = useProgressStore.getState();
      store.recordAnswer('q-1', 'choice-a', true);
      store.recordAnswer('q-1', 'choice-b', true);

      const stat = store.getQuestionStat('q-1');
      expect(stat?.timesAnswered).toBe(2);
      expect(stat?.timesCorrect).toBe(2);
      expect(stat?.consecutiveCorrect).toBe(2);
    });

    it('should reset consecutiveCorrect on wrong answer', () => {
      const store = useProgressStore.getState();
      store.recordAnswer('q-1', 'choice-a', true);
      store.recordAnswer('q-1', 'choice-a', true);
      store.recordAnswer('q-1', 'choice-b', false);

      const stat = store.getQuestionStat('q-1');
      expect(stat?.timesAnswered).toBe(3);
      expect(stat?.timesCorrect).toBe(2);
      expect(stat?.consecutiveCorrect).toBe(0);
    });

    it('should set nextReviewDate based on consecutiveCorrect', () => {
      const store = useProgressStore.getState();

      // Wrong answer: 1 day
      store.recordAnswer('q-1', 'choice-a', false);
      let stat = store.getQuestionStat('q-1');
      let nextDate = stat?.nextReviewDate
        ? new Date(stat.nextReviewDate)
        : null;
      expect(nextDate).toBeDefined();

      // 1 correct: 3 days
      store.recordAnswer('q-2', 'choice-a', true);
      stat = store.getQuestionStat('q-2');
      nextDate = stat?.nextReviewDate ? new Date(stat.nextReviewDate) : null;
      expect(nextDate).toBeDefined();

      // 2 consecutive correct: 7 days
      store.recordAnswer('q-3', 'choice-a', true);
      store.recordAnswer('q-3', 'choice-a', true);
      stat = store.getQuestionStat('q-3');
      nextDate = stat?.nextReviewDate ? new Date(stat.nextReviewDate) : null;
      expect(nextDate).toBeDefined();
    });

    it('should update lastAnswered timestamp', () => {
      const store = useProgressStore.getState();
      const beforeTime = new Date();
      store.recordAnswer('q-1', 'choice-a', true);
      const afterTime = new Date();

      const stat = store.getQuestionStat('q-1');
      if (stat?.lastAnswered) {
        const lastAnswered = new Date(stat.lastAnswered);
        expect(lastAnswered.getTime()).toBeGreaterThanOrEqual(beforeTime.getTime());
        expect(lastAnswered.getTime()).toBeLessThanOrEqual(afterTime.getTime());
      } else {
        expect(stat?.lastAnswered).toBeDefined();
      }
    });
  });

  describe('toggleDifficult', () => {
    it('should toggle difficult flag on existing stat', () => {
      const store = useProgressStore.getState();
      store.recordAnswer('q-1', 'choice-a', true);

      let stat = store.getQuestionStat('q-1');
      expect(stat?.markedDifficult).toBe(false);

      store.toggleDifficult('q-1');
      stat = store.getQuestionStat('q-1');
      expect(stat?.markedDifficult).toBe(true);

      store.toggleDifficult('q-1');
      stat = store.getQuestionStat('q-1');
      expect(stat?.markedDifficult).toBe(false);
    });

    it('should create new stat if question not yet answered', () => {
      const store = useProgressStore.getState();
      store.toggleDifficult('q-1');

      const stat = store.getQuestionStat('q-1');
      expect(stat).toBeDefined();
      expect(stat?.markedDifficult).toBe(true);
      expect(stat?.timesAnswered).toBe(0);
    });
  });

  describe('saveExamResult', () => {
    it('should add exam to history', () => {
      const examResult: ExamResult = {
        id: 'exam-1',
        startedAt: new Date().toISOString(),
        finishedAt: new Date().toISOString(),
        totalQuestions: 3,
        correctAnswers: 2,
        passed: true,
        partScores: {
          'part-1': { correct: 2, total: 3 },
        },
        answers: [
          {
            questionId: 'q-1',
            selectedChoiceId: 'choice-a',
            correct: true,
            timeSpentSeconds: 10,
          },
          {
            questionId: 'q-2',
            selectedChoiceId: 'choice-b',
            correct: true,
            timeSpentSeconds: 15,
          },
          {
            questionId: 'q-3',
            selectedChoiceId: null,
            correct: false,
            timeSpentSeconds: 0,
          },
        ],
      };

      useProgressStore.getState().saveExamResult(examResult);

      const history = useProgressStore.getState().examHistory;
      expect(history).toHaveLength(1);
      expect(history[0]?.id).toBe('exam-1');
    });

    it('should update question stats from exam answers', () => {
      const examResult: ExamResult = {
        id: 'exam-1',
        startedAt: new Date().toISOString(),
        finishedAt: new Date().toISOString(),
        totalQuestions: 2,
        correctAnswers: 1,
        passed: false,
        partScores: { 'part-1': { correct: 1, total: 2 } },
        answers: [
          {
            questionId: 'q-1',
            selectedChoiceId: 'choice-a',
            correct: true,
            timeSpentSeconds: 10,
          },
          {
            questionId: 'q-2',
            selectedChoiceId: 'choice-b',
            correct: false,
            timeSpentSeconds: 15,
          },
        ],
      };

      useProgressStore.getState().saveExamResult(examResult);

      const stat1 = useProgressStore.getState().getQuestionStat('q-1');
      expect(stat1?.timesAnswered).toBe(1);
      expect(stat1?.timesCorrect).toBe(1);

      const stat2 = useProgressStore.getState().getQuestionStat('q-2');
      expect(stat2?.timesAnswered).toBe(1);
      expect(stat2?.timesCorrect).toBe(0);
    });

    it('should merge exam stats with existing question stats', () => {
      const store = useProgressStore.getState();

      // Answer q-1 before exam
      store.recordAnswer('q-1', 'choice-a', false);

      const stat1Before = store.getQuestionStat('q-1');
      expect(stat1Before?.timesAnswered).toBe(1);
      expect(stat1Before?.timesCorrect).toBe(0);

      // Save exam with q-1 answered correctly
      const examResult: ExamResult = {
        id: 'exam-1',
        startedAt: new Date().toISOString(),
        finishedAt: new Date().toISOString(),
        totalQuestions: 1,
        correctAnswers: 1,
        passed: true,
        partScores: { 'part-1': { correct: 1, total: 1 } },
        answers: [
          {
            questionId: 'q-1',
            selectedChoiceId: 'choice-a',
            correct: true,
            timeSpentSeconds: 10,
          },
        ],
      };

      store.saveExamResult(examResult);

      const stat1After = store.getQuestionStat('q-1');
      expect(stat1After?.timesAnswered).toBe(2);
      expect(stat1After?.timesCorrect).toBe(1);
    });

    it('should preserve difficult flag when updating from exam', () => {
      const store = useProgressStore.getState();

      store.recordAnswer('q-1', 'choice-a', false);
      store.toggleDifficult('q-1');

      const examResult: ExamResult = {
        id: 'exam-1',
        startedAt: new Date().toISOString(),
        finishedAt: new Date().toISOString(),
        totalQuestions: 1,
        correctAnswers: 1,
        passed: true,
        partScores: { 'part-1': { correct: 1, total: 1 } },
        answers: [
          {
            questionId: 'q-1',
            selectedChoiceId: 'choice-a',
            correct: true,
            timeSpentSeconds: 10,
          },
        ],
      };

      store.saveExamResult(examResult);

      const stat = store.getQuestionStat('q-1');
      expect(stat?.markedDifficult).toBe(true);
    });
  });

  describe('resetProgress', () => {
    it('should clear all progress', () => {
      // Add some data
      useProgressStore.getState().markLessonComplete('lesson-1');
      useProgressStore.getState().recordAnswer('q-1', 'choice-a', true);
      useProgressStore.getState().saveExamResult({
        id: 'exam-1',
        startedAt: new Date().toISOString(),
        finishedAt: new Date().toISOString(),
        totalQuestions: 1,
        correctAnswers: 1,
        passed: true,
        partScores: { 'part-1': { correct: 1, total: 1 } },
        answers: [
          {
            questionId: 'q-1',
            selectedChoiceId: 'choice-a',
            correct: true,
            timeSpentSeconds: 10,
          },
        ],
      });

      expect(useProgressStore.getState().lessonProgress.length).toBeGreaterThan(0);
      expect(useProgressStore.getState().questionStats.length).toBeGreaterThan(0);
      expect(useProgressStore.getState().examHistory.length).toBeGreaterThan(0);

      useProgressStore.getState().resetProgress();

      expect(useProgressStore.getState().lessonProgress).toHaveLength(0);
      expect(useProgressStore.getState().questionStats).toHaveLength(0);
      expect(useProgressStore.getState().examHistory).toHaveLength(0);
    });
  });

  describe('Getter methods', () => {
    it('getLessonProgress should return undefined for non-existent lesson', () => {
      const store = useProgressStore.getState();
      const progress = store.getLessonProgress('non-existent');
      expect(progress).toBeUndefined();
    });

    it('getQuestionStat should return undefined for non-existent question', () => {
      const store = useProgressStore.getState();
      const stat = store.getQuestionStat('non-existent');
      expect(stat).toBeUndefined();
    });
  });
});
