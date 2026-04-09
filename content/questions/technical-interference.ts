import type { Question } from "@/lib/types";

export const technicalInterferenceQuestions: Question[] = [
  {
    id: "T-INT-001",
    examPartId: "technical",
    sectionId: "interference",
    wording: "Co znamen\u00e1 zkratka TVI?",
    choices: [
      { id: "a", text: "Ru\u0161en\u00ed televizn\u00edho p\u0159\u00edjmu" },
      { id: "b", text: "Televizn\u00ed vys\u00edla\u010d" },
      { id: "c", text: "Testovac\u00ed video sign\u00e1l" },
      { id: "d", text: "Typ ant\u00e9ny" },
    ],
    correctChoiceId: "a",
    explanation:
      "TVI = Television Interference - ru\u0161en\u00ed TV p\u0159\u00edjmu radioamat\u00e9rsk\u00fdm vys\u00edla\u010dem. Viz slovn\u00edk: TVI.",
    relatedLessonIds: ["intf-01"],
    tags: ["tvi", "ruseni", "recall"],
  },
  {
    id: "T-INT-002",
    examPartId: "technical",
    sectionId: "interference",
    wording: "Jak\u00fd filtr se pou\u017e\u00edv\u00e1 na v\u00fdstupu vys\u00edla\u010de k potla\u010den\u00ed harmonick\u00fdch?",
    choices: [
      { id: "a", text: "Doln\u00ed propust (low-pass)" },
      { id: "b", text: "Horn\u00ed propust (high-pass)" },
      { id: "c", text: "P\u00e1smov\u00e1 propust (band-pass)" },
      { id: "d", text: "P\u00e1smov\u00e1 z\u00e1dr\u017e (notch)" },
    ],
    correctChoiceId: "a",
    explanation:
      "LP filtr propust\u00ed z\u00e1kladn\u00ed frekvenci a potla\u010d\u00ed harmonick\u00e9 (vy\u0161\u0161\u00ed frekvence). HP filtr by naopak propustil harmonick\u00e9.",
    relatedLessonIds: ["intf-01"],
    tags: ["filtrace", "ruseni", "recall"],
  },
  {
    id: "T-INT-003",
    examPartId: "technical",
    sectionId: "interference",
    wording: "Co jsou harmonick\u00e9 vys\u00edla\u010de?",
    choices: [
      { id: "a", text: "N\u00e1sobky z\u00e1kladn\u00ed frekvence" },
      { id: "b", text: "Vedlej\u0161\u00ed p\u00e1sma modulace" },
      { id: "c", text: "\u0160um na frekvenci p\u0159\u00edjmu" },
      { id: "d", text: "Odrazy od ionosf\u00e9ry" },
    ],
    correctChoiceId: "a",
    explanation:
      "Harmonick\u00e9 jsou celo\u010d\u00edseln\u00e9 n\u00e1sobky z\u00e1kladn\u00ed frekvence: 2f, 3f, 4f... Nap\u0159. vys\u00edla\u010d na 7 MHz generuje harmonick\u00e9 na 14, 21, 28 MHz.",
    relatedLessonIds: ["intf-01"],
    tags: ["ruseni", "harmonicke", "recall"],
  },
  {
    id: "T-INT-004",
    examPartId: "technical",
    sectionId: "interference",
    wording: "Co je to intermodulace?",
    choices: [
      { id: "a", text: "Vznik ne\u017e\u00e1douc\u00edch sign\u00e1l\u016f sm\u00ed\u0161en\u00edm dvou siln\u00fdch sign\u00e1l\u016f" },
      { id: "b", text: "Druh frekven\u010dn\u00ed modulace" },
      { id: "c", text: "Zm\u011bna frekvence p\u0159i odrazu" },
      { id: "d", text: "Typ ant\u00e9nn\u00edho zisku" },
    ],
    correctChoiceId: "a",
    explanation:
      "Intermodulace vzniká v neline\u00e1rn\u00edm prvku (zesilova\u010d, korodovan\u00fd spoj) sm\u00ed\u0161en\u00edm dvou sign\u00e1l\u016f. Nen\u00ed to druh modulace.",
    relatedLessonIds: ["intf-01"],
    tags: ["ruseni", "intermodulace", "recall"],
  },
  {
    id: "T-INT-005",
    examPartId: "technical",
    sectionId: "interference",
    wording: "K \u010demu slou\u017e\u00ed feritov\u00e9 j\u00e1dro na kabelu?",
    choices: [
      { id: "a", text: "Potla\u010duje VF proudy na pl\u00e1\u0161ti kabelu" },
      { id: "b", text: "Zesiluje sign\u00e1l" },
      { id: "c", text: "M\u011bn\u00ed impedanci ant\u00e9ny" },
      { id: "d", text: "Filtruje \u0161um z nap\u00e1jen\u00ed" },
    ],
    correctChoiceId: "a",
    explanation:
      "Ferit p\u016fsob\u00ed jako VF tlumivka - blokuje ru\u0161iv\u00e9 VF proudy na vn\u011bj\u0161\u00edm pl\u00e1\u0161ti. Nezesiluje ani nem\u011bn\u00ed impedanci.",
    relatedLessonIds: ["intf-01"],
    tags: ["ruseni", "filtrace", "recall"],
  },
  {
    id: "T-INT-006",
    examPartId: "technical",
    sectionId: "interference",
    wording: "Jak\u00fd je hlavn\u00ed zdroj \u0161irokoP\u00e1smov\u00e9ho ru\u0161en\u00ed v dom\u00e1cnosti?",
    choices: [
      { id: "a", text: "Sp\u00ednan\u00e9 nap\u00e1jec\u00ed zdroje" },
      { id: "b", text: "Klasick\u00e9 \u017e\u00e1rovky" },
      { id: "c", text: "Televizn\u00ed ant\u00e9na" },
      { id: "d", text: "Koaxi\u00e1ln\u00ed kabel" },
    ],
    correctChoiceId: "a",
    explanation:
      "Sp\u00ednan\u00e9 zdroje generuj\u00ed \u0161irokoP\u00e1smov\u00e9 ru\u0161en\u00ed na VF. Klasick\u00e9 \u017e\u00e1rovky jsou \u010dist\u011b odporov\u00e1 z\u00e1t\u011b\u017e a neru\u0161\u00ed.",
    relatedLessonIds: ["intf-01"],
    tags: ["ruseni", "analyze"],
  },
  {
    id: "T-INT-007",
    examPartId: "technical",
    sectionId: "interference",
    wording: "Co znamen\u00e1 zkratka BCI?",
    choices: [
      { id: "a", text: "Ru\u0161en\u00ed rozhlasov\u00e9ho p\u0159\u00edjmu" },
      { id: "b", text: "Typ p\u00e1smov\u00e9ho filtru" },
      { id: "c", text: "Bezpe\u010dnostn\u00ed certifik\u00e1t" },
      { id: "d", text: "B\u00e1ze \u010d\u00edta\u010de impuls\u016f" },
    ],
    correctChoiceId: "a",
    explanation:
      "BCI = Broadcast Interference - ru\u0161en\u00ed rozhlasov\u00e9ho p\u0159\u00edjmu. Analogick\u00e9 k TVI, ale pro rozhlas.",
    relatedLessonIds: ["intf-01"],
    tags: ["bci", "ruseni", "recall"],
  },
  {
    id: "T-INT-008",
    examPartId: "technical",
    sectionId: "interference",
    wording: "Jak\u00e9 opat\u0159en\u00ed pom\u00e1h\u00e1 proti p\u0159\u00edm\u00e9mu pr\u016fniku VF do za\u0159\u00edzen\u00ed?",
    choices: [
      { id: "a", text: "Kvalitn\u00ed st\u00edn\u011bn\u00ed za\u0159\u00edzen\u00ed" },
      { id: "b", text: "Zv\u00fd\u0161en\u00ed v\u00fdkonu vys\u00edla\u010de" },
      { id: "c", text: "Pou\u017eit\u00ed del\u0161\u00ed ant\u00e9ny" },
      { id: "d", text: "Zm\u011bna modulace na FM" },
    ],
    correctChoiceId: "a",
    explanation:
      "P\u0159\u00edm\u00fd pr\u016fnik se \u0159e\u0161\u00ed st\u00edn\u011bn\u00edm ru\u0161en\u00e9ho za\u0159\u00edzen\u00ed. Zv\u00fd\u0161en\u00ed v\u00fdkonu probl\u00e9m zhor\u0161\u00ed.",
    relatedLessonIds: ["intf-01"],
    tags: ["ruseni", "stineni", "analyze"],
  },
  {
    id: "T-INT-009",
    examPartId: "technical",
    sectionId: "interference",
    wording: "Pro\u010d je d\u016fle\u017eit\u00e9 kvalitn\u00ed uzemn\u011bn\u00ed stanice?",
    choices: [
      { id: "a", text: "Sni\u017euje ru\u0161en\u00ed a zlep\u0161uje bezpe\u010dnost" },
      { id: "b", text: "Zvy\u0161uje vyza\u0159ovan\u00fd v\u00fdkon" },
      { id: "c", text: "Zkracuje ant\u00e9nu" },
      { id: "d", text: "Zvy\u0161uje impedanci" },
    ],
    correctChoiceId: "a",
    explanation:
      "Uzemn\u011bn\u00ed odvede ne\u017e\u00e1douc\u00ed VF proudy a chr\u00e1n\u00ed p\u0159ed \u00farazem. Nezvy\u0161uje v\u00fdkon ani nem\u011bn\u00ed d\u00e9lku ant\u00e9ny.",
    relatedLessonIds: ["intf-01"],
    tags: ["ruseni", "bezpecnost", "analyze"],
  },
];
