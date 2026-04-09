import type { Lesson } from "@/lib/types";

export const technicalCircuitsLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Series and parallel circuits
  // -----------------------------------------------------------------------
  {
    id: "circuits-01",
    examPartId: "technical",
    sectionId: "circuits",
    order: 1,
    title: "S\u00e9riov\u00e9 a paraleln\u00ed obvody",
    objective:
      "Vypo\u010d\u00edtat celkov\u00fd odpor a kapacitu v s\u00e9riov\u00e9m a paraleln\u00edm zapojen\u00ed a analyzovat nap\u011b\u0165ov\u00fd d\u011bli\u010d.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "V s\u00e9riov\u00e9m zapojen\u00ed jsou sou\u010d\u00e1stky za sebou - te\u010de jimi stejn\u00fd proud. Celkov\u00fd odpor se s\u010d\u00edt\u00e1: R = R1 + R2. V paraleln\u00edm zapojen\u00ed jsou sou\u010d\u00e1stky vedle sebe - je na nich stejn\u00e9 nap\u011bt\u00ed. Celkov\u00fd odpor: 1/R = 1/R1 + 1/R2.",
        note: "U kondenz\u00e1tor\u016f je to p\u0159esn\u011b naopak: paraleln\u011b se s\u010d\u00edtaj\u00ed, s\u00e9riov\u011b ne!",
      },
      {
        type: "slider",
        question:
          "Jak\u00fd je celkov\u00fd odpor t\u0159\u00ed rezistor\u016f 10 \u03a9, 20 \u03a9 a 30 \u03a9 zapojen\u00fdch s\u00e9riov\u011b?",
        min: 0,
        max: 100,
        step: 5,
        unit: "\u03a9",
        correctValue: 60,
        tolerance: 5,
        explanation:
          "R = R1 + R2 + R3 = 10 + 20 + 30 = 60 \u03a9. V s\u00e9rii se odpory v\u017edy s\u010d\u00edtaj\u00ed.",
      },
      {
        type: "select-answer",
        question:
          "Dva rezistory 100 \u03a9 jsou zapojen\u00e9 paraleln\u011b. Celkov\u00fd odpor je:",
        choices: [
          { id: "a", text: "50 \u03a9" },
          { id: "b", text: "200 \u03a9" },
          { id: "c", text: "100 \u03a9" },
          { id: "d", text: "10 000 \u03a9" },
        ],
        correctId: "a",
        explanation:
          "Pro dva stejn\u00e9 rezistory paraleln\u011b: R = R1/2 = 50 \u03a9. Paraleln\u00ed zapojen\u00ed v\u017edy sni\u017euje celkov\u00fd odpor.",
      },
      {
        type: "explain",
        content:
          "Nap\u011b\u0165ov\u00fd d\u011bli\u010d je dva rezistory v s\u00e9rii. V\u00fdstupn\u00ed nap\u011bt\u00ed se odb\u00edr\u00e1 z jednoho z nich. Vzorec: Uout = Uin \u00d7 R2 / (R1 + R2). Pou\u017e\u00edv\u00e1 se v m\u011b\u0159ic\u00edch obvodech a p\u0159edp\u011bt\u00ed tranzistor\u016f.",
      },
      {
        type: "fill-blank",
        textBefore:
          "V nap\u011b\u0165ov\u00e9m d\u011bli\u010di s R1 = 1 k\u03a9 a R2 = 3 k\u03a9 p\u0159ipojen\u00e9m na 12 V je v\u00fdstupn\u00ed nap\u011bt\u00ed (na R2)",
        blank: "9 V",
        distractors: ["3 V", "6 V", "4 V"],
        textAfter: ".",
        explanation:
          "Uout = 12 \u00d7 3000/(1000+3000) = 12 \u00d7 3/4 = 9 V. R2 je 3/4 celkov\u00e9ho odporu, proto na n\u011bm je 3/4 nap\u011bt\u00ed.",
      },
      {
        type: "match",
        instruction:
          "P\u0159i\u0159a\u010fte pravidlo ke spr\u00e1vn\u00e9mu zapojen\u00ed:",
        pairs: [
          {
            left: "Rezistory s\u00e9riov\u011b",
            right: "R = R1 + R2",
          },
          {
            left: "Rezistory paraleln\u011b",
            right: "1/R = 1/R1 + 1/R2",
          },
          {
            left: "Kondenz\u00e1tory paraleln\u011b",
            right: "C = C1 + C2",
          },
          {
            left: "Kondenz\u00e1tory s\u00e9riov\u011b",
            right: "1/C = 1/C1 + 1/C2",
          },
        ],
        explanation:
          "Kondenz\u00e1tory se chovaj\u00ed opačně ne\u017e rezistory: paraleln\u011b se s\u010d\u00edtaj\u00ed p\u0159\u00edmo, s\u00e9riov\u011b p\u0159es p\u0159evr\u00e1cenou hodnotu.",
      },
      {
        type: "exam-question",
        questionId: "T-CIR-001",
      },
      {
        type: "order",
        instruction:
          "Se\u0159a\u010fte celkov\u00fd odpor od nejmen\u0161\u00edho po nejv\u011bt\u0161\u00ed:",
        items: [
          "Dva 100 \u03a9 paraleln\u011b (50 \u03a9)",
          "Jeden 100 \u03a9 (100 \u03a9)",
          "Dva 100 \u03a9 s\u00e9riov\u011b (200 \u03a9)",
          "T\u0159i 100 \u03a9 s\u00e9riov\u011b (300 \u03a9)",
        ],
        explanation:
          "Paraleln\u00ed zapojen\u00ed sni\u017euje odpor, s\u00e9riov\u00e9 zvy\u0161uje. V\u00edce rezistor\u016f v s\u00e9rii = vy\u0161\u0161\u00ed celkov\u00fd odpor.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte v\u0161echna spr\u00e1vn\u00e1 tvrzen\u00ed:",
        pool: [
          {
            text: "V s\u00e9riov\u00e9m obvodu je proud v\u0161ude stejn\u00fd",
            correct: true,
          },
          {
            text: "V paraleln\u00edm obvodu je nap\u011bt\u00ed na v\u0161ech v\u011btv\u00edch stejn\u00e9",
            correct: true,
          },
          {
            text: "Kondenz\u00e1tory v s\u00e9rii se s\u010d\u00edtaj\u00ed p\u0159\u00edmo",
            correct: false,
          },
          {
            text: "Paraleln\u00ed rezistory maj\u00ed ni\u017e\u0161\u00ed celkov\u00fd odpor ne\u017e nejmen\u0161\u00ed z nich",
            correct: true,
          },
          {
            text: "V nap\u011b\u0165ov\u00e9m d\u011bli\u010di se proud d\u011bl\u00ed",
            correct: false,
          },
        ],
        explanation:
          "Kondenz\u00e1tory v s\u00e9rii se po\u010d\u00edtaj\u00ed jako rezistory paraleln\u011b (1/C = 1/C1 + 1/C2). Nap\u011b\u0165ov\u00fd d\u011bli\u010d d\u011bl\u00ed nap\u011bt\u00ed, ne proud.",
      },
    ],
    relatedQuestionIds: [
      "T-CIR-001",
      "T-CIR-002",
      "T-CIR-003",
      "T-CIR-004",
      "T-CIR-005",
    ],
    tags: [
      "seriovy-obvod",
      "paralelni-obvod",
      "napetovy-delic",
      "rezistor",
      "kondenzator",
      "apply",
    ],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: Resonant circuits and Q factor
  // -----------------------------------------------------------------------
  {
    id: "circuits-02",
    examPartId: "technical",
    sectionId: "circuits",
    order: 2,
    title: "Rezonan\u010dn\u00ed obvody a \u010dinitel jakosti",
    objective:
      "Vypo\u010d\u00edtat rezonan\u010dn\u00ed frekvenci LC obvodu a vysv\u011btlit v\u00fdznam \u010dinitele jakosti Q.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Rezonan\u010dn\u00ed obvod vznikne spojen\u00edm c\u00edvky (L) a kondenz\u00e1toru (C). P\u0159i rezonanci se energie st\u0159\u00eddav\u011b p\u0159el\u00e9v\u00e1 mezi elektrick\u00fdm polem kondenz\u00e1toru a magnetick\u00fdm polem c\u00edvky. Rezonan\u010dn\u00ed frekvence: f = 1/(2\u03c0\u221a(LC)).",
        note: "Tento vzorec (Thomsonův) je jeden z nejd\u016fle\u017eit\u011bj\u0161\u00edch pro radioamat\u00e9ry.",
      },
      {
        type: "slider",
        question:
          "LC obvod m\u00e1 L = 10 \u00b5H a C = 100 pF. Rezonan\u010dn\u00ed frekvence je p\u0159ibli\u017en\u011b:",
        min: 1,
        max: 10,
        step: 0.5,
        unit: "MHz",
        correctValue: 5,
        tolerance: 0.5,
        explanation:
          "f = 1/(2\u03c0\u221a(10\u00d710\u207b\u2076 \u00d7 100\u00d710\u207b\u00b9\u00b2)) = 1/(2\u03c0\u221a(10\u207b\u00b9\u2075)) \u2248 5,03 MHz.",
      },
      {
        type: "select-answer",
        question:
          "Jak zm\u011bn\u00edme rezonan\u010dn\u00ed frekvenci LC obvodu, pokud chceme vy\u0161\u0161\u00ed frekvenci?",
        choices: [
          {
            id: "a",
            text: "Zmen\u0161\u00edme L nebo C (nebo oboj\u00ed)",
          },
          {
            id: "b",
            text: "Zv\u011bt\u0161\u00edme L nebo C",
          },
          {
            id: "c",
            text: "Zv\u011bt\u0161\u00edme odpor R",
          },
          {
            id: "d",
            text: "Frekvenci nelze m\u011bnit",
          },
        ],
        correctId: "a",
        explanation:
          "f = 1/(2\u03c0\u221a(LC)). Men\u0161\u00ed L nebo C = vy\u0161\u0161\u00ed frekvence. Proto lad\u00edme p\u0159ij\u00edma\u010d zm\u011bnou kapacity (oto\u010dn\u00fd kondenz\u00e1tor nebo varikap).",
      },
      {
        type: "explain",
        content:
          "\u010cinitel jakosti Q ur\u010duje, jak ost\u0159e obvod rezonuje. Q = f0/\u0394f, kde \u0394f je \u0161\u00ed\u0159ka p\u00e1sma na -3 dB. Vysok\u00e9 Q = u\u017ek\u00e9 p\u00e1smo, n\u00edzk\u00e9 ztr\u00e1ty. N\u00edzk\u00e9 Q = \u0161irok\u00e9 p\u00e1smo.",
        note: "V praxi: Q krystalov\u00e9ho filtru m\u016f\u017ee b\u00fdt 10 000+, b\u011b\u017en\u00fd LC obvod m\u00e1 Q 50-200.",
      },
      {
        type: "fill-blank",
        textBefore:
          "Rezonan\u010dn\u00ed obvod m\u00e1 f0 = 7 MHz a \u0161\u00ed\u0159ku p\u00e1sma 70 kHz. \u010cinitel jakosti Q je",
        blank: "100",
        distractors: ["10", "70", "7000"],
        textAfter: ".",
        explanation:
          "Q = f0/\u0394f = 7 000 000 / 70 000 = 100. Q je bezrozm\u011brn\u00e9 \u010d\u00edslo.",
      },
      {
        type: "reveal",
        prompt:
          "Jak\u00fd je rozd\u00edl mezi s\u00e9riovou a paraleln\u00ed rezonanc\u00ed?",
        answer:
          "P\u0159i s\u00e9riov\u00e9 rezonanci je impedance minim\u00e1ln\u00ed. P\u0159i paraleln\u00ed rezonanci je impedance maxim\u00e1ln\u00ed.",
        explanation:
          "S\u00e9riov\u00fd rezonan\u010dn\u00ed obvod se chov\u00e1 jako \u00fazkop\u00e1smov\u00e1 propust. Paraleln\u00ed se chov\u00e1 jako \u00fazkop\u00e1smov\u00e1 z\u00e1dr\u017e.",
      },
      {
        type: "highlight",
        instruction:
          "Vyberte faktory, kter\u00e9 ovliv\u0148uj\u00ed rezonan\u010dn\u00ed frekvenci LC obvodu:",
        terms: [
          { text: "Induk\u010dnost c\u00edvky (L)", correct: true },
          { text: "Kapacita kondenz\u00e1toru (C)", correct: true },
          { text: "Odpor rezistoru (R)", correct: false },
          { text: "Nap\u00e1jec\u00ed nap\u011bt\u00ed", correct: false },
          { text: "Teplota okolí", correct: false },
        ],
        explanation:
          "f = 1/(2\u03c0\u221a(LC)) - z\u00e1vis\u00ed pouze na L a C. Odpor ovliv\u0148uje Q, ale ne rezonan\u010dn\u00ed frekvenci.",
      },
      {
        type: "exam-question",
        questionId: "T-CIR-006",
      },
      {
        type: "order",
        instruction:
          "Se\u0159a\u010fte od nejni\u017e\u0161\u00edho Q po nejvy\u0161\u0161\u00ed:",
        items: [
          "RC filtr (Q < 1)",
          "B\u011b\u017en\u00fd LC obvod (Q 50-200)",
          "Keramick\u00fd filtr (Q 500-2 000)",
          "Krystalov\u00fd filtr (Q 10 000+)",
        ],
        explanation:
          "Krystaly maj\u00ed extr\u00e9mn\u011b vysok\u00e9 Q d\u00edky mechanick\u00e9 rezonanci piezoelektrick\u00e9ho materi\u00e1lu.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte v\u0161echna spr\u00e1vn\u00e1 tvrzen\u00ed o rezonan\u010dn\u00edch obvodech:",
        pool: [
          {
            text: "P\u0159i rezonanci se Xl a Xc vykompenzuj\u00ed",
            correct: true,
          },
          {
            text: "Vy\u0161\u0161\u00ed Q znamen\u00e1 \u0161ir\u0161\u00ed p\u00e1smo",
            correct: false,
          },
          {
            text: "Rezonan\u010dn\u00ed frekvence z\u00e1vis\u00ed na L a C",
            correct: true,
          },
          {
            text: "S\u00e9riov\u00e1 rezonance m\u00e1 minim\u00e1ln\u00ed impedanci",
            correct: true,
          },
          {
            text: "Zdvojn\u00e1soben\u00ed kapacity zdvojn\u00e1sob\u00ed frekvenci",
            correct: false,
          },
        ],
        explanation:
          "Vy\u0161\u0161\u00ed Q = u\u017e\u0161\u00ed p\u00e1smo. Zdvojn\u00e1soben\u00ed C sn\u00ed\u017e\u00ed frekvenci na 1/\u221a2 (ne na polovinu).",
      },
    ],
    relatedQuestionIds: [
      "T-CIR-006",
      "T-CIR-007",
      "T-CIR-008",
      "T-CIR-009",
      "T-CIR-010",
    ],
    tags: [
      "rezonancni-obvod",
      "cinitel-jakosti",
      "thomsonuv-vzorec",
      "analyze",
    ],
  },

  // -----------------------------------------------------------------------
  // Lesson 3: Filters and impedance matching
  // -----------------------------------------------------------------------
  {
    id: "circuits-03",
    examPartId: "technical",
    sectionId: "circuits",
    order: 3,
    title: "Filtry a impedan\u010dn\u00ed p\u0159izp\u016fsoben\u00ed",
    objective:
      "Rozli\u0161it typy filtr\u016f (LP, HP, BP) a vysv\u011btlit princip impedan\u010dn\u00edho p\u0159izp\u016fsoben\u00ed.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Filtry propou\u0161t\u011bj\u00ed ur\u010dit\u00e9 frekvence a potla\u010duj\u00ed jin\u00e9. T\u0159i z\u00e1kladn\u00ed typy: doln\u00ed propust (LP) - propou\u0161t\u00ed n\u00edzk\u00e9, horn\u00ed propust (HP) - propou\u0161t\u00ed vysok\u00e9, p\u00e1smov\u00e1 propust (BP) - propou\u0161t\u00ed ur\u010dit\u00e9 p\u00e1smo.",
        note: "Existuje i p\u00e1smov\u00e1 z\u00e1dr\u017e (notch) - potla\u010duje ur\u010dit\u00e9 p\u00e1smo a propou\u0161t\u00ed zbytek.",
      },
      {
        type: "match",
        instruction:
          "P\u0159i\u0159a\u010fte typ filtru k jeho funkci:",
        pairs: [
          {
            left: "Doln\u00ed propust (LP)",
            right: "Propou\u0161t\u00ed frekvence pod mezn\u00edm kmito\u010dtem",
          },
          {
            left: "Horn\u00ed propust (HP)",
            right: "Propou\u0161t\u00ed frekvence nad mezn\u00edm kmito\u010dtem",
          },
          {
            left: "P\u00e1smov\u00e1 propust (BP)",
            right: "Propou\u0161t\u00ed p\u00e1smo kolem st\u0159edn\u00ed frekvence",
          },
          {
            left: "P\u00e1smov\u00e1 z\u00e1dr\u017e (notch)",
            right: "Potla\u010duje ur\u010dit\u00e9 p\u00e1smo frekvenc\u00ed",
          },
        ],
        explanation:
          "Ka\u017ed\u00fd typ filtru m\u00e1 specifick\u00e9 vyu\u017eit\u00ed. Nap\u0159. LP za vys\u00edla\u010dem potla\u010duje harmonick\u00e9, BP ve vstupn\u00edm obvodu p\u0159ij\u00edma\u010de vybere po\u017eadovan\u00e9 p\u00e1smo.",
      },
      {
        type: "select-answer",
        question:
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
            text: "Dvou rezistor\u016f",
          },
          {
            id: "d",
            text: "Diody a rezistoru",
          },
        ],
        correctId: "a",
        explanation:
          "C\u00edvka v s\u00e9rii blokuje vysok\u00e9 frekvence (Xl roste s f). Kondenz\u00e1tor paraleln\u011b odvede VF na zem (Xc kles\u00e1 s f). Opa\u010dn\u00e9 uspo\u0159\u00e1d\u00e1n\u00ed tvo\u0159\u00ed horn\u00ed propust.",
      },
      {
        type: "explain",
        content:
          "Impedan\u010dn\u00ed p\u0159izp\u016fsoben\u00ed zaji\u0161\u0165uje maxim\u00e1ln\u00ed p\u0159enos v\u00fdkonu mezi zdrojem a z\u00e1t\u011b\u017e\u00ed. K p\u0159enosu dojde, kdy\u017e impedance zdroje = impedance z\u00e1t\u011b\u017ee. V radioamat\u00e9rsk\u00e9 praxi: vys\u00edla\u010d (50 \u03a9) mus\u00ed vid\u011bt ant\u00e9nu jako 50 \u03a9.",
      },
      {
        type: "slider",
        question:
          "Vys\u00edla\u010d m\u00e1 v\u00fdstupn\u00ed impedanci 50 \u03a9. Jak\u00e1 mus\u00ed b\u00fdt impedance ant\u00e9ny pro maxim\u00e1ln\u00ed p\u0159enos v\u00fdkonu?",
        min: 10,
        max: 200,
        step: 10,
        unit: "\u03a9",
        correctValue: 50,
        tolerance: 5,
        explanation:
          "Pro maxim\u00e1ln\u00ed p\u0159enos v\u00fdkonu mus\u00ed b\u00fdt impedance z\u00e1t\u011b\u017ee rovna impedanci zdroje: 50 \u03a9 = 50 \u03a9.",
      },
      {
        type: "reveal",
        prompt:
          "Co je to SWR (PSV) a pro\u010d je d\u016fle\u017eit\u00e9?",
        answer:
          "SWR (Standing Wave Ratio) m\u011b\u0159\u00ed kvalitu impedan\u010dn\u00edho p\u0159izp\u016fsoben\u00ed. SWR 1:1 = dokonalé p\u0159izp\u016fsoben\u00ed, SWR > 3:1 = \u0161patn\u00e9.",
        explanation:
          "Vysok\u00e9 SWR znamen\u00e1 odrazy na veden\u00ed. Odra\u017een\u00e1 energie se vrac\u00ed do vys\u00edla\u010de a m\u016f\u017ee ho po\u0161kodit.",
      },
      {
        type: "highlight",
        instruction:
          "Vyberte obvody pou\u017e\u00edvan\u00e9 k impedan\u010dn\u00edmu p\u0159izp\u016fsoben\u00ed:",
        terms: [
          { text: "L-\u010dl\u00e1nek", correct: true },
          { text: "\u03c0-\u010dl\u00e1nek", correct: true },
          { text: "Ant\u00e9nn\u00ed tuner", correct: true },
          { text: "Nap\u011b\u0165ov\u00fd d\u011bli\u010d", correct: false },
          { text: "Usm\u011br\u0148ova\u010d", correct: false },
          { text: "Transform\u00e1tor", correct: true },
        ],
        explanation:
          "L-\u010dl\u00e1nek, \u03c0-\u010dl\u00e1nek a ant\u00e9nn\u00ed tuner jsou LC s\u00edt\u011b pro p\u0159izp\u016fsoben\u00ed. Transform\u00e1tor tak\u00e9 transformuje impedanci (Z ~ N\u00b2).",
      },
      {
        type: "exam-question",
        questionId: "T-CIR-011",
      },
      {
        type: "fill-blank",
        textBefore:
          "Filtr, kter\u00fd propou\u0161t\u00ed pouze ur\u010dit\u00e9 p\u00e1smo frekvenc\u00ed a potla\u010duje frekvence mimo n\u011bj, se naz\u00fdv\u00e1",
        blank: "p\u00e1smov\u00e1 propust",
        distractors: [
          "doln\u00ed propust",
          "horn\u00ed propust",
          "p\u00e1smov\u00e1 z\u00e1dr\u017e",
        ],
        textAfter: ".",
        explanation:
          "P\u00e1smov\u00e1 propust (Band Pass) = propou\u0161t\u00ed p\u00e1smo kolem st\u0159edn\u00ed frekvence. P\u00e1smov\u00e1 z\u00e1dr\u017e d\u011bl\u00e1 p\u0159esn\u00fd opak.",
      },
      {
        type: "order",
        instruction:
          "Se\u0159a\u010fte kroky p\u0159i p\u0159izp\u016fsobov\u00e1n\u00ed ant\u00e9ny k vys\u00edla\u010di:",
        items: [
          "Zm\u011b\u0159it SWR na po\u017eadovan\u00e9 frekvenci",
          "Pokud SWR > 1,5:1, zapojit ant\u00e9nn\u00ed tuner",
          "Nastavit tuner na minim\u00e1ln\u00ed SWR",
          "Ov\u011b\u0159it, \u017ee SWR je pod 2:1 v cel\u00e9m p\u00e1smu",
        ],
        explanation:
          "Spr\u00e1vn\u00fd postup: nejprve zm\u011b\u0159\u00edme, pak p\u0159izp\u016fsob\u00edme, nakonec ov\u011b\u0159\u00edme. SWR pod 2:1 je pro v\u011bt\u0161inu vys\u00edla\u010d\u016f akceptovateln\u00e9.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte v\u0161echna spr\u00e1vn\u00e1 tvrzen\u00ed o filtrech a p\u0159izp\u016fsoben\u00ed:",
        pool: [
          {
            text: "Doln\u00ed propust za vys\u00edla\u010dem potla\u010duje harmonick\u00e9 slo\u017eky",
            correct: true,
          },
          {
            text: "SWR 1:1 znamen\u00e1 dokonalé p\u0159izp\u016fsoben\u00ed",
            correct: true,
          },
          {
            text: "Horn\u00ed propust propou\u0161t\u00ed n\u00edzk\u00e9 frekvence",
            correct: false,
          },
          {
            text: "Ant\u00e9nn\u00ed tuner m\u011bn\u00ed impedanci ant\u00e9ny",
            correct: false,
          },
          {
            text: "P\u0159i nesouhlasu impedanc\u00ed vznikaj\u00ed odrazy",
            correct: true,
          },
        ],
        explanation:
          "Horn\u00ed propust propou\u0161t\u00ed vysok\u00e9 frekvence. Ant\u00e9nn\u00ed tuner nem\u011bn\u00ed impedanci ant\u00e9ny - transformuje ji tak, aby vys\u00edla\u010d vid\u011bl 50 \u03a9.",
      },
    ],
    relatedQuestionIds: [
      "T-CIR-011",
      "T-CIR-012",
      "T-CIR-013",
      "T-CIR-014",
      "T-CIR-015",
    ],
    tags: [
      "filtr",
      "impedancni-prizpusobeni",
      "swr",
      "antenni-tuner",
      "apply",
    ],
  },
];
