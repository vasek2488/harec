import {
  ExamConfig,
  ExamAnswer,
  Question,
  ExamRules,
} from '@/lib/types';

export interface ExamScore {
  correct: number;
  total: number;
  percentage: number;
  passed: boolean;
}

export interface PartScore {
  partId: string;
  partName: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface ExamSession {
  questionIds: string[];
  totalTimeSeconds: number;
}

/**
 * Validate if a selected choice is correct for a question
 */
export function validateAnswer(
  _questionId: string,
  selectedChoiceId: string | null,
  question: Question
): boolean {
  return selectedChoiceId === question.correctChoiceId;
}

/**
 * Calculate exam score from answers
 */
export function calculateScore(
  answers: ExamAnswer[],
  examRules: ExamRules
): ExamScore {
  const correct = answers.filter((a) => a.correct).length;
  const total = examRules.totalQuestions;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const passed = percentage >= examRules.passPercentage;

  return {
    correct,
    total,
    percentage,
    passed,
  };
}

/**
 * Generate exam session with shuffled questions
 */
export function generateExamSession(
  examConfig: ExamConfig,
  allQuestions: Question[]
): ExamSession {
  const totalTime = examConfig.examRules.timeLimitMinutes * 60;

  // Collect all question IDs from exam config
  let questionIds: string[] = [];

  examConfig.parts.forEach((part) => {
    part.sections.forEach((section) => {
      // Get questions for this section
      const sectionQuestions = allQuestions.filter(
        (q) => q.sectionId === section.id
      );
      const shuffledSectionQuestions = shuffleArray(sectionQuestions);

      // Take only the required count for exam
      const examQuestions = shuffledSectionQuestions.slice(
        0,
        section.examQuestionCount
      );
      questionIds.push(...examQuestions.map((q) => q.id));
    });
  });

  // Shuffle if required
  if (examConfig.examRules.shuffleQuestions) {
    questionIds = shuffleArray(questionIds);
  }

  return {
    questionIds,
    totalTimeSeconds: totalTime,
  };
}

/**
 * Calculate score breakdown by exam part
 */
export function calculatePartScores(
  answers: ExamAnswer[],
  questions: Question[],
  examConfig: ExamConfig
): PartScore[] {
  const partScores: PartScore[] = [];

  // Create question map for quick lookup
  const questionMap = new Map(questions.map((q) => [q.id, q]));

  // Process each part
  examConfig.parts.forEach((part) => {
    let partCorrect = 0;
    let partTotal = 0;

    // Process each section in the part
    part.sections.forEach((section) => {
      // Find answers for questions in this section
      answers.forEach((answer) => {
        const question = questionMap.get(answer.questionId);
        if (question && question.sectionId === section.id) {
          partTotal++;
          if (answer.correct) {
            partCorrect++;
          }
        }
      });
    });

    if (partTotal > 0) {
      const percentage = Math.round((partCorrect / partTotal) * 100);
      partScores.push({
        partId: part.id,
        partName: part.name,
        correct: partCorrect,
        total: partTotal,
        percentage,
      });
    }
  });

  return partScores;
}

/**
 * Fisher-Yates shuffle for arrays
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    const iVal = shuffled.at(i);
    const jVal = shuffled.at(j);

    if (iVal !== undefined && jVal !== undefined) {
      shuffled[i] = jVal;
      shuffled[j] = iVal;
    }
  }

  return shuffled;
}

/**
 * Calculate next review date based on consecutive correct answers (spaced repetition)
 */
export function calculateNextReviewDate(consecutiveCorrect: number): string {
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
