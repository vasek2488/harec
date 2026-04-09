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
    title: "Základní Q kódy pro každodenní provoz",
    objective:
      "Vysvětlit význam nejběžnějších Q kódů a správně je použít při rádiovém provozu.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Q kódy vznikly na počátku 20. století pro námořní telegrafii. Každý Q kód začíná písmenem Q a následují dvě písmena. S otazníkem je to otázka (QTH? = Jaká je vaše poloha?), bez otazníku tvrzení (QTH Praha = Moje poloha je Praha). Radioamatéři používají Q kódy i v hovorové řeči.",
        note: "Q kódy jsou univerzální - fungují bez ohledu na jazyk operátorů.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte Q kód k jeho významu:",
        pairs: [
          { left: "QTH", right: "Poloha stanice" },
          { left: "QRG", right: "Přesná frekvence" },
          { left: "QSL", right: "Potvrzení příjmu" },
          { left: "QSO", right: "Navázání spojení" },
        ],
        explanation:
          "QTH = kde jsem, QRG = na jaké frekvenci, QSL = potvrzuji příjem, QSO = spojení mezi stanicemi.",
      },
      {
        type: "fill-blank",
        textBefore: "Q kód pro rušení způsobené jinými stanicemi (umělými zdroji) je",
        blank: "QRM",
        distractors: ["QRN", "QSB", "QRT"],
        textAfter: ".",
        explanation:
          "QRM = umělé rušení (Man-made). QRN = přírodní rušení (Natural). Mnemotechnická pomůcka: M = Man-made, N = Natural.",
      },
      {
        type: "reveal",
        prompt:
          "Jak si zapamatovat rozdíl mezi QRM a QRN?",
        answer:
          "QRM - M jako Man-made (umělé rušení od stanic a zařízení). QRN - N jako Natural (atmosférické rušení, bouřky, statika).",
        explanation:
          "Tato mnemotechnická pomůcka je šířeji používána v radioamatérské komunitě.",
      },
      {
        type: "select-answer",
        question: "Co znamená QRZ?",
        choices: [
          { id: "a", text: "Kdo mě volá?" },
          { id: "b", text: "Jaká je vaše poloha?" },
          { id: "c", text: "Ukončete vysílání" },
          { id: "d", text: "Máte rušení?" },
        ],
        correctId: "a",
        explanation:
          "QRZ? = Kdo mě volá? Používá se, když operátor slyší volání, ale nerozumí volací značce. QTH = poloha, QRT = ukončit vysílání.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte provozní Q kódy k jejich významu:",
        pairs: [
          { left: "QRZ", right: "Kdo mě volá?" },
          { left: "QRS", right: "Vysílejte pomaleji" },
          { left: "QRT", right: "Ukončete vysílání" },
          { left: "QRV", right: "Jsem připraven" },
        ],
        explanation:
          "QRS = pomaleji (používá se hlavně při CW provozu). QRT = konec provozu. QRV = jsem připraven k příjmu.",
      },
      {
        type: "explain",
        content:
          "QSL karta je pohlednice potvrzující uskutečněné spojení. Radioamatéři si je posílají poštou nebo přes QSL byro. Na kartě je volací značka, datum, čas, frekvence, mód a report. Sbírání QSL karet je tradiční součást radioamatérského hobby.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte Q kódy související s kvalitou signálu a rušením:",
        pool: [
          { text: "QRM (umělé rušení)", correct: true },
          { text: "QRN (přírodní rušení)", correct: true },
          { text: "QSB (kolísání signálu)", correct: true },
          { text: "QTH (poloha)", correct: false },
          { text: "QSL (potvrzení)", correct: false },
        ],
        explanation:
          "QRM, QRN a QSB popisují podmínky příjmu. QTH a QSL s kvalitou signálu nesouvisejí.",
      },
      {
        type: "fill-blank",
        textBefore: "Q kód QSB označuje",
        blank: "kolísání síly signálu (fading)",
        distractors: [
          "umělé rušení",
          "polohu stanice",
          "změnu frekvence",
        ],
        textAfter: ".",
        explanation:
          "QSB = fading, kolísání signálu. Na KV se fading objevuje běžně vlivem změn v ionosféře.",
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
    title: "Rozšířené Q kódy a provozní kontext",
    objective:
      "Použít rozšířené Q kódy (QRP, QRO, QSY, QRX, QTR) ve správném provozním kontextu.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Kromě základních Q kódů existují další, které se týkají výkonu, změny frekvence a časového průběhu spojení. Tyto kódy jsou běžnou součástí radioamatérského žargonu a často se používají i v běžné hovoru mimo rádio.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte rozšířené Q kódy k jejich významu:",
        pairs: [
          { left: "QRP", right: "Nízký výkon (do 5 W)" },
          { left: "QRO", right: "Vysoký výkon" },
          { left: "QSY", right: "Změňte frekvenci" },
          { left: "QRX", right: "Počkejte, ozveme se" },
          { left: "QTR", right: "Přesný čas" },
        ],
        explanation:
          "QRP a QRO jsou opaky - nízký vs. vysoký výkon. QSY = přejděte na jinou frekvenci. QRX = čekejte.",
      },
      {
        type: "fill-blank",
        textBefore: "Provoz QRP obvykle znamená vysílání s výkonem do",
        blank: "5 W",
        distractors: ["1 W", "10 W", "100 W"],
        textAfter: ".",
        explanation:
          "QRP je konvenčně definován jako výkon do 5 W na CW nebo do 10 W PEP na SSB. Nejčastěji se uvádí hranice 5 W.",
      },
      {
        type: "select-answer",
        question:
          "Máte silné rušení na aktuální frekvenci. Který Q kód použijete pro návrh přesunu na jinou frekvenci?",
        choices: [
          { id: "a", text: "QSY" },
          { id: "b", text: "QRM" },
          { id: "c", text: "QRT" },
          { id: "d", text: "QRX" },
        ],
        correctId: "a",
        explanation:
          "QSY = změňte frekvenci. QRM popisuje rušení, ale nenavrhuje řešení. QRT = ukončete vysílání. QRX = počkejte.",
      },
      {
        type: "reveal",
        prompt: "Co znamená 'QRX 5'?",
        answer:
          "Počkejte 5 minut, pak se ozvu. Číslo za QRX udává počet minut čekání.",
        explanation:
          "QRX se používá, když operátor potřebuje přerušit spojení, ale chce v něm pokračovat.",
      },
      {
        type: "explain",
        content:
          "Q kódy se v praxi používají nejen v CW (telegrafii), ale i v hlasovém provozu. Mnozí radioamatéři říkají 'Jsem QRV' (připraven), 'Pojedeme QSY na 145.500' (změňme frekvenci) nebo 'Dnes jedu QRP' (s malým výkonem). Q kódy se staly součástí radioamatérského slangu.",
      },
      {
        type: "exam-question",
        questionId: "O-QCD-012",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte správná použití Q kódů:",
        pool: [
          {
            text: "QRP 5 W = vysílám s výkonem 5 W",
            correct: true,
          },
          {
            text: "QSY 145.500 = přejděte na 145.500 MHz",
            correct: true,
          },
          {
            text: "QTR 14:30 = přesný čas je 14:30",
            correct: true,
          },
          {
            text: "QRO = vysílejte pomaleji",
            correct: false,
          },
          {
            text: "QRX = ukončete vysílání",
            correct: false,
          },
        ],
        explanation:
          "QRO = vysoký výkon (ne pomaleji, to je QRS). QRX = počkejte (ne ukončete, to je QRT).",
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
