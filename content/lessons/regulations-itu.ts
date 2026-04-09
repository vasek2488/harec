import type { Lesson } from "@/lib/types";

export const regulationsItuLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: ITU a Radiokomunikacni rad
  // -----------------------------------------------------------------------
  {
    id: "itu-01",
    examPartId: "regulations",
    sectionId: "itu",
    order: 1,
    title: "ITU a Radiokomunikacni rad",
    objective:
      "Porozumet strukture ITU, ucelu Radiokomunikacniho radu a roli Svetove radiokomunikacni konference (WRC).",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "Mezinarodni telekomunikacni unie (ITU) je specializovana agentura OSN se sidlem v Zeneve. Spravuje mezinarodni vyuzivani radioveho spektra a druzicovych drah. Pro radioamatery je dulezita, protoze stanovuje ramcova pravidla pro amaterskou sluzbu celosvetove.",
        note: "ITU byla zalozena v roce 1865 jako Mezinarodni telegrafni unie - je jednou z nejstarsich mezinarodních organizaci.",
      },
      {
        type: "match",
        instruction: "Priradte sektory ITU k jejich oblasti pusobnosti:",
        pairs: [
          { left: "ITU-R", right: "Radiokomunikace a spektrum" },
          { left: "ITU-T", right: "Standardizace telekomunikaci" },
          { left: "ITU-D", right: "Rozvoj telekomunikaci" },
        ],
        explanation:
          "ITU ma tri sektory. Pro radioamatery je nejdulezitejsi ITU-R (Radiocommunication Sector), ktery spravuje kmitoctove spektrum a pripravuje Radiokomunikacni rad.",
      },
      {
        type: "select-answer",
        question: "Co je Radiokomunikacni rad (Radio Regulations)?",
        choices: [
          {
            id: "a",
            text: "Mezinarodni smlouva regulujici vyuzivani kmitoctoveho spektra",
          },
          { id: "b", text: "Narodni zakon o telekomunikacich" },
          { id: "c", text: "Technicka norma pro vysilace" },
          { id: "d", text: "Ucebnice radiokomunikaci" },
        ],
        correctId: "a",
        explanation:
          "Radiokomunikacni rad je mezinarodni smlouva s pravni zavaznosti pro clenske staty ITU. Reguluje vyuzivani kmitoctoveho spektra a druzicovych drah.",
      },
      {
        type: "explain",
        content:
          "Svetova radiokomunikacni konference (WRC - World Radiocommunication Conference) je nejvyssi organ ITU-R pro revizi Radiokomunikacniho radu. Kona se kazdych 3-4 roky. Na WRC se rozhoduje o zmenach v pridelovani kmitoctu, vcetne pasem pro amaterskou sluzbu. Kazda clenska zeme ma jeden hlas.",
      },
      {
        type: "fill-blank",
        textBefore: "Svetova radiokomunikacni konference (WRC) se kona priblizne kazdych",
        blank: "3-4 roky",
        distractors: ["rok", "10 let", "6 mesicu"],
        textAfter: " a aktualizuje Radiokomunikacni rad.",
        explanation:
          "WRC se kona zpravidla kazdych 3-4 roky. Posledni konference WRC-23 se konala v roce 2023 v Dubaji.",
      },
      {
        type: "reveal",
        prompt:
          "Jaky je zakladni dokument ITU, ktery definuje cile a strukturu organizace?",
        answer: "Ustava ITU (ITU Constitution)",
        explanation:
          "Ustava ITU spolu s Umluvou ITU (Convention) tvori zakladni pravni ramec organizace. Radiokomunikacni rad je pak doplnkova smlouva.",
      },
      {
        type: "highlight",
        instruction:
          "Oznacte, co spada do pusobnosti ITU-R (Radiokomunikacniho sektoru):",
        terms: [
          { text: "Sprava kmitoctoveho spektra", correct: true },
          { text: "Priprava Radiokomunikacniho radu", correct: true },
          { text: "Organizace WRC", correct: true },
          { text: "Standardizace pevnych siticovych protokolu", correct: false },
          { text: "Rozvojova pomoc chudy zemim", correct: false },
        ],
        explanation:
          "ITU-R se zabyva radiokomunikacemi - spravou spektra, pripravou Radio Regulations a organizaci WRC. Sitove protokoly resi ITU-T, rozvojovou pomoc ITU-D.",
      },
      {
        type: "exam-question",
        questionId: "R-ITU-001",
      },
      {
        type: "exam-question",
        questionId: "R-ITU-003",
      },
    ],
    relatedQuestionIds: [
      "R-ITU-001",
      "R-ITU-002",
      "R-ITU-003",
      "R-ITU-004",
      "R-ITU-005",
    ],
    tags: ["itu", "radiokomunikacni-rad", "wrc", "struktura-itu"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: Kmitoctove prideleni a tridy emisi
  // -----------------------------------------------------------------------
  {
    id: "itu-02",
    examPartId: "regulations",
    sectionId: "itu",
    order: 2,
    title: "Kmitoctove prideleni a tridy emisi",
    objective:
      "Znat rozdeleni sveta na ITU regiony, chapat system oznacovani trid emisi a umet identifikovat bezne druhy emisi pouzivane v amaterske sluzbe.",
    estimatedMinutes: 10,
    slides: [
      {
        type: "explain",
        content:
          "ITU deli svet na 3 regiony pro ucely pridelovani kmitoctu. Kazdy region ma vlastni tabulku kmitoctovych prideleni. Ceska republika lezi v Regionu 1, ktery zahrnuje Evropu, Afriku, Blizky vychod a cast Asie zapade od Iranu.",
        note: "Region 2 = Amerika (Severní i Jizni), Region 3 = Asie a Pacifik (vcetne Australie).",
      },
      {
        type: "select-answer",
        question: "Do ktereho ITU regionu patri Ceska republika?",
        choices: [
          { id: "a", text: "Region 1" },
          { id: "b", text: "Region 2" },
          { id: "c", text: "Region 3" },
          { id: "d", text: "Region 0" },
        ],
        correctId: "a",
        explanation:
          "CR je v Regionu 1 (Evropa, Afrika, Blizky vychod). Proto se kmitoctova prideleni pro ceske radioamatery ridi tabulkou pro Region 1.",
      },
      {
        type: "explain",
        content:
          "Trida emise se v ITU oznacuje kodem o minimalne 3 znacich. Prvni znak urcuje typ modulace nosne (napr. A = amplitudova, F = kmitoctova, J = SSB s potlacenou nosnou). Druhy znak urcuje povahu modulacniho signalu (napr. 1 = digitalni bez podnosne, 3 = jeden analogovy kanal). Treti znak urcuje typ prenasene informace (napr. A = telegrafie, E = telefonie/hlas).",
      },
      {
        type: "match",
        instruction:
          "Priradte oznaceni emise k odpovidajicimu druhu provozu:",
        pairs: [
          { left: "A1A", right: "CW (telegrafie Morseovkou)" },
          { left: "J3E", right: "SSB telefonie (hlas)" },
          { left: "F3E", right: "FM telefonie (hlas)" },
          { left: "A3E", right: "AM telefonie (hlas)" },
        ],
        explanation:
          "A1A = CW, J3E = SSB hlas, F3E = FM hlas, A3E = AM hlas. Toto jsou nejbeznejsi tridy emise v amaterske sluzbe.",
      },
      {
        type: "fill-blank",
        textBefore: "Oznaceni emise J3E znamena",
        blank: "SSB s potlacenou nosnou - telefonie",
        distractors: [
          "FM telefonie",
          "CW telegrafie",
          "AM s plnou nosnou",
        ],
        textAfter: ". Je to nejbeznejsi druh emise na KV pasmech.",
        explanation:
          "J = jednopasmenova emise s potlacenou nosnou (SSB), 3 = jeden analogovy kanal, E = telefonie (hlas).",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte spravne kombinace oznaceni emise a jejich vyznamu:",
        pool: [
          { text: "A1A = CW telegrafie", correct: true },
          { text: "F3E = FM hlas", correct: true },
          { text: "J3E = SSB hlas", correct: true },
          { text: "A1A = AM telefonie", correct: false },
          { text: "J3E = FM data", correct: false },
          { text: "F3E = CW telegrafie", correct: false },
        ],
        explanation:
          "A1A je CW (telegrafie klicovanim nosne), F3E je FM telefonie a J3E je SSB telefonie s potlacenou nosnou.",
      },
      {
        type: "order",
        instruction:
          "Seradte casti oznaceni tridy emise v poradi, jak se zapisuji (zleva doprava):",
        items: [
          "Typ modulace nosne (pismeno)",
          "Povaha modulacniho signalu (cislo)",
          "Typ prenasene informace (pismeno)",
        ],
        explanation:
          "Oznaceni tridy emise se cte zleva: prvni znak = typ modulace, druhy = povaha signalu, treti = typ informace. Napr. J-3-E.",
      },
      {
        type: "exam-question",
        questionId: "R-ITU-008",
      },
      {
        type: "exam-question",
        questionId: "R-ITU-009",
      },
      {
        type: "exam-question",
        questionId: "R-ITU-006",
      },
    ],
    relatedQuestionIds: [
      "R-ITU-006",
      "R-ITU-007",
      "R-ITU-008",
      "R-ITU-009",
      "R-ITU-010",
      "R-ITU-011",
    ],
    tags: ["itu", "regiony", "tridy-emisi", "kmitocty", "ssb", "cw", "fm"],
  },

  // -----------------------------------------------------------------------
  // Lesson 3: Amaterska sluzba v ITU
  // -----------------------------------------------------------------------
  {
    id: "itu-03",
    examPartId: "regulations",
    sectionId: "itu",
    order: 3,
    title: "Amaterska sluzba v ITU",
    objective:
      "Znat definici amaterske sluzby podle ITU, obsah Clanku 25 Radiokomunikacniho radu a zakladni principy amaterske druzicove sluzby.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "Amaterska sluzba je v Radiokomunikacnim radu ITU definovana v Clanku 25 (Article 25). Definice zni: radiokomunikacni sluzba pro ucely sebevzdelavani (self-training), vzajemne komunikace a technickych pokusu provadenych radioamatery - tedy osobami s prislusnym opravnenim, ktere se zajimaji o radiotechniku ciste z osobniho zajmu a bez financniho prospechu.",
        note: "Klicova slova definice: self-training, osobni zajem, bez financniho prospechu (without pecuniary interest).",
      },
      {
        type: "highlight",
        instruction:
          "Oznacte vlastnosti, ktere podle ITU patri k definici amaterske sluzby:",
        terms: [
          { text: "Sebevzdelavani (self-training)", correct: true },
          { text: "Technicke experimentovani", correct: true },
          { text: "Osobni zajem bez financniho prospechu", correct: true },
          { text: "Komercni komunikace", correct: false },
          { text: "Vojenske ucely", correct: false },
          { text: "Sireni rozhlasoveho vysílani", correct: false },
        ],
        explanation:
          "Amaterska sluzba je vyhradne pro sebevzdelavani, technicke pokusy a osobni zajem. Komercni, vojenske ci rozhlasove vyuziti neni povoleno.",
      },
      {
        type: "select-answer",
        question:
          "Muze radioamater vyuzivat amaterskou sluzbu ke komercnim ucelum?",
        choices: [
          { id: "a", text: "Ne, je to vyslovne zakazano definici ITU" },
          { id: "b", text: "Ano, pokud ma povoleni od CTU" },
          { id: "c", text: "Ano, pro maly rozsah podnikani" },
          { id: "d", text: "Ano, pokud je clnem radioamaterskeho klubu" },
        ],
        correctId: "a",
        explanation:
          "Definice ITU vyslovne uvadi 'without pecuniary interest' (bez financniho prospechu). Komercni vyuziti amaterske sluzby je zakazano.",
      },
      {
        type: "explain",
        content:
          "Amaterska druzicova sluzba (Amateur-Satellite Service) je definovana jako radiokomunikacni sluzba vyuzivajici kosmicke stanice na druzicich Zeme pro tytez ucely jako amaterska sluzba. Radioamateri mohou komunikovat prostrednictvim amaterskich druzic, jako je napriklad rada satelitu OSCAR.",
      },
      {
        type: "fill-blank",
        textBefore: "Amaterska sluzba je v Radiokomunikacnim radu ITU definovana v",
        blank: "Clanku 25",
        distractors: ["Clanku 1", "Clanku 19", "Clanku 30"],
        textAfter: " (Article 25).",
        explanation:
          "Clanek 25 je venovany amaterske sluzbe a amaterske druzicove sluzbe. Stanovi zakladni podminky pro provozovani techto sluzeb.",
      },
      {
        type: "reveal",
        prompt:
          "Jaky mezinarodni nouzovy kmitocet se pouziva v amaterske sluzbe na KV?",
        answer: "14,300 MHz",
        explanation:
          "Kmitocet 14,300 MHz (pasmo 20 m) je mezinarodne uznavan jako nouzovy kmitocet amaterske sluzby. Pouziva se pro tisnovouvolani a koordinaci pomoci pri katastrofach.",
      },
      {
        type: "match",
        instruction:
          "Priradte pojmy z Clanku 25 k jejich vyznamum:",
        pairs: [
          { left: "Self-training", right: "Sebevzdelavani" },
          { left: "Without pecuniary interest", right: "Bez financniho prospechu" },
          { left: "Amateur-Satellite Service", right: "Amaterska druzicova sluzba" },
          { left: "Duly authorized persons", right: "Osoby s prislusnym opravnenim" },
        ],
        explanation:
          "Tyto pojmy jsou klicove pro pochopeni definice amaterske sluzby v ITU Radio Regulations.",
      },
      {
        type: "exam-question",
        questionId: "R-ITU-012",
      },
      {
        type: "exam-question",
        questionId: "R-ITU-014",
      },
    ],
    relatedQuestionIds: [
      "R-ITU-012",
      "R-ITU-013",
      "R-ITU-014",
      "R-ITU-015",
      "R-ITU-016",
    ],
    tags: [
      "itu",
      "clanek-25",
      "amaterska-sluzba",
      "amaterska-druzicova-sluzba",
      "definice",
    ],
  },
];
