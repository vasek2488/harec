import type { Lesson } from "@/lib/types";

export const technicalComponentsLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Passive components (resistor, capacitor, inductor, transformer)
  // -----------------------------------------------------------------------
  {
    id: "comp-01",
    examPartId: "technical",
    sectionId: "components",
    order: 1,
    title: "Pasivn\u00ed sou\u010d\u00e1stky",
    objective:
      "Rozli\u0161it rezistor, kondenz\u00e1tor, c\u00edvku a transform\u00e1tor, jejich schematick\u00e9 zna\u010dky a chov\u00e1n\u00ed v obvodu.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Pasivn\u00ed sou\u010d\u00e1stky nemohou zesilovat sign\u00e1l - pouze ho ovliv\u0148uj\u00ed. Z\u00e1kladn\u00ed \u010dty\u0159ka: rezistor (omezuje proud), kondenz\u00e1tor (ukl\u00e1d\u00e1 energii v elektrick\u00e9m poli), c\u00edvka (ukl\u00e1d\u00e1 energii v magnetick\u00e9m poli) a transform\u00e1tor (m\u011bn\u00ed nap\u011bt\u00ed).",
        note: "Pasivn\u00ed = nep\u0159id\u00e1vaj\u00ed energii do obvodu. Aktivn\u00ed sou\u010d\u00e1stky (tranzistor, OZ) mohou zesilovat.",
      },
      {
        type: "match",
        instruction:
          "P\u0159i\u0159a\u010fte sou\u010d\u00e1stku k jej\u00ed jednotce:",
        pairs: [
          { left: "Rezistor", right: "Ohm [\u03a9]" },
          { left: "Kondenz\u00e1tor", right: "Farad [F]" },
          { left: "C\u00edvka (induktor)", right: "Henry [H]" },
        ],
        explanation:
          "R se m\u011b\u0159\u00ed v ohmech, C ve faradech (prakticky pF, nF, \u00b5F), L v henry (prakticky \u00b5H, mH).",
      },
      {
        type: "explain",
        content:
          "Rezistor p\u0159em\u011b\u0148uje elektrickou energii na teplo. Hodnota odporu se ozna\u010duje barevn\u00fdm k\u00f3dem nebo \u010d\u00edseln\u00fdm ozna\u010den\u00edm. P\u0159edpony: k\u03a9 = 1 000 \u03a9, M\u03a9 = 1 000 000 \u03a9.",
      },
      {
        type: "slider",
        question:
          "Rezistor m\u00e1 ozna\u010den\u00ed 2,2 k\u03a9. Kolik je to ohm\u016f?",
        min: 100,
        max: 5000,
        step: 100,
        unit: "\u03a9",
        correctValue: 2200,
        tolerance: 100,
        explanation:
          "2,2 k\u03a9 = 2,2 \u00d7 1 000 = 2 200 \u03a9. P\u0159edpona k (kilo) znamen\u00e1 tis\u00edc.",
      },
      {
        type: "select-answer",
        question:
          "Jak\u00e1 sou\u010d\u00e1stka propou\u0161t\u00ed st\u0159\u00eddav\u00fd proud, ale blokuje stejnosm\u011brn\u00fd?",
        choices: [
          { id: "a", text: "Kondenz\u00e1tor" },
          { id: "b", text: "C\u00edvka" },
          { id: "c", text: "Rezistor" },
          { id: "d", text: "Transform\u00e1tor" },
        ],
        correctId: "a",
        explanation:
          "Kondenz\u00e1tor blokuje DC a propou\u0161t\u00ed AC. C\u00edvka se chov\u00e1 opačně - propou\u0161t\u00ed DC a blokuje VF. Toto je kl\u00ed\u010dov\u00e9 pro pochopen\u00ed filtr\u016f.",
      },
      {
        type: "reveal",
        prompt:
          "Jak\u00fd je hlavn\u00ed princip transform\u00e1toru?",
        answer:
          "Elektromagnetick\u00e1 indukce mezi prim\u00e1rn\u00edm a sekund\u00e1rn\u00edm vinut\u00edm na spole\u010dn\u00e9m j\u00e1d\u0159e.",
        explanation:
          "P\u0159evod nap\u011bt\u00ed z\u00e1vis\u00ed na pom\u011bru z\u00e1vit\u016f: U2/U1 = N2/N1. Transform\u00e1tor funguje pouze se st\u0159\u00eddav\u00fdm proudem.",
      },
      {
        type: "highlight",
        instruction:
          "Vyberte sou\u010d\u00e1stky, kter\u00e9 pat\u0159\u00ed mezi pasivn\u00ed:",
        terms: [
          { text: "Rezistor", correct: true },
          { text: "Tranzistor", correct: false },
          { text: "Kondenz\u00e1tor", correct: true },
          { text: "Dioda", correct: false },
          { text: "C\u00edvka", correct: true },
          { text: "Opera\u010dn\u00ed zesilova\u010d", correct: false },
        ],
        explanation:
          "Tranzistor, dioda a opera\u010dn\u00ed zesilova\u010d jsou aktivn\u00ed sou\u010d\u00e1stky (obsahuj\u00ed polovodi\u010dov\u00fd p\u0159echod nebo zesiluj\u00ed).",
      },
      {
        type: "exam-question",
        questionId: "T-CMP-001",
      },
      {
        type: "order",
        instruction:
          "Se\u0159a\u010fte hodnoty kapacity od nejmen\u0161\u00ed po nejv\u011bt\u0161\u00ed:",
        items: ["10 pF", "100 pF", "1 nF", "100 nF", "1 \u00b5F"],
        explanation:
          "1 \u00b5F = 1 000 nF = 1 000 000 pF. P\u0159edpony: piko (p) = 10\u207b\u00b9\u00b2, nano (n) = 10\u207b\u2079, mikro (\u00b5) = 10\u207b\u2076.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte v\u0161echna spr\u00e1vn\u00e1 tvrzen\u00ed o pasivn\u00edch sou\u010d\u00e1stk\u00e1ch:",
        pool: [
          {
            text: "Rezistor p\u0159em\u011b\u0148uje elektřinu na teplo",
            correct: true,
          },
          {
            text: "Kondenz\u00e1tor ukl\u00e1d\u00e1 energii v magnetick\u00e9m poli",
            correct: false,
          },
          {
            text: "C\u00edvka se m\u011b\u0159\u00ed v henry",
            correct: true,
          },
          {
            text: "Transform\u00e1tor funguje se stejnosm\u011brn\u00fdm proudem",
            correct: false,
          },
          {
            text: "Kondenz\u00e1tor blokuje stejnosm\u011brn\u00fd proud",
            correct: true,
          },
        ],
        explanation:
          "Kondenz\u00e1tor ukl\u00e1d\u00e1 energii v elektrick\u00e9m poli (ne magnetick\u00e9m). Transform\u00e1tor pot\u0159ebuje st\u0159\u00eddav\u00fd proud pro elektromagnetickou indukci.",
      },
    ],
    relatedQuestionIds: [
      "T-CMP-001",
      "T-CMP-002",
      "T-CMP-003",
      "T-CMP-004",
      "T-CMP-005",
    ],
    tags: [
      "rezistor",
      "kondenzator",
      "civka",
      "transformator",
      "pasivni-soucastky",
      "recall",
    ],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: Active components (diode, transistor, op-amp)
  // -----------------------------------------------------------------------
  {
    id: "comp-02",
    examPartId: "technical",
    sectionId: "components",
    order: 2,
    title: "Aktivn\u00ed sou\u010d\u00e1stky",
    objective:
      "Popsat funkci diody, tranzistoru a opera\u010dn\u00edho zesilova\u010de a jejich vyu\u017eit\u00ed v r\u00e1diov\u00fdch obvodech.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Aktivn\u00ed sou\u010d\u00e1stky obsahuj\u00ed polovodi\u010dov\u00e9 p\u0159echody a mohou \u0159\u00eddit nebo zesilovat sign\u00e1l. Z\u00e1kladn\u00ed trojice: dioda (jednosm\u011brn\u00fd ventil), tranzistor (zesilova\u010d a sp\u00edna\u010d), opera\u010dn\u00ed zesilova\u010d (univerz\u00e1ln\u00ed zesilova\u010d).",
        note: "Polovodi\u010de (k\u0159em\u00edk, germanium) maj\u00ed vodivost mezi vodičem a izolantem.",
      },
      {
        type: "fill-blank",
        textBefore: "Dioda m\u00e1 dva vývody:",
        blank: "anodu a katodu",
        distractors: [
          "b\u00e1zi a emitor",
          "drain a source",
          "vstup a v\u00fdstup",
        ],
        textAfter:
          ". Proud te\u010de od anody ke katod\u011b.",
        explanation:
          "B\u00e1ze a emitor jsou vývody tranzistoru. Drain a source pat\u0159\u00ed tranzistoru FET.",
      },
      {
        type: "select-answer",
        question:
          "Co se stane, pokud p\u0159ipoj\u00edme diodu v z\u00e1v\u011brn\u00e9m sm\u011bru?",
        choices: [
          {
            id: "a",
            text: "Dioda nepropust\u00ed proud (a\u017e na minim\u00e1ln\u00ed svod)",
          },
          {
            id: "b",
            text: "Dioda se chov\u00e1 jako zkrat",
          },
          {
            id: "c",
            text: "Dioda zesiluje sign\u00e1l",
          },
          {
            id: "d",
            text: "Dioda m\u011bn\u00ed frekvenci",
          },
        ],
        correctId: "a",
        explanation:
          "V z\u00e1v\u011brn\u00e9m sm\u011bru dioda blokuje proud. V propustn\u00e9m sm\u011bru propou\u0161t\u00ed (s \u00fabytkem cca 0,6 V pro k\u0159em\u00edk).",
      },
      {
        type: "explain",
        content:
          "Bipol\u00e1rn\u00ed tranzistor (BJT) m\u00e1 t\u0159i vývody: b\u00e1ze (B), kolektor (C), emitor (E). Mal\u00fd proud do b\u00e1ze \u0159\u00edd\u00ed velk\u00fd proud kolektorem. Existuj\u00ed dva typy: NPN a PNP.",
        note: "Proudov\u00e9 zes\u00edlen\u00ed \u03b2 (beta) je typicky 50-300. FET tranzistory se \u0159\u00edd\u00ed nap\u011bt\u00edm m\u00edsto proudem.",
      },
      {
        type: "order",
        instruction:
          "Se\u0159a\u010fte kroky funkce tranzistorov\u00e9ho zesilova\u010de:",
        items: [
          "Vstupn\u00ed sign\u00e1l p\u0159iveden na b\u00e1zi",
          "Zm\u011bna proudu b\u00e1ze",
          "Zes\u00edlen\u00e1 zm\u011bna proudu kolektorem",
          "Zes\u00edlen\u00fd sign\u00e1l na v\u00fdstupu",
        ],
        explanation:
          "Tranzistor zesiluje tak, \u017ee mal\u00e1 zm\u011bna proudu b\u00e1ze zp\u016fsob\u00ed velkou zm\u011bnu proudu kolektoru (\u03b2-kr\u00e1t v\u011bt\u0161\u00ed).",
      },
      {
        type: "match",
        instruction:
          "P\u0159i\u0159a\u010fte sou\u010d\u00e1stku k jej\u00ed hlavn\u00ed funkci v r\u00e1diu:",
        pairs: [
          {
            left: "Dioda",
            right: "Usm\u011brn\u011bn\u00ed a detekce",
          },
          {
            left: "Tranzistor",
            right: "Zes\u00edlen\u00ed sign\u00e1lu",
          },
          {
            left: "Opera\u010dn\u00ed zesilova\u010d",
            right: "P\u0159esn\u00e9 zes\u00edlen\u00ed se zp\u011btnou vazbou",
          },
        ],
        explanation:
          "Dioda se pou\u017e\u00edv\u00e1 v usm\u011br\u0148ova\u010d\u00edch a detektorech. Tranzistor v zesilova\u010d\u00edch a oscil\u00e1torech. OZ v p\u0159esn\u00fdch zesilova\u010d\u00edch a filtrech.",
      },
      {
        type: "slider",
        question:
          "Tranzistor m\u00e1 proudov\u00e9 zes\u00edlen\u00ed \u03b2 = 100 a proud b\u00e1ze 0,5 mA. Jak\u00fd je proud kolektorem?",
        min: 0,
        max: 100,
        step: 5,
        unit: "mA",
        correctValue: 50,
        tolerance: 5,
        explanation:
          "Ic = \u03b2 \u00d7 Ib = 100 \u00d7 0,5 = 50 mA. Proud kolektoru je \u03b2-kr\u00e1t v\u011bt\u0161\u00ed ne\u017e proud b\u00e1ze.",
      },
      {
        type: "exam-question",
        questionId: "T-CMP-006",
      },
      {
        type: "highlight",
        instruction:
          "Vyberte vlastnosti opera\u010dn\u00edho zesilova\u010de:",
        terms: [
          {
            text: "Vysok\u00e9 nap\u011b\u0165ov\u00e9 zes\u00edlen\u00ed",
            correct: true,
          },
          {
            text: "Vysok\u00fd vstupn\u00ed odpor",
            correct: true,
          },
          {
            text: "N\u00edzk\u00fd v\u00fdstupn\u00ed odpor",
            correct: true,
          },
          {
            text: "Pouze jeden vstup",
            correct: false,
          },
          {
            text: "Zes\u00edlen\u00ed nez\u00e1vis\u00ed na zp\u011btn\u00e9 vazb\u011b",
            correct: false,
          },
        ],
        explanation:
          "OZ m\u00e1 dva vstupy (invertuj\u00edc\u00ed a neinvertuj\u00edc\u00ed). V praxi se zes\u00edlen\u00ed v\u017edy nastavuje zp\u011btnou vazbou.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte spr\u00e1vn\u00e1 tvrzen\u00ed o aktivn\u00edch sou\u010d\u00e1stk\u00e1ch:",
        pool: [
          {
            text: "Dioda propou\u0161t\u00ed proud ob\u011bma sm\u011bry",
            correct: false,
          },
          {
            text: "Bipol\u00e1rn\u00ed tranzistor m\u00e1 dva PN p\u0159echody",
            correct: true,
          },
          {
            text: "FET tranzistor se \u0159\u00edd\u00ed nap\u011bt\u00edm",
            correct: true,
          },
          {
            text: "OZ m\u00e1 invertuj\u00edc\u00ed a neinvertuj\u00edc\u00ed vstup",
            correct: true,
          },
          {
            text: "Tranzistor m\u00e1 pouze dva vývody",
            correct: false,
          },
        ],
        explanation:
          "Dioda propou\u0161t\u00ed proud pouze jedn\u00edm sm\u011brem. Tranzistor m\u00e1 t\u0159i vývody (B, C, E u BJT nebo G, D, S u FET).",
      },
    ],
    relatedQuestionIds: [
      "T-CMP-006",
      "T-CMP-007",
      "T-CMP-008",
      "T-CMP-009",
      "T-CMP-010",
      "T-CMP-011",
    ],
    tags: [
      "dioda",
      "tranzistor",
      "operacni-zesilovac",
      "aktivni-soucastky",
      "recall",
    ],
  },
];
