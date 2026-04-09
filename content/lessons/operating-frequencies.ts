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
    title: "Amaterska pasma - od 160 metru po mikrovlny",
    objective:
      "Prirazit amaterska pasma k jejich frekvencim a vypocitat vlnovou delku ze znameho kmitoctu.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Radioamaterska pasma se oznacuji vlnovou delkou: 160 m, 80 m, 40 m, 20 m, 15 m, 10 m na kratkych vlnach (HF), 2 m a 70 cm na VHF/UHF a 23 cm v oblasti mikrovln. Kazde pasmo ma jiny charakter sireni a jine pouziti.",
        note: "Zakladni vzorec: vlnova delka [m] = 300 / frekvence [MHz]",
      },
      {
        type: "match",
        instruction: "Priradte pasmo k jeho frekvenci:",
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
        textBefore: "Pasmo 20 metru odpovida frekvenci priblizne",
        blank: "14 MHz",
        distractors: ["7 MHz", "21 MHz", "28 MHz"],
        textAfter: ".",
        explanation:
          "f = 300 / lambda = 300 / 20 = 15 MHz, zacatek pasma je 14 MHz. Proto se naziva '20 metru'.",
      },
      {
        type: "explain",
        content:
          "Vlnova delka a frekvence jsou neprime umerne: lambda = 300 / f [MHz]. Cim vyssi frekvence, tim kratsi vlna. Na HF pasmech (1,8-30 MHz) se signaly siri odrazem od ionosfery na velke vzdalenosti. Na VHF/UHF je dosah omezen primou viditelnosti.",
      },
      {
        type: "slider",
        question:
          "Jaka je priblizna vlnova delka na frekvenci 7 MHz?",
        min: 10,
        max: 100,
        step: 5,
        unit: "m",
        correctValue: 43,
        tolerance: 5,
        explanation:
          "lambda = 300 / 7 = 42,9 m, zaokrouhlene 43 m. Proto se pasmo 7 MHz nazyva '40 metru'.",
      },
      {
        type: "highlight",
        instruction: "Oznacte pasma, ktera patri do oblasti kratkych vln (HF, 3-30 MHz):",
        terms: [
          { text: "160 m (1,8 MHz)", correct: true },
          { text: "80 m (3,5 MHz)", correct: true },
          { text: "2 m (144 MHz)", correct: false },
          { text: "70 cm (430 MHz)", correct: false },
          { text: "40 m (7 MHz)", correct: true },
          { text: "23 cm (1296 MHz)", correct: false },
        ],
        explanation:
          "HF pasma lezi v rozsahu 3-30 MHz. Pasmo 160 m (1,8 MHz) je tesne pod touto hranici, ale take se radi mezi kratkovalonna amaterska pasma. 2 m je VHF, 70 cm je UHF, 23 cm jsou mikrovlny.",
      },
      {
        type: "select-answer",
        question: "Ktere pasmo patri do oblasti VHF?",
        choices: [
          { id: "a", text: "2 m (144 MHz)" },
          { id: "b", text: "20 m (14 MHz)" },
          { id: "c", text: "70 cm (430 MHz)" },
          { id: "d", text: "23 cm (1296 MHz)" },
        ],
        correctId: "a",
        explanation:
          "VHF = 30-300 MHz. Pasmo 2 m (144 MHz) je jedine v tomto rozsahu. 20 m je HF, 70 cm je UHF, 23 cm jsou mikrovlny (SHF).",
      },
      {
        type: "exam-question",
        questionId: "O-FRQ-001",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte vsechna spravna tvrzeni o primarni pridelenych pasmech:",
        pool: [
          {
            text: "Pasmo 20 m (14 MHz) je primarne prideleno amaterske sluzbe",
            correct: true,
          },
          {
            text: "Na primarne pridelenych pasmech maji radioamateri prednost",
            correct: true,
          },
          {
            text: "Vsechna amaterska pasma jsou primarne pridelena",
            correct: false,
          },
          {
            text: "Na sekundarne pridelenych pasmech nesmi radioamater rusit primarniho uzivatele",
            correct: true,
          },
          {
            text: "Primarni prideleni znamena vylucne pouziti radioamatery",
            correct: false,
          },
        ],
        explanation:
          "Nektera pasma (napr. 40 m) jsou sdilena s jinymi sluzbami. Primarni prideleni neznamena vylucnost, ale prednost pri ochrane pred rusenim.",
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
    title: "Druhy provozu a sirky pasma",
    objective:
      "Rozlisit provozni druhy podle sirky pasma a urcit spravny segment v bandplanu IARU.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Radioamateri pouzivaji ruzne druhy provozu: CW (telegrafie), SSB (fonicky provoz na KV), FM (fonicky provoz na VHF/UHF), AM a digitalni mody (FT8, PSK31, RTTY). Kazdy druh zabira jinou sirku pasma a ma v bandplanu IARU vyhrazeny segment.",
      },
      {
        type: "match",
        instruction: "Priradte druh provozu k jeho typicke sirce pasma:",
        pairs: [
          { left: "CW (telegrafie)", right: "500 Hz" },
          { left: "SSB", right: "2,4 kHz" },
          { left: "FM (uzkopasmova)", right: "16 kHz" },
          { left: "AM", right: "6 kHz" },
        ],
        explanation:
          "CW je nejuzsi mod. SSB prenasi hlas v sirce 2,4 kHz. AM potrebuje dvojnasobek (postrani pasma na obou stranach). FM na VHF/UHF ma typicky kanalovy rastr 12,5 nebo 25 kHz.",
      },
      {
        type: "reveal",
        prompt: "Proc se CW segmenty nachazeji vzdy na zacatku kazdeho pasma?",
        answer:
          "CW ma nejuzsi sirku pasma (cca 500 Hz), proto umoznuje nejhustejsi provoz. Tradice i bandplan IARU radi CW na spodni okraj kazdeho pasma.",
        explanation:
          "Mody se v bandplanu radi od nejuzsiho po nejsirsi. Diky tomu se efektivne vyuzije omezeny spektralni prostor.",
      },
      {
        type: "order",
        instruction: "Seradte druhy provozu od nejuzsiho po nejsirsi zabrane pasmo:",
        items: ["CW", "PSK31", "SSB", "AM", "FM"],
        explanation:
          "CW ~ 500 Hz, PSK31 ~ 31 Hz (ale prakticky ~ 100 Hz), SSB ~ 2,4 kHz, AM ~ 6 kHz, FM ~ 16 kHz. PSK31 je velmi uzky, ale v praxi se radi za CW.",
      },
      {
        type: "explain",
        content:
          "Bandplan IARU rozdeluje kazde pasmo na segmenty podle druhu provozu. Napriklad na 20 m (14 MHz): 14,000-14,070 CW, 14,070-14,099 digitalni mody, 14,099-14,101 majaky, 14,101-14,112 digitalni, 14,112-14,350 SSB.",
        note: "Bandplan je doporuceni, ale radioamater jej ma dodrzovat podle provozniho radu.",
      },
      {
        type: "fill-blank",
        textBefore: "SSB segment na pasmu 20 m zacina od frekvence",
        blank: "14,112 MHz",
        distractors: ["14,000 MHz", "14,070 MHz", "14,350 MHz"],
        textAfter: ".",
        explanation:
          "SSB provoz na 20 m zacina od 14,112 MHz (podle bandplanu IARU Region 1). Nizsi frekvence jsou vyhrazeny pro CW a digitalni mody.",
      },
      {
        type: "select-answer",
        question: "Jaky druh provozu je povolen v segmentu 144,000-144,150 MHz?",
        choices: [
          { id: "a", text: "CW a SSB" },
          { id: "b", text: "Pouze FM" },
          { id: "c", text: "Pouze digitalni mody" },
          { id: "d", text: "AM a SSB" },
        ],
        correctId: "a",
        explanation:
          "Segment 144,000-144,150 MHz je urcen pro CW a SSB. FM provoz na 2 m zacina od 145,200 MHz (simplexni kanaly) a vyse.",
      },
      {
        type: "exam-question",
        questionId: "O-FRQ-011",
      },
      {
        type: "highlight",
        instruction: "Oznacte spravna tvrzeni o FM provozu:",
        terms: [
          { text: "FM se pouziva prevazne na VHF a UHF", correct: true },
          { text: "FM zabira uzsi pasmo nez SSB", correct: false },
          { text: "FM poskytuje lepsi kvalitu zvuku nez SSB", correct: true },
          { text: "FM se bezne pouziva na kratkych vlnach", correct: false },
          { text: "FM prevladac pouziva kanalovy rastr", correct: true },
        ],
        explanation:
          "FM zabira sirsi pasmo nez SSB (16 kHz vs. 2,4 kHz), proto se na KV nepouziva - bylo by to plytvani spektrem. Na VHF/UHF je dostatek mista.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte spravne prirazeni druhu provozu k segmentum bandplanu:",
        pool: [
          { text: "CW se nachazi na spodnim okraji pasma", correct: true },
          { text: "Digitalni mody jsou mezi CW a SSB segmenty", correct: true },
          { text: "SSB segment je vzdy na zacatku pasma", correct: false },
          { text: "Majaky maji svuj vyhrazeny uzky segment", correct: true },
          { text: "FM se na HF pasmech pouziva bezne", correct: false },
        ],
        explanation:
          "Bandplan radi mody od nejuzsiho po nejsirsi: CW, digi, SSB. Majaky maji vyhrazeny kmitocet (napr. 14,100 MHz). FM se na HF pouziva vyjimecne (napr. 29,6 MHz).",
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
    title: "Nouzove a prioritni frekvence",
    objective:
      "Identifikovat nouzove volaci frekvence a aplikovat spravny postup pri prijmu tisnovych signalu.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Radioamateri maji vyhrazene nouzove frekvence pro tisnovon komunikaci: 14,300 MHz na KV (HF), 145,500 MHz na VHF a 433,500 MHz na UHF. Tyto frekvence se monitoruji a slouzi pro nouzove volani pri katastrofach a mimoradnych situacich.",
        note: "Nouzove frekvence se nesmi pouzivat pro bezny provoz.",
      },
      {
        type: "reveal",
        prompt: "Jaka je nouzova frekvence na pasmu 2 m (VHF)?",
        answer:
          "145,500 MHz - volaci frekvence pro nouzovy provoz na VHF.",
        explanation:
          "Tato frekvence je mezinarodne uznana jako amaterska nouzova frekvence na VHF. Na UHF je to 433,500 MHz.",
      },
      {
        type: "fill-blank",
        textBefore: "Nouzova frekvence na kratkych vlnach (HF) je",
        blank: "14,300 MHz",
        distractors: ["14,100 MHz", "7,110 MHz", "3,760 MHz"],
        textAfter: ".",
        explanation:
          "14,300 MHz je hlavni mezinarodni nouzova frekvence pro amatersky provoz na KV. 14,100 MHz je frekvence majaku.",
      },
      {
        type: "select-answer",
        question: "Co musi radioamater udelat, kdyz zaslechne tisove volani na amaterskem pasmu?",
        choices: [
          { id: "a", text: "Prestat vysilat, naslouchat a byt pripraven pomoci" },
          { id: "b", text: "Prepnout na jiny kmitocet a pokracovat v provozu" },
          { id: "c", text: "Ignorovat volani, pokud neni urceno jemu" },
          { id: "d", text: "Okamzite zavolat policii bez dalsiho naslouchani" },
        ],
        correctId: "a",
        explanation:
          "Kazdy radioamater ma povinnost prestat vysilat a naslouchat. Tisova komunikace ma absolutni prednost. Teprve po posouzeni situace je mozne pomoci predanim zpravy nebo kontaktovanim zachrannych slozek.",
      },
      {
        type: "explain",
        content:
          "Existuji tri urovne priority: MAYDAY (tisen - bezprostredni ohrozeni zivota), PAN PAN (nalehavy stav - vazna situace bez bezprostredniho ohrozeni) a SECURITE (bezpecnostni zprava - varovani pred nebezpecim). Kazda uroven ma svuj specificky postup.",
      },
      {
        type: "match",
        instruction: "Priradte volaci signal k urovni priority:",
        pairs: [
          { left: "MAYDAY", right: "Tisen - ohrozeni zivota" },
          { left: "PAN PAN", right: "Nalehavy stav" },
          { left: "SECURITE", right: "Bezpecnostni zprava" },
        ],
        explanation:
          "MAYDAY pochazi z francouzskeho 'm'aider' (pomoc). PAN PAN signalizuje vaznou situaci. SECURITE varuje pred nebezpecim (napr. pocasi).",
      },
      {
        type: "exam-question",
        questionId: "O-FRQ-021",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte vsechna spravna pravidla pro nouzovy provoz:",
        pool: [
          {
            text: "Nouzova komunikace ma prednost pred veskerym beznym provozem",
            correct: true,
          },
          {
            text: "Na nouzove frekvenci se smi vysilat jen s povolenim CTU",
            correct: false,
          },
          {
            text: "Pri zaslechuti MAYDAY je treba uvolnit frekvenci",
            correct: true,
          },
          {
            text: "Nouzovy provoz se smi vest pouze na vyhrazenych frekvencich",
            correct: false,
          },
          {
            text: "V nouzove situaci lze prekrocit bezne vykonove limity",
            correct: false,
          },
        ],
        explanation:
          "Nouzovy provoz ma prednost na jakemkoli kmitoctu, nejen na vyhrazenych. Nepotrebujete specialni povoleni. Vykonove limity vsak platipry stale.",
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
    title: "Vykonove limity a omezeni",
    objective:
      "Urcit maximalni povoleny vykon pro jednotliva pasma a rozlisit pojmy ERP a PEP.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Drzitel povoleni tridy A (HAREC) smi vysilat s maximalnim vykonem 750 W PEP (Peak Envelope Power - spickovy vykon obalky). Trida N (novice) ma limit 100 W PEP. Na nekterych pasmech platri dalsi omezeni stanovena provoznim radem.",
        note: "PEP je stredni vykon v jedne RF periode pri spicce modulacni obalky.",
      },
      {
        type: "reveal",
        prompt: "Jaky je maximalni povoleny vykon na pasmu 2 m pro tridu A?",
        answer:
          "750 W PEP - stejny jako na ostatnich pasmech pro tridu A, pokud provozni rad nestanovi jinak.",
        explanation:
          "Obecny limit pro tridu A je 750 W PEP na vsech povoleny pasmech. Pro nektere kmitocty mohou platit vyjimky.",
      },
      {
        type: "match",
        instruction: "Priradte tridu povoleni k maximalnimu vykonu:",
        pairs: [
          { left: "Trida A (HAREC)", right: "750 W PEP" },
          { left: "Trida N (novice)", right: "100 W PEP" },
        ],
        explanation:
          "HAREC (trida A) umoznuje vysilat az 750 W PEP. Novicka trida N je omezena na 100 W PEP.",
      },
      {
        type: "fill-blank",
        textBefore: "Maximalni vykon pro tridu HAREC (A) je",
        blank: "750 W PEP",
        distractors: ["100 W PEP", "1000 W PEP", "500 W ERP"],
        textAfter: ".",
        explanation:
          "Cesky provozni rad stanovi pro tridu A maximum 750 W PEP. 1000 W plati v nekterych jinych zemich (napr. USA).",
      },
      {
        type: "select-answer",
        question:
          "Radioamater chce navazat spojeni s vzdaltenou stanici na 14 MHz. Stanice slysi slabe. Jake je spravne chovani ohledne vykonu?",
        choices: [
          { id: "a", text: "Pouzit nejnizsi vykon potrebny pro spolehive spojeni" },
          { id: "b", text: "Vzdy vysilat na maximalnim povolenem vykonu" },
          { id: "c", text: "Pouzit presne polovinu maximalniho vykonu" },
          { id: "d", text: "Vykon neni dulezity, zalezi jen na antene" },
        ],
        correctId: "a",
        explanation:
          "Radioamater ma povinnost pouzivat nejnizsi vykon nutny k navazani spojeni. Zbytecne vysoke vykony zpusobuji ruseni ostatnim stanicim.",
      },
      {
        type: "explain",
        content:
          "ERP (Effective Radiated Power) je efektivni vyzareny vykon - zahrnuje vykon vysilace, ztray v kabelu a zisk anteny. PEP (Peak Envelope Power) je spickovy vykon na vystupu vysilace. ERP = vykon vysilace x zisk anteny / ztraty v kabelu.",
      },
      {
        type: "exam-question",
        questionId: "O-FRQ-031",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte vsechna spravna tvrzeni o vykonovych limitech:",
        pool: [
          {
            text: "Maximalni vykon pro tridu A je 750 W PEP",
            correct: true,
          },
          {
            text: "Radioamater ma vysilat minimalnim potrebnym vykonem",
            correct: true,
          },
          {
            text: "ERP zahrnuje zisk anteny",
            correct: true,
          },
          {
            text: "Na vsech pasmech platri stejny vykonovy limit",
            correct: false,
          },
          {
            text: "Trida N smi vysilat az 250 W PEP",
            correct: false,
          },
        ],
        explanation:
          "Na nekterych pasmech ci v urcitych oblastech mohou platit snizene limity. Trida N ma limit 100 W PEP, ne 250 W.",
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
