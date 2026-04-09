import type { Question } from "@/lib/types";

export const regulationsItuQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // ITU structure, Radio Regulations, WRC (itu-01): R-ITU-001 to R-ITU-005
  // -----------------------------------------------------------------------
  {
    id: "R-ITU-001",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Který sektor ITU se zabývá radiokomunikacemi?",
    choices: [
      { id: "a", text: "ITU-R (Radiokomunikační sektor)" },
      { id: "b", text: "ITU-T (Telekomunikační standardizační sektor)" },
      { id: "c", text: "ITU-D (Rozvojový sektor)" },
      { id: "d", text: "ITU-S (Satelitní sektor)" },
    ],
    correctChoiceId: "a",
    explanation:
      "ITU-R (Radiocommunication Sector) je sektor ITU zodpovědný za všechny záležitosti týkající se radiokomunikací, včetně správní kmitočtového spektra. ITU-T se zabývá standardizací telekomunikací, ITU-D rozvojem. ITU-S neexistuje.",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "struktura", "recall"],
  },
  {
    id: "R-ITU-002",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co je hlavním účelem Radiokomunikačního řádu (Radio Regulations)?",
    choices: [
      {
        id: "a",
        text: "Mezinárodní regulace využívání kmitočtového spektra a drah na orbitě",
      },
      { id: "b", text: "Stanovení cen za využívání kmitočtů" },
      { id: "c", text: "Regulace obsahu vysílání" },
      { id: "d", text: "Určování technických parametrů přijímačů" },
    ],
    correctChoiceId: "a",
    explanation:
      "Radiokomunikační řád (Radio Regulations) je mezinárodní smlouva, která reguluje využívání kmitočtového spektra a drah družic. Nereguluje ceny ani obsah vysílání.",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "radiokomunikacni-rad", "recall"],
  },
  {
    id: "R-ITU-003",
    examPartId: "regulations",
    sectionId: "itu",
    wording:
      "Jak se nazývá konference, na které se aktualizuje Radiokomunikační řád?",
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
      "WRC (Světová radiokomunikační konference) je konference ITU, která reviduje a aktualizuje Radiokomunikační řád. Koná se zpravidla každých 3-4 roky. WTSA se zabývá standardizací, PP je nejvyšší orgán ITU, CEPT je evropská organizace.",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "wrc", "recall"],
  },
  {
    id: "R-ITU-004",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Kolik sektorů má ITU?",
    choices: [
      { id: "a", text: "3 (ITU-R, ITU-T, ITU-D)" },
      { id: "b", text: "2 (ITU-R, ITU-T)" },
      { id: "c", text: "4 (ITU-R, ITU-T, ITU-D, ITU-S)" },
      { id: "d", text: "5 (ITU-R, ITU-T, ITU-D, ITU-S, ITU-E)" },
    ],
    correctChoiceId: "a",
    explanation:
      "ITU má tři sektory: ITU-R (radiokomunikace), ITU-T (standardizace telekomunikací) a ITU-D (rozvoj telekomunikací).",
    relatedLessonIds: ["itu-01"],
    tags: ["itu", "struktura", "recall"],
  },
  {
    id: "R-ITU-005",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co je Ústava ITU (ITU Constitution)?",
    choices: [
      {
        id: "a",
        text: "Základní dokument ITU, který definuje cíle, strukturu a zásady organizace",
      },
      {
        id: "b",
        text: "Technický dokument popisující parametry vysílačů",
      },
      {
        id: "c",
        text: "Seznam přidělených kmitočtů pro jednotlivé země",
      },
      {
        id: "d",
        text: "Návod pro výstavbu rádiových stanic",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Ústava ITU (ITU Constitution) je základní dokument, který stanoví cíle, strukturu a principy fungování organizace. Spolu s Úmluvou ITU (Convention) tvoří základ právního rámce ITU.",
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
    wording: "Do kterého ITU regionu patří Česká republika?",
    choices: [
      { id: "a", text: "Region 1 (Evropa, Afrika, Blízký východ)" },
      { id: "b", text: "Region 2 (Amerika)" },
      { id: "c", text: "Region 3 (Asie, Austrálie, Tichomoří)" },
      { id: "d", text: "Region 4 (Střední Evropa)" },
    ],
    correctChoiceId: "a",
    explanation:
      "Česká republika leží v ITU Regionu 1, který zahrnuje Evropu, Afriku, Blízký východ a část Asie. ITU dělí svět na 3 regiony, Region 4 neexistuje.",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "regiony", "recall"],
  },
  {
    id: "R-ITU-007",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Na kolik regionů dělí ITU svět pro účely přidělování kmitočtů?",
    choices: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" },
    ],
    correctChoiceId: "a",
    explanation:
      "ITU dělí svět na 3 regiony: Region 1 (Evropa, Afrika, Blízký východ), Region 2 (Amerika), Region 3 (Asie, Austrálie, Tichomoří).",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "regiony", "recall"],
  },
  {
    id: "R-ITU-008",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co označuje emise J3E?",
    choices: [
      { id: "a", text: "SSB s potlačenou nosnou - telefonie (hlas)" },
      { id: "b", text: "FM telefonie" },
      { id: "c", text: "CW (telegrafie)" },
      { id: "d", text: "AM s plnou nosnou - telefonie" },
    ],
    correctChoiceId: "a",
    explanation:
      "J3E označuje jednopásmovou emisi (SSB) s potlačenou nosnou pro přenos hlasu. J = jednopásmová s potlačenou nosnou, 3 = jeden analogový kanál, E = telefonie (hlas).",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "emise", "ssb", "recall"],
  },
  {
    id: "R-ITU-009",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co označuje emise A1A?",
    choices: [
      {
        id: "a",
        text: "CW - telegrafie klíčováním nosné (Morseova abeceda)",
      },
      { id: "b", text: "SSB telefonie" },
      { id: "c", text: "FM telefonie" },
      { id: "d", text: "AM telefonie" },
    ],
    correctChoiceId: "a",
    explanation:
      "A1A označuje telegrafii (CW). A = dvoupásmová emise s plnou nosnou (AM), 1 = digitální bez modulační podnosné, A = telegrafie pro přijímáním sluchem (Morseovka).",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "emise", "cw", "recall"],
  },
  {
    id: "R-ITU-010",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co označuje emise F3E?",
    choices: [
      { id: "a", text: "FM telefonie (hlas)" },
      { id: "b", text: "SSB telefonie" },
      { id: "c", text: "CW telegrafie" },
      { id: "d", text: "Digitální data v FM" },
    ],
    correctChoiceId: "a",
    explanation:
      "F3E označuje kmitočtově modulovanou (FM) telefonii. F = kmitočtová modulace, 3 = jeden analogový kanál, E = telefonie (hlas).",
    relatedLessonIds: ["itu-02"],
    tags: ["itu", "emise", "fm", "recall"],
  },
  {
    id: "R-ITU-011",
    examPartId: "regulations",
    sectionId: "itu",
    wording:
      "Jaký je význam prvního písmene v označení třídy emise podle ITU?",
    choices: [
      { id: "a", text: "Typ modulace nosné vlny" },
      { id: "b", text: "Šířka pásma emise" },
      { id: "c", text: "Typ přenášené informace" },
      { id: "d", text: "Výkon vysílače" },
    ],
    correctChoiceId: "a",
    explanation:
      "První písmeno v označení třídy emise určuje typ modulace nosné vlny (např. A = amplitudová, F = kmitočtová, J = SSB s potlačenou nosnou). Druhý znak určuje povahu modulačního signálu, třetí určuje typ přenášené informace.",
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
      "Který článek Radiokomunikačního řádu ITU se zabývá amatérskou službou?",
    choices: [
      { id: "a", text: "Článek 25 (Article 25)" },
      { id: "b", text: "Článek 1 (Article 1)" },
      { id: "c", text: "Článek 19 (Article 19)" },
      { id: "d", text: "Článek 30 (Article 30)" },
    ],
    correctChoiceId: "a",
    explanation:
      "Článek 25 (Article 25) Radiokomunikačního řádu ITU je věnovaný amatérské službě a amatérské družicové službě. Stanovuje základní podmínky pro provoz.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "clanek-25", "amaterska-sluzba", "recall"],
  },
  {
    id: "R-ITU-013",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Jaký je podle ITU hlavní účel amatérské služby?",
    choices: [
      {
        id: "a",
        text: "Sebevzdělávání, vzájemná komunikace a technické experimentování",
      },
      { id: "b", text: "Komerční komunikace za nízké náklady" },
      {
        id: "c",
        text: "Zabezpečení vojenské komunikace",
      },
      {
        id: "d",
        text: "Šíření rozhlasového a televizního vysílání",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Podle definice ITU je amatérská služba určena pro sebevzdělávání (self-training), vzájemnou komunikaci a technické výzkumy prováděné radioamatéry - osobami s příslušným oprávněním, které se zajímají o radiotechniku výhradně z osobního zájmu a bez finančního prospěchu.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "amaterska-sluzba", "definice", "recall"],
  },
  {
    id: "R-ITU-014",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Je podle ITU povoleno využívat amatérskou službu ke komerčním účelům?",
    choices: [
      { id: "a", text: "Ne, komerční využití je zakázáno" },
      { id: "b", text: "Ano, bez omezení" },
      { id: "c", text: "Ano, ale pouze pro malé podnikatele" },
      { id: "d", text: "Ano, se souhlasem národní administrativy" },
    ],
    correctChoiceId: "a",
    explanation:
      "ITU definice amatérské služby výslovně uvádí, že se jedná o provoz bez finančního prospěchu (pecuniary interest). Komerční využití amatérské služby není povoleno.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "amaterska-sluzba", "komercni-zakaz", "recall"],
  },
  {
    id: "R-ITU-015",
    examPartId: "regulations",
    sectionId: "itu",
    wording: "Co je amatérská družicová služba podle ITU?",
    choices: [
      {
        id: "a",
        text: "Radiokomunikační služba využívající kosmické stanice na družicích Země pro stejné účely jako amatérská služba",
      },
      {
        id: "b",
        text: "Komerční satelitní služba pro radioamatéry",
      },
      {
        id: "c",
        text: "Vojenská družicová komunikace",
      },
      {
        id: "d",
        text: "Satelitní internet pro radioamatéry",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Amatérská družicová služba (Amateur-Satellite Service) je definována jako radiokomunikační služba využívající kosmické stanice na družicích Země pro tytéž účely jako amatérská služba.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "amaterska-druzicova-sluzba", "recall"],
  },
  {
    id: "R-ITU-016",
    examPartId: "regulations",
    sectionId: "itu",
    wording:
      "Jaký je mezinárodní nouzový kmitočet používaný v amatérské službě na KV?",
    choices: [
      { id: "a", text: "14,300 MHz" },
      { id: "b", text: "14,000 MHz" },
      { id: "c", text: "7,110 MHz" },
      { id: "d", text: "3,500 MHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "Kmitočet 14,300 MHz je mezinárodně uznáván jako nouzový (distress) kmitočet pro amatérskou službu na KV. Používá se pro nouzovou komunikaci a pomoc při katastrofách.",
    relatedLessonIds: ["itu-03"],
    tags: ["itu", "nouzovy-kmitocet", "recall"],
  },
];
