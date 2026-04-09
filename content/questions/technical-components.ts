import type { Question } from "@/lib/types";

export const technicalComponentsQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Passive components (comp-01)
  // -----------------------------------------------------------------------
  {
    id: "T-CMP-001",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Jak\u00e1 sou\u010d\u00e1stka ukl\u00e1d\u00e1 energii v elektrick\u00e9m poli?",
    choices: [
      { id: "a", text: "Kondenz\u00e1tor" },
      { id: "b", text: "C\u00edvka" },
      { id: "c", text: "Rezistor" },
      { id: "d", text: "Dioda" },
    ],
    correctChoiceId: "a",
    explanation:
      "Kondenz\u00e1tor ukl\u00e1d\u00e1 energii v elektrick\u00e9m poli mezi deskami. C\u00edvka ukl\u00e1d\u00e1 energii v magnetick\u00e9m poli - to je \u010dast\u00fd z\u00e1m\u011bnn\u00fd omyl.",
    relatedLessonIds: ["comp-01"],
    tags: ["kondenzator", "recall"],
  },
  {
    id: "T-CMP-002",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "V jak\u00fdch jednotk\u00e1ch se m\u011b\u0159\u00ed kapacita kondenz\u00e1toru?",
    choices: [
      { id: "a", text: "Farad [F]" },
      { id: "b", text: "Henry [H]" },
      { id: "c", text: "Ohm [\u03a9]" },
      { id: "d", text: "Watt [W]" },
    ],
    correctChoiceId: "a",
    explanation:
      "Kapacita se m\u011b\u0159\u00ed ve faradech. Henry je jednotka induk\u010dnosti (c\u00edvka). V praxi se pou\u017e\u00edvaj\u00ed pF, nF a \u00b5F.",
    relatedLessonIds: ["comp-01"],
    tags: ["kondenzator", "recall"],
  },
  {
    id: "T-CMP-003",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Jak\u00fd je \u00fa\u010del transform\u00e1toru v elektronick\u00e9m obvodu?",
    choices: [
      {
        id: "a",
        text: "M\u011bn\u00ed nap\u011bt\u00ed st\u0159\u00eddav\u00e9ho proudu",
      },
      {
        id: "b",
        text: "M\u011bn\u00ed frekvenci st\u0159\u00eddav\u00e9ho proudu",
      },
      {
        id: "c",
        text: "P\u0159em\u011b\u0148uje st\u0159\u00eddav\u00fd proud na stejnosm\u011brn\u00fd",
      },
      {
        id: "d",
        text: "Zesiluje v\u00fdkon sign\u00e1lu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Transform\u00e1tor m\u011bn\u00ed nap\u011bt\u00ed pomoc\u00ed elektromagnetick\u00e9 indukce mezi prim\u00e1rn\u00edm a sekund\u00e1rn\u00edm vinut\u00edm. Frekvenci nem\u011bn\u00ed. Usm\u011br\u0148ov\u00e1n\u00ed prov\u00e1d\u00ed dioda, ne transform\u00e1tor.",
    relatedLessonIds: ["comp-01"],
    tags: ["transformator", "recall"],
  },
  {
    id: "T-CMP-004",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Jak\u00e1 sou\u010d\u00e1stka ukl\u00e1d\u00e1 energii v magnetick\u00e9m poli?",
    choices: [
      { id: "a", text: "C\u00edvka (induktor)" },
      { id: "b", text: "Kondenz\u00e1tor" },
      { id: "c", text: "Rezistor" },
      { id: "d", text: "Tranzistor" },
    ],
    correctChoiceId: "a",
    explanation:
      "C\u00edvka ukl\u00e1d\u00e1 energii v magnetick\u00e9m poli. Kondenz\u00e1tor ukl\u00e1d\u00e1 energii v elektrick\u00e9m poli. Rezistor energii p\u0159em\u011b\u0148uje na teplo.",
    relatedLessonIds: ["comp-01"],
    tags: ["civka", "recall"],
  },
  {
    id: "T-CMP-005",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Odpor rezistoru s ozna\u010den\u00edm 4,7 k\u03a9 je:",
    choices: [
      { id: "a", text: "4 700 \u03a9" },
      { id: "b", text: "47 \u03a9" },
      { id: "c", text: "470 \u03a9" },
      { id: "d", text: "47 000 \u03a9" },
    ],
    correctChoiceId: "a",
    explanation:
      "P\u0159edpona k (kilo) znamen\u00e1 1 000. 4,7 k\u03a9 = 4,7 \u00d7 1 000 = 4 700 \u03a9. Odpov\u011b\u010f 47 000 \u03a9 by byla 47 k\u03a9.",
    relatedLessonIds: ["comp-01"],
    tags: ["rezistor", "apply"],
  },

  // -----------------------------------------------------------------------
  // Active components (comp-02)
  // -----------------------------------------------------------------------
  {
    id: "T-CMP-006",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Hlavn\u00ed vlastnost\u00ed diody je, \u017ee:",
    choices: [
      {
        id: "a",
        text: "Propou\u0161t\u00ed proud pouze jedn\u00edm sm\u011brem",
      },
      {
        id: "b",
        text: "Zesiluje sign\u00e1l",
      },
      {
        id: "c",
        text: "Ukl\u00e1d\u00e1 energii v elektrick\u00e9m poli",
      },
      {
        id: "d",
        text: "M\u011bn\u00ed frekvenci sign\u00e1lu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Dioda je jednosm\u011brn\u00fd ventil pro elektrick\u00fd proud. Zes\u00edlen\u00ed je vlastnost tranzistoru, ne diody.",
    relatedLessonIds: ["comp-02"],
    tags: ["dioda", "recall"],
  },
  {
    id: "T-CMP-007",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Kolik p\u0159echod\u016f PN m\u00e1 bipol\u00e1rn\u00ed tranzistor?",
    choices: [
      { id: "a", text: "Dva" },
      { id: "b", text: "Jeden" },
      { id: "c", text: "T\u0159i" },
      { id: "d", text: "\u010cty\u0159i" },
    ],
    correctChoiceId: "a",
    explanation:
      "Bipol\u00e1rn\u00ed tranzistor (NPN nebo PNP) m\u00e1 dva p\u0159echody PN. Dioda m\u00e1 jeden p\u0159echod PN.",
    relatedLessonIds: ["comp-02"],
    tags: ["tranzistor", "recall"],
  },
  {
    id: "T-CMP-008",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Jak se naz\u00fdvaj\u00ed t\u0159i vývody bipol\u00e1rn\u00edho tranzistoru?",
    choices: [
      {
        id: "a",
        text: "B\u00e1ze, kolektor, emitor",
      },
      {
        id: "b",
        text: "Anoda, katoda, \u0159\u00eddic\u00ed elektroda",
      },
      {
        id: "c",
        text: "Drain, gate, source",
      },
      {
        id: "d",
        text: "Vstup, v\u00fdstup, zem",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Bipol\u00e1rn\u00ed tranzistor m\u00e1 b\u00e1zi (B), kolektor (C) a emitor (E). Drain, gate, source jsou vývody tranzistoru FET.",
    relatedLessonIds: ["comp-02"],
    tags: ["tranzistor", "recall"],
  },
  {
    id: "T-CMP-009",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Opera\u010dn\u00ed zesilova\u010d (OZ) se vyzna\u010duje:",
    choices: [
      {
        id: "a",
        text: "Velmi vysok\u00fdm nap\u011b\u0165ov\u00fdm zes\u00edlen\u00edm a vysok\u00fdm vstupn\u00edm odporem",
      },
      {
        id: "b",
        text: "N\u00edzk\u00fdm zes\u00edlen\u00edm a n\u00edzk\u00fdm vstupn\u00edm odporem",
      },
      {
        id: "c",
        text: "Schopnost\u00ed m\u011bnit frekvenci sign\u00e1lu",
      },
      {
        id: "d",
        text: "Pouze jedním vstupem a jedním výstupem",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "OZ m\u00e1 ide\u00e1ln\u011b nekone\u010dn\u00e9 zes\u00edlen\u00ed a vstupn\u00ed odpor. Skute\u010dn\u00e9 OZ maj\u00ed zes\u00edlen\u00ed 10\u2074 a\u017e 10\u2076. Maj\u00ed dva vstupy (invertuj\u00edc\u00ed a neinvertuj\u00edc\u00ed).",
    relatedLessonIds: ["comp-02"],
    tags: ["operacni-zesilovac", "recall"],
  },
  {
    id: "T-CMP-010",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "K \u010demu se v radioamat\u00e9rsk\u00e9 praxi nejb\u011b\u017en\u011bji pou\u017e\u00edv\u00e1 dioda?",
    choices: [
      {
        id: "a",
        text: "Usm\u011brn\u011bn\u00ed st\u0159\u00eddav\u00e9ho proudu a detekce sign\u00e1lu",
      },
      {
        id: "b",
        text: "Zes\u00edlen\u00ed sign\u00e1lu",
      },
      {
        id: "c",
        text: "Generov\u00e1n\u00ed kmito\u010dtu",
      },
      {
        id: "d",
        text: "Impedanční p\u0159izp\u016fsoben\u00ed",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Diody se pou\u017e\u00edvaj\u00ed k usm\u011brn\u011bn\u00ed (nap\u00e1jec\u00ed zdroje) a detekci (demodul\u00e1tor v p\u0159ij\u00edma\u010di). Zes\u00edlen\u00ed je funkce tranzistoru.",
    relatedLessonIds: ["comp-02"],
    tags: ["dioda", "apply"],
  },
  {
    id: "T-CMP-011",
    examPartId: "technical",
    sectionId: "components",
    wording:
      "Tranzistor v radioamat\u00e9rsk\u00e9m vys\u00edla\u010di slou\u017e\u00ed p\u0159edev\u0161\u00edm k:",
    choices: [
      {
        id: "a",
        text: "Zes\u00edlen\u00ed sign\u00e1lu",
      },
      {
        id: "b",
        text: "Usm\u011brn\u011bn\u00ed proudu",
      },
      {
        id: "c",
        text: "M\u011b\u0159en\u00ed nap\u011bt\u00ed",
      },
      {
        id: "d",
        text: "Filtraci sign\u00e1lu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Tranzistor v koncov\u00e9m stupni vys\u00edla\u010de zesiluje sign\u00e1l na po\u017eadovan\u00fd v\u00fdkon. Usm\u011brn\u011bn\u00ed prov\u00e1d\u00ed dioda, filtraci LC obvody.",
    relatedLessonIds: ["comp-02"],
    tags: ["tranzistor", "apply"],
  },
];
