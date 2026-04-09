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
    relatedQuestions: "Související otázky",
    markDifficult: "Označit jako obtížné",
    progress: "Postup",
    score: "Skóre",
    time: "Čas",
    passed: "Splněno",
    failed: "Nesplněno",
    reset: "Resetovat",
    confirm: "Potvrdit",
    cancel: "Zrušit",
    min: "min",
    noAnswer: "Bez odpovědi",
  },
  // Dashboard
  dashboard: {
    title: "Přehled studia",
    overallProgress: "Celkový postup",
    lessons: "Lekce",
    questions: "Otázky",
    exams: "Zkoušky",
    overallAccuracy: "Celková úspěšnost",
    needsPractice: "Potřebuje procvičit",
    needsPracticeDetail: (n: number) =>
      `Zaměřte se na ${n} ${n === 1 ? "otázku" : n < 5 ? "otázky" : "otázek"} s úspěšností pod 50 %`,
    continueLearning: "Pokračovat ve výuce",
    practiceQuestions: "Procvičovat otázky",
    sessionStats: "Statistiky",
    questionsAnswered: "Zodpovězených otázek",
    correctAnswers: "Správných odpovědí",
    lessonsCompleted: "Dokončené lekce",
    questionsAnsweredLabel: "Zodpovězené otázky",
    examsTaken: "Absolvované zkoušky",
    weakAreas: "Slabá místa",
    continueStudy: "Pokračovat ve studiu",
  },
  // Learn
  learn: {
    title: "Výuka",
    lessonsCompleted: "Dokončené lekce",
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
    onlyMistakesDesc: "Otázky, ve kterých jste chybovali",
    onlyDifficult: "Pouze obtížné",
    onlyDifficultDesc: "Otázky označené jako obtížné",
    questionCount: "Počet otázek",
    questionsUnit: (n: number) =>
      `${n} ${n === 1 ? "otázka" : n < 5 ? "otázky" : "otázek"}`,
    parts: "Části",
    startDrill: (n: number) =>
      n > 0
        ? `Začít (${n} ${n === 1 ? "otázka" : n < 5 ? "otázky" : "otázek"})`
        : "Začít - žádné otázky neodpovídají",
    results: "Výsledky",
    correctCount: (correct: number, total: number) =>
      `${correct} / ${total} správně`,
    byPart: "Podle částí",
    mistakes: (n: number) => `Chyby (${n})`,
    yourAnswer: "Vaše odpověď",
    correctAnswer: "Správná odpověď",
    newDrill: "Nové procvičování",
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
    appName: "Příprava na zkoušku HAREC",
    appDescription: "Offline PWA - Cloudflare Pages",
  },
  // Welcome page
  welcome: {
    heading: "Připravte se na zkoušku HAREC",
    subheading: "Harmonised Amateur Radio Examination Certificate - třída A",
    description:
      "Bezplatná aplikace pro přípravu na českou radioamatérskou zkoušku. Studujte offline, kdykoli a kdekoli.",
    benefitLessons: "53 strukturovaných lekcí",
    benefitQuestions: "584 cvičných otázek",
    benefitExams: "Zkušební testy na čas",
    benefitOffline: "Funguje offline bez připojení",
    howToTitle: "Jak studovat",
    howToStep1: "Projděte si lekce podle témat",
    howToStep2: "Procvičujte otázky z jednotlivých částí",
    howToStep3: "Vyzkoušejte si zkušební test na čas",
    howToStep4: "Zopakujte si chyby a slabá místa",
    cta: "Začít se učit",
  },
} as const;

export type Translations = typeof cs;
