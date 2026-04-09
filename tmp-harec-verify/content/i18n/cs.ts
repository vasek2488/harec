/**
 * Czech UI strings. Override these in a fork for a different language.
 */
export const cs = {
  // Navigation
  nav: {
    dashboard: "Přehled",
    learn: "Výuka",
    drill: "Procvičování",
    exam: "Zkouška",
    more: "Více",
  },
  // More menu
  more: {
    mistakes: "Chyby",
    glossary: "Slovník",
    formulas: "Vzorce",
    settings: "Nastavení",
  },
  // Common
  common: {
    start: "Začít",
    next: "Další",
    previous: "Předchozí",
    finish: "Dokončit",
    back: "Zpět",
    correct: "Správně",
    incorrect: "Špatně",
    explanation: "Vysvětlení",
    relatedLesson: "Související lekce",
    relatedQuestions: "Souvisejíci otázky",
    markDifficult: "Označit jako obtížné",
    progress: "Postup",
    score: "Skóre",
    time: "Čas",
    passed: "Splněno",
    failed: "Nesplněno",
    reset: "Resetovat",
    confirm: "Potvrdit",
    cancel: "Zrušit",
  },
  // Dashboard
  dashboard: {
    title: "Přehled studia",
    lessonsCompleted: "Dokončené lekce",
    questionsAnswered: "Zodpovězené otázky",
    examsTaken: "Absolvované zkoušky",
    weakAreas: "Slabá místa",
    continueStudy: "Pokračovat ve studiu",
  },
  // Learn
  learn: {
    title: "Výuka",
    objective: "Cíl lekce",
    keyPoints: "Klíčové body",
    examples: "Příklady",
    commonConfusion: "Častý omyl",
    comprehension: "Ověření porozumění",
    showAnswer: "Ukázat odpověď",
  },
  // Drill
  drill: {
    title: "Procvičování",
    setup: "Nastavení procvičování",
    categories: "Kategorie",
    difficulty: "Obtížnost",
    onlyMistakes: "Pouze chyby",
    onlyDifficult: "Pouze obtížné",
    questionCount: "Počet otázek",
  },
  // Exam
  exam: {
    title: "Zkušební test",
    rules: "Pravidla zkoušky",
    questions: "otázek",
    minutes: "minut",
    passRate: "Pro splnění potřebujete",
    review: "Přehled odpovědí",
    categoryBreakdown: "Výsledky dle kategorií",
  },
  // Settings
  settings: {
    title: "Nastavení",
    theme: "Vzhled",
    fontSize: "Velikost písma",
    resetProgress: "Resetovat postup",
    resetConfirm: "Opravdu chcete smazat veškerý postup?",
  },
} as const;

export type Translations = typeof cs;
