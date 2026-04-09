import type { Lesson } from "@/lib/types";

export const technicalTheoryLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Ohm's law and basic electrical quantities
  // -----------------------------------------------------------------------
  {
    id: "theory-01",
    examPartId: "technical",
    sectionId: "theory",
    order: 1,
    title: "Ohmův zákon a základní veličiny",
    objective:
      "Vypočítat napětí, proud a odpor pomocí Ohmova zákona a rozlišit základní elektrické veličiny.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Představte si vodní potrubí: napětí je tlak vody, proud je množství vody, které proteče za sekundu, a odpor je zúžení potrubí. Ohmův zákon popisuje vztah mezi těmito třemi veličinami jednoduchým vzorcem: U = I \u00d7 R.",
        note: "Toto je nejdůležitější vzorec v celé radiotechnice. Všechny ostatní na něm staví.",
      },
      {
        type: "fill-blank",
        textBefore:
          "Pokud obvodem protéká proud 2 A a odpor je 10 \u03a9, napětí je",
        blank: "20 V",
        distractors: ["5 V", "12 V", "200 V"],
        textAfter: ".",
        explanation: "U = I \u00d7 R = 2 \u00d7 10 = 20 V",
      },
      {
        type: "reveal",
        prompt: "Jaká je jednotka elektrického odporu?",
        answer: "Ohm (značka \u03a9)",
        explanation:
          "Pojmenováno po Georgu Ohmovi. 1 \u03a9 = odpor, kterým při napětí 1 V protéká proud 1 A.",
      },
      {
        type: "match",
        instruction: "Přiřaďte veličinu k její jednotce:",
        pairs: [
          { left: "Napětí (U)", right: "Volt [V]" },
          { left: "Proud (I)", right: "Ampér [A]" },
          { left: "Odpor (R)", right: "Ohm [\u03a9]" },
          { left: "Výkon (P)", right: "Watt [W]" },
        ],
      },
      {
        type: "slider",
        question:
          "Jaký proud protéká obvodem s napětím 12 V a odporem 4 \u03a9?",
        min: 0,
        max: 10,
        step: 0.5,
        unit: "A",
        correctValue: 3,
        tolerance: 0.5,
        explanation: "I = U / R = 12 / 4 = 3 A",
      },
      {
        type: "explain",
        content:
          'Častý omyl: studenti si pletou, kdy dělit a kdy násobit. Zapamatujte si trojúhelník U-I-R: zakryjte hledanou veličinu a zbytek vám dá vzorec. U nahoře, I a R dole vedle sebe.',
        note: "U = I\u00d7R, I = U/R, R = U/I",
      },
      {
        type: "select-answer",
        question:
          "Rezistorem s odporem 100 \u03a9 protéká proud 0,5 A. Jaký je výkon na rezistoru?",
        choices: [
          { id: "a", text: "50 W" },
          { id: "b", text: "25 W" },
          { id: "c", text: "200 W" },
          { id: "d", text: "5 W" },
        ],
        correctId: "b",
        explanation:
          "P = I\u00b2 \u00d7 R = 0,5\u00b2 \u00d7 100 = 0,25 \u00d7 100 = 25 W. Alternativně: U = I\u00d7R = 50 V, P = U\u00d7I = 50\u00d70,5 = 25 W.",
      },
      {
        type: "exam-question",
        questionId: "T-THE-001",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte všechna správná tvrzení o Ohmově zákoně:",
        pool: [
          { text: "U = I \u00d7 R", correct: true },
          {
            text: "Proud roste s rostoucím odporem při konstantním napětí",
            correct: false,
          },
          {
            text: "Při zdvojnásobení napětí se proud zdvojnásobí (při konstantním R)",
            correct: true,
          },
          { text: "Odpor se měří v ampérech", correct: false },
          { text: "I = U / R", correct: true },
        ],
        explanation:
          "Proud klesá s rostoucím odporem (nepřímá úměra). Odpor se měří v ohmech, ne ampérech.",
      },
    ],
    relatedQuestionIds: [
      "T-THE-001",
      "T-THE-002",
      "T-THE-003",
      "T-THE-004",
      "T-THE-005",
      "T-THE-006",
      "T-THE-007",
      "T-THE-008",
    ],
    tags: ["ohmov-zakon", "napeti", "proud", "odpor", "vykon", "apply"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: AC, electromagnetic fields, frequency, wavelength
  // -----------------------------------------------------------------------
  {
    id: "theory-02",
    examPartId: "technical",
    sectionId: "theory",
    order: 2,
    title: "Střídavý proud a elektromagnetické vlny",
    objective:
      "Vysvětlit rozdíl mezi stejnosměrným a střídavým proudem a vypočítat vlnovou délku z frekvence.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Baterie dodává stejnosměrný proud (DC) - elektřina teče stále jedním směrem. Zásuvka v domě dodává střídavý proud (AC) - směr se mění 50krát za sekundu (50 Hz). Rádiové signály jsou také střídavé, ale s frekvencí milionkrát vyšší.",
      },
      {
        type: "fill-blank",
        textBefore:
          "Frekvence střídavého proudu v české elektrické síti je",
        blank: "50 Hz",
        distractors: ["60 Hz", "100 Hz", "220 Hz"],
        textAfter: ".",
        explanation:
          "V Evropě se používá 50 Hz. V USA a Japonsku je 60 Hz.",
      },
      {
        type: "explain",
        content:
          "Elektromagnetická vlna má dvě klíčové vlastnosti: frekvenci (f) a vlnovou délku (\u03bb). Platí jednoduchý vztah: \u03bb = c / f, kde c je rychlost světla (300 000 000 m/s, zjednodušeně 3\u00d710\u2078 m/s).",
        note: "Pro radioamatéry se často používá zjednodušený vzorec: \u03bb [m] = 300 / f [MHz]",
      },
      {
        type: "slider",
        question:
          "Jaká je vlnová délka signálu na frekvenci 145 MHz? (zaokrouhlete)",
        min: 0.5,
        max: 5,
        step: 0.1,
        unit: "m",
        correctValue: 2.07,
        tolerance: 0.15,
        explanation:
          "\u03bb = 300 / 145 = 2,07 m. Proto se pásmu 144-146 MHz říká '2 metry'.",
      },
      {
        type: "match",
        instruction: "Přiřaďte pásmo k jeho přibližné vlnové délce:",
        pairs: [
          { left: "3,5 MHz", right: "80 m" },
          { left: "7 MHz", right: "40 m" },
          { left: "14 MHz", right: "20 m" },
          { left: "145 MHz", right: "2 m" },
        ],
        explanation:
          "Vzorec \u03bb = 300/f: 300/3,5 \u2248 86 m (\u224880), 300/7 \u2248 43 m (\u224840), 300/14 \u2248 21 m (\u224820), 300/145 \u2248 2 m.",
      },
      {
        type: "reveal",
        prompt: "Co je to perioda (T) signálu?",
        answer:
          "Doba trvání jednoho kmitu. T = 1/f. Při frekvenci 1 MHz je perioda 1 \u03bcs.",
        explanation:
          "Perioda a frekvence jsou navzájem převrácené hodnoty: f = 1/T, T = 1/f.",
      },
      {
        type: "order",
        instruction:
          "Seřaďte elektromagnetické vlny od nejnižší frekvence po nejvyšší:",
        items: [
          "Dlouhé vlny (LF)",
          "Krátké vlny (HF)",
          "Velmi krátké vlny (VHF)",
          "Ultrakrátké vlny (UHF)",
          "Mikrovlny (SHF)",
        ],
        explanation:
          "LF < HF < VHF < UHF < SHF. S rostoucí frekvencí klesá vlnová délka.",
      },
      {
        type: "exam-question",
        questionId: "T-THE-009",
      },
      {
        type: "highlight",
        instruction:
          "Vyberte veličiny, které patří k popisu elektromagnetické vlny:",
        terms: [
          { text: "Frekvence", correct: true },
          { text: "Hmotnost", correct: false },
          { text: "Vlnová délka", correct: true },
          { text: "Objem", correct: false },
          { text: "Perioda", correct: true },
          { text: "Amplituda", correct: true },
        ],
        explanation:
          "Hmotnost a objem jsou mechanické veličiny, ne vlastnosti elektromagnetické vlny.",
      },
    ],
    relatedQuestionIds: [
      "T-THE-009",
      "T-THE-010",
      "T-THE-011",
      "T-THE-012",
      "T-THE-013",
      "T-THE-014",
    ],
    tags: [
      "stridavy-proud",
      "frekvence",
      "vlnova-delka",
      "perioda",
      "em-vlny",
      "apply",
    ],
  },

  // -----------------------------------------------------------------------
  // Lesson 3: Impedance and reactance
  // -----------------------------------------------------------------------
  {
    id: "theory-03",
    examPartId: "technical",
    sectionId: "theory",
    order: 3,
    title: "Impedance a reaktance",
    objective:
      "Rozlišit odpor, reaktanci a impedanci a vysvětlit jejich vliv na střídavý obvod.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Ve stejnosměrném obvodu brání průchodu proudu jen odpor (R). Ve střídavém obvodu ale přibývají kondenzátory a cívky, které kladou vlastní odpor - říkáme mu reaktance (X). Celkový odpor střídavého obvodu se nazývá impedance (Z).",
        note: "Impedance kombinuje odpor a reaktanci: Z\u00b2 = R\u00b2 + X\u00b2",
      },
      {
        type: "select-answer",
        question:
          "Kapacitní reaktance kondenzátoru s rostoucí frekvencí:",
        choices: [
          { id: "a", text: "Klesá" },
          { id: "b", text: "Roste" },
          { id: "c", text: "Zůstává konstantní" },
          { id: "d", text: "Nejprve klesá, pak roste" },
        ],
        correctId: "a",
        explanation:
          "Xc = 1 / (2\u03c0fC). S rostoucí frekvencí (f) kapacitní reaktance klesá - kondenzátor propouští vysoké frekvence snáze.",
      },
      {
        type: "reveal",
        prompt: "Jak se chová induktivní reaktance cívky s rostoucí frekvencí?",
        answer:
          "Roste. Xl = 2\u03c0fL - cívka blokuje vysoké frekvence.",
        explanation:
          "Kondenzátor a cívka se chovají opačně: kondenzátor propouští VF, cívka je blokuje. Proto se používají ve filtrech.",
      },
      {
        type: "fill-blank",
        textBefore:
          "Jednotkou impedance i reaktance je",
        blank: "ohm [\u03a9]",
        distractors: ["farad [F]", "henry [H]", "volt [V]"],
        textAfter: ", stejně jako u odporu.",
        explanation:
          "Odpor (R), reaktance (X) i impedance (Z) se měří v ohmech.",
      },
      {
        type: "slider",
        question:
          "Obvod má odpor R = 30 \u03a9 a reaktanci X = 40 \u03a9. Jaká je impedance Z?",
        min: 10,
        max: 80,
        step: 1,
        unit: "\u03a9",
        correctValue: 50,
        tolerance: 2,
        explanation:
          "Z = \u221a(R\u00b2 + X\u00b2) = \u221a(900 + 1600) = \u221a2500 = 50 \u03a9. Klasický pythagorovský trojúhelník 3-4-5.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte součástku k typu reaktance, kterou vytváří:",
        pairs: [
          { left: "Kondenzátor", right: "Kapacitní reaktance (Xc)" },
          { left: "Cívka", right: "Induktivní reaktance (Xl)" },
          { left: "Rezistor", right: "Činný odpor (R)" },
        ],
        explanation:
          "Rezistor nevytváří reaktanci - má pouze činný odpor, který je nezávislý na frekvenci.",
      },
      {
        type: "explain",
        content:
          "V radioamatérské praxi je impedance klíčová při připojování antény k vysílači. Standardní impedance je 50 \u03a9. Pokud anténa nemá 50 \u03a9, vzniká odraz a část energie se vrátí zpět - to měříme jako PSV (poměr stojatých vln, anglicky SWR).",
      },
      {
        type: "exam-question",
        questionId: "T-THE-015",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte všechna správná tvrzení o impedanci:",
        pool: [
          { text: "Impedance se měří v ohmech", correct: true },
          {
            text: "Impedance závisí na frekvenci",
            correct: true,
          },
          {
            text: "Impedance je vždy rovna odporu",
            correct: false,
          },
          {
            text: "Standardní impedance v radioamatérské praxi je 50 \u03a9",
            correct: true,
          },
          {
            text: "Reaktance existuje i ve stejnosměrném obvodu",
            correct: false,
          },
        ],
        explanation:
          "Impedance = R jen pokud je reaktance nulová. Reaktance vzniká pouze ve střídavých obvodech - ve stejnosměrném obvodu se projevuje jen odpor.",
      },
    ],
    relatedQuestionIds: [
      "T-THE-015",
      "T-THE-016",
      "T-THE-017",
      "T-THE-018",
      "T-THE-019",
      "T-THE-020",
      "T-THE-021",
      "T-THE-022",
    ],
    tags: [
      "impedance",
      "reaktance",
      "kapacita",
      "indukcnost",
      "stridavy-proud",
      "analyze",
    ],
  },
];
