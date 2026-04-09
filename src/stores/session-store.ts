import { create } from 'zustand';
import { ExamAnswer } from '@/lib/types';

interface SessionState {
  sessionType: 'drill' | 'exam' | null;
  sessionId: string | null;
  questionIds: string[];
  currentQuestionIndex: number;
  answers: ExamAnswer[];
  sessionStartedAt: string | null;
  sessionEndedAt: string | null;

  // Actions
  startSession: (
    type: 'drill' | 'exam',
    questionIds: string[],
    sessionId?: string
  ) => void;
  recordAnswer: (answer: ExamAnswer) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  endSession: () => void;
  resetSession: () => void;

  // Getters
  getCurrentQuestion: () => string | undefined;
  isSessionActive: () => boolean;
  getProgress: () => { current: number; total: number };
}

const initialState = {
  sessionType: null,
  sessionId: null,
  questionIds: [] as string[],
  currentQuestionIndex: 0,
  answers: [] as ExamAnswer[],
  sessionStartedAt: null,
  sessionEndedAt: null,
};

export const useSessionStore = create<SessionState>((set, get) => ({
  ...initialState,

  startSession: (
    type: 'drill' | 'exam',
    questionIds: string[],
    sessionId?: string
  ) => {
    set({
      sessionType: type,
      sessionId:
        sessionId ?? (type === 'exam' ? crypto.randomUUID() : null),
      questionIds,
      currentQuestionIndex: 0,
      answers: [],
      sessionStartedAt: new Date().toISOString(),
      sessionEndedAt: null,
    });
  },

  recordAnswer: (answer: ExamAnswer) => {
    set((state) => {
      const existingIdx = state.answers.findIndex(
        (a) => a.questionId === answer.questionId
      );

      if (existingIdx >= 0) {
        // Update existing answer
        const updatedAnswers = [...state.answers];
        updatedAnswers[existingIdx] = answer;
        return { answers: updatedAnswers };
      } else {
        // Add new answer
        return { answers: [...state.answers, answer] };
      }
    });
  },

  goToNextQuestion: () => {
    set((state) => {
      const nextIdx = state.currentQuestionIndex + 1;
      if (nextIdx < state.questionIds.length) {
        return { currentQuestionIndex: nextIdx };
      }
      return state;
    });
  },

  goToPreviousQuestion: () => {
    set((state) => {
      const prevIdx = state.currentQuestionIndex - 1;
      if (prevIdx >= 0) {
        return { currentQuestionIndex: prevIdx };
      }
      return state;
    });
  },

  endSession: () => {
    set((state) => ({
      ...state,
      sessionEndedAt: new Date().toISOString(),
    }));
  },

  resetSession: () => {
    set(initialState);
  },

  getCurrentQuestion: () => {
    const { questionIds, currentQuestionIndex } = get();
    return questionIds[currentQuestionIndex];
  },

  isSessionActive: () => {
    const { sessionType, sessionEndedAt } = get();
    return sessionType !== null && sessionEndedAt === null;
  },

  getProgress: () => {
    const { currentQuestionIndex, questionIds } = get();
    return {
      current: currentQuestionIndex + 1,
      total: questionIds.length,
    };
  },
}));
