import type { Lesson } from "@/lib/types";

export const operatingQCodesLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Basic Q codes for everyday operation
  // -----------------------------------------------------------------------
  {
    id: "q-codes-01",
    examPartId: "operating",
    sectionId: "q-codes",
    order: 1,
    title: "Zakladni Q kody pro kazdodenni provoz",
    objective:
      "Vysvetlit vyznam nejbeznejsich Q kodu a spravne je pouzit pri radiovem provozu.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Q kody vznikly na pocatku 20. stoleti pro namorni telegrafii. Kazdy Q kod zacina pismenem Q a nasleduji dve pismena. S otaznikem je to otazka (QTH? = Jaka je vase poloha?), bez otazniku tvrzeni (QTH Praha = Moje poloha je Praha). Radioamateri pouzivaji Q kody i v hovorove reci.",
        note: "Q kody jsou univerzalni - fungují bez ohledu na jazyk operatoru.",
      },
      {
        type: "match",
        instruction:
          "Priradte Q kod k jeho vyznamu:",
        pairs: [
          { left: "QTH", right: "Poloha stanice" },
          { left: "QRG", right: "Presna frekvence" },
          { left: "QSL", right: "Potvrzeni prijmu" },
          { left: "QSO", right: "Navazani spojeni" },
        ],
        explanation:
          "QTH = kde jsem, QRG = na jake frekvenci, QSL = potvrzuji prijem, QSO = spojeni mezi stanicemi.",
      },
      {
        type: "fill-blank",
        textBefore: "Q kod pro ruseni zpusobene jinymi stanicemi (umelymi zdroji) je",
        blank: "QRM",
        distractors: ["QRN", "QSB", "QRT"],
        textAfter: ".",
        explanation:
          "QRM = umele ruseni (Man-made). QRN = prirodni ruseni (Natural). Mnemotechnicka pomucka: M = Man-made, N = Natural.",
      },
      {
        type: "reveal",
        prompt:
          "Jak si zapamatovat rozdil mezi QRM a QRN?",
        answer:
          "QRM - M jako Man-made (umele ruseni od stanic a zarizeni). QRN - N jako Natural (atmosfericke ruseni, bourky, statika).",
        explanation:
          "Tato mnemotechnicka pomucka je sirce pouzivana v radioamaterske komunite.",
      },
      {
        type: "select-answer",
        question: "Co znamena QRZ?",
        choices: [
          { id: "a", text: "Kdo me vola?" },
          { id: "b", text: "Jaka je vase poloha?" },
          { id: "c", text: "Ukoncete vysilani" },
          { id: "d", text: "Mate ruseni?" },
        ],
        correctId: "a",
        explanation:
          "QRZ? = Kdo me vola? Pouziva se, kdyz operator slysí volani, ale nerozumi volaci znacce. QTH = poloha, QRT = ukoncit vysilani.",
      },
      {
        type: "match",
        instruction:
          "Priradte provozni Q kody k jejich vyznamu:",
        pairs: [
          { left: "QRZ", right: "Kdo me vola?" },
          { left: "QRS", right: "Vysilejte pomaleji" },
          { left: "QRT", right: "Ukoncete vysilani" },
          { left: "QRV", right: "Jsem pripraven" },
        ],
        explanation:
          "QRS = pomaleji (pouziva se hlavne pri CW provozu). QRT = konec provozu. QRV = jsem pripraven k prijmu.",
      },
      {
        type: "explain",
        content:
          "QSL karta je pohlednice potvrzujici uskutecnene spojeni. Radioamateri si je posilaji postou nebo pres QSL byro. Na karte je volaci znacka, datum, cas, frekvence, mod a report. Sbirani QSL karet je tradicni soucast radioamaterskeho hobby.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte Q kody souvisejici s kvalitou signalu a rusenim:",
        pool: [
          { text: "QRM (umele ruseni)", correct: true },
          { text: "QRN (prirodni ruseni)", correct: true },
          { text: "QSB (kolisani signalu)", correct: true },
          { text: "QTH (poloha)", correct: false },
          { text: "QSL (potvrzeni)", correct: false },
        ],
        explanation:
          "QRM, QRN a QSB popisuji podminky prijmu. QTH a QSL s kvalitou signalu nesouvisejí.",
      },
      {
        type: "fill-blank",
        textBefore: "Q kod QSB oznacuje",
        blank: "kolisani sily signalu (fading)",
        distractors: [
          "umele ruseni",
          "polohu stanice",
          "zmenu frekvence",
        ],
        textAfter: ".",
        explanation:
          "QSB = fading, kolisani signalu. Na KV se fading objevuje bezne vlivem zmen v ionosfere.",
      },
      {
        type: "exam-question",
        questionId: "O-QCD-001",
      },
    ],
    relatedQuestionIds: [
      "O-QCD-001",
      "O-QCD-002",
      "O-QCD-003",
      "O-QCD-004",
      "O-QCD-005",
      "O-QCD-006",
      "O-QCD-007",
      "O-QCD-008",
      "O-QCD-009",
      "O-QCD-010",
      "O-QCD-011",
    ],
    tags: ["q-kody", "qth", "qrm", "qrn", "qsl", "qso", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: Extended Q codes and operational context
  // -----------------------------------------------------------------------
  {
    id: "q-codes-02",
    examPartId: "operating",
    sectionId: "q-codes",
    order: 2,
    title: "Rozsirene Q kody a provozni kontext",
    objective:
      "Pouzit rozsirene Q kody (QRP, QRO, QSY, QRX, QTR) ve spravnem provoznim kontextu.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Krome zakladnich Q kodu existuji dalsi, ktere se tykaji vykonu, zmeny frekvence a casoveho prubehu spojeni. Tyto kody jsou beznou soucasti radioamaterskeho zargonu a casto se pouzivaji i v bezne hovore mimo radio.",
      },
      {
        type: "match",
        instruction:
          "Priradte rozsirene Q kody k jejich vyznamu:",
        pairs: [
          { left: "QRP", right: "Nizky vykon (do 5 W)" },
          { left: "QRO", right: "Vysoky vykon" },
          { left: "QSY", right: "Zmente frekvenci" },
          { left: "QRX", right: "Pockejte, ozveme se" },
          { left: "QTR", right: "Presny cas" },
        ],
        explanation:
          "QRP a QRO jsou opaky - nizky vs. vysoky vykon. QSY = prejdete na jinou frekvenci. QRX = cekejte.",
      },
      {
        type: "fill-blank",
        textBefore: "Provoz QRP obvykle znamena vysilani s vykonem do",
        blank: "5 W",
        distractors: ["1 W", "10 W", "100 W"],
        textAfter: ".",
        explanation:
          "QRP je konvencne definovan jako vykon do 5 W na CW nebo do 10 W PEP na SSB. Nejcasteji se uvadi hranice 5 W.",
      },
      {
        type: "select-answer",
        question:
          "Mate silne ruseni na aktualni frekvenci. Ktery Q kod pouzijete pro navrh presunu na jinou frekvenci?",
        choices: [
          { id: "a", text: "QSY" },
          { id: "b", text: "QRM" },
          { id: "c", text: "QRT" },
          { id: "d", text: "QRX" },
        ],
        correctId: "a",
        explanation:
          "QSY = zmente frekvenci. QRM popisuje ruseni, ale nenavrhuje reseni. QRT = ukoncete vysilani. QRX = pockejte.",
      },
      {
        type: "reveal",
        prompt: "Co znamena 'QRX 5'?",
        answer:
          "Pockejte 5 minut, pak se ozvu. Cislo za QRX udava pocet minut cekani.",
        explanation:
          "QRX se pouziva, kdyz operator potrebuje prerusit spojeni, ale chce v nem pokracovat.",
      },
      {
        type: "explain",
        content:
          "Q kody se v praxi pouzivaji nejen v CW (telegrafii), ale i v hlasovem provozu. Mnozi radioamateri rikaji 'Jsem QRV' (pripraven), 'Pojedeme QSY na 145.500' (zmenme frekvenci) nebo 'Dnes jedu QRP' (s malym vykonem). Q kody se staly soucastí radioamaterskeho slangu.",
      },
      {
        type: "exam-question",
        questionId: "O-QCD-012",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte spravna pouziti Q kodu:",
        pool: [
          {
            text: "QRP 5 W = vysilam s vykonem 5 W",
            correct: true,
          },
          {
            text: "QSY 145.500 = prejdete na 145.500 MHz",
            correct: true,
          },
          {
            text: "QTR 14:30 = presny cas je 14:30",
            correct: true,
          },
          {
            text: "QRO = vysilejte pomaleji",
            correct: false,
          },
          {
            text: "QRX = ukoncete vysilani",
            correct: false,
          },
        ],
        explanation:
          "QRO = vysoky vykon (ne pomaleji, to je QRS). QRX = pockejte (ne ukoncete, to je QRT).",
      },
    ],
    relatedQuestionIds: [
      "O-QCD-012",
      "O-QCD-013",
      "O-QCD-014",
      "O-QCD-015",
      "O-QCD-016",
      "O-QCD-017",
      "O-QCD-018",
      "O-QCD-019",
      "O-QCD-020",
      "O-QCD-021",
    ],
    tags: ["q-kody", "qrp", "qro", "qsy", "provoz", "recall"],
  },
];
