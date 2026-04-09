import type { Lesson } from "@/lib/types";

export const technicalInterferenceLessons: Lesson[] = [
  {
    id: "intf-01",
    examPartId: "technical",
    sectionId: "interference",
    order: 1,
    title: "Ru\u0161en\u00ed a ochrana proti ru\u0161en\u00ed",
    objective:
      "Identifikovat zdroje ru\u0161en\u00ed a zn\u00e1t z\u00e1kladn\u00ed metody jejich potla\u010den\u00ed.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Radioamat\u00e9rsk\u00fd vys\u00edla\u010d m\u016f\u017ee ru\u0161it jin\u00e1 za\u0159\u00edzen\u00ed (TVI - ru\u0161en\u00ed televize, BCI - ru\u0161en\u00ed rozhlasu). Naopak okoln\u00ed za\u0159\u00edzen\u00ed mohou ru\u0161it p\u0159\u00edjem. Hlavn\u00ed p\u0159\u00ed\u010diny: harmonick\u00e9 vyza\u0159ov\u00e1n\u00ed, intermodulace a nedostate\u010dn\u00e9 st\u00edn\u011bn\u00ed.",
      },
      {
        type: "select-answer",
        question: "Co je to TVI?",
        choices: [
          { id: "a", text: "Ru\u0161en\u00ed televizn\u00edho p\u0159\u00edjmu vys\u00edla\u010dem" },
          { id: "b", text: "Typ televizn\u00ed ant\u00e9ny" },
          { id: "c", text: "Testovac\u00ed sign\u00e1l" },
          { id: "d", text: "Druh modulace" },
        ],
        correctId: "a",
        explanation:
          "TVI = Television Interference. Vzniká, když harmonické vys\u00edla\u010de zasahuj\u00ed do TV p\u00e1sem.",
      },
      {
        type: "match",
        instruction: "P\u0159i\u0159a\u010fte typ ru\u0161en\u00ed k jeho p\u0159\u00ed\u010din\u011b:",
        pairs: [
          { left: "Harmonick\u00e9 vyza\u0159ov\u00e1n\u00ed", right: "N\u00e1sobky z\u00e1kladn\u00ed frekvence vys\u00edla\u010de" },
          { left: "Intermodulace", right: "Sm\u00ed\u0161en\u00ed dvou siln\u00fdch sign\u00e1l\u016f v nelinearit\u011b" },
          { left: "P\u0159\u00edm\u00fd pr\u016fnik", right: "Nedostate\u010dn\u00e9 st\u00edn\u011bn\u00ed p\u0159ij\u00edmac\u00edho za\u0159\u00edzen\u00ed" },
        ],
        explanation:
          "Harmonick\u00e9 jsou n\u00e1sobky f0. Intermodulace vzniká sm\u00ed\u0161en\u00edm sign\u00e1l\u016f. P\u0159\u00edm\u00fd pr\u016fnik je probl\u00e9m ru\u0161en\u00e9ho za\u0159\u00edzen\u00ed.",
      },
      {
        type: "reveal",
        prompt: "Jak se potla\u010duj\u00ed harmonick\u00e9 na v\u00fdstupu vys\u00edla\u010de?",
        answer:
          "Doln\u00ed propust\u00ed (low-pass filtr) za\u0159azenou mezi vys\u00edla\u010d a ant\u00e9nu.",
        explanation:
          "LP filtr propust\u00ed z\u00e1kladn\u00ed frekvenci a potla\u010d\u00ed v\u0161echny vy\u0161\u0161\u00ed harmonick\u00e9.",
      },
      {
        type: "order",
        instruction: "Se\u0159a\u010fte kroky \u0159e\u0161en\u00ed TVI od nejjednodum\u0161\u0161\u00edho:",
        items: [
          "Ov\u011b\u0159it, \u017ee probl\u00e9m nen\u00ed na stran\u011b TV p\u0159ij\u00edma\u010de",
          "Pou\u017e\u00edt LP filtr na v\u00fdstupu vys\u00edla\u010de",
          "Zkontrolovat kvalitu st\u00edn\u011bn\u00ed koaxi\u00e1ln\u00edho kabelu",
          "P\u0159idat feritov\u00e9 filtry na kabely TV",
        ],
        explanation:
          "Nejprve ov\u011b\u0159it p\u0159\u00ed\u010dinu, pak \u0159e\u0161it na stran\u011b vys\u00edla\u010de (LP filtr, kabel), nakonec na stran\u011b ru\u0161en\u00e9ho za\u0159\u00edzen\u00ed.",
      },
      {
        type: "highlight",
        instruction: "Vyberte metody, kter\u00e9 sni\u017euj\u00ed ru\u0161en\u00ed od vys\u00edla\u010de:",
        terms: [
          { text: "Low-pass filtr na v\u00fdstupu", correct: true },
          { text: "Zv\u00fd\u0161en\u00ed v\u00fdkonu", correct: false },
          { text: "Kvalitn\u00ed st\u00edn\u011bn\u00fd kabel", correct: true },
          { text: "Spr\u00e1vn\u00e9 uzemn\u011bn\u00ed", correct: true },
          { text: "Pou\u017eit\u00ed \u0161ir\u0161\u00edho p\u00e1sma", correct: false },
        ],
        explanation:
          "Zv\u00fd\u0161en\u00ed v\u00fdkonu ru\u0161en\u00ed zhor\u0161\u00ed. \u0160ir\u0161\u00ed p\u00e1smo s ru\u0161en\u00edm nesouvis\u00ed.",
      },
      {
        type: "exam-question",
        questionId: "T-INT-001",
      },
      {
        type: "fill-blank",
        textBefore: "Feritov\u00fd filtr na kabelu potla\u010duje ru\u0161en\u00ed t\u00edm, \u017ee",
        blank: "blokuje vysoko\u017efrekven\u010dn\u00ed proudy na pl\u00e1\u0161ti kabelu",
        distractors: [
          "zvy\u0161uje impedanci ant\u00e9ny",
          "zesiluje u\u017eite\u010dn\u00fd sign\u00e1l",
          "m\u011bn\u00ed frekvenci vys\u00edla\u010de",
        ],
        textAfter: ".",
        explanation:
          "Feritov\u00e9 j\u00e1dro na kabelu p\u016fsob\u00ed jako tlumivka pro VF proud\u016fm te\u010douc\u00edm po vn\u011bj\u0161\u00edm pl\u00e1\u0161ti.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte v\u0161echny zdroje ru\u0161en\u00ed radioamat\u00e9rsk\u00e9ho p\u0159\u00edjmu:",
        pool: [
          { text: "Sp\u00ednan\u00e9 zdroje (nap\u00e1jec\u00ed adapt\u00e9ry)", correct: true },
          { text: "LED \u017e\u00e1rovky s driverem", correct: true },
          { text: "Kvalitn\u00ed koaxi\u00e1ln\u00ed kabel", correct: false },
          { text: "Po\u010d\u00edta\u010de a routery", correct: true },
          { text: "Dummy load", correct: false },
        ],
        explanation:
          "Sp\u00ednan\u00e9 zdroje, LED drivery a digit\u00e1ln\u00ed za\u0159\u00edzen\u00ed generuj\u00ed \u0161irokoP\u00e1smov\u00e9 ru\u0161en\u00ed. Kvalitn\u00ed kabel a dummy load ru\u0161en\u00ed nezp\u016fsobuj\u00ed.",
      },
    ],
    relatedQuestionIds: [
      "T-INT-001",
      "T-INT-002",
      "T-INT-003",
      "T-INT-004",
      "T-INT-005",
      "T-INT-006",
      "T-INT-007",
      "T-INT-008",
      "T-INT-009",
    ],
    tags: ["ruseni", "tvi", "bci", "filtrace", "stineni", "analyze"],
  },
];
