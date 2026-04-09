import type { Lesson } from "@/lib/types";

export const operatingFrequenciesLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Amateur bands - from 160 metres to microwaves
  // -----------------------------------------------------------------------
  {
    id: "frequencies-01",
    examPartId: "operating",
    sectionId: "frequencies",
    order: 1,
    title: "Amatérská pásma - od 160 metrů po mikrovlny",
    objective:
      "Přiřadit amatérská pásma k jejich frekvencím a vypočítat vlnovou délku ze známého kmitočtu.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Radioamatérská pásma se označují vlnovou délkou: 160 m, 80 m, 40 m, 20 m, 15 m, 10 m na krátkých vlnách (HF), 2 m a 70 cm na VHF/UHF a 23 cm v oblasti mikrovln. Každé pásmo má jiný charakter šíření a jiné použití.",
        note: "Základní vzorec: vlnová délka [m] = 300 / frekvence [MHz]",
      },
      {
        type: "match",
        instruction: "Přiřaďte pásmo k jeho frekvenci:",
        pairs: [
          { left: "160 m", right: "1,8 MHz" },
          { left: "80 m", right: "3,5 MHz" },
          { left: "40 m", right: "7 MHz" },
          { left: "20 m", right: "14 MHz" },
          { left: "2 m", right: "144 MHz" },
          { left: "70 cm", right: "430 MHz" },
        ],
        explanation:
          "Vzorec 300/f: 300/1,8 = 167 m (160 m), 300/3,5 = 86 m (80 m), 300/7 = 43 m (40 m), 300/14 = 21 m (20 m), 300/144 = 2,1 m (2 m), 300/430 = 0,7 m (70 cm).",
      },
      {
        type: "fill-blank",
        textBefore: "Pásmo 20 metrů odpovídá frekvenci přibližně",
        blank: "14 MHz",
        distractors: ["7 MHz", "21 MHz", "28 MHz"],
        textAfter: ".",
        explanation:
          "f = 300 / lambda = 300 / 20 = 15 MHz, začátek pásma je 14 MHz. Proto se nazývá '20 metrů'.",
      },
      {
        type: "explain",
        content:
          "Vlnová délka a frekvence jsou nepřímo úměrné: lambda = 300 / f [MHz]. Čím vyšší frekvence, tím kratší vlna. Na HF pásmech (1,8-30 MHz) se signály šíří odrazem od ionosféry na velké vzdálenosti. Na VHF/UHF je dosah omezen přímou viditelností.",
      },
      {
        type: "slider",
        question:
          "Jaká je přibližná vlnová délka na frekvenci 7 MHz?",
        min: 10,
        max: 100,
        step: 5,
        unit: "m",
        correctValue: 43,
        tolerance: 5,
        explanation:
          "lambda = 300 / 7 = 42,9 m, zaokrouhleno 43 m. Proto se pásmo 7 MHz nazývá '40 metrů'.",
      },
      {
        type: "highlight",
        instruction: "Označte pásma, která patří do oblasti krátkých vln (HF, 3-30 MHz):",
        terms: [
          { text: "160 m (1,8 MHz)", correct: true },
          { text: "80 m (3,5 MHz)", correct: true },
          { text: "2 m (144 MHz)", correct: false },
          { text: "70 cm (430 MHz)", correct: false },
          { text: "40 m (7 MHz)", correct: true },
          { text: "23 cm (1296 MHz)", correct: false },
        ],
        explanation:
          "HF pásma leží v rozsahu 3-30 MHz. Pásmo 160 m (1,8 MHz) je těsně pod touto hranicí, ale také se řadí mezi krátkovlnná amatérská pásma. 2 m je VHF, 70 cm je UHF, 23 cm jsou mikrovlny.",
      },
      {
        type: "select-answer",
        question: "Které pásmo patří do oblasti VHF?",
        choices: [
          { id: "a", text: "2 m (144 MHz)" },
          { id: "b", text: "20 m (14 MHz)" },
          { id: "c", text: "70 cm (430 MHz)" },
          { id: "d", text: "23 cm (1296 MHz)" },
        ],
        correctId: "a",
        explanation:
          "VHF = 30-300 MHz. Pásmo 2 m (144 MHz) je jediné v tomto rozsahu. 20 m je HF, 70 cm je UHF, 23 cm jsou mikrovlny (SHF).",
      },
      {
        type: "exam-question",
        questionId: "O-FRQ-001",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte všechna správná tvrzení o primárně přidělených pásmech:",
        pool: [
          {
            text: "Pásmo 20 m (14 MHz) je primárně přiděleno amatérské službě",
            correct: true,
          },
          {
            text: "Na primárně přidělených pásmech mají radioamatéři přednost",
            correct: true,
          },
          {
            text: "Všechna amatérská pásma jsou primárně přidělena",
            correct: false,
          },
          {
            text: "Na sekundárně přidělených pásmech nesmí radioamatér rušit primárního uživatele",
            correct: true,
          },
          {
            text: "Primární přidělení znamená výlučné použití radioamatéry",
            correct: false,
          },
        ],
        explanation:
          "Některá pásma (např. 40 m) jsou sdílena s jinými službami. Primární přidělení neznamená výlučnost, ale přednost při ochraně před rušením.",
      },
    ],
    relatedQuestionIds: [
      "O-FRQ-001",
      "O-FRQ-002",
      "O-FRQ-003",
      "O-FRQ-004",
      "O-FRQ-005",
      "O-FRQ-006",
      "O-FRQ-007",
      "O-FRQ-008",
      "O-FRQ-009",
      "O-FRQ-010",
    ],
    tags: ["pasma", "frekvence", "vlnova-delka", "hf", "vhf", "uhf", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: Modes of operation and bandwidths
  // -----------------------------------------------------------------------
  {
    id: "frequencies-02",
    examPartId: "operating",
    sectionId: "frequencies",
    order: 2,
    title: "Druhy provozu a šířky pásma",
    objective:
      "Rozlišit provozní druhy podle šířky pásma a určit správný segment v bandplánu IARU.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Radioamatéři používají různé druhy provozu: CW (telegrafie), SSB (fonický provoz na KV), FM (fonický provoz na VHF/UHF), AM a digitální módy (FT8, PSK31, RTTY). Každý druh zabírá jinou šířku pásma a má v bandplánu IARU vyhrazený segment.",
      },
      {
        type: "match",
        instruction: "Přiřaďte druh provozu k jeho typické šířce pásma:",
        pairs: [
          { left: "CW (telegrafie)", right: "500 Hz" },
          { left: "SSB", right: "2,4 kHz" },
          { left: "FM (úzkopásmová)", right: "16 kHz" },
          { left: "AM", right: "6 kHz" },
        ],
        explanation:
          "CW je nejužší mód. SSB přenáší hlas v šířce 2,4 kHz. AM potřebuje dvojnásobek (postranní pásma na obou stranách). FM na VHF/UHF má typicky kanálový rastr 12,5 nebo 25 kHz.",
      },
      {
        type: "reveal",
        prompt: "Proč se CW segmenty nacházejí vždy na začátku každého pásma?",
        answer:
          "CW má nejužší šířku pásma (cca 500 Hz), proto umožňuje nejhustější provoz. Tradice i bandplán IARU řadí CW na spodní okraj každého pásma.",
        explanation:
          "Módy se v bandplánu řadí od nejužšího po nejširší. Díky tomu se efektivně využije omezený spektrální prostor.",
      },
      {
        type: "order",
        instruction: "Seřaďte druhy provozu od nejužšího po nejširší zabrané pásmo:",
        items: ["CW", "PSK31", "SSB", "AM", "FM"],
        explanation:
          "CW ~ 500 Hz, PSK31 ~ 31 Hz (ale prakticky ~ 100 Hz), SSB ~ 2,4 kHz, AM ~ 6 kHz, FM ~ 16 kHz. PSK31 je velmi úzký, ale v praxi se řadí za CW.",
      },
      {
        type: "explain",
        content:
          "Bandplán IARU rozděluje každé pásmo na segmenty podle druhu provozu. Například na 20 m (14 MHz): 14,000-14,070 CW, 14,070-14,099 digitální módy, 14,099-14,101 majáky, 14,101-14,112 digitální, 14,112-14,350 SSB.",
        note: "Bandplán je doporučení, ale radioamatér jej má dodržovat podle provozního řádu.",
      },
      {
        type: "fill-blank",
        textBefore: "SSB segment na pásmu 20 m začíná od frekvence",
        blank: "14,112 MHz",
        distractors: ["14,000 MHz", "14,070 MHz", "14,350 MHz"],
        textAfter: ".",
        explanation:
          "SSB provoz na 20 m začíná od 14,112 MHz (podle bandplánu IARU Region 1). Nižší frekvence jsou vyhrazeny pro CW a digitální módy.",
      },
      {
        type: "select-answer",
        question: "Jaký druh provozu je povolen v segmentu 144,000-144,150 MHz?",
        choices: [
          { id: "a", text: "CW a SSB" },
          { id: "b", text: "Pouze FM" },
          { id: "c", text: "Pouze digitální módy" },
          { id: "d", text: "AM a SSB" },
        ],
        correctId: "a",
        explanation:
          "Segment 144,000-144,150 MHz je určen pro CW a SSB. FM provoz na 2 m začíná od 145,200 MHz (simplexní kanály) a výše.",
      },
      {
        type: "exam-question",
        questionId: "O-FRQ-011",
      },
      {
        type: "highlight",
        instruction: "Označte správná tvrzení o FM provozu:",
        terms: [
          { text: "FM se používá převážně na VHF a UHF", correct: true },
          { text: "FM zabírá užší pásmo než SSB", correct: false },
          { text: "FM poskytuje lepší kvalitu zvuku než SSB", correct: true },
          { text: "FM se běžně používá na krátkých vlnách", correct: false },
          { text: "FM převládá používá kanálový rastr", correct: true },
        ],
        explanation:
          "FM zabírá širší pásmo než SSB (16 kHz vs. 2,4 kHz), proto se na KV nepoužívá - bylo by to plýtvání spektrem. Na VHF/UHF je dostatek místa.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte správné přiřazení druhu provozu k segmentům bandplánu:",
        pool: [
          { text: "CW se nachází na spodním okraji pásma", correct: true },
          { text: "Digitální módy jsou mezi CW a SSB segmenty", correct: true },
          { text: "SSB segment je vždy na začátku pásma", correct: false },
          { text: "Majáky mají svůj vyhrazený úzký segment", correct: true },
          { text: "FM se na HF pásmech používá běžně", correct: false },
        ],
        explanation:
          "Bandplán řadí módy od nejužšího po nejširší: CW, digi, SSB. Majáky mají vyhrazený kmitočet (např. 14,100 MHz). FM se na HF používá výjimečně (např. 29,6 MHz).",
      },
    ],
    relatedQuestionIds: [
      "O-FRQ-011",
      "O-FRQ-012",
      "O-FRQ-013",
      "O-FRQ-014",
      "O-FRQ-015",
      "O-FRQ-016",
      "O-FRQ-017",
      "O-FRQ-018",
      "O-FRQ-019",
      "O-FRQ-020",
    ],
    tags: ["druhy-provozu", "bandplan", "cw", "ssb", "fm", "digitalni", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 3: Emergency and priority frequencies
  // -----------------------------------------------------------------------
  {
    id: "frequencies-03",
    examPartId: "operating",
    sectionId: "frequencies",
    order: 3,
    title: "Nouzové a prioritní frekvence",
    objective:
      "Identifikovat nouzové volací frekvence a aplikovat správný postup při příjmu tísňových signálů.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Radioamatéři mají vyhrazené nouzové frekvence pro tísňovou komunikaci: 14,300 MHz na KV (HF), 145,500 MHz na VHF a 433,500 MHz na UHF. Tyto frekvence se monitorují a slouží pro nouzové volání při katastrofách a mimořádných situacích.",
        note: "Nouzové frekvence se nesmí používat pro běžný provoz.",
      },
      {
        type: "reveal",
        prompt: "Jaká je nouzová frekvence na pásmu 2 m (VHF)?",
        answer:
          "145,500 MHz - volací frekvence pro nouzový provoz na VHF.",
        explanation:
          "Tato frekvence je mezinárodně uznána jako amatérská nouzová frekvence na VHF. Na UHF je to 433,500 MHz.",
      },
      {
        type: "fill-blank",
        textBefore: "Nouzová frekvence na krátkých vlnách (HF) je",
        blank: "14,300 MHz",
        distractors: ["14,100 MHz", "7,110 MHz", "3,760 MHz"],
        textAfter: ".",
        explanation:
          "14,300 MHz je hlavní mezinárodní nouzová frekvence pro amatérský provoz na KV. 14,100 MHz je frekvence majáku.",
      },
      {
        type: "select-answer",
        question: "Co musí radioamatér udělat, když zaslechne tísňové volání na amatérském pásmu?",
        choices: [
          { id: "a", text: "Přestat vysílat, naslouchat a být připraven pomoci" },
          { id: "b", text: "Přepnout na jiný kmitočet a pokračovat v provozu" },
          { id: "c", text: "Ignorovat volání, pokud není určeno jemu" },
          { id: "d", text: "Okamžitě zavolat policii bez dalšího naslouchání" },
        ],
        correctId: "a",
        explanation:
          "Každý radioamatér má povinnost přestat vysílat a naslouchat. Tísňová komunikace má absolutní přednost. Teprve po posouzení situace je možné pomoci předáním zprávy nebo kontaktováním záchranných složek.",
      },
      {
        type: "explain",
        content:
          "Existují tři úrovně priority: MAYDAY (tíseň - bezprostřední ohrožení života), PAN PAN (naléhavý stav - vážná situace bez bezprostředního ohrožení) a SECURITE (bezpečnostní zpráva - varování před nebezpečím). Každá úroveň má svůj specifický postup.",
      },
      {
        type: "match",
        instruction: "Přiřaďte volací signál k úrovni priority:",
        pairs: [
          { left: "MAYDAY", right: "Tíseň - ohrožení života" },
          { left: "PAN PAN", right: "Naléhavý stav" },
          { left: "SECURITE", right: "Bezpečnostní zpráva" },
        ],
        explanation:
          "MAYDAY pochází z francouzského 'm'aider' (pomoc). PAN PAN signalizuje vážnou situaci. SECURITE varuje před nebezpečím (např. počasí).",
      },
      {
        type: "exam-question",
        questionId: "O-FRQ-021",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte všechna správná pravidla pro nouzový provoz:",
        pool: [
          {
            text: "Nouzová komunikace má přednost před veškerým běžným provozem",
            correct: true,
          },
          {
            text: "Na nouzové frekvenci se smí vysílat jen s povolením ČTÚ",
            correct: false,
          },
          {
            text: "Při zaslechnutí MAYDAY je třeba uvolnit frekvenci",
            correct: true,
          },
          {
            text: "Nouzový provoz se smí vést pouze na vyhrazených frekvencích",
            correct: false,
          },
          {
            text: "V nouzové situaci lze překročit běžné výkonové limity",
            correct: false,
          },
        ],
        explanation:
          "Nouzový provoz má přednost na jakémkoli kmitočtu, nejen na vyhrazených. Nepotřebujete speciální povolení. Výkonové limity však platí stále.",
      },
    ],
    relatedQuestionIds: [
      "O-FRQ-021",
      "O-FRQ-022",
      "O-FRQ-023",
      "O-FRQ-024",
      "O-FRQ-025",
      "O-FRQ-026",
      "O-FRQ-027",
      "O-FRQ-028",
      "O-FRQ-029",
      "O-FRQ-030",
    ],
    tags: ["nouzove-frekvence", "mayday", "tisen", "priorita", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 4: Power limits and restrictions
  // -----------------------------------------------------------------------
  {
    id: "frequencies-04",
    examPartId: "operating",
    sectionId: "frequencies",
    order: 4,
    title: "Výkonové limity a omezení",
    objective:
      "Určit maximální povolený výkon pro jednotlivá pásma a rozlišit pojmy ERP a PEP.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Držitel povolení třídy A (HAREC) smí vysílat s maximálním výkonem 750 W PEP (Peak Envelope Power - špičkový výkon obálky). Třída N (novice) má limit 100 W PEP. Na některých pásmech platí další omezení stanovená provozním řádem.",
        note: "PEP je střední výkon v jedné RF periodě při špičce modulační obálky.",
      },
      {
        type: "reveal",
        prompt: "Jaký je maximální povolený výkon na pásmu 2 m pro třídu A?",
        answer:
          "750 W PEP - stejný jako na ostatních pásmech pro třídu A, pokud provozní řád nestanoví jinak.",
        explanation:
          "Obecný limit pro třídu A je 750 W PEP na všech povolených pásmech. Pro některé kmitočty mohou platit výjimky.",
      },
      {
        type: "match",
        instruction: "Přiřaďte třídu povolení k maximálnímu výkonu:",
        pairs: [
          { left: "Třída A (HAREC)", right: "750 W PEP" },
          { left: "Třída N (novice)", right: "100 W PEP" },
        ],
        explanation:
          "HAREC (třída A) umožňuje vysílat až 750 W PEP. Novická třída N je omezena na 100 W PEP.",
      },
      {
        type: "fill-blank",
        textBefore: "Maximální výkon pro třídu HAREC (A) je",
        blank: "750 W PEP",
        distractors: ["100 W PEP", "1000 W PEP", "500 W ERP"],
        textAfter: ".",
        explanation:
          "Český provozní řád stanoví pro třídu A maximum 750 W PEP. 1000 W platí v některých jiných zemích (např. USA).",
      },
      {
        type: "select-answer",
        question:
          "Radioamatér chce navázat spojení se vzdálenou stanicí na 14 MHz. Stanice slyší slabě. Jaké je správné chování ohledně výkonu?",
        choices: [
          { id: "a", text: "Použít nejnižší výkon potřebný pro spolehlivé spojení" },
          { id: "b", text: "Vždy vysílat na maximálním povoleném výkonu" },
          { id: "c", text: "Použít přesně polovinu maximálního výkonu" },
          { id: "d", text: "Výkon není důležitý, záleží jen na anténě" },
        ],
        correctId: "a",
        explanation:
          "Radioamatér má povinnost používat nejnižší výkon nutný k navázání spojení. Zbytečně vysoké výkony způsobují rušení ostatním stanicím.",
      },
      {
        type: "explain",
        content:
          "ERP (Effective Radiated Power) je efektivní vyzářený výkon - zahrnuje výkon vysílače, ztráty v kabelu a zisk antény. PEP (Peak Envelope Power) je špičkový výkon na výstupu vysílače. ERP = výkon vysílače x zisk antény / ztráty v kabelu.",
      },
      {
        type: "exam-question",
        questionId: "O-FRQ-031",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte všechna správná tvrzení o výkonových limitech:",
        pool: [
          {
            text: "Maximální výkon pro třídu A je 750 W PEP",
            correct: true,
          },
          {
            text: "Radioamatér má vysílat minimálním potřebným výkonem",
            correct: true,
          },
          {
            text: "ERP zahrnuje zisk antény",
            correct: true,
          },
          {
            text: "Na všech pásmech platí stejný výkonový limit",
            correct: false,
          },
          {
            text: "Třída N smí vysílat až 250 W PEP",
            correct: false,
          },
        ],
        explanation:
          "Na některých pásmech či v určitých oblastech mohou platit snížené limity. Třída N má limit 100 W PEP, ne 250 W.",
      },
    ],
    relatedQuestionIds: [
      "O-FRQ-031",
      "O-FRQ-032",
      "O-FRQ-033",
      "O-FRQ-034",
      "O-FRQ-035",
      "O-FRQ-036",
      "O-FRQ-037",
      "O-FRQ-038",
      "O-FRQ-039",
      "O-FRQ-040",
      "O-FRQ-041",
    ],
    tags: ["vykon", "pep", "erp", "trida-a", "trida-n", "apply"],
  },
];
