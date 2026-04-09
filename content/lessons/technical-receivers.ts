import type { Lesson } from "@/lib/types";

export const technicalReceiversLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson rx-01: Principles of radio receivers
  // -----------------------------------------------------------------------
  {
    id: "rx-01",
    examPartId: "technical",
    sectionId: "receivers",
    order: 1,
    title: "Principy rádiových přijímačů",
    objective:
      "Popsat blokové schéma superheterodynu, přímého směšování a SDR přijímače a vysvětlit funkci jednotlivých stupňů.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Rádiový přijímač zachytí slabý signál z antény, zesílí ho, oddělí od ostatních signálů a převede na slyšitelný zvuk nebo data. Existují tři hlavní architektury: superheterodyn, přijímač s přímým směšováním a softwarově definovaný přijímač (SDR).",
      },
      {
        type: "order",
        instruction:
          "Seřaďte bloky superheterodynního přijímače v pořadí od antény k reproduktoru:",
        items: [
          "Vstupní filtr a VF zesilovač",
          "Směšovač + lokální oscilátor",
          "Mezifrekvencí filtr (MF)",
          "MF zesilovač",
          "Detektor (demodulátor)",
          "NF zesilovač",
        ],
        explanation:
          "Signál z antény se nejprve filtruje a zesiluje, pak se směšuje s lokálním oscilátorem na mezifrekvenci, kde probíhá hlavní filtrace a zesílení, a nakonec se demoduluje na zvuk.",
      },
      {
        type: "select-answer",
        question:
          "Jaká je hlavní výhoda superheterodynního přijímače oproti přijímači s přímým zesílením?",
        choices: [
          { id: "a", text: "Snadnější filtrace na pevné mezifrekvenci" },
          { id: "b", text: "Nižší spotřeba energie" },
          { id: "c", text: "Nepotřebuje lokální oscilátor" },
          { id: "d", text: "Menší rozměry" },
        ],
        correctId: "a",
        explanation:
          "Superheterodyn převádí přijímaný signál na pevnou mezifrekvenci, kde je snadné postavit kvalitní filtr. Lokální oscilátor je naopak nutná součást - právě on umožňuje směšování.",
      },
      {
        type: "reveal",
        prompt: "Co je to zrcadlová frekvence (image frequency)?",
        answer:
          "Nežádoucí frekvence, která se po směšování rovněž převede na MF. Leží od oscilátoru na opačné straně než užitečný signál, vzdálena o 2x MF.",
        explanation:
          "Potlačení zrcadlové frekvence zajišťuje vstupní filtr před směšovačem. Čím vyšší MF, tím snazší potlačení.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte typ přijímače k jeho klíčové vlastnosti:",
        pairs: [
          { left: "Superheterodyn", right: "Pevná mezifrekvence, směšovač" },
          { left: "Přímé směšování (DC)", right: "Směšuje přímo na základní pásmo" },
          { left: "SDR", right: "A/D převodník, digitální zpracování" },
        ],
        explanation:
          "Superheterodyn pracuje s MF, přímé směšování převádí signál rovnou na nulovou frekvenci a SDR digitalizuje signál co nejdříve a zpracovává ho softwarově.",
      },
      {
        type: "explain",
        content:
          "SDR (Software Defined Radio) nahrazuje analogové filtry a demodulátory digitálním zpracováním. Signál z antény se co nejdříve převede A/D převodníkem na čísla a vše ostatní řeší program. Výhoda: jeden hardware zvládne AM, FM, SSB i digitální módy.",
        note: "Populární SDR přijímače: RTL-SDR, HackRF, Airspy.",
      },
      {
        type: "slider",
        question:
          "Superheterodyn přijímá signál na 14,200 MHz. Lokální oscilátor je nastaven na 14,655 MHz. Jaká je mezifrekvence?",
        min: 100,
        max: 900,
        step: 5,
        unit: "kHz",
        correctValue: 455,
        tolerance: 10,
        explanation:
          "MF = |f_LO - f_sig| = |14 655 - 14 200| = 455 kHz. Hodnota 455 kHz je klasická MF pro KV přijímače.",
      },
      {
        type: "exam-question",
        questionId: "T-RX-001",
      },
      {
        type: "fill-blank",
        textBefore:
          "V přijímači s přímým směšováním (direct conversion) se přijatý signál převádí přímo na",
        blank: "základní pásmo (baseband)",
        distractors: [
          "mezifrekvenci 455 kHz",
          "ultrazvukovou frekvenci",
          "mikrovlnné pásmo",
        ],
        textAfter: " bez mezifrekvenčního stupně.",
        explanation:
          "Přímé směšování (homodyne) směšuje signál s oscilátorem na stejné frekvenci, výstupem je přímo NF signál.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte všechny bloky, které jsou součástí superheterodynního přijímače:",
        pool: [
          { text: "Směšovač", correct: true },
          { text: "MF filtr", correct: true },
          { text: "Výkonový zesilovač (PA)", correct: false },
          { text: "Lokální oscilátor", correct: true },
          { text: "Modulátor", correct: false },
          { text: "VF předzesilovač", correct: true },
        ],
        explanation:
          "Výkonový zesilovač (PA) a modulátor jsou součástí vysílače, ne přijímače.",
      },
    ],
    relatedQuestionIds: [
      "T-RX-001",
      "T-RX-002",
      "T-RX-003",
      "T-RX-004",
      "T-RX-005",
      "T-RX-006",
      "T-RX-007",
      "T-RX-008",
    ],
    tags: [
      "superheterodyn",
      "sdr",
      "prime-smesovani",
      "mezifrekvence",
      "prijimac",
      "analyze",
    ],
  },

  // -----------------------------------------------------------------------
  // Lesson rx-02: Receiver characteristics
  // -----------------------------------------------------------------------
  {
    id: "rx-02",
    examPartId: "technical",
    sectionId: "receivers",
    order: 2,
    title: "Vlastnosti přijímačů",
    objective:
      "Definovat citlivost, selektivitu, dynamický rozsah, mezifrekvenční filtraci a funkci AGC a vysvětlit jejich vliv na kvalitu příjmu.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "Kvalitu přijímače posuzujeme podle několika parametrů. Citlivost udává nejslabší signál, který přijímač dokáže použitelně zpracovat. Selektivita popisuje schopnost oddělit žádaný signál od blízkých rušivých signálů. Tyto dvě vlastnosti spolu úzce souvisejí.",
      },
      {
        type: "select-answer",
        question: "Co vyjadřuje citlivost přijímače?",
        choices: [
          { id: "a", text: "Nejslabší signál, který přijímač spolehlivě zpracuje" },
          { id: "b", text: "Maximální výkon, který přijímač snese" },
          { id: "c", text: "Šířku propouštěného pásma" },
          { id: "d", text: "Počet přijímaných kanálů" },
        ],
        correctId: "a",
        explanation:
          "Citlivost se udává v mikrovoltech nebo dBm. Čím menší číslo, tím je přijímač citlivější - zachytí slabší signály.",
      },
      {
        type: "reveal",
        prompt: "Co je to dynamický rozsah přijímače?",
        answer:
          "Rozsah mezi nejslabším zpracovatelným signálem a nejsilnějším signálem, který přijímač zpracuje bez zkreslení. Udává se v dB.",
        explanation:
          "Velký dynamický rozsah je důležitý na přeplněných pásmech, kde vedle slabého signálu může být velmi silná stanice.",
      },
      {
        type: "fill-blank",
        textBefore: "Automatické řízení zisku (AGC) udržuje",
        blank: "konstantní úroveň NF výstupu",
        distractors: [
          "konstantní frekvenci oscilátoru",
          "stabilní napájecí napětí",
          "konstantní impedanci antény",
        ],
        textAfter: " při měnící se síle přijímaného signálu.",
        explanation:
          "AGC automaticky snižuje zisk při silných signálech a zvyšuje při slabých, aby výstupní hlasitost zůstala přibližně stejná.",
      },
      {
        type: "slider",
        question:
          "Typická šířka pásma MF filtru pro příjem SSB signálu je přibližně:",
        min: 0.5,
        max: 10,
        step: 0.1,
        unit: "kHz",
        correctValue: 2.4,
        tolerance: 0.4,
        explanation:
          "SSB signál zabírá asi 2,4 kHz. Pro CW se používá užší filtr (300-500 Hz), pro AM širší (6 kHz), pro FM ještě širší (12-15 kHz).",
      },
      {
        type: "explain",
        content:
          "Selektivita přijímače závisí na kvalitě MF filtru. Používají se krystalové, keramické nebo DSP filtry. Užší filtr lépe oddělí blízké signály, ale příliš úzký filtr zkreslí modulaci. Proto se šířka volí podle druhu provozu.",
        note: "CW: 300-500 Hz, SSB: 2,4 kHz, AM: 6 kHz, FM: 12-15 kHz",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte druh provozu k typické šířce MF filtru:",
        pairs: [
          { left: "CW (telegrafie)", right: "300-500 Hz" },
          { left: "SSB", right: "2,4 kHz" },
          { left: "AM", right: "6 kHz" },
          { left: "FM (úzké pásmo)", right: "12-15 kHz" },
        ],
        explanation:
          "Čím jednodušší modulace, tím užší filtr stačí. CW je pouhý tón, SSB je polovina AM spektra, FM potřebuje nejširší pásmo.",
      },
      {
        type: "highlight",
        instruction:
          "Označte parametry, které popisují kvalitu přijímače:",
        terms: [
          { text: "Citlivost", correct: true },
          { text: "Modulační index", correct: false },
          { text: "Selektivita", correct: true },
          { text: "Dynamický rozsah", correct: true },
          { text: "Anténní zisk", correct: false },
          { text: "Intermodulační odolnost", correct: true },
        ],
        explanation:
          "Modulační index je vlastnost signálu, ne přijímače. Anténní zisk je vlastnost antény. Citlivost, selektivita, dynamický rozsah a intermodulační odolnost popisují přijímač.",
      },
      {
        type: "exam-question",
        questionId: "T-RX-009",
      },
      {
        type: "order",
        instruction:
          "Seřaďte šířky MF filtru od nejužší po nejširší:",
        items: [
          "CW filtr (300 Hz)",
          "SSB filtr (2,4 kHz)",
          "AM filtr (6 kHz)",
          "FM filtr (15 kHz)",
        ],
        explanation:
          "Jednodušší modulace vyžaduje užší filtr. CW je nejjednodušší (jeden tón), FM potřebuje nejširší pásmo kvůli frekvenčnímu zdvihu.",
      },
      {
        type: "select-answer",
        question:
          "Intermodulační produkty v přijímači vznikají, když:",
        choices: [
          { id: "a", text: "Dva silné signály se smíchají v nelineárním stupni" },
          { id: "b", text: "Anténa není správně přizpůsobena" },
          { id: "c", text: "MF filtr je příliš úzký" },
          { id: "d", text: "AGC je vypnuto" },
        ],
        correctId: "a",
        explanation:
          "Intermodulace nastane, když dva silné blízké signály vstoupí do nelineárního stupně (typicky směšovače nebo VF zesilovače) a vytvoří falešné signály na kombinačních frekvencích.",
      },
    ],
    relatedQuestionIds: [
      "T-RX-009",
      "T-RX-010",
      "T-RX-011",
      "T-RX-012",
      "T-RX-013",
      "T-RX-014",
      "T-RX-015",
    ],
    tags: [
      "citlivost",
      "selektivita",
      "dynamicky-rozsah",
      "agc",
      "mf-filtr",
      "intermodulace",
      "analyze",
    ],
  },
];
