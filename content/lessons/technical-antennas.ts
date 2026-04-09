import type { Lesson } from "@/lib/types";

export const technicalAntennasLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson ant-01: Antenna types
  // -----------------------------------------------------------------------
  {
    id: "ant-01",
    examPartId: "technical",
    sectionId: "antennas",
    order: 1,
    title: "Typy ant\u00e9n a jejich vlastnosti",
    objective:
      "Rozli\u0161it z\u00e1kladn\u00ed typy ant\u00e9n, jejich polarizaci, zisk a vyz\u00e1\u0159ovac\u00ed diagram.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Ant\u00e9na p\u0159em\u011b\u0148uje elektrick\u00fd sign\u00e1l na elektromagnetickou vlnu a naopak. Nejjednodu\u0161\u0161\u00ed ant\u00e9nou je p\u016flvlnn\u00fd dip\u00f3l - vodi\u010d o d\u00e9lce poloviny vlnov\u00e9 d\u00e9lky. Jeho d\u00e9lku vypo\u010d\u00edt\u00e1me vzorcem: l = 150/f, kde f je frekvence v MHz a v\u00fdsledek je v metrech.",
        note: "Pro 7 MHz: l = 150/7 \u2248 21,4 m. Proto m\u00e1 dip\u00f3l na 40m p\u00e1smu cca 21 metr\u016f.",
      },
      {
        type: "slider",
        question:
          "Jak\u00e1 je d\u00e9lka p\u016flvlnn\u00e9ho dip\u00f3lu pro frekvenci 145 MHz?",
        min: 0.5,
        max: 3,
        step: 0.05,
        unit: "m",
        correctValue: 1.03,
        tolerance: 0.1,
        explanation:
          "l = 150/f = 150/145 \u2248 1,03 m. Na VHF jsou ant\u00e9ny p\u0159\u00edmo\u010d\u00e1\u0159e mal\u00e9 a praktick\u00e9.",
      },
      {
        type: "explain",
        content:
          "Polarizace ant\u00e9ny ur\u010duje sm\u011br kmit\u00e1n\u00ed elektrick\u00e9ho pole. Horizont\u00e1ln\u00ed dip\u00f3l m\u00e1 horizont\u00e1ln\u00ed polarizaci, vertik\u00e1ln\u00ed dip\u00f3l vertik\u00e1ln\u00ed. Pro spojen\u00ed mus\u00ed m\u00edt ob\u011b stanice stejnou polarizaci, jinak doch\u00e1z\u00ed ke ztr\u00e1t\u011b sign\u00e1lu a\u017e 20 dB.",
      },
      {
        type: "select-answer",
        question:
          "Kter\u00e1 ant\u00e9na m\u00e1 sm\u011brov\u00fd vyz\u00e1\u0159ovac\u00ed diagram a zisk typicky 6-15 dBd?",
        choices: [
          { id: "a", text: "Yagi-Uda" },
          { id: "b", text: "P\u016flvlnn\u00fd dip\u00f3l" },
          { id: "c", text: "Ground plane" },
          { id: "d", text: "Izotropn\u00ed z\u00e1\u0159i\u010d" },
        ],
        correctId: "a",
        explanation:
          "Yagi-Uda m\u00e1 jeden z\u00e1\u0159i\u010d, reflektor a jeden \u010di v\u00edce direktor\u016f. V\u00edce direktor\u016f = v\u011bt\u0161\u00ed zisk. Dip\u00f3l m\u00e1 zisk 0 dBd, ground plane je v\u0161esm\u011brov\u00e1.",
      },
      {
        type: "match",
        instruction: "P\u0159i\u0159a\u010fte typ ant\u00e9ny k jej\u00ed hlavn\u00ed vlastnosti:",
        pairs: [
          { left: "P\u016flvlnn\u00fd dip\u00f3l", right: "Referen\u010dn\u00ed ant\u00e9na, zisk 0 dBd" },
          { left: "Yagi-Uda", right: "Sm\u011brov\u00e1, vysok\u00fd zisk" },
          { left: "Ground plane", right: "Vertik\u00e1ln\u00ed v\u0161esm\u011brov\u00e1" },
          { left: "Smy\u010dkov\u00e1 (loop)", right: "Pot\u0159ebuje men\u0161\u00ed v\u00fd\u0161ku" },
        ],
        explanation:
          "Dip\u00f3l slou\u017e\u00ed jako reference (0 dBd). Ground plane je vertik\u00e1ln\u00ed dip\u00f3l nad zemn\u00ed plochou.",
      },
      {
        type: "order",
        instruction:
          "Se\u0159a\u010fte ant\u00e9ny od nejni\u017e\u0161\u00edho po nejvy\u0161\u0161\u00ed zisk:",
        items: [
          "Izotropn\u00ed z\u00e1\u0159i\u010d",
          "P\u016flvlnn\u00fd dip\u00f3l",
          "Ground plane",
          "Yagi-Uda 3 prvky",
          "Yagi-Uda 10 prvk\u016f",
        ],
        explanation:
          "Izotropn\u00ed z\u00e1\u0159i\u010d je teoretick\u00fd bod s 0 dBi. Dip\u00f3l m\u00e1 2,15 dBi. Ground plane cca 2 dBd. Yagi roste s po\u010dtem prvk\u016f.",
      },
      {
        type: "reveal",
        prompt: "Co je to zisk ant\u00e9ny a v jak\u00fdch jednotk\u00e1ch se m\u011b\u0159\u00ed?",
        answer:
          "Zisk ud\u00e1v\u00e1, kolikr\u00e1t ant\u00e9na soust\u0159e\u010fuje energii do ur\u010dit\u00e9ho sm\u011bru. M\u011b\u0159\u00ed se v dBi (proti izotropn\u00edmu z\u00e1\u0159i\u010di) nebo dBd (proti dip\u00f3lu). Rozd\u00edl: 0 dBd = 2,15 dBi.",
        explanation:
          "Vy\u0161\u0161\u00ed zisk znamen\u00e1 u\u017e\u0161\u00ed vyz\u00e1\u0159ovac\u00ed diagram - ant\u00e9na 's\u00edl\u00ed', ale jen v ur\u010dit\u00e9m sm\u011bru.",
      },
      {
        type: "exam-question",
        questionId: "T-ANT-001",
      },
      {
        type: "fill-blank",
        textBefore:
          "P\u016flvlnn\u00fd dip\u00f3l pro frekvenci 14 MHz m\u00e1 d\u00e9lku p\u0159ibli\u017en\u011b",
        blank: "10,7 m",
        distractors: ["21,4 m", "7 m", "14 m"],
        textAfter: ".",
        explanation:
          "l = 150/f = 150/14 \u2248 10,7 m. Hodnota 21,4 m by byla cel\u00e1 vlnov\u00e1 d\u00e9lka (300/14), ne p\u016flvlnn\u00fd dip\u00f3l.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte v\u0161echna spr\u00e1vn\u00e1 tvrzen\u00ed o ant\u00e9n\u00e1ch:",
        pool: [
          {
            text: "Yagi-Uda je sm\u011brov\u00e1 ant\u00e9na",
            correct: true,
          },
          {
            text: "Dip\u00f3l m\u00e1 v\u017edy vertik\u00e1ln\u00ed polarizaci",
            correct: false,
          },
          {
            text: "Zisk ant\u00e9ny se m\u011b\u0159\u00ed v dB",
            correct: true,
          },
          {
            text: "Ground plane vys\u00edl\u00e1 rovnom\u011brn\u011b do v\u0161ech sm\u011br\u016f v\u010detn\u011b nahoru",
            correct: false,
          },
          {
            text: "D\u00e9lka dip\u00f3lu z\u00e1vis\u00ed na frekvenci",
            correct: true,
          },
        ],
        explanation:
          "Dip\u00f3l m\u016f\u017ee b\u00fdt horizont\u00e1ln\u00ed i vertik\u00e1ln\u00ed. Ground plane vyz\u00e1\u0159uje p\u0159edev\u0161\u00edm k horizontu, ne nahoru.",
      },
    ],
    relatedQuestionIds: [
      "T-ANT-001",
      "T-ANT-002",
      "T-ANT-003",
      "T-ANT-004",
      "T-ANT-005",
      "T-ANT-006",
      "T-ANT-007",
      "T-ANT-008",
    ],
    tags: ["anteny", "dipol", "yagi", "zisk", "polarizace", "apply"],
  },

  // -----------------------------------------------------------------------
  // Lesson ant-02: Feedlines and SWR
  // -----------------------------------------------------------------------
  {
    id: "ant-02",
    examPartId: "technical",
    sectionId: "antennas",
    order: 2,
    title: "Nap\u00e1jec\u00ed veden\u00ed a PSV",
    objective:
      "Pochopit funkci koaxi\u00e1ln\u00edho kabelu, balunu a v\u00fdpo\u010det pom\u011bru stojat\u00fdch vln (PSV/SWR).",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Koaxi\u00e1ln\u00ed kabel p\u0159en\u00e1\u0161\u00ed sign\u00e1l z vys\u00edla\u010de do ant\u00e9ny. M\u00e1 charakteristickou impedanci - nejb\u011b\u017en\u011bji 50 \u03a9 (radioamat\u00e9\u0159i) nebo 75 \u03a9 (televize). Pokud impedance kabelu nesouhlas\u00ed s impedanc\u00ed ant\u00e9ny, \u010d\u00e1st energie se odr\u00e1\u017e\u00ed zp\u011bt.",
        note: "50\u03a9 koaxi\u00e1ln\u00ed kabely: RG-58, RG-213, Ecoflex.",
      },
      {
        type: "select-answer",
        question:
          "Jak\u00e1 je typick\u00e1 charakteristick\u00e1 impedance koaxi\u00e1ln\u00edho kabelu pro radioamat\u00e9rsk\u00e9 pou\u017eit\u00ed?",
        choices: [
          { id: "a", text: "50 \u03a9" },
          { id: "b", text: "75 \u03a9" },
          { id: "c", text: "300 \u03a9" },
          { id: "d", text: "600 \u03a9" },
        ],
        correctId: "a",
        explanation:
          "Standard pro radioamat\u00e9ry je 50 \u03a9. Kabel 75 \u03a9 se pou\u017e\u00edv\u00e1 pro televizn\u00ed rozvody, 300 \u03a9 pro symetrick\u00e9 veden\u00ed.",
      },
      {
        type: "explain",
        content:
          "PSV (pom\u011br stojat\u00fdch vln, anglicky SWR) m\u011b\u0159\u00ed kvalitu p\u0159izp\u016fsoben\u00ed ant\u00e9ny k veden\u00ed. Ide\u00e1ln\u00ed PSV = 1:1 znamen\u00e1 \u017e\u00e1dn\u00e9 odrazy. PSV 3:1 znamen\u00e1, \u017ee se odr\u00e1\u017e\u00ed 25 % energie. PSV nad 3:1 m\u016f\u017ee po\u0161kodit vys\u00edla\u010d.",
        note: "V\u011bt\u0161ina vys\u00edla\u010d\u016f automaticky sni\u017euje v\u00fdkon p\u0159i PSV > 2:1.",
      },
      {
        type: "slider",
        question:
          "Ant\u00e9na m\u00e1 impedanci 100 \u03a9, kabel 50 \u03a9. Jak\u00e9 je PSV?",
        min: 1,
        max: 5,
        step: 0.1,
        unit: ":1",
        correctValue: 2,
        tolerance: 0.2,
        explanation:
          "PSV = Zv\u011bt\u0161\u00ed / Zmen\u0161\u00ed = 100/50 = 2:1. PSV je v\u017edy pod\u00edl v\u011bt\u0161\u00ed impedance d\u011blen\u00e9 men\u0161\u00ed.",
      },
      {
        type: "reveal",
        prompt: "Co je to balun a k \u010demu slou\u017e\u00ed?",
        answer:
          "Balun (balanced-unbalanced) p\u0159ev\u00e1d\u00ed symetrick\u00e9 veden\u00ed na nesymetrick\u00e9. Pou\u017e\u00edv\u00e1 se p\u0159i p\u0159ipojen\u00ed symetrick\u00e9 ant\u00e9ny (dip\u00f3l) ke koaxi\u00e1ln\u00edmu kabelu.",
        explanation:
          "Bez balunu te\u010de proud po vn\u011bj\u0161\u00edm pl\u00e1\u0161ti koaxu a zkresluje vyz\u00e1\u0159ovac\u00ed diagram ant\u00e9ny.",
      },
      {
        type: "fill-blank",
        textBefore:
          "Pokud je PSV rovno 1:1, znamen\u00e1 to, \u017ee ant\u00e9na je",
        blank: "dokonale p\u0159izp\u016fsobena",
        distractors: ["zkratovan\u00e1", "odpojena", "rozlad\u011bna"],
        textAfter: "k nap\u00e1jec\u00edmu veden\u00ed.",
        explanation:
          "PSV 1:1 = \u017e\u00e1dn\u00e9 odrazy, ve\u0161ker\u00e1 energie jde do ant\u00e9ny. To je ide\u00e1ln\u00ed stav.",
      },
      {
        type: "match",
        instruction: "P\u0159i\u0159a\u010fte typ kabelu k jeho pou\u017eit\u00ed:",
        pairs: [
          { left: "RG-58 (50 \u03a9)", right: "Radioamat\u00e9rsk\u00e9 - kr\u00e1tk\u00e9 svody" },
          { left: "RG-213 (50 \u03a9)", right: "Radioamat\u00e9rsk\u00e9 - del\u0161\u00ed trasy" },
          { left: "RG-6 (75 \u03a9)", right: "Televizn\u00ed rozvody" },
          { left: "Symetrick\u00e9 veden\u00ed (300 \u03a9)", right: "P\u0159\u00edmo k dip\u00f3lu bez balunu" },
        ],
        explanation:
          "RG-58 m\u00e1 vy\u0161\u0161\u00ed ztr\u00e1ty ne\u017e RG-213, proto se hod\u00ed jen na kr\u00e1tk\u00e9 trasy. Symetrick\u00e9 veden\u00ed nepot\u0159ebuje balun.",
      },
      {
        type: "exam-question",
        questionId: "T-ANT-009",
      },
      {
        type: "highlight",
        instruction:
          "Vyberte faktory, kter\u00e9 zvy\u0161uj\u00ed ztr\u00e1ty v koaxi\u00e1ln\u00edm kabelu:",
        terms: [
          { text: "Vy\u0161\u0161\u00ed frekvence", correct: true },
          { text: "Del\u0161\u00ed kabel", correct: true },
          { text: "Vy\u0161\u0161\u00ed v\u00fdkon vys\u00edla\u010de", correct: false },
          { text: "Tlust\u0161\u00ed kabel", correct: false },
          { text: "Vlhkost a po\u0161kozen\u00ed", correct: true },
        ],
        explanation:
          "Ztr\u00e1ty rostou s frekvenc\u00ed a d\u00e9lkou. Tlust\u0161\u00ed kabel m\u00e1 naopak ni\u017e\u0161\u00ed ztr\u00e1ty. V\u00fdkon vys\u00edla\u010de na ztr\u00e1ty v dB nemaj\u00ed p\u0159\u00edm\u00fd vliv.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte spr\u00e1vn\u00e1 tvrzen\u00ed o PSV (SWR):",
        pool: [
          { text: "Ide\u00e1ln\u00ed hodnota PSV je 1:1", correct: true },
          {
            text: "PSV vy\u0161\u0161\u00ed ne\u017e 3:1 m\u016f\u017ee po\u0161kodit vys\u00edla\u010d",
            correct: true,
          },
          {
            text: "PSV m\u011b\u0159\u00edme v\u00fathov\u00fdm wattem",
            correct: false,
          },
          {
            text: "PSV z\u00e1vis\u00ed na p\u0159izp\u016fsoben\u00ed impedanc\u00ed",
            correct: true,
          },
          {
            text: "PSV se m\u011b\u0159\u00ed PSV metrem (SWR metrem)",
            correct: true,
          },
        ],
        explanation:
          "PSV se m\u011b\u0159\u00ed PSV metrem, nikoli wattem. PSV z\u00e1vis\u00ed na rozd\u00edlu impedanc\u00ed veden\u00ed a ant\u00e9ny.",
      },
    ],
    relatedQuestionIds: [
      "T-ANT-009",
      "T-ANT-010",
      "T-ANT-011",
      "T-ANT-012",
      "T-ANT-013",
      "T-ANT-014",
      "T-ANT-015",
    ],
    tags: ["koaxial", "impedance", "psv", "swr", "balun", "apply"],
  },
];
