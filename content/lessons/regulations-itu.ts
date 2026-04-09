import type { Lesson } from "@/lib/types";

export const regulationsItuLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: ITU a Radiokomunikační řád
  // -----------------------------------------------------------------------
  {
    id: "itu-01",
    examPartId: "regulations",
    sectionId: "itu",
    order: 1,
    title: "ITU a Radiokomunikační řád",
    objective:
      "Porozumět struktuře ITU, účelu Radiokomunikačního řádu a roli Světové radiokomunikační konference (WRC).",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "Mezinárodní telekomunikační unie (ITU) je specializovaná agentura OSN se sídlem v Ženevě. Spravuje mezinárodní využívání rádiového spektra a družicových drah. Pro radioamatéry je důležitá, protože stanovuje rámcová pravidla pro amatérskou službu celosvětově.",
        note: "ITU byla založena v roce 1865 jako Mezinárodní telegrafní unie - je jednou z nejstarších mezinárodních organizací.",
      },
      {
        type: "match",
        instruction: "Přiřaďte sektory ITU k jejich oblasti působnosti:",
        pairs: [
          { left: "ITU-R", right: "Radiokomunikace a spektrum" },
          { left: "ITU-T", right: "Standardizace telekomunikací" },
          { left: "ITU-D", right: "Rozvoj telekomunikací" },
        ],
        explanation:
          "ITU má tři sektory. Pro radioamatéry je nejdůležitější ITU-R (Radiocommunication Sector), který spravuje kmitočtové spektrum a připravuje Radiokomunikační řád.",
      },
      {
        type: "select-answer",
        question: "Co je Radiokomunikační řád (Radio Regulations)?",
        choices: [
          {
            id: "a",
            text: "Mezinárodní smlouva regulující využívání kmitočtového spektra",
          },
          { id: "b", text: "Národní zákon o telekomunikacích" },
          { id: "c", text: "Technická norma pro vysílače" },
          { id: "d", text: "Učebnice radiokomunikací" },
        ],
        correctId: "a",
        explanation:
          "Radiokomunikační řád je mezinárodní smlouva s právní závazností pro členské státy ITU. Reguluje využívání kmitočtového spektra a družicových drah.",
      },
      {
        type: "explain",
        content:
          "Světová radiokomunikační konference (WRC - World Radiocommunication Conference) je nejvyšší orgán ITU-R pro revizi Radiokomunikačního řádu. Koná se každých 3-4 roky. Na WRC se rozhoduje o změnách v přidělování kmitočtů, včetně pásem pro amatérskou službu. Každá členská země má jeden hlas.",
      },
      {
        type: "fill-blank",
        textBefore: "Světová radiokomunikační konference (WRC) se koná přibližně každých",
        blank: "3-4 roky",
        distractors: ["rok", "10 let", "6 měsíců"],
        textAfter: " a aktualizuje Radiokomunikační řád.",
        explanation:
          "WRC se koná zpravidla každých 3-4 roky. Poslední konference WRC-23 se konala v roce 2023 v Dubaji.",
      },
      {
        type: "reveal",
        prompt:
          "Jaký je základní dokument ITU, který definuje cíle a strukturu organizace?",
        answer: "Ústava ITU (ITU Constitution)",
        explanation:
          "Ústava ITU spolu s Úmluvou ITU (Convention) tvoří základní právní rámec organizace. Radiokomunikační řád je pak doplňková smlouva.",
      },
      {
        type: "highlight",
        instruction:
          "Označte, co spadá do působnosti ITU-R (Radiokomunikačního sektoru):",
        terms: [
          { text: "Správa kmitočtového spektra", correct: true },
          { text: "Příprava Radiokomunikačního řádu", correct: true },
          { text: "Organizace WRC", correct: true },
          { text: "Standardizace pevných síťových protokolů", correct: false },
          { text: "Rozvojová pomoc chudým zemím", correct: false },
        ],
        explanation:
          "ITU-R se zabývá radiokomunikacemi - správou spektra, přípravou Radio Regulations a organizací WRC. Síťové protokoly řeší ITU-T, rozvojovou pomoc ITU-D.",
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
  // Lesson 2: Kmitočtové přidělení a třídy emisí
  // -----------------------------------------------------------------------
  {
    id: "itu-02",
    examPartId: "regulations",
    sectionId: "itu",
    order: 2,
    title: "Kmitočtové přidělení a třídy emisí",
    objective:
      "Znát rozdělení světa na ITU regiony, chápat systém označování tříd emisí a umět identifikovat běžné druhy emisí používané v amatérské službě.",
    estimatedMinutes: 10,
    slides: [
      {
        type: "explain",
        content:
          "ITU dělí svět na 3 regiony pro účely přidělování kmitočtů. Každý region má vlastní tabulku kmitočtových přidělení. Česká republika leží v Regionu 1, který zahrnuje Evropu, Afriku, Blízký východ a část Asie západně od Íránu.",
        note: "Region 2 = Amerika (Severní i Jižní), Region 3 = Asie a Pacifik (včetně Austrálie).",
      },
      {
        type: "select-answer",
        question: "Do kterého ITU regionu patří Česká republika?",
        choices: [
          { id: "a", text: "Region 1" },
          { id: "b", text: "Region 2" },
          { id: "c", text: "Region 3" },
          { id: "d", text: "Region 0" },
        ],
        correctId: "a",
        explanation:
          "ČR je v Regionu 1 (Evropa, Afrika, Blízký východ). Proto se kmitočtová přidělení pro české radioamatéry řídí tabulkou pro Region 1.",
      },
      {
        type: "explain",
        content:
          "Třída emise se v ITU označuje kódem o minimálně 3 znacích. První znak určuje typ modulace nosné (např. A = amplitudová, F = kmitočtová, J = SSB s potlačenou nosnou). Druhý znak určuje povahu modulačního signálu (např. 1 = digitální bez podnosné, 3 = jeden analogový kanál). Třetí znak určuje typ přenášené informace (např. A = telegrafie, E = telefonie/hlas).",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte označení emise k odpovídajícímu druhu provozu:",
        pairs: [
          { left: "A1A", right: "CW (telegrafie Morseovkou)" },
          { left: "J3E", right: "SSB telefonie (hlas)" },
          { left: "F3E", right: "FM telefonie (hlas)" },
          { left: "A3E", right: "AM telefonie (hlas)" },
        ],
        explanation:
          "A1A = CW, J3E = SSB hlas, F3E = FM hlas, A3E = AM hlas. Toto jsou nejběžnější třídy emisí v amatérské službě.",
      },
      {
        type: "fill-blank",
        textBefore: "Označení emise J3E znamená",
        blank: "SSB s potlačenou nosnou - telefonie",
        distractors: [
          "FM telefonie",
          "CW telegrafie",
          "AM s plnou nosnou",
        ],
        textAfter: ". Je to nejběžnější druh emise na KV pásmech.",
        explanation:
          "J = jednopásmová emise s potlačenou nosnou (SSB), 3 = jeden analogový kanál, E = telefonie (hlas).",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte správné kombinace označení emise a jejich významu:",
        pool: [
          { text: "A1A = CW telegrafie", correct: true },
          { text: "F3E = FM hlas", correct: true },
          { text: "J3E = SSB hlas", correct: true },
          { text: "A1A = AM telefonie", correct: false },
          { text: "J3E = FM data", correct: false },
          { text: "F3E = CW telegrafie", correct: false },
        ],
        explanation:
          "A1A je CW (telegrafie klíčováním nosné), F3E je FM telefonie a J3E je SSB telefonie s potlačenou nosnou.",
      },
      {
        type: "order",
        instruction:
          "Seřaďte části označení třídy emise v pořadí, jak se zapisují (zleva doprava):",
        items: [
          "Typ modulace nosné (písmeno)",
          "Povaha modulačního signálu (číslo)",
          "Typ přenášené informace (písmeno)",
        ],
        explanation:
          "Označení třídy emise se čte zleva: první znak = typ modulace, druhý = povaha signálu, třetí = typ informace. Např. J-3-E.",
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
  // Lesson 3: Amatérská služba v ITU
  // -----------------------------------------------------------------------
  {
    id: "itu-03",
    examPartId: "regulations",
    sectionId: "itu",
    order: 3,
    title: "Amatérská služba v ITU",
    objective:
      "Znát definici amatérské služby podle ITU, obsah Článku 25 Radiokomunikačního řádu a základní principy amatérské družicové služby.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "Amatérská služba je v Radiokomunikačním řádu ITU definována v Článku 25 (Article 25). Definice zní: radiokomunikační služba pro účely sebevzdělávání (self-training), vzájemné komunikace a technických pokusů prováděných radioamatéry - tedy osobami s příslušným oprávněním, které se zajímají o radiotechniku čistě z osobního zájmu a bez finančního prospěchu.",
        note: "Klíčová slova definice: self-training, osobní zájem, bez finančního prospěchu (without pecuniary interest).",
      },
      {
        type: "highlight",
        instruction:
          "Označte vlastnosti, které podle ITU patří k definici amatérské služby:",
        terms: [
          { text: "Sebevzdělávání (self-training)", correct: true },
          { text: "Technické experimentování", correct: true },
          { text: "Osobní zájem bez finančního prospěchu", correct: true },
          { text: "Komerční komunikace", correct: false },
          { text: "Vojenské účely", correct: false },
          { text: "Šíření rozhlasového vysílání", correct: false },
        ],
        explanation:
          "Amatérská služba je výhradně pro sebevzdělávání, technické pokusy a osobní zájem. Komerční, vojenské či rozhlasové využití není povoleno.",
      },
      {
        type: "select-answer",
        question:
          "Může radioamatér využívat amatérskou službu ke komerčním účelům?",
        choices: [
          { id: "a", text: "Ne, je to výslovně zakázáno definicí ITU" },
          { id: "b", text: "Ano, pokud má povolení od ČTÚ" },
          { id: "c", text: "Ano, pro malý rozsah podnikání" },
          { id: "d", text: "Ano, pokud je členem radioamatérského klubu" },
        ],
        correctId: "a",
        explanation:
          "Definice ITU výslovně uvádí 'without pecuniary interest' (bez finančního prospěchu). Komerční využití amatérské služby je zakázáno.",
      },
      {
        type: "explain",
        content:
          "Amatérská družicová služba (Amateur-Satellite Service) je definována jako radiokomunikační služba využívající kosmické stanice na družicích Země pro tytéž účely jako amatérská služba. Radioamatéři mohou komunikovat prostřednictvím amatérských družic, jako je například řada satelitů OSCAR.",
      },
      {
        type: "fill-blank",
        textBefore: "Amatérská služba je v Radiokomunikačním řádu ITU definována v",
        blank: "Článku 25",
        distractors: ["Článku 1", "Článku 19", "Článku 30"],
        textAfter: " (Article 25).",
        explanation:
          "Článek 25 je věnovaný amatérské službě a amatérské družicové službě. Stanoví základní podmínky pro provozování těchto služeb.",
      },
      {
        type: "reveal",
        prompt:
          "Jaký mezinárodní nouzový kmitočet se používá v amatérské službě na KV?",
        answer: "14,300 MHz",
        explanation:
          "Kmitočet 14,300 MHz (pásmo 20 m) je mezinárodně uznáván jako nouzový kmitočet amatérské služby. Používá se pro tísňové volání a koordinaci pomoci při katastrofách.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte pojmy z Článku 25 k jejich významům:",
        pairs: [
          { left: "Self-training", right: "Sebevzdělávání" },
          { left: "Without pecuniary interest", right: "Bez finančního prospěchu" },
          { left: "Amateur-Satellite Service", right: "Amatérská družicová služba" },
          { left: "Duly authorized persons", right: "Osoby s příslušným oprávněním" },
        ],
        explanation:
          "Tyto pojmy jsou klíčové pro pochopení definice amatérské služby v ITU Radio Regulations.",
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
