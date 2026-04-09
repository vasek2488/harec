import type { Question } from "@/lib/types";

export const technicalTheoryQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Ohm's law & basic quantities (theory-01)
  // -----------------------------------------------------------------------
  {
    id: "T-THE-001",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Jaký proud protéká obvodem s napětím 24 V a odporem 8 \u03a9?",
    choices: [
      { id: "a", text: "3 A" },
      { id: "b", text: "32 A" },
      { id: "c", text: "192 A" },
      { id: "d", text: "0,33 A" },
    ],
    correctChoiceId: "a",
    explanation:
      "I = U/R = 24/8 = 3 A. Odpověď 32 A by znamenala sčítání (24+8), což je chyba. Viz Ohmův zákon ve vzorcích.",
    relatedLessonIds: ["theory-01"],
    tags: ["ohmov-zakon", "apply"],
  },
  {
    id: "T-THE-002",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Rezistorem protéká proud 0,5 A při napětí 10 V. Jaký je odpor rezistoru?",
    choices: [
      { id: "a", text: "5 \u03a9" },
      { id: "b", text: "20 \u03a9" },
      { id: "c", text: "0,05 \u03a9" },
      { id: "d", text: "10,5 \u03a9" },
    ],
    correctChoiceId: "b",
    explanation:
      "R = U/I = 10/0,5 = 20 \u03a9. Odpověď 5 \u03a9 by znamenala I\u00d7U, což je špatný vzorec. Viz Ohmův zákon.",
    relatedLessonIds: ["theory-01"],
    tags: ["ohmov-zakon", "apply"],
  },
  {
    id: "T-THE-003",
    examPartId: "technical",
    sectionId: "theory",
    wording: "Jaká je jednotka elektrického výkonu?",
    choices: [
      { id: "a", text: "Watt [W]" },
      { id: "b", text: "Volt [V]" },
      { id: "c", text: "Ampér [A]" },
      { id: "d", text: "Ohm [\u03a9]" },
    ],
    correctChoiceId: "a",
    explanation:
      "Výkon se měří ve wattech. Volt je jednotka napětí, ampér proudu a ohm odporu. Viz slovník: výkon.",
    relatedLessonIds: ["theory-01"],
    tags: ["vykon", "recall"],
  },
  {
    id: "T-THE-004",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Jaký výkon se spotřebovává na rezistoru 50 \u03a9 při proudu 2 A?",
    choices: [
      { id: "a", text: "200 W" },
      { id: "b", text: "100 W" },
      { id: "c", text: "25 W" },
      { id: "d", text: "52 W" },
    ],
    correctChoiceId: "a",
    explanation:
      "P = I\u00b2 \u00d7 R = 4 \u00d7 50 = 200 W. Odpověď 100 W by znamenala P = I\u00d7R, chybí umocnění. Viz vzorec výkonu.",
    relatedLessonIds: ["theory-01"],
    tags: ["vykon", "ohmov-zakon", "apply"],
  },
  {
    id: "T-THE-005",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Jak se změní proud v obvodu, pokud zdvojnásobíme napětí a odpor zůstane stejný?",
    choices: [
      { id: "a", text: "Zdvojnásobí se" },
      { id: "b", text: "Zůstane stejný" },
      { id: "c", text: "Klesne na polovinu" },
      { id: "d", text: "Zvýší se čtyřnásobně" },
    ],
    correctChoiceId: "a",
    explanation:
      "I = U/R. Při 2U a stejném R: I' = 2U/R = 2\u00d7(U/R) = 2I. Proud a napětí jsou přímo úměrné. Viz Ohmův zákon.",
    relatedLessonIds: ["theory-01"],
    tags: ["ohmov-zakon", "analyze"],
  },
  {
    id: "T-THE-006",
    examPartId: "technical",
    sectionId: "theory",
    wording: "Jaká je jednotka elektrického proudu?",
    choices: [
      { id: "a", text: "Ampér [A]" },
      { id: "b", text: "Coulomb [C]" },
      { id: "c", text: "Volt [V]" },
      { id: "d", text: "Watt [W]" },
    ],
    correctChoiceId: "a",
    explanation:
      "Proud se měří v ampérech. Coulomb je jednotka náboje (1 A = 1 C/s). Volt je napětí, watt výkon.",
    relatedLessonIds: ["theory-01"],
    tags: ["proud", "recall"],
  },
  {
    id: "T-THE-007",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Na rezistoru 100 \u03a9 je napětí 50 V. Jaký výkon se na něm spotřebovává?",
    choices: [
      { id: "a", text: "25 W" },
      { id: "b", text: "50 W" },
      { id: "c", text: "5000 W" },
      { id: "d", text: "2 W" },
    ],
    correctChoiceId: "a",
    explanation:
      "P = U\u00b2/R = 2500/100 = 25 W. Odpověď 5000 W (U\u00d7R) je častá chyba - vzorce pro výkon se nesmí zaměňovat.",
    relatedLessonIds: ["theory-01"],
    tags: ["vykon", "ohmov-zakon", "apply"],
  },
  {
    id: "T-THE-008",
    examPartId: "technical",
    sectionId: "theory",
    wording: "Ohmův zákon vyjadřuje vztah mezi:",
    choices: [
      { id: "a", text: "Napětím, proudem a odporem" },
      { id: "b", text: "Výkonem, napětím a frekvencí" },
      { id: "c", text: "Kapacitou, indukcí a odporem" },
      { id: "d", text: "Frekvencí, vlnovou délkou a rychlostí" },
    ],
    correctChoiceId: "a",
    explanation:
      "Ohmův zákon: U = I\u00d7R. Vztah mezi frekvencí a vlnovou délkou je jiný vzorec (\u03bb = c/f). Viz slovník: Ohmův zákon.",
    relatedLessonIds: ["theory-01"],
    tags: ["ohmov-zakon", "recall"],
  },

  // -----------------------------------------------------------------------
  // AC, frequency, wavelength (theory-02)
  // -----------------------------------------------------------------------
  {
    id: "T-THE-009",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Jaká je přibližná vlnová délka signálu na frekvenci 7 MHz?",
    choices: [
      { id: "a", text: "40 m" },
      { id: "b", text: "20 m" },
      { id: "c", text: "80 m" },
      { id: "d", text: "10 m" },
    ],
    correctChoiceId: "a",
    explanation:
      "\u03bb = 300/f = 300/7 \u2248 42,9 m \u2248 40 m. Proto se pásmo 7 MHz nazývá '40 metrů'. Viz vzorec vlnové délky.",
    relatedLessonIds: ["theory-02"],
    tags: ["vlnova-delka", "frekvence", "apply"],
  },
  {
    id: "T-THE-010",
    examPartId: "technical",
    sectionId: "theory",
    wording: "Jaký je vztah mezi frekvencí a vlnovou délkou?",
    choices: [
      { id: "a", text: "Jsou nepřímo úměrné (\u03bb = c/f)" },
      { id: "b", text: "Jsou přímo úměrné (\u03bb = c\u00d7f)" },
      { id: "c", text: "Jsou na sobě nezávislé" },
      { id: "d", text: "Závisí na výkonu vysílače" },
    ],
    correctChoiceId: "a",
    explanation:
      "Čím vyšší frekvence, tím kratší vlnová délka. \u03bb = c/f. Výkon vysílače nemá na vlnovou délku vliv.",
    relatedLessonIds: ["theory-02"],
    tags: ["vlnova-delka", "frekvence", "recall"],
  },
  {
    id: "T-THE-011",
    examPartId: "technical",
    sectionId: "theory",
    wording: "Jaká je rychlost šíření elektromagnetických vln ve vakuu?",
    choices: [
      { id: "a", text: "Přibližně 300 000 km/s" },
      { id: "b", text: "Přibližně 340 m/s" },
      { id: "c", text: "Přibližně 30 000 km/s" },
      { id: "d", text: "Závisí na frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "Rychlost světla c \u2248 3\u00d710\u2078 m/s = 300 000 km/s. Hodnota 340 m/s je rychlost zvuku, ne světla.",
    relatedLessonIds: ["theory-02"],
    tags: ["em-vlny", "recall"],
  },
  {
    id: "T-THE-012",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Jaká je frekvence signálu s vlnovou délkou 2 m?",
    choices: [
      { id: "a", text: "150 MHz" },
      { id: "b", text: "600 MHz" },
      { id: "c", text: "15 MHz" },
      { id: "d", text: "2 MHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "f = 300/\u03bb = 300/2 = 150 MHz. Odpověď 2 MHz zaměňuje vlnovou délku za frekvenci. Viz vzorec vlnové délky.",
    relatedLessonIds: ["theory-02"],
    tags: ["vlnova-delka", "frekvence", "apply"],
  },
  {
    id: "T-THE-013",
    examPartId: "technical",
    sectionId: "theory",
    wording: "Co je to perioda střídavého signálu?",
    choices: [
      { id: "a", text: "Doba trvání jednoho kmitu" },
      { id: "b", text: "Počet kmitů za sekundu" },
      { id: "c", text: "Maximální hodnota napětí" },
      { id: "d", text: "Vzdálenost mezi dvěma vlnami" },
    ],
    correctChoiceId: "a",
    explanation:
      "Perioda (T) je doba jednoho kmitu. Počet kmitů za sekundu je frekvence (f). Vzdálenost mezi vlnami je vlnová délka (\u03bb).",
    relatedLessonIds: ["theory-02"],
    tags: ["perioda", "frekvence", "recall"],
  },
  {
    id: "T-THE-014",
    examPartId: "technical",
    sectionId: "theory",
    wording: "Označení VHF odpovídá frekvenčnímu rozsahu:",
    choices: [
      { id: "a", text: "30-300 MHz" },
      { id: "b", text: "3-30 MHz" },
      { id: "c", text: "300-3000 MHz" },
      { id: "d", text: "3-30 GHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "VHF = Very High Frequency = 30-300 MHz. HF = 3-30 MHz, UHF = 300-3000 MHz, SHF = 3-30 GHz.",
    relatedLessonIds: ["theory-02"],
    tags: ["frekvence", "em-vlny", "recall"],
  },

  // -----------------------------------------------------------------------
  // Impedance & reactance (theory-03)
  // -----------------------------------------------------------------------
  {
    id: "T-THE-015",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Jaká je standardní impedance používaná v radioamatérské praxi?",
    choices: [
      { id: "a", text: "50 \u03a9" },
      { id: "b", text: "75 \u03a9" },
      { id: "c", text: "300 \u03a9" },
      { id: "d", text: "600 \u03a9" },
    ],
    correctChoiceId: "a",
    explanation:
      "50 \u03a9 je standard pro radioamatérská zařízení. 75 \u03a9 se používá v TV rozvodech. 300 \u03a9 je impedance symetrického vedení. Viz slovník: impedance.",
    relatedLessonIds: ["theory-03"],
    tags: ["impedance", "recall"],
  },
  {
    id: "T-THE-016",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Co se stane s kapacitní reaktancí kondenzátoru, když se zvýší frekvence?",
    choices: [
      { id: "a", text: "Klesne" },
      { id: "b", text: "Vzroste" },
      { id: "c", text: "Zůstane stejná" },
      { id: "d", text: "Závisí na napětí" },
    ],
    correctChoiceId: "a",
    explanation:
      "Xc = 1/(2\u03c0fC). S rostoucí frekvencí kapacitní reaktance klesá. Kondenzátor propouští vysoké frekvence. Viz vzorec kapacitní reaktance.",
    relatedLessonIds: ["theory-03"],
    tags: ["reaktance", "kapacita", "analyze"],
  },
  {
    id: "T-THE-017",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Co se stane s induktivní reaktancí cívky, když se zvýší frekvence?",
    choices: [
      { id: "a", text: "Vzroste" },
      { id: "b", text: "Klesne" },
      { id: "c", text: "Zůstane stejná" },
      { id: "d", text: "Nejprve vzroste, pak klesne" },
    ],
    correctChoiceId: "a",
    explanation:
      "Xl = 2\u03c0fL. S rostoucí frekvencí induktivní reaktance roste. Cívka blokuje vysoké frekvence - opak kondenzátoru.",
    relatedLessonIds: ["theory-03"],
    tags: ["reaktance", "indukcnost", "analyze"],
  },
  {
    id: "T-THE-018",
    examPartId: "technical",
    sectionId: "theory",
    wording: "Impedance obvodu se skládá z:",
    choices: [
      { id: "a", text: "Činného odporu a reaktance" },
      { id: "b", text: "Napětí a proudu" },
      { id: "c", text: "Kapacity a indukčnosti" },
      { id: "d", text: "Frekvence a vlnové délky" },
    ],
    correctChoiceId: "a",
    explanation:
      "Z\u00b2 = R\u00b2 + X\u00b2. Impedance kombinuje činný odpor (R) a reaktanci (X). Kapacita a indukčnost reaktanci způsobují, ale samy nejsou její složky.",
    relatedLessonIds: ["theory-03"],
    tags: ["impedance", "reaktance", "recall"],
  },
  {
    id: "T-THE-019",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Obvod má odpor 40 \u03a9 a reaktanci 30 \u03a9. Jaká je jeho impedance?",
    choices: [
      { id: "a", text: "50 \u03a9" },
      { id: "b", text: "70 \u03a9" },
      { id: "c", text: "10 \u03a9" },
      { id: "d", text: "35 \u03a9" },
    ],
    correctChoiceId: "a",
    explanation:
      "Z = \u221a(R\u00b2+X\u00b2) = \u221a(1600+900) = \u221a2500 = 50 \u03a9. Impedance se nesčítá přímo (70 \u03a9), ale geometricky.",
    relatedLessonIds: ["theory-03"],
    tags: ["impedance", "apply"],
  },
  {
    id: "T-THE-020",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Který vzorec správně vyjadřuje kapacitní reaktanci?",
    choices: [
      { id: "a", text: "Xc = 1 / (2\u03c0fC)" },
      { id: "b", text: "Xc = 2\u03c0fC" },
      { id: "c", text: "Xc = 2\u03c0fL" },
      { id: "d", text: "Xc = f \u00d7 C" },
    ],
    correctChoiceId: "a",
    explanation:
      "Kapacitní reaktance Xc = 1/(2\u03c0fC). Vzorec 2\u03c0fL je induktivní reaktance (Xl). Viz vzorce.",
    relatedLessonIds: ["theory-03"],
    tags: ["reaktance", "kapacita", "recall"],
  },
  {
    id: "T-THE-021",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "V jakých jednotkách se měří impedance?",
    choices: [
      { id: "a", text: "Ohm [\u03a9]" },
      { id: "b", text: "Farad [F]" },
      { id: "c", text: "Henry [H]" },
      { id: "d", text: "Siemens [S]" },
    ],
    correctChoiceId: "a",
    explanation:
      "Impedance se měří v ohmech, stejně jako odpor a reaktance. Farad je jednotka kapacity, henry indukčnosti, siemens vodivosti.",
    relatedLessonIds: ["theory-03"],
    tags: ["impedance", "recall"],
  },
  {
    id: "T-THE-022",
    examPartId: "technical",
    sectionId: "theory",
    wording:
      "Která součástka vytváří induktivní reaktanci?",
    choices: [
      { id: "a", text: "Cívka" },
      { id: "b", text: "Kondenzátor" },
      { id: "c", text: "Rezistor" },
      { id: "d", text: "Dioda" },
    ],
    correctChoiceId: "a",
    explanation:
      "Cívka vytváří induktivní reaktanci (Xl). Kondenzátor vytváří kapacitní reaktanci (Xc). Rezistor má pouze činný odpor.",
    relatedLessonIds: ["theory-03"],
    tags: ["reaktance", "indukcnost", "recall"],
  },
];
