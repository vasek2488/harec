import type { Lesson } from "@/lib/types";

export const technicalMeasurementsLessons: Lesson[] = [
  {
    id: "meas-01",
    examPartId: "technical",
    sectionId: "measurements",
    order: 1,
    title: "M\u011b\u0159en\u00ed v radioamat\u00e9rsk\u00e9 praxi",
    objective:
      "Pou\u017e\u00edvat z\u00e1kladn\u00ed m\u011b\u0159ic\u00ed p\u0159\u00edstroje a po\u010d\u00edtat s decibely.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Radioamat\u00e9r pot\u0159ebuje m\u011b\u0159it nap\u011bt\u00ed, proud, odpor, v\u00fdkon a PSV. Z\u00e1kladn\u00ed p\u0159\u00edstroj je multimetr (m\u011b\u0159\u00ed U, I, R). Pro RF m\u011b\u0159en\u00ed se pou\u017e\u00edv\u00e1 wattmetr, PSV metr a osciloskop.",
        note: "Wattmetr m\u011b\u0159\u00ed v\u00fdkon, PSV metr pom\u011br stojat\u00fdch vln na antenním vedení.",
      },
      {
        type: "match",
        instruction: "P\u0159i\u0159a\u010fte p\u0159\u00edstroj k veli\u010din\u011b, kterou m\u011b\u0159\u00ed:",
        pairs: [
          { left: "Multimetr", right: "Nap\u011bt\u00ed, proud, odpor" },
          { left: "Wattmetr", right: "V\u00fdkon [W]" },
          { left: "PSV metr", right: "Pom\u011br stojat\u00fdch vln" },
          { left: "Osciloskop", right: "Pr\u016fb\u011bh sign\u00e1lu v \u010dase" },
        ],
      },
      {
        type: "explain",
        content:
          "Decibel (dB) je logaritmick\u00e1 jednotka pro porovn\u00e1n\u00ed dvou v\u00fdkon\u016f. Vzorec: dB = 10 \u00d7 log\u2081\u2080(P2/P1). Zdvojen\u00ed v\u00fdkonu = +3 dB. Desetin\u00e1soben\u00ed = +10 dB. Polovina v\u00fdkonu = \u22123 dB.",
        note: "Pro nap\u011bt\u00ed: dB = 20 \u00d7 log\u2081\u2080(U2/U1)",
      },
      {
        type: "slider",
        question:
          "Kolik dB odpov\u00edd\u00e1 zdvojen\u00ed v\u00fdkonu?",
        min: 0,
        max: 10,
        step: 1,
        unit: "dB",
        correctValue: 3,
        tolerance: 0.5,
        explanation:
          "10 \u00d7 log\u2081\u2080(2) = 10 \u00d7 0,301 = 3,01 dB \u2248 3 dB.",
      },
      {
        type: "select-answer",
        question: "Vys\u00edla\u010d m\u00e1 v\u00fdkon 10 W. Po zesilova\u010di s ziskem 10 dB je v\u00fdkon:",
        choices: [
          { id: "a", text: "100 W" },
          { id: "b", text: "20 W" },
          { id: "c", text: "1000 W" },
          { id: "d", text: "13 W" },
        ],
        correctId: "a",
        explanation:
          "+10 dB = desetin\u00e1soben\u00ed v\u00fdkonu. 10 W \u00d7 10 = 100 W. +20 dB by bylo 1000 W.",
      },
      {
        type: "reveal",
        prompt: "Co je to dummy load (um\u011bl\u00e1 z\u00e1t\u011b\u017e)?",
        answer:
          "Rezistor 50 \u03a9 schopn\u00fd absorbovat v\u00fdkon vys\u00edla\u010de. Pou\u017e\u00edv\u00e1 se k testov\u00e1n\u00ed bez vyzařování.",
        explanation:
          "Dummy load nahrazuje ant\u00e9nu p\u0159i lad\u011bn\u00ed, aby se nezp\u016fsobovalo ru\u0161en\u00ed.",
      },
      {
        type: "fill-blank",
        textBefore: "Jednotka dBm vyjad\u0159uje v\u00fdkon vztažený k",
        blank: "1 mW",
        distractors: ["1 W", "1 \u03bcW", "50 \u03a9"],
        textAfter: ".",
        explanation:
          "0 dBm = 1 mW. Nap\u0159\u00edklad +30 dBm = 1 W, +40 dBm = 10 W.",
      },
      {
        type: "exam-question",
        questionId: "T-MEA-001",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte v\u0161echna spr\u00e1vn\u00e1 tvrzen\u00ed o decibelech:",
        pool: [
          { text: "+3 dB znamen\u00e1 zdvojen\u00ed v\u00fdkonu", correct: true },
          { text: "+10 dB znamen\u00e1 desetin\u00e1soben\u00ed v\u00fdkonu", correct: true },
          { text: "0 dB znamen\u00e1 nulov\u00fd v\u00fdkon", correct: false },
          { text: "\u22123 dB znamen\u00e1 polovinu v\u00fdkonu", correct: false },
          { text: "Decibel je logaritmick\u00e1 jednotka", correct: true },
        ],
        explanation:
          "0 dB znamen\u00e1 stejn\u00fd v\u00fdkon (pom\u011br 1:1), ne nulov\u00fd. \u22123 dB je skute\u010dn\u011b polovina v\u00fdkonu - to je spr\u00e1vn\u00e9 tvrzen\u00ed.",
      },
    ],
    relatedQuestionIds: [
      "T-MEA-001",
      "T-MEA-002",
      "T-MEA-003",
      "T-MEA-004",
      "T-MEA-005",
      "T-MEA-006",
      "T-MEA-007",
      "T-MEA-008",
    ],
    tags: ["mereni", "decibel", "wattmetr", "psv-metr", "apply"],
  },
];
