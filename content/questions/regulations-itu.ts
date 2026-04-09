import type { Question } from "@/lib/types";

export const regulationsItuQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // ITU structure, Radio Regulations, WRC (itu-01): R-ITU-001 to R-ITU-005
  // -----------------------------------------------------------------------
  {
    id: "R-ITU-001",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Ktery sektor ITU se zabyva radiokomunikacemi?",
    choices: [
      { id: "a", text: "ITU-R (Radiokomunikacni sektor)" },
      { id: "b", text: "ITU-T (Telekomunikacni standardizacni sektor)" },
      { id: "c", text: "ITU-D (Rozvojovy sektor)" },
      { id: "d", text: "ITU-S (Satelitni sektor)" },
    ],
    correctChoiceId: "a",
    explanation:
      "ITU-R (Radiocommunication Sector) je sektor ITU zodpovedny za vsechny zalezitosti tykajici se radiokomunikaci, vcetne spravni kmitoctoveho spektra. ITU-T se zabyva standardizaci telekomunikaci, ITU-D rozvojem. ITU-S neexistuje.",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "struktura", "recall"],
  },
  {
    id: "R-ITU-002",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co je hlavnim ucelem Radiokomunikacniho radu (Radio Regulations)?",
    choices: [
      {
        id: "a",
        text: "Mezinarodni regulace vyuzivani kmitoctoveho spektra a drevu na orbite",
      },
      { id: "b", text: "Stanoveni cen za vyuzivani kmitoctu" },
      { id: "c", text: "Regulace obsahu vysílani" },
      { id: "d", text: "Urcovani technickych parametru prijimaci" },
    ],
    correctChoiceId: "a",
    explanation:
      "Radiokomunikacni rad (Radio Regulations) je mezinarodni smlouva, ktera reguluje vyuzivani kmitoctoveho spektra a drah druzic. Nereguluje ceny ani obsah vysílani.",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "radiokomunikacni-rad", "recall"],
  },
  {
    id: "R-ITU-003",
    examPartId: "regulations",
    sectionId: "itu",
    wording:
      "Jak se nazyva konference, na ktere se aktualizuje Radiokomunikacni rad?",
    choices: [
      {
        id: "a",
        text: "WRC (World Radiocommunication Conference)",
      },
      {
        id: "b",
        text: "WTSA (World Telecommunication Standardization Assembly)",
      },
      {
        id: "c",
        text: "PP (Plenipotentiary Conference)",
      },
      {
        id: "d",
        text: "CEPT (European Conference of Postal and Telecommunications Administrations)",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "WRC (Svetova radiokomunikacni konference) je konference ITU, ktera reviduje a aktualizuje Radiokomunikacni rad. Kona se zpravidla kazdych 3-4 roky. WTSA se zabyva standardizaci, PP je nejvyssi organ ITU, CEPT je evropska organizace.",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "wrc", "recall"],
  },
  {
    id: "R-ITU-004",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Kolik sektoru ma ITU?",
    choices: [
      { id: "a", text: "3 (ITU-R, ITU-T, ITU-D)" },
      { id: "b", text: "2 (ITU-R, ITU-T)" },
      { id: "c", text: "4 (ITU-R, ITU-T, ITU-D, ITU-S)" },
      { id: "d", text: "5 (ITU-R, ITU-T, ITU-D, ITU-S, ITU-E)" },
    ],
    correctChoiceId: "a",
    explanation:
      "ITU ma tri sektory: ITU-R (radiokomunikace), ITU-T (standardizace telekomunikaci) a ITU-D (rozvoj telekomunikaci).",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "struktura", "recall"],
  },
  {
    id: "R-ITU-005",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co je Ustava ITU (ITU Constitution)?",
    choices: [
      {
        id: "a",
        text: "Zakladni dokument ITU, ktery definuje cile, strukturu a zasady organizace",
      },
      {
        id: "b",
        text: "Technicky dokument popisujici parametry vysilacu",
      },
      {
        id: "c",
        text: "Seznam pridelenych kmitoctu pro jednotlive zeme",
      },
      {
        id: "d",
        text: "Navod pro vystavbu radiovych stanic",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Ustava ITU (ITU Constitution) je zakladni dokument, ktery stanovi cile, strukturu a principy fungování organizace. Spolu s Umluvou ITU (Convention) tvori zaklad pravniho ramce ITU.",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "ustava", "recall"],
  },

  // -----------------------------------------------------------------------
  // Frequency allocation, emission designators (itu-02): R-ITU-006 to R-ITU-011
  // -----------------------------------------------------------------------
  {
    id: "R-ITU-006",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Do ktereho ITU regionu patri Ceska republika?",
    choices: [
      { id: "a", text: "Region 1 (Evropa, Afrika, Blizky vychod)" },
      { id: "b", text: "Region 2 (Amerika)" },
      { id: "c", text: "Region 3 (Asie, Australie, Tichmori)" },
      { id: "d", text: "Region 4 (Stredni Evropa)" },
    ],
    correctChoiceId: "a",
    explanation:
      "Ceska republika lezi v ITU Regionu 1, ktery zahrnuje Evropu, Afriku, Blizky vychod a cast Asie. ITU deli svet na 3 regiony, Region 4 neexistuje.",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "regiony", "recall"],
  },
  {
    id: "R-ITU-007",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Na kolik regionu deli ITU svet pro ucely pridelovani kmitoctu?",
    choices: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" },
    ],
    correctChoiceId: "a",
    explanation:
      "ITU deli svet na 3 regiony: Region 1 (Evropa, Afrika, Blizky vychod), Region 2 (Amerika), Region 3 (Asie, Australie, Tichmori).",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "regiony", "recall"],
  },
  {
    id: "R-ITU-008",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co oznacuje emise J3E?",
    choices: [
      { id: "a", text: "SSB s potlacenou nosnou - telefonie (hlas)" },
      { id: "b", text: "FM telefonie" },
      { id: "c", text: "CW (telegrafie)" },
      { id: "d", text: "AM s plnou nosnou - telefonie" },
    ],
    correctChoiceId: "a",
    explanation:
      "J3E oznacuje jednopasmenovou emisi (SSB) s potlacenou nosnou pro prenos hlasu. J = jednopasmenova s potlacenou nosnou, 3 = jeden analogovy kanal, E = telefonie (hlas).",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "emise", "ssb", "recall"],
  },
  {
    id: "R-ITU-009",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co oznacuje emise A1A?",
    choices: [
      {
        id: "a",
        text: "CW - telegrafie klicovanim nosne (Morseova abeceda)",
      },
      { id: "b", text: "SSB telefonie" },
      { id: "c", text: "FM telefonie" },
      { id: "d", text: "AM telefonie" },
    ],
    correctChoiceId: "a",
    explanation:
      "A1A oznacuje telegrafii (CW). A = dvojpasmenova emise s plnou nosnou (AM), 1 = digitalni bez modulacni podnosne, A = telegrafie pro prijmanem sluchem (Morseovka).",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "emise", "cw", "recall"],
  },
  {
    id: "R-ITU-010",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co oznacuje emise F3E?",
    choices: [
      { id: "a", text: "FM telefonie (hlas)" },
      { id: "b", text: "SSB telefonie" },
      { id: "c", text: "CW telegrafie" },
      { id: "d", text: "Digitalni data v FM" },
    ],
    correctChoiceId: "a",
    explanation:
      "F3E oznacuje kmitoctove modulovanou (FM) telefonii. F = kmitoctova modulace, 3 = jeden analogovy kanal, E = telefonie (hlas).",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "emise", "fm", "recall"],
  },
  {
    id: "R-ITU-011",
    examPartId: "regulations",
    sectionId: "itu",
    wording:
      "Jaky je vyznam prvniho pismene v oznaceni tridy emise podle ITU?",
    choices: [
      { id: "a", text: "Typ modulace nosne vlny" },
      { id: "b", text: "Sirka pasma emise" },
      { id: "c", text: "Typ prenasene informace" },
      { id: "d", text: "Vykon vysilace" },
    ],
    correctChoiceId: "a",
    explanation:
      "Prvni pismeno v oznaceni tridy emise urcuje typ modulace nosne vlny (napr. A = amplitudova, F = kmitoctova, J = SSB s potlacenou nosnou). Druhy znak urcuje povahu modulacniho signalu, treti urcuje typ prenasene informace.",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "emise", "modulace", "recall"],
  },

  // -----------------------------------------------------------------------
  // Amateur service in ITU, Article 25 (itu-03): R-ITU-012 to R-ITU-016
  // -----------------------------------------------------------------------
  {
    id: "R-ITU-012",
    examPartId: "regulations",
    sectionId: "itu",
    wording:
      "Ktery clanek Radiokomunikacniho radu ITU se zabyva amaterskou sluzbou?",
    choices: [
      { id: "a", text: "Clanek 25 (Article 25)" },
      { id: "b", text: "Clanek 1 (Article 1)" },
      { id: "c", text: "Clanek 19 (Article 19)" },
      { id: "d", text: "Clanek 30 (Article 30)" },
    ],
    correctChoiceId: "a",
    explanation:
      "Clanek 25 (Article 25) Radiokomunikacniho radu ITU je venovany amaterske sluzbe a amaterske druzicove sluzbe. Stanovuje zakladni podminky pro provoz.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "clanek-25", "amaterska-sluzba", "recall"],
  },
  {
    id: "R-ITU-013",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Jaky je podle ITU hlavni ucel amaterske sluzby?",
    choices: [
      {
        id: "a",
        text: "Sebevzdelavani, vzajemna komunikace a technicke experimentovani",
      },
      { id: "b", text: "Komercni komunikace za nizke naklady" },
      {
        id: "c",
        text: "Zabezpeceni vojenske komunikace",
      },
      {
        id: "d",
        text: "Sireni rozhlasoveho a televizniho vysílani",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Podle definice ITU je amaterska sluzba urcena pro sebevzdelavani (self-training), vzajemnou komunikaci a technicke vyzkumy provadene radovamatery - osobami s prislusnym opravnenim, ktere se zajimaji o radiotechniku vyhradne z osobniho zajmu a bez financniho prospechu.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "amaterska-sluzba", "definice", "recall"],
  },
  {
    id: "R-ITU-014",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Je podle ITU povoleno vyuzivat amaterskou sluzbu ke komercnim ucelum?",
    choices: [
      { id: "a", text: "Ne, komercni vyuziti je zakazano" },
      { id: "b", text: "Ano, bez omezeni" },
      { id: "c", text: "Ano, ale pouze pro maly podnikatele" },
      { id: "d", text: "Ano, se souhlasem narodni administrativy" },
    ],
    correctChoiceId: "a",
    explanation:
      "ITU definice amaterske sluzby vyslovne uvadi, ze se jedna o provoz bez financniho prospechu (pecuniary interest). Komercni vyuziti amaterske sluzby neni povoleno.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "amaterska-sluzba", "komercni-zakaz", "recall"],
  },
  {
    id: "R-ITU-015",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co je amaterska druzicova sluzba podle ITU?",
    choices: [
      {
        id: "a",
        text: "Radiokomunikacni sluzba vyuzivajici kosmicke stanice na druzicich Zeme pro stejne ucely jako amaterska sluzba",
      },
      {
        id: "b",
        text: "Komercni satelitni sluzba pro radioamatery",
      },
      {
        id: "c",
        text: "Vojenska druzicova komunikace",
      },
      {
        id: "d",
        text: "Satelitni internet pro radioamatery",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Amaterska druzicova sluzba (Amateur-Satellite Service) je definovana jako radiokomunikacni sluzba vyuzivajici kosmicke stanice na druzicich Zeme pro tytez ucely jako amaterska sluzba.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "amaterska-druzicova-sluzba", "recall"],
  },
  {
    id: "R-ITU-016",
    examPartId: "regulations",
    sectionId: "itu",
    wording:
      "Jaky je mezinarodni nouzovy kmitocet pouzivany v amaterske sluzbe na KV?",
    choices: [
      { id: "a", text: "14,300 MHz" },
      { id: "b", text: "14,000 MHz" },
      { id: "c", text: "7,110 MHz" },
      { id: "d", text: "3,500 MHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "Kmitocet 14,300 MHz je mezinarodne uznavan jako nouzovy (distress) kmitocet pro amaterskou sluzbu na KV. Pouziva se pro nouzovou komunikaci a pomoc pri katastrofach.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "nouzovy-kmitocet", "recall"],
  },
];
