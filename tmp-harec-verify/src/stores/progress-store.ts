import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  LessonProgress,
  QuestionStat,
  ExamResult,
} from '@/lib/types';

interface ProgressState {
  lessonProgress: LessonProgress[];
  questionStats: QuestionStat[];
  examHistory: ExamResult[];
  consumedExamSessionIds: string[];

  // Actions
  markLessonComplete: (lessonId: string) => void;
  recordAnswer: (
    questionId: string,
    selectedChoiceId: string,
    correct: boolean
  ) => void;
  toggleDifficult: (questionId: string) => void;
  saveExamResult: (examResult: ExamResult) => void;
  resetProgress: () => void;

  // Getters
  getLessonProgress: (lessonId: string) => LessonProgress | undefined;
  getQuestionStat: (questionId: string) => QuestionStat | undefined;
}

const initialState = {
  lessonProgress: [] as LessonProgress[],
  questionStats: [] as QuestionStat[],
  examHistory: [] as ExamResult[],
  consumedExamSessionIds: [] as string[],
};

// Determine if we're in a test environment
const isTest = typeof process !== 'undefined' && process.env.VITEST === 'true';

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      markLessonComplete: (lessonId: string) => {
        set((state) => {
          const existing = state.lessonProgress.find(
            (lp) => lp.lessonId === lessonId
          );
          if (existing) {
            return {
              lessonProgress: state.lessonProgress.map((lp) =>
                lp.lessonId === lessonId
                  ? {
                      ...lp,
                      completed: true,
                      completedAt: new Date().toISOString(),
                    }
                  : lp
              ),
            };
          } else {
            return {
              lessonProgress: [
                ...state.lessonProgress,
                {
                  lessonId,
                  completed: true,
                  completedAt: new Date().toISOString(),
                  slideIndex: 0,
                  correctCount: 0,
                  totalInteractive: 0,
                },
              ],
            };
          }
        });
      },

      recordAnswer: (
        questionId: string,
        _selectedChoiceId: string,
        correct: boolean
      ) => {
        set((state) => {
          const existing = state.questionStats.find(
            (qs) => qs.questionId === questionId
          );

          if (existing) {
            const updatedStat: QuestionStat = {
              ...existing,
              timesAnswered: existing.timesAnswered + 1,
              timesCorrect: correct
                ? existing.timesCorrect + 1
                : existing.timesCorrect,
              lastAnswered: new Date().toISOString(),
              consecutiveCorrect: correct
                ? existing.consecutiveCorrect + 1
                : 0,
              nextReviewDate: calculateNextReviewDate(
                correct ? existing.consecutiveCorrect + 1 : 0
              ),
            };

            return {
              questionStats: state.questionStats.map((qs) =>
                qs.questionId === questionId ? updatedStat : qs
              ),
            };
          } else {
            const newStat: QuestionStat = {
              questionId,
              timesAnswered: 1,
              timesCorrect: correct ? 1 : 0,
              lastAnswered: new Date().toISOString(),
              markedDifficult: false,
              consecutiveCorrect: correct ? 1 : 0,
              nextReviewDate: calculateNextReviewDate(correct ? 1 : 0),
            };

            return {
              questionStats: [...state.questionStats, newStat],
            };
          }
        });
      },

      toggleDifficult: (questionId: string) => {
        set((state) => {
          const existing = state.questionStats.find(
            (qs) => qs.questionId === questionId
          );

          if (existing) {
            return {
              questionStats: state.questionStats.map((qs) =>
                qs.questionId === questionId
                  ? {
                      ...qs,
                      markedDifficult: !qs.markedDifficult,
                    }
                  : qs
              ),
            };
          } else {
            const newStat: QuestionStat = {
              questionId,
              timesAnswered: 0,
              timesCorrect: 0,
              lastAnswered: new Date().toISOString(),
              markedDifficult: true,
              consecutiveCorrect: 0,
            };

            return {
              questionStats: [...state.questionStats, newStat],
            };
          }
        });
      },

      saveExamResult: (examResult: ExamResult) => {
        set((state) => {
          const consumedExamSessionIds = state.consumedExamSessionIds ?? [];
          if (
            consumedExamSessionIds.includes(examResult.id) ||
            state.examHistory.some((result) => result.id === examResult.id)
          ) {
            return {};
          }

          // Update individual question stats from exam
          const updatedQuestionStats = [...state.questionStats];

          examResult.answers.forEach((answer) => {
            const idx = updatedQuestionStats.findIndex(
              (qs) => qs.questionId === answer.questionId
            );

            if (idx >= 0) {
              const existing = updatedQuestionStats[idx];
              if (existing) {
                updatedQuestionStats[idx] = {
                  ...existing,
                  timesAnswered: existing.timesAnswered + 1,
                  timesCorrect: answer.correct
                    ? existing.timesCorrect + 1
                    : existing.timesCorrect,
                  lastAnswered: new Date().toISOString(),
                  consecutiveCorrect: answer.correct
                    ? existing.consecutiveCorrect + 1
                    : 0,
                  nextReviewDate: calculateNextReviewDate(
                    answer.correct ? existing.consecutiveCorrect + 1 : 0
                  ),
                };
              }
            } else {
              updatedQuestionStats.push({
                questionId: answer.questionId,
                timesAnswered: 1,
                timesCorrect: answer.correct ? 1 : 0,
                lastAnswered: new Date().toISOString(),
                markedDifficult: false,
                consecutiveCorrect: answer.correct ? 1 : 0,
                nextReviewDate: calculateNextReviewDate(
                  answer.correct ? 1 : 0
                ),
              });
            }
          });

          return {
            examHistory: [...state.examHistory, examResult],
            questionStats: updatedQuestionStats,
            consumedExamSessionIds: [...consumedExamSessionIds, examResult.id],
          };
        });
      },

      resetProgress: () => {
        set(initialState);
      },

      getLessonProgress: (lessonId: string) => {
        return get().lessonProgress.find((lp) => lp.lessonId === lessonId);
      },

      getQuestionStat: (questionId: string) => {
        return get().questionStats.find((qs) => qs.questionId === questionId);
      },
    }),
    {
      name: 'progress-store',
      storage:
        (isTest
          ? // No-op storage for tests
            {
              getItem: async () => null,
              setItem: async () => {},
              removeItem: async () => {},
            }
          : // Real IndexedDB storage for production
            {
              getItem: async (name: string) => {
                const { get } = await import('idb-keyval');
                try {
                  const data = await get(name);
                  return data ? JSON.stringify(data) : null;
                } catch {
                  console.warn(`Failed to read from IndexedDB: ${name}`);
                  return null;
                }
              },
              setItem: async (name: string, value: string | unknown) => {
                const { set } = await import('idb-keyval');
                try {
                  // Handle both string and object values
                  const data =
                    typeof value === 'string' ? JSON.parse(value) : value;
                  await set(name, data);
                } catch (error) {
                  console.warn(`Failed to write to IndexedDB: ${name}`, error);
                }
              },
              removeItem: async (name: string) => {
                const { del } = await import('idb-keyval');
                try {
                  await del(name);
                } catch (error) {
                  console.warn(
                    `Failed to remove from IndexedDB: ${name}`,
                    error
                  );
                }
              },
            }) as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    }
  )
);

function calculateNextReviewDate(consecutiveCorrect: number): string {
  const now = new Date();
  const daysToAdd =
    consecutiveCorrect === 0
      ? 1 // wrong: review in 1 day
      : consecutiveCorrect === 1
        ? 3 // 1 correct: 3 days
        : consecutiveCorrect === 2
          ? 7 // 2 consecutive: 7 days
          : 14; // 3+: 14 days

  const future = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
  return future.toISOString();
}
