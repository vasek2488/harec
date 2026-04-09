import type { Question } from "@/lib/types";

export const technicalCircuitsQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Series and parallel circuits (circuits-01)
  // -----------------------------------------------------------------------
  {
    id: "T-CIR-001",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Dva rezistory 100 \u03a9 zapojen\u00e9 s\u00e9riov\u011b maj\u00ed celkov\u00fd odpor:",
    choices: [
      { id: "a", text: "200 \u03a9" },
      { id: "b", text: "50 \u03a9" },
      { id: "c", text: "100 \u03a9" },
      { id: "d", text: "10 000 \u03a9" },
    ],
    correctChoiceId: "a",
    explanation:
      "V s\u00e9riov\u00e9m zapojen\u00ed se odpory s\u010d\u00edtaj\u00ed: R = R1 + R2 = 100 + 100 = 200 \u03a9. Odpov\u011b\u010f 50 \u03a9 by platila pro paraleln\u00ed zapojen\u00ed.",
    relatedLessonIds: ["circuits-01"],
    tags: ["seriovy-obvod", "rezistor", "apply"],
  },
  {
    id: "T-CIR-002",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Dva rezistory 100 \u03a9 zapojen\u00e9 paraleln\u011b maj\u00ed celkov\u00fd odpor:",
    choices: [
      { id: "a", text: "50 \u03a9" },
      { id: "b", text: "200 \u03a9" },
      { id: "c", text: "100 \u03a9" },
      { id: "d", text: "25 \u03a9" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pro dva stejn\u00e9 odpory paraleln\u011b: R = R1/2 = 100/2 = 50 \u03a9. Obecn\u011b: 1/R = 1/R1 + 1/R2.",
    relatedLessonIds: ["circuits-01"],
    tags: ["paralelni-obvod", "rezistor", "apply"],
  },
  {
    id: "T-CIR-003",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "V nap\u011b\u0165ov\u00e9m d\u011bli\u010di ze dvou stejn\u00fdch rezistor\u016f p\u0159ipojen\u00e9m na 12 V je v\u00fdstupn\u00ed nap\u011bt\u00ed:",
    choices: [
      { id: "a", text: "6 V" },
      { id: "b", text: "12 V" },
      { id: "c", text: "24 V" },
      { id: "d", text: "3 V" },
    ],
    correctChoiceId: "a",
    explanation:
      "Nap\u011b\u0165ov\u00fd d\u011bli\u010d se stejn\u00fdmi rezistory d\u011bl\u00ed nap\u011bt\u00ed na polovinu: Uout = Uin \u00d7 R2/(R1+R2) = 12 \u00d7 1/2 = 6 V.",
    relatedLessonIds: ["circuits-01"],
    tags: ["napetovy-delic", "apply"],
  },
  {
    id: "T-CIR-004",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Dva kondenz\u00e1tory 100 nF zapojen\u00e9 paraleln\u011b maj\u00ed celkovou kapacitu:",
    choices: [
      { id: "a", text: "200 nF" },
      { id: "b", text: "50 nF" },
      { id: "c", text: "100 nF" },
      { id: "d", text: "10 000 nF" },
    ],
    correctChoiceId: "a",
    explanation:
      "Kondenz\u00e1tory paraleln\u011b se s\u010d\u00edtaj\u00ed: C = C1 + C2 = 200 nF. Je to opak rezistor\u016f - to je \u010dast\u00e1 z\u00e1m\u011bna na zkou\u0161ce.",
    relatedLessonIds: ["circuits-01"],
    tags: ["kondenzator", "paralelni-obvod", "apply"],
  },
  {
    id: "T-CIR-005",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "V s\u00e9riov\u00e9m obvodu s v\u00edce rezistory plat\u00ed, \u017ee:",
    choices: [
      {
        id: "a",
        text: "Proud je v\u0161ude stejn\u00fd, nap\u011bt\u00ed se d\u011bl\u00ed",
      },
      {
        id: "b",
        text: "Nap\u011bt\u00ed je v\u0161ude stejn\u00e9, proud se d\u011bl\u00ed",
      },
      {
        id: "c",
        text: "Proud i nap\u011bt\u00ed jsou v\u0161ude stejn\u00e9",
      },
      {
        id: "d",
        text: "Proud i nap\u011bt\u00ed se d\u011bl\u00ed",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "V s\u00e9riov\u00e9m obvodu te\u010de v\u0161ude stejn\u00fd proud (nen\u00ed kam odbo\u010dit). Nap\u011bt\u00ed se d\u011bl\u00ed podle pom\u011bru odpor\u016f. V paraleln\u00edm je to naopak.",
    relatedLessonIds: ["circuits-01"],
    tags: ["seriovy-obvod", "analyze"],
  },

  // -----------------------------------------------------------------------
  // Resonant circuits and Q factor (circuits-02)
  // -----------------------------------------------------------------------
  {
    id: "T-CIR-006",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Rezonan\u010dn\u00ed frekvence LC obvodu se vypo\u010d\u00edt\u00e1 podle vzorce:",
    choices: [
      { id: "a", text: "f = 1 / (2\u03c0\u221a(LC))" },
      { id: "b", text: "f = 2\u03c0\u221a(LC)" },
      { id: "c", text: "f = L \u00d7 C" },
      { id: "d", text: "f = 1 / (LC)" },
    ],
    correctChoiceId: "a",
    explanation:
      "Thomsonův vzorec: f = 1/(2\u03c0\u221a(LC)). Tento vzorec je z\u00e1kladem pro n\u00e1vrh rezonan\u010dn\u00edch obvod\u016f a filtr\u016f.",
    relatedLessonIds: ["circuits-02"],
    tags: ["rezonancni-obvod", "recall"],
  },
  {
    id: "T-CIR-007",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Co se stane s rezonan\u010dn\u00ed frekvenc\u00ed LC obvodu, pokud zdvojn\u00e1sob\u00edme kapacitu?",
    choices: [
      {
        id: "a",
        text: "Klesne na 1/\u221a2 p\u016fvodn\u00ed hodnoty (cca 70,7 %)",
      },
      { id: "b", text: "Klesne na polovinu" },
      { id: "c", text: "Zdvojn\u00e1sob\u00ed se" },
      {
        id: "d",
        text: "Z\u016fstane stejn\u00e1",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "f = 1/(2\u03c0\u221a(LC)). P\u0159i 2C: f' = 1/(2\u03c0\u221a(L\u00d72C)) = f/\u221a2 \u2248 0,707f. Frekvence neklesne na polovinu, ale na 1/\u221a2.",
    relatedLessonIds: ["circuits-02"],
    tags: ["rezonancni-obvod", "analyze"],
  },
  {
    id: "T-CIR-008",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Co vyjad\u0159uje \u010dinitel jakosti Q rezonan\u010dn\u00edho obvodu?",
    choices: [
      {
        id: "a",
        text: "Selektivitu obvodu - schopnost vybrat \u00fazk\u00e9 p\u00e1smo frekvenc\u00ed",
      },
      {
        id: "b",
        text: "Celkov\u00fd odpor obvodu",
      },
      {
        id: "c",
        text: "Maxim\u00e1ln\u00ed nap\u011bt\u00ed v obvodu",
      },
      {
        id: "d",
        text: "Po\u010det z\u00e1vit\u016f c\u00edvky",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "\u010cinitel jakosti Q ur\u010duje \u0161\u00ed\u0159ku p\u00e1sma a selektivitu. Vy\u0161\u0161\u00ed Q = u\u017e\u0161\u00ed p\u00e1smo = lep\u0161\u00ed selektivita. Q = f0 / \u0394f.",
    relatedLessonIds: ["circuits-02"],
    tags: ["cinitel-jakosti", "recall"],
  },
  {
    id: "T-CIR-009",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "P\u0159i rezonanci s\u00e9riov\u00e9ho LC obvodu je impedance:",
    choices: [
      { id: "a", text: "Minim\u00e1ln\u00ed (rovna odporu R)" },
      { id: "b", text: "Maxim\u00e1ln\u00ed" },
      { id: "c", text: "Nulov\u00e1" },
      {
        id: "d",
        text: "Rovna reaktanci c\u00edvky",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "P\u0159i s\u00e9riov\u00e9 rezonanci se Xl a Xc vz\u00e1jemn\u011b vykompenzuj\u00ed, z\u016fstane jen \u010dinn\u00fd odpor R. U paraleln\u00ed rezonance je impedance naopak maxim\u00e1ln\u00ed.",
    relatedLessonIds: ["circuits-02"],
    tags: ["rezonancni-obvod", "analyze"],
  },
  {
    id: "T-CIR-010",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Vy\u0161\u0161\u00ed \u010dinitel jakosti Q rezonan\u010dn\u00edho obvodu znamen\u00e1:",
    choices: [
      {
        id: "a",
        text: "U\u017e\u0161\u00ed propustn\u00e9 p\u00e1smo a lep\u0161\u00ed selektivitu",
      },
      {
        id: "b",
        text: "\u0160ir\u0161\u00ed propustn\u00e9 p\u00e1smo",
      },
      {
        id: "c",
        text: "Vy\u0161\u0161\u00ed rezonan\u010dn\u00ed frekvenci",
      },
      {
        id: "d",
        text: "Ni\u017e\u0161\u00ed rezonan\u010dn\u00ed frekvenci",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Q = f0/\u0394f. Vy\u0161\u0161\u00ed Q = u\u017e\u0161\u00ed \u0394f = obvod propust\u00ed u\u017e\u0161\u00ed p\u00e1smo kolem rezonan\u010dn\u00ed frekvence. Na samotnou rezonan\u010dn\u00ed frekvenci nem\u00e1 Q vliv.",
    relatedLessonIds: ["circuits-02"],
    tags: ["cinitel-jakosti", "analyze"],
  },

  // -----------------------------------------------------------------------
  // Filters and impedance matching (circuits-03)
  // -----------------------------------------------------------------------
  {
    id: "T-CIR-011",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Doln\u00ed propust (LP filtr) propou\u0161t\u00ed:",
    choices: [
      {
        id: "a",
        text: "Frekvence ni\u017e\u0161\u00ed ne\u017e mezn\u00ed frekvence",
      },
      {
        id: "b",
        text: "Frekvence vy\u0161\u0161\u00ed ne\u017e mezn\u00ed frekvence",
      },
      {
        id: "c",
        text: "Pouze jednu konkr\u00e9tn\u00ed frekvenci",
      },
      {
        id: "d",
        text: "V\u0161echny frekvence krom\u011b jedn\u00e9",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Doln\u00ed propust (Low Pass) propou\u0161t\u00ed n\u00edzk\u00e9 frekvence a potla\u010duje vysok\u00e9. Horn\u00ed propust d\u011bl\u00e1 opak. P\u00e1smov\u00e1 propust propou\u0161t\u00ed ur\u010dit\u00e9 p\u00e1smo.",
    relatedLessonIds: ["circuits-03"],
    tags: ["filtr", "recall"],
  },
  {
    id: "T-CIR-012",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Jednoduch\u00e1 doln\u00ed propust se skl\u00e1d\u00e1 z:",
    choices: [
      {
        id: "a",
        text: "S\u00e9riov\u00e9 c\u00edvky a paraleln\u00edho kondenz\u00e1toru",
      },
      {
        id: "b",
        text: "S\u00e9riov\u00e9ho kondenz\u00e1toru a paraleln\u00ed c\u00edvky",
      },
      {
        id: "c",
        text: "Dvou rezistor\u016f v s\u00e9rii",
      },
      {
        id: "d",
        text: "Dvou kondenz\u00e1tor\u016f paraleln\u011b",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Doln\u00ed propust: c\u00edvka v s\u00e9rii blokuje VF, kondenz\u00e1tor paraleln\u011b odvede VF na zem. Horn\u00ed propust m\u00e1 opa\u010dn\u00e9 uspo\u0159\u00e1d\u00e1n\u00ed.",
    relatedLessonIds: ["circuits-03"],
    tags: ["filtr", "apply"],
  },
  {
    id: "T-CIR-013",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "P\u00e1smov\u00e1 propust (BP filtr) propou\u0161t\u00ed:",
    choices: [
      {
        id: "a",
        text: "Ur\u010dit\u00e9 p\u00e1smo frekvenc\u00ed kolem st\u0159edn\u00ed frekvence",
      },
      {
        id: "b",
        text: "V\u0161echny frekvence krom\u011b ur\u010dit\u00e9ho p\u00e1sma",
      },
      {
        id: "c",
        text: "Pouze frekvence nad mezn\u00edm kmito\u010dtem",
      },
      {
        id: "d",
        text: "Pouze frekvence pod mezn\u00edm kmito\u010dtem",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "P\u00e1smov\u00e1 propust (Band Pass) propou\u0161t\u00ed p\u00e1smo kolem f0. Filtr, kter\u00fd v\u0161e krom\u011b p\u00e1sma propust\u00ed, je p\u00e1smov\u00e1 z\u00e1dr\u017e (notch filtr).",
    relatedLessonIds: ["circuits-03"],
    tags: ["filtr", "recall"],
  },
  {
    id: "T-CIR-014",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Pro\u010d se pou\u017e\u00edv\u00e1 impedan\u010dn\u00ed p\u0159izp\u016fsoben\u00ed mezi vys\u00edla\u010dem a ant\u00e9nou?",
    choices: [
      {
        id: "a",
        text: "Pro maxim\u00e1ln\u00ed p\u0159enos v\u00fdkonu a minimalizaci odraz\u016f",
      },
      {
        id: "b",
        text: "Pro zm\u011bnu frekvence sign\u00e1lu",
      },
      {
        id: "c",
        text: "Pro zes\u00edlen\u00ed v\u00fdstupn\u00edho v\u00fdkonu",
      },
      {
        id: "d",
        text: "Pro filtraci ne\u017e\u00e1douc\u00edch sign\u00e1l\u016f",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "P\u0159i nesouhlasu impedanc\u00ed vznikaj\u00ed odrazy a \u010d\u00e1st v\u00fdkonu se vrac\u00ed zp\u011bt. P\u0159izp\u016fsoben\u00ed zaji\u0161\u0165uje maxim\u00e1ln\u00ed p\u0159enos energie do ant\u00e9ny.",
    relatedLessonIds: ["circuits-03"],
    tags: ["impedancni-prizpusobeni", "analyze"],
  },
  {
    id: "T-CIR-015",
    examPartId: "technical",
    sectionId: "circuits",
    wording:
      "Kter\u00fd obvod se nejb\u011b\u017en\u011bji pou\u017e\u00edv\u00e1 k impedan\u010dn\u00edmu p\u0159izp\u016fsoben\u00ed v radioamat\u00e9rsk\u00e9 praxi?",
    choices: [
      {
        id: "a",
        text: "LC \u010dl\u00e1nek (nap\u0159. L-\u010dl\u00e1nek nebo \u03c0-\u010dl\u00e1nek)",
      },
      { id: "b", text: "Rezistorov\u00fd d\u011bli\u010d" },
      { id: "c", text: "Diodov\u00fd m\u016fstek" },
      {
        id: "d",
        text: "Emitorov\u00fd sledova\u010d",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "LC \u010dl\u00e1nky (\u03c0, L, T) transformuj\u00ed impedanci bez ztr\u00e1ty v\u00fdkonu. Rezistorov\u00fd d\u011bli\u010d by zp\u016fsobil velk\u00e9 ztr\u00e1ty. Anténní tuner je typick\u00fd p\u0159\u00edklad.",
    relatedLessonIds: ["circuits-03"],
    tags: ["impedancni-prizpusobeni", "apply"],
  },
];
