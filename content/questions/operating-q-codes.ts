import type { Question } from "@/lib/types";

export const operatingQCodesQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Basic Q codes (q-codes-01): O-QCD-001 to O-QCD-011
  // -----------------------------------------------------------------------
  {
    id: "O-QCD-001",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QTH?",
    choices: [
      { id: "a", text: "Poloha stanice" },
      { id: "b", text: "Přesný čas" },
      { id: "c", text: "Frekvence vysílání" },
      { id: "d", text: "Síla signálu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QTH = poloha (zeměpisné umístění) stanice. QTH? = Jaká je vaše poloha? Přesný čas je QTR, frekvence je QRG. Viz slovník Q kódů.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qth", "recall"],
  },
  {
    id: "O-QCD-002",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRG?",
    choices: [
      { id: "a", text: "Přesná frekvence vysílání" },
      { id: "b", text: "Poloha stanice" },
      { id: "c", text: "Síla signálu" },
      { id: "d", text: "Potvrzení příjmu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRG = přesná pracovní frekvence. QRG? = Na jaké frekvenci vysíláte? QTH je poloha, QSL je potvrzení.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrg", "recall"],
  },
  {
    id: "O-QCD-003",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRM?",
    choices: [
      { id: "a", text: "Rušení od jiných stanic (umělé rušení)" },
      { id: "b", text: "Atmosférické rušení (přírodní)" },
      { id: "c", text: "Kolísání signálu (fading)" },
      { id: "d", text: "Změna frekvence" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRM = umělé rušení způsobené jinými stanicemi či zařízeními (M = Man-made). QRN = přírodní rušení (N = Natural). QSB = fading. Viz mnemotechnická pomůcka M/N.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrm", "recall"],
  },
  {
    id: "O-QCD-004",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRN?",
    choices: [
      { id: "a", text: "Atmosférické (přírodní) rušení" },
      { id: "b", text: "Rušení od jiných stanic" },
      { id: "c", text: "Vysílejte pomaleji" },
      { id: "d", text: "Jsem připraven" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRN = přírodní rušení (bouřky, statická elektřina, N = Natural). QRM = umělé rušení (M = Man-made). QRS = pomaleji. QRV = připraven.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrn", "recall"],
  },
  {
    id: "O-QCD-005",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QSL?",
    choices: [
      { id: "a", text: "Potvrzuji příjem / potvrzení spojení" },
      { id: "b", text: "Navázání spojení" },
      { id: "c", text: "Ukončení vysílání" },
      { id: "d", text: "Kdo mě volá?" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSL = potvrzuji příjem. QSL karta je pohlednice potvrzující spojení. QSO = spojení (ne potvrzení). QRT = konec. QRZ = kdo volá.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qsl", "recall"],
  },
  {
    id: "O-QCD-006",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QSO?",
    choices: [
      { id: "a", text: "Rádiové spojení mezi stanicemi" },
      { id: "b", text: "Potvrzení příjmu" },
      { id: "c", text: "Poloha stanice" },
      { id: "d", text: "Kolísání signálu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSO = rádiové spojení (komunikace) mezi dvěma nebo více stanicemi. QSL = potvrzení. QTH = poloha. QSB = kolísání signálu.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qso", "recall"],
  },
  {
    id: "O-QCD-007",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRZ?",
    choices: [
      { id: "a", text: "Kdo mě volá?" },
      { id: "b", text: "Jaká je vaše poloha?" },
      { id: "c", text: "Jsem připraven" },
      { id: "d", text: "Ukončete vysílání" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRZ? = Kdo mě volá? Používá se, když operátor slyší volání, ale nerozumí volací značce. QTH = poloha. QRV = připraven. QRT = ukončete.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrz", "recall"],
  },
  {
    id: "O-QCD-008",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QSB?",
    choices: [
      { id: "a", text: "Kolísání síly signálu (fading)" },
      { id: "b", text: "Umělé rušení" },
      { id: "c", text: "Přírodní rušení" },
      { id: "d", text: "Potvrzení spojení" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSB = fading, kolísání síly signálu. Na KV je fading běžný kvůli změnám v ionosféře. QRM = umělé rušení. QRN = přírodní rušení.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qsb", "recall"],
  },
  {
    id: "O-QCD-009",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRS?",
    choices: [
      { id: "a", text: "Vysílejte pomaleji" },
      { id: "b", text: "Vysílejte rychleji" },
      { id: "c", text: "Ukončete vysílání" },
      { id: "d", text: "Změňte frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRS = vysílejte pomaleji (používá se zejména při CW provozu). QRT = ukončete vysílání. QSY = změňte frekvenci. Viz Q kódy pro provoz.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrs", "recall"],
  },
  {
    id: "O-QCD-010",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRT?",
    choices: [
      { id: "a", text: "Ukončete vysílání / končím provoz" },
      { id: "b", text: "Jsem připraven" },
      { id: "c", text: "Vysílejte pomaleji" },
      { id: "d", text: "Kdo mě volá?" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRT = ukončete vysílání, končím provoz. QRV = jsem připraven (opak QRT v provozním smyslu). QRS = pomaleji. QRZ = kdo volá.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrt", "recall"],
  },
  {
    id: "O-QCD-011",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRV?",
    choices: [
      { id: "a", text: "Jsem připraven k příjmu" },
      { id: "b", text: "Ukončete vysílání" },
      { id: "c", text: "Potvrzuji příjem" },
      { id: "d", text: "Máte rušení?" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRV = jsem připraven (k příjmu nebo navázání spojení). QRT = končím. QSL = potvrzuji. QRM = rušení. Viz Q kódy.",
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
    wording: "Co znamená Q kód QRP?",
    choices: [
      { id: "a", text: "Provoz s nízkým výkonem (typicky do 5 W)" },
      { id: "b", text: "Provoz s vysokým výkonem" },
      { id: "c", text: "Změňte frekvenci" },
      { id: "d", text: "Počkejte, ozveme se" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRP = nízký výkon, konvenčně do 5 W (CW) nebo 10 W PEP (SSB). QRO = vysoký výkon (opak QRP). QSY = změňte frekvenci. QRX = počkejte.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qrp", "recall"],
  },
  {
    id: "O-QCD-013",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRO?",
    choices: [
      { id: "a", text: "Zvyšte výkon / provoz s vysokým výkonem" },
      { id: "b", text: "Snižte výkon" },
      { id: "c", text: "Vysílejte pomaleji" },
      { id: "d", text: "Kolísání signálu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRO = vysoký výkon (opak QRP). QRP = nízký výkon. QRS = pomaleji. QSB = kolísání signálu. Viz Q kódy pro výkon.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qro", "recall"],
  },
  {
    id: "O-QCD-014",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QSY?",
    choices: [
      { id: "a", text: "Změňte frekvenci" },
      { id: "b", text: "Ukončete vysílání" },
      { id: "c", text: "Potvrzuji příjem" },
      { id: "d", text: "Jsem připraven" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSY = změňte frekvenci (přejděte na jinou). QSY 145.500 = přejděte na 145.500 MHz. QRT = končím. QSL = potvrzuji. QRV = připraven.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qsy", "recall"],
  },
  {
    id: "O-QCD-015",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QRX?",
    choices: [
      { id: "a", text: "Počkejte / přerušení, ozveme se" },
      { id: "b", text: "Ukončete vysílání" },
      { id: "c", text: "Kdo mě volá?" },
      { id: "d", text: "Změňte frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRX = počkejte, ozveme se (QRX 5 = čekejte 5 minut). QRT = ukončete vysílání natrvalo. QRZ = kdo volá. QSY = změňte frekvenci.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qrx", "recall"],
  },
  {
    id: "O-QCD-016",
    examPartId: "operating",
    sectionId: "q-codes",
    wording: "Co znamená Q kód QTR?",
    choices: [
      { id: "a", text: "Přesný čas" },
      { id: "b", text: "Poloha stanice" },
      { id: "c", text: "Přesná frekvence" },
      { id: "d", text: "Kolísání signálu" },
    ],
    correctChoiceId: "a",
    explanation:
      "QTR = přesný čas. QTR? = Kolik je hodin? QTH = poloha (ne čas!). QRG = frekvence. Viz Q kódy.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qtr", "recall"],
  },
  {
    id: "O-QCD-017",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Který Q kód použijete, když chcete protistanici požádat o změnu frekvence?",
    choices: [
      { id: "a", text: "QSY" },
      { id: "b", text: "QRT" },
      { id: "c", text: "QRX" },
      { id: "d", text: "QRG" },
    ],
    correctChoiceId: "a",
    explanation:
      "QSY = změňte frekvenci. QRT = ukončete vysílání. QRX = počkejte. QRG = jaká je frekvence (informace, ne žádost o změnu).",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qsy", "apply"],
  },
  {
    id: "O-QCD-018",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Který Q kód označuje opak QRP?",
    choices: [
      { id: "a", text: "QRO" },
      { id: "b", text: "QRT" },
      { id: "c", text: "QRS" },
      { id: "d", text: "QRV" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRO = vysoký výkon, je opakem QRP (nízký výkon). QRT = konec provozu. QRS = pomaleji. QRV = připraven.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qro", "qrp", "analyze"],
  },
  {
    id: "O-QCD-019",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Jaký je rozdíl mezi QRM a QRN?",
    choices: [
      {
        id: "a",
        text: "QRM je umělé rušení (stanice/zařízení), QRN je přírodní rušení (atmosférické)",
      },
      {
        id: "b",
        text: "QRM je přírodní rušení, QRN je umělé rušení",
      },
      {
        id: "c",
        text: "QRM se týká frekvence, QRN se týká výkonu",
      },
      { id: "d", text: "Mezi nimi není žádný rozdíl" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRM = Man-made (umělé rušení od stanic a elektronických zařízení). QRN = Natural (atmosférické rušení, bouřky). Mnemotechnika: M = Man, N = Nature.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "qrm", "qrn", "analyze"],
  },
  {
    id: "O-QCD-020",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Co znamená 'QRX 10' v rádiovém provozu?",
    choices: [
      { id: "a", text: "Počkejte 10 minut, pak se ozvu" },
      { id: "b", text: "Přejděte na frekvenci 10 MHz" },
      { id: "c", text: "Vysílejte výkonem 10 W" },
      { id: "d", text: "Váš signál má sílu 10" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRX 10 = čekejte 10 minut. Číslo za QRX udává počet minut. QSY 10 by znamenalo změnu frekvence. QRP 10 by označoval výkon.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "qrx", "apply"],
  },
  {
    id: "O-QCD-021",
    examPartId: "operating",
    sectionId: "q-codes",
    wording:
      "Proč vznikly Q kódy a proč se používají dodnes?",
    choices: [
      {
        id: "a",
        text: "Vznikly pro námořní telegrafii jako univerzální zkratky srozumitelné bez ohledu na jazyk",
      },
      {
        id: "b",
        text: "Byly vymyšleny radioamatéry pro soutěže",
      },
      {
        id: "c",
        text: "Jsou povinné podle zákona o elektronických komunikacích",
      },
      {
        id: "d",
        text: "Používají se pouze při CW provozu a jinde nemají význam",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Q kódy vznikly na počátku 20. století pro námořní radiotelegrafii. Jejich hlavní výhoda je jazyková nezávislost - QTH znamená totéž v každém jazyce. Používají se i v hovorovém provozu, ne jen CW.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "historie", "recall"],
  },
];
