import type { Question } from "@/lib/types";

export const operatingQCodesQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Basic Q codes (q-codes-01): O-QCD-001 to O-QCD-011
  // -----------------------------------------------------------------------
  {
    id: "O-QCD-001",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QTH?",
    choices: [
      { id: "a", text: "Poloha stanice" },
      { id: "b", text: "Presny cas" },
      { id: "c", text: "Frekvence vysilani" },
      { id: "d", text: "Sila signalu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QTH = poloha (zemepisne umisteni) stanice. QTH? = Jaka je vase poloha? Presny cas je QTR, frekvence je QRG. Viz slovnik Q kodu.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qth", "recall"],
  },
  {
    id: "O-QCD-002",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRG?",
    choices: [
      { id: "a", text: "Presna frekvence vysilani" },
      { id: "b", text: "Poloha stanice" },
      { id: "c", text: "Sila signalu" },
      { id: "d", text: "Potvrzeni prijmu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRG = presna pracovni frekvence. QRG? = Na jake frekvenci vysilate? QTH je poloha, QSL je potvrzeni.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrg", "recall"],
  },
  {
    id: "O-QCD-003",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRM?",
    choices: [
      { id: "a", text: "Ruseni od jinych stanic (umele ruseni)" },
      { id: "b", text: "Atmosfericke ruseni (prirodni)" },
      { id: "c", text: "Kolisani signalu (fading)" },
      { id: "d", text: "Zmena frekvence" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRM = umele ruseni zpusobene jinymi stanicemi ci zarizeni (M = Man-made). QRN = prirodni ruseni (N = Natural). QSB = fading. Viz mnemotechnicka pomucka M/N.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrm", "recall"],
  },
  {
    id: "O-QCD-004",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRN?",
    choices: [
      { id: "a", text: "Atmosfericke (prirodni) ruseni" },
      { id: "b", text: "Ruseni od jinych stanic" },
      { id: "c", text: "Vysilejte pomaleji" },
      { id: "d", text: "Jsem pripraven" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRN = prirodni ruseni (bourky, staticka elektrina, N = Natural). QRM = umele ruseni (M = Man-made). QRS = pomaleji. QRV = pripraven.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrn", "recall"],
  },
  {
    id: "O-QCD-005",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QSL?",
    choices: [
      { id: "a", text: "Potvrzuji prijem / potvrzeni spojeni" },
      { id: "b", text: "Navazani spojeni" },
      { id: "c", text: "Ukonceni vysilani" },
      { id: "d", text: "Kdo me vola?" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSL = potvrzuji prijem. QSL karta je pohlednice potvrzujici spojeni. QSO = spojeni (ne potvrzeni). QRT = konec. QRZ = kdo vola.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qsl", "recall"],
  },
  {
    id: "O-QCD-006",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QSO?",
    choices: [
      { id: "a", text: "Radiove spojeni mezi stanicemi" },
      { id: "b", text: "Potvrzeni prijmu" },
      { id: "c", text: "Poloha stanice" },
      { id: "d", text: "Kolisani signalu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSO = radiove spojeni (komunikace) mezi dvema nebo vice stanicemi. QSL = potvrzeni. QTH = poloha. QSB = kolisani signalu.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qso", "recall"],
  },
  {
    id: "O-QCD-007",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRZ?",
    choices: [
      { id: "a", text: "Kdo me vola?" },
      { id: "b", text: "Jaka je vase poloha?" },
      { id: "c", text: "Jsem pripraven" },
      { id: "d", text: "Ukoncete vysilani" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRZ? = Kdo me vola? Pouziva se, kdyz operator slysí volani, ale nerozumi volaci znacce. QTH = poloha. QRV = pripraven. QRT = ukoncete.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrz", "recall"],
  },
  {
    id: "O-QCD-008",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QSB?",
    choices: [
      { id: "a", text: "Kolisani sily signalu (fading)" },
      { id: "b", text: "Umele ruseni" },
      { id: "c", text: "Prirodni ruseni" },
      { id: "d", text: "Potvrzeni spojeni" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSB = fading, kolisani sily signalu. Na KV je fading bezny kvuli zmenam v ionosfere. QRM = umele ruseni. QRN = prirodni ruseni.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qsb", "recall"],
  },
  {
    id: "O-QCD-009",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRS?",
    choices: [
      { id: "a", text: "Vysilejte pomaleji" },
      { id: "b", text: "Vysilejte rychleji" },
      { id: "c", text: "Ukoncete vysilani" },
      { id: "d", text: "Zmente frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRS = vysilejte pomaleji (pouziva se zejmena pri CW provozu). QRT = ukoncete vysilani. QSY = zmente frekvenci. Viz Q kody pro provoz.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrs", "recall"],
  },
  {
    id: "O-QCD-010",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRT?",
    choices: [
      { id: "a", text: "Ukoncete vysilani / koncim provoz" },
      { id: "b", text: "Jsem pripraven" },
      { id: "c", text: "Vysilejte pomaleji" },
      { id: "d", text: "Kdo me vola?" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRT = ukoncete vysilani, koncim provoz. QRV = jsem pripraven (opak QRT v provoznim smyslu). QRS = pomaleji. QRZ = kdo vola.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrt", "recall"],
  },
  {
    id: "O-QCD-011",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRV?",
    choices: [
      { id: "a", text: "Jsem pripraven k prijmu" },
      { id: "b", text: "Ukoncete vysilani" },
      { id: "c", text: "Potvrzuji prijem" },
      { id: "d", text: "Mate ruseni?" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRV = jsem pripraven (k prijmu nebo navazani spojeni). QRT = koncim. QSL = potvrzuji. QRM = ruseni. Viz Q kody.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrv", "recall"],
  },

  // -----------------------------------------------------------------------
  // Extended Q codes (q-codes-02): O-QCD-012 to O-QCD-021
  // -----------------------------------------------------------------------
  {
    id: "O-QCD-012",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRP?",
    choices: [
      { id: "a", text: "Provoz s nizkym vykonem (typicky do 5 W)" },
      { id: "b", text: "Provoz s vysokym vykonem" },
      { id: "c", text: "Zmente frekvenci" },
      { id: "d", text: "Pockejte, ozveme se" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRP = nizky vykon, konvencne do 5 W (CW) nebo 10 W PEP (SSB). QRO = vysoky vykon (opak QRP). QSY = zmente frekvenci. QRX = pockejte.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qrp", "recall"],
  },
  {
    id: "O-QCD-013",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRO?",
    choices: [
      { id: "a", text: "Zvyste vykon / provoz s vysokym vykonem" },
      { id: "b", text: "Snizite vykon" },
      { id: "c", text: "Vysilejte pomaleji" },
      { id: "d", text: "Kolisani signalu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRO = vysoky vykon (opak QRP). QRP = nizky vykon. QRS = pomaleji. QSB = kolisani signalu. Viz Q kody pro vykon.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qro", "recall"],
  },
  {
    id: "O-QCD-014",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QSY?",
    choices: [
      { id: "a", text: "Zmente frekvenci" },
      { id: "b", text: "Ukoncete vysilani" },
      { id: "c", text: "Potvrzuji prijem" },
      { id: "d", text: "Jsem pripraven" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSY = zmente frekvenci (prejdete na jinou). QSY 145.500 = prejdete na 145.500 MHz. QRT = koncim. QSL = potvrzuji. QRV = pripraven.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qsy", "recall"],
  },
  {
    id: "O-QCD-015",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QRX?",
    choices: [
      { id: "a", text: "Pockejte / preruseni, ozveme se" },
      { id: "b", text: "Ukoncete vysilani" },
      { id: "c", text: "Kdo me vola?" },
      { id: "d", text: "Zmente frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRX = pockejte, ozveme se (QRX 5 = cekejte 5 minut). QRT = ukoncete vysilani natrvalo. QRZ = kdo vola. QSY = zmente frekvenci.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qrx", "recall"],
  },
  {
    id: "O-QCD-016",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamena Q kod QTR?",
    choices: [
      { id: "a", text: "Presny cas" },
      { id: "b", text: "Poloha stanice" },
      { id: "c", text: "Presna frekvence" },
      { id: "d", text: "Kolisani signalu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QTR = presny cas. QTR? = Kolik je hodin? QTH = poloha (ne cas!). QRG = frekvence. Viz Q kody.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qtr", "recall"],
  },
  {
    id: "O-QCD-017",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Ktery Q kod pouzijete, kdyz chcete protistanici pozadat o zmenu frekvence?",
    choices: [
      { id: "a", text: "QSY" },
      { id: "b", text: "QRT" },
      { id: "c", text: "QRX" },
      { id: "d", text: "QRG" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSY = zmente frekvenci. QRT = ukoncete vysilani. QRX = pockejte. QRG = jaka je frekvence (informace, ne zadost o zmenu).",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qsy", "apply"],
  },
  {
    id: "O-QCD-018",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Ktery Q kod oznacuje opak QRP?",
    choices: [
      { id: "a", text: "QRO" },
      { id: "b", text: "QRT" },
      { id: "c", text: "QRS" },
      { id: "d", text: "QRV" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRO = vysoky vykon, je opakem QRP (nizky vykon). QRT = konec provozu. QRS = pomaleji. QRV = pripraven.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qro", "qrp", "analyze"],
  },
  {
    id: "O-QCD-019",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Jaky je rozdil mezi QRM a QRN?",
    choices: [
      {
        id: "a",
        text: "QRM je umele ruseni (stanice/zarizeni), QRN je prirodni ruseni (atmosfericke)",
      },
      {
        id: "b",
        text: "QRM je prirodni ruseni, QRN je umele ruseni",
      },
      {
        id: "c",
        text: "QRM se tyka frekvence, QRN se tyka vykonu",
      },
      { id: "d", text: "Mezi nimi neni zadny rozdil" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRM = Man-made (umele ruseni od stanic a elektronickych zarizeni). QRN = Natural (atmosfericke ruseni, bourky). Mnemotechnika: M = Man, N = Nature.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrm", "qrn", "analyze"],
  },
  {
    id: "O-QCD-020",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Co znamena 'QRX 10' v radiovem provozu?",
    choices: [
      { id: "a", text: "Pockejte 10 minut, pak se ozvu" },
      { id: "b", text: "Prejdete na frekvenci 10 MHz" },
      { id: "c", text: "Vysilejte vykonem 10 W" },
      { id: "d", text: "Vas signal ma silu 10" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRX 10 = cekejte 10 minut. Cislo za QRX udava pocet minut. QSY 10 by znamenalo zmenu frekvence. QRP 10 by oznacoval vykon.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qrx", "apply"],
  },
  {
    id: "O-QCD-021",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Proc vznikly Q kody a proc se pouzivaji dodnes?",
    choices: [
      {
        id: "a",
        text: "Vznikly pro namorni telegrafii jako univerzalni zkratky srozumitelne bez ohledu na jazyk",
      },
      {
        id: "b",
        text: "Byly vymysleny radioamatery pro souteze",
      },
      {
        id: "c",
        text: "Jsou povinne podle zakona o elektronickych komunikacich",
      },
      {
        id: "d",
        text: "Pouzivaji se pouze pri CW provozu a jinde nemaji vyznam",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Q kody vznikly na pocatku 20. stoleti pro namorni radiotelegrafii. Jejich hlavni vyhoda je jazykova nezavislost - QTH znamena totez v kazdem jazyce. Pouzivaji se i v hovorovem provozu, ne jen CW.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "historie", "recall"],
  },
];
