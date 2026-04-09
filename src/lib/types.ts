// --- Exam Configuration (forkable) ---

export interface ExamConfig {
  id: string;
  name: string;
  fullName: string;
  locale: string;
  parts: ExamPart[];
  examRules: ExamRules;
  theme: ThemeOverrides;
}

export interface ExamPart {
  id: string;
  name: string;
  icon?: string;
  sections: ExamSection[];
  examQuestionCount: number;
}

export interface ExamSection {
  id: string;
  name: string;
  topicSlug: string;
  examQuestionCount: number;
  bankQuestionCount: number;
}

export interface ExamRules {
  totalQuestions: number;
  timeLimitMinutes: number;
  passPercentage: number;
  shuffleQuestions: boolean;
  shuffleChoices: boolean;
}

export interface ThemeOverrides {
  accentColor?: string;
  accentForeground?: string;
}

// --- Lesson (Quantic-style slide-based) ---

export interface Lesson {
  id: string;
  examPartId: string;
  sectionId?: string;
  order: number;
  title: string;
  objective: string;
  estimatedMinutes: number;
  slides: LessonSlide[];
  relatedQuestionIds: string[];
  tags: string[];
}

export type LessonSlide =
  | ExplainSlide
  | FillBlankSlide
  | SelectAnswerSlide
  | HighlightSlide
  | RevealSlide
  | OrderSlide
  | MatchSlide
  | SliderSlide
  | PoolPickSlide
  | ExamQuestionSlide;

export interface ExplainSlide {
  type: "explain";
  content: string;
  note?: string;
}

export interface FillBlankSlide {
  type: "fill-blank";
  textBefore: string;
  blank: string;
  distractors: string[];
  textAfter: string;
  explanation?: string;
}

export interface SelectAnswerSlide {
  type: "select-answer";
  question: string;
  choices: { id: string; text: string }[];
  correctId: string;
  explanation: string;
}

export interface HighlightSlide {
  type: "highlight";
  instruction: string;
  terms: { text: string; correct: boolean }[];
  explanation?: string;
}

export interface RevealSlide {
  type: "reveal";
  prompt: string;
  answer: string;
  explanation?: string;
}

export interface OrderSlide {
  type: "order";
  instruction: string;
  items: string[];
  explanation?: string;
}

export interface MatchSlide {
  type: "match";
  instruction: string;
  pairs: { left: string; right: string }[];
  explanation?: string;
}

export interface SliderSlide {
  type: "slider";
  question: string;
  min: number;
  max: number;
  step: number;
  unit: string;
  correctValue: number;
  tolerance: number;
  explanation?: string;
}

export interface PoolPickSlide {
  type: "pool-pick";
  instruction: string;
  pool: { text: string; correct: boolean }[];
  explanation?: string;
}

export interface ExamQuestionSlide {
  type: "exam-question";
  questionId: string;
}

// --- Question ---

export interface Question {
  id: string;
  examPartId: string;
  sectionId: string;
  wording: string;
  choices: Choice[];
  correctChoiceId: string;
  explanation: string;
  relatedLessonIds: string[];
  tags: string[];
}

export interface Choice {
  id: string;
  text: string;
}

// --- Glossary ---

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  relatedLessonIds: string[];
  tags: string[];
}

// --- Formula ---

export interface Formula {
  id: string;
  name: string;
  formula: string;
  variables: FormulaVariable[];
  unit: string;
  categoryId: string;
}

export interface FormulaVariable {
  symbol: string;
  name: string;
  unit: string;
}

// --- User Progress (persisted in IndexedDB) ---

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: string;
  slideIndex: number;
  correctCount: number;
  totalInteractive: number;
}

export interface QuestionStat {
  questionId: string;
  timesAnswered: number;
  timesCorrect: number;
  lastAnswered: string;
  markedDifficult: boolean;
  consecutiveCorrect: number;
  nextReviewDate?: string;
}

export interface ExamResult {
  id: string;
  startedAt: string;
  finishedAt: string;
  totalQuestions: number;
  correctAnswers: number;
  passed: boolean;
  partScores: Record<string, { correct: number; total: number }>;
  answers: ExamAnswer[];
}

export interface ExamAnswer {
  questionId: string;
  selectedChoiceId: string | null;
  correct: boolean;
  timeSpentSeconds: number;
}

export interface UserPreferences {
  theme: "light" | "dark" | "system";
  fontSize: "normal" | "large";
  lastSection: string;
  drillSettings: DrillSettings;
}

export interface DrillSettings {
  allPartsSelected?: boolean;
  partFilter: string[];
  sectionFilter: string[];
  onlyMistakes: boolean;
  onlyMarkedDifficult: boolean;
  questionCount: number;
}
