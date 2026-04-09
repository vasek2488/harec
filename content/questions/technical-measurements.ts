import type { Question } from "@/lib/types";

export const technicalMeasurementsQuestions: Question[] = [
  {
    id: "T-MEA-001",
    examPartId: "technical",
    sectionId: "measurements",
    wording: "Kolik dB odpov\u00edd\u00e1 desetin\u00e1sobn\u00e9mu zv\u00fd\u0161en\u00ed v\u00fdkonu?",
    choices: [
      { id: "a", text: "10 dB" },
      { id: "b", text: "3 dB" },
      { id: "c", text: "20 dB" },
      { id: "d", text: "6 dB" },
    ],
    correctChoiceId: "a",
    explanation:
      "10 \u00d7 log\u2081\u2080(10) = 10 dB. 3 dB je zdvojen\u00ed v\u00fdkonu, 20 dB je stoN\u00e1soben\u00ed. Viz vzorec dB.",
    relatedLessonIds: ["meas-01"],
    tags: ["decibel", "apply"],
  },
  {
    id: "T-MEA-002",
    examPartId: "technical",
    sectionId: "measurements",
    wording: "Jak\u00fd p\u0159\u00edstroj se pou\u017e\u00edv\u00e1 k m\u011b\u0159en\u00ed PSV na antenním vedení?",
    choices: [
      { id: "a", text: "PSV metr (SWR metr)" },
      { id: "b", text: "Multimetr" },
      { id: "c", text: "Osciloskop" },
      { id: "d", text: "Spektr\u00e1ln\u00ed analyz\u00e1tor" },
    ],
    correctChoiceId: "a",
    explanation:
      "PSV metr (SWR metr) m\u011b\u0159\u00ed pom\u011br stojat\u00fdch vln. Multimetr m\u011b\u0159\u00ed DC nap\u011bt\u00ed/proud/odpor, ne RF parametry.",
    relatedLessonIds: ["meas-01"],
    tags: ["psv-metr", "mereni", "recall"],
  },
  {
    id: "T-MEA-003",
    examPartId: "technical",
    sectionId: "measurements",
    wording: "Co m\u011b\u0159\u00ed wattmetr?",
    choices: [
      { id: "a", text: "V\u00fdkon" },
      { id: "b", text: "Nap\u011bt\u00ed" },
      { id: "c", text: "Frekvenci" },
      { id: "d", text: "Impedanci" },
    ],
    correctChoiceId: "a",
    explanation:
      "Wattmetr m\u011b\u0159\u00ed v\u00fdkon ve wattech. Nap\u011bt\u00ed m\u011b\u0159\u00ed voltmetr, frekvenci \u010d\u00edta\u010d, impedanci m\u016fstkov\u00fd m\u011b\u0159i\u010d.",
    relatedLessonIds: ["meas-01"],
    tags: ["wattmetr", "mereni", "recall"],
  },
  {
    id: "T-MEA-004",
    examPartId: "technical",
    sectionId: "measurements",
    wording: "Vys\u00edla\u010d m\u00e1 v\u00fdkon 5 W. Po zesilova\u010di s ziskem 6 dB je v\u00fdkon p\u0159ibli\u017en\u011b:",
    choices: [
      { id: "a", text: "20 W" },
      { id: "b", text: "11 W" },
      { id: "c", text: "50 W" },
      { id: "d", text: "10 W" },
    ],
    correctChoiceId: "a",
    explanation:
      "+6 dB = \u010dty\u0159n\u00e1soben\u00ed v\u00fdkonu (2\u00d73 dB). 5 \u00d7 4 = 20 W. +3 dB zdvojn\u00e1sob\u00ed, +6 dB z\u010dty\u0159n\u00e1sob\u00ed.",
    relatedLessonIds: ["meas-01"],
    tags: ["decibel", "apply"],
  },
  {
    id: "T-MEA-005",
    examPartId: "technical",
    sectionId: "measurements",
    wording: "Co je to dummy load (um\u011bl\u00e1 z\u00e1t\u011b\u017e)?",
    choices: [
      { id: "a", text: "Rezistor 50 \u03a9 pro testov\u00e1n\u00ed vys\u00edla\u010de bez vyza\u0159ov\u00e1n\u00ed" },
      { id: "b", text: "Ant\u00e9na pro p\u0159\u00edjem slab\u00fdch sign\u00e1l\u016f" },
      { id: "c", text: "Filtr pro potla\u010den\u00ed harmonick\u00fdch" },
      { id: "d", text: "P\u0159\u00eddavn\u00fd zesilova\u010d" },
    ],
    correctChoiceId: "a",
    explanation:
      "Dummy load je nera\u010d\u00edc\u00ed z\u00e1t\u011b\u017e 50 \u03a9. Nahrazuje ant\u00e9nu p\u0159i testov\u00e1n\u00ed, aby se nezp\u016fsobovalo ru\u0161en\u00ed.",
    relatedLessonIds: ["meas-01"],
    tags: ["mereni", "recall"],
  },
  {
    id: "T-MEA-006",
    examPartId: "technical",
    sectionId: "measurements",
    wording: "Hodnota 0 dBm odpov\u00edd\u00e1 v\u00fdkonu:",
    choices: [
      { id: "a", text: "1 mW" },
      { id: "b", text: "1 W" },
      { id: "c", text: "0 W" },
      { id: "d", text: "1 \u03bcW" },
    ],
    correctChoiceId: "a",
    explanation:
      "dBm je v\u00fdkon vztažený k 1 mW. 0 dBm = 1 mW. 0 dB neznamen\u00e1 nulov\u00fd v\u00fdkon, ale stejn\u00fd pom\u011br.",
    relatedLessonIds: ["meas-01"],
    tags: ["decibel", "recall"],
  },
  {
    id: "T-MEA-007",
    examPartId: "technical",
    sectionId: "measurements",
    wording: "Jak\u00fd p\u0159\u00edstroj zobrazuje pr\u016fb\u011bh sign\u00e1lu v \u010dase?",
    choices: [
      { id: "a", text: "Osciloskop" },
      { id: "b", text: "Spektr\u00e1ln\u00ed analyz\u00e1tor" },
      { id: "c", text: "Wattmetr" },
      { id: "d", text: "PSV metr" },
    ],
    correctChoiceId: "a",
    explanation:
      "Osciloskop zobrazuje sign\u00e1l v \u010dasov\u00e9 oblasti. Spektr\u00e1ln\u00ed analyz\u00e1tor zobrazuje ve frekven\u010dn\u00ed oblasti.",
    relatedLessonIds: ["meas-01"],
    tags: ["mereni", "recall"],
  },
  {
    id: "T-MEA-008",
    examPartId: "technical",
    sectionId: "measurements",
    wording: "Sn\u00ed\u017een\u00ed v\u00fdkonu o 3 dB znamen\u00e1:",
    choices: [
      { id: "a", text: "Pokles na polovinu" },
      { id: "b", text: "Pokles na \u010dtvrtinu" },
      { id: "c", text: "Pokles na desetinu" },
      { id: "d", text: "Pokles o 3 W" },
    ],
    correctChoiceId: "a",
    explanation:
      "\u22123 dB = polovina v\u00fdkonu. \u22126 dB = \u010dtvrtina. \u221210 dB = desetina. dB je pom\u011br, ne absolutn\u00ed hodnota.",
    relatedLessonIds: ["meas-01"],
    tags: ["decibel", "apply"],
  },
];
