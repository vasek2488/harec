import type { Question } from "@/lib/types";

export const technicalAntennasQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Antenna types (ant-01)
  // -----------------------------------------------------------------------
  {
    id: "T-ANT-001",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Jak\u00e1 je p\u0159ibli\u017en\u00e1 d\u00e9lka p\u016flvlnn\u00e9ho dip\u00f3lu pro frekvenci 7 MHz?",
    choices: [
      { id: "a", text: "21 m" },
      { id: "b", text: "43 m" },
      { id: "c", text: "10 m" },
      { id: "d", text: "7 m" },
    ],
    correctChoiceId: "a",
    explanation:
      "l = 150/f = 150/7 \u2248 21,4 m. Hodnota 43 m by byla cel\u00e1 vlnov\u00e1 d\u00e9lka (300/7). 7 m zam\u011b\u0148uje frekvenci za d\u00e9lku.",
    relatedLessonIds: ["ant-01"],
    tags: ["dipol", "apply"],
  },
  {
    id: "T-ANT-002",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Kter\u00e1 ant\u00e9na je sm\u011brov\u00e1 a pou\u017e\u00edv\u00e1 z\u00e1\u0159i\u010d, reflektor a direktory?",
    choices: [
      { id: "a", text: "Yagi-Uda" },
      { id: "b", text: "Dip\u00f3l" },
      { id: "c", text: "Ground plane" },
      { id: "d", text: "Izotropn\u00ed z\u00e1\u0159i\u010d" },
    ],
    correctChoiceId: "a",
    explanation:
      "Yagi-Uda m\u00e1 z\u00e1\u0159i\u010d, za n\u00edm reflektor a p\u0159ed n\u00edm direktory. Dip\u00f3l a ground plane nemaj\u00ed parasitick\u00e9 prvky. Izotropn\u00ed z\u00e1\u0159i\u010d je teoretick\u00fd.",
    relatedLessonIds: ["ant-01"],
    tags: ["yagi", "recall"],
  },
  {
    id: "T-ANT-003",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Jak\u00fd je zisk p\u016flvlnn\u00e9ho dip\u00f3lu v dBd?",
    choices: [
      { id: "a", text: "0 dBd" },
      { id: "b", text: "2,15 dBd" },
      { id: "c", text: "3 dBd" },
      { id: "d", text: "-3 dBd" },
    ],
    correctChoiceId: "a",
    explanation:
      "Dip\u00f3l je referen\u010dn\u00ed ant\u00e9na pro dBd, proto m\u00e1 zisk 0 dBd. V dBi (vztaženo k izotropnímu zářiči) je to 2,15 dBi.",
    relatedLessonIds: ["ant-01"],
    tags: ["zisk", "recall"],
  },
  {
    id: "T-ANT-004",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Jak se zm\u011bn\u00ed vyz\u00e1\u0159ovan\u00fd v\u00fdkon, pokud ant\u00e9na vys\u00edlac\u00ed stanice m\u00e1 horizont\u00e1ln\u00ed polarizaci a p\u0159ij\u00edmac\u00ed vertik\u00e1ln\u00ed?",
    choices: [
      { id: "a", text: "Sign\u00e1l bude v\u00fdrazn\u011b zeslab\u00fd (a\u017e o 20 dB)" },
      { id: "b", text: "Sign\u00e1l bude siln\u011bj\u0161\u00ed" },
      { id: "c", text: "Nebude \u017e\u00e1dn\u00e1 zm\u011bna" },
      { id: "d", text: "Sign\u00e1l bude zkreslený" },
    ],
    correctChoiceId: "a",
    explanation:
      "Kříženou polarizací (90\u00b0) se ztratí velká část signálu - typicky 20 dB i více. Signál není zkreslený, jen výrazně slabší.",
    relatedLessonIds: ["ant-01"],
    tags: ["polarizace", "analyze"],
  },
  {
    id: "T-ANT-005",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Co p\u0159edstavuje vyz\u00e1\u0159ovac\u00ed diagram ant\u00e9ny?",
    choices: [
      { id: "a", text: "Rozlo\u017een\u00ed intenzity vyz\u00e1\u0159ov\u00e1n\u00ed v prostoru" },
      { id: "b", text: "Z\u00e1vislost impedance na frekvenci" },
      { id: "c", text: "Zm\u011bnu PSV s d\u00e9lkou kabelu" },
      { id: "d", text: "Ztr\u00e1ty v nap\u00e1jec\u00edm veden\u00ed" },
    ],
    correctChoiceId: "a",
    explanation:
      "Vyzařovací diagram ukazuje, jak silně anténa vysílá (nebo přijímá) v různých směrech. Impedance a PSV se zobrazují jinými grafy.",
    relatedLessonIds: ["ant-01"],
    tags: ["vyza\u0159ovaci-diagram", "recall"],
  },
  {
    id: "T-ANT-006",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Kter\u00e1 ant\u00e9na je typicky v\u0161esm\u011brov\u00e1 v horizont\u00e1ln\u00ed rovin\u011b?",
    choices: [
      { id: "a", text: "Vertik\u00e1ln\u00ed (ground plane)" },
      { id: "b", text: "Yagi-Uda" },
      { id: "c", text: "Parabolick\u00e1 ant\u00e9na" },
      { id: "d", text: "Logaritmicko-periodick\u00e1" },
    ],
    correctChoiceId: "a",
    explanation:
      "Ground plane vysílá rovnoměrně do všech horizontálních směrů (360\u00b0). Yagi a parabola jsou směrové. Log-per je také směrová.",
    relatedLessonIds: ["ant-01"],
    tags: ["ground-plane", "recall"],
  },
  {
    id: "T-ANT-007",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "D\u00e9lka p\u016flvlnn\u00e9ho dip\u00f3lu na frekvenci 3,5 MHz je p\u0159ibli\u017en\u011b:",
    choices: [
      { id: "a", text: "43 m" },
      { id: "b", text: "86 m" },
      { id: "c", text: "21 m" },
      { id: "d", text: "150 m" },
    ],
    correctChoiceId: "a",
    explanation:
      "l = 150/f = 150/3,5 \u2248 42,9 m. Hodnota 86 m je cel\u00e1 vlnov\u00e1 d\u00e9lka. 150 m je konstanta vzorce, ne výsledek.",
    relatedLessonIds: ["ant-01"],
    tags: ["dipol", "apply"],
  },
  {
    id: "T-ANT-008",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Co se stane se ziskem ant\u00e9ny Yagi, pokud p\u0159id\u00e1me v\u00edce direktor\u016f?",
    choices: [
      { id: "a", text: "Zisk se zv\u00fd\u0161\u00ed a vyz\u00e1\u0159ovac\u00ed \u00fahel se z\u00fa\u017e\u00ed" },
      { id: "b", text: "Zisk se sn\u00ed\u017e\u00ed" },
      { id: "c", text: "Zisk z\u016fstane stejn\u00fd" },
      { id: "d", text: "Zm\u011bn\u00ed se pouze polarizace" },
    ],
    correctChoiceId: "a",
    explanation:
      "Více direktorů zvyšuje zisk a zužuje hlavní lalok. Anténa se stává směrovější. Polarizace závisí na orientaci zářiče, ne na počtu prvků.",
    relatedLessonIds: ["ant-01"],
    tags: ["yagi", "zisk", "analyze"],
  },

  // -----------------------------------------------------------------------
  // Feedlines and SWR (ant-02)
  // -----------------------------------------------------------------------
  {
    id: "T-ANT-009",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Koaxi\u00e1ln\u00ed kabel pro radioamat\u00e9rsk\u00e9 \u00fa\u010dely m\u00e1 typickou charakteristickou impedanci:",
    choices: [
      { id: "a", text: "50 \u03a9" },
      { id: "b", text: "75 \u03a9" },
      { id: "c", text: "300 \u03a9" },
      { id: "d", text: "600 \u03a9" },
    ],
    correctChoiceId: "a",
    explanation:
      "50 \u03a9 je standard v radioamat\u00e9rsk\u00e9 praxi. 75 \u03a9 se pou\u017e\u00edv\u00e1 pro TV, 300 \u03a9 je symetrick\u00e9 veden\u00ed, 600 \u03a9 je otev\u0159en\u00e9 dvoudr\u00e1tov\u00e9 veden\u00ed.",
    relatedLessonIds: ["ant-02"],
    tags: ["koaxial", "impedance", "recall"],
  },
  {
    id: "T-ANT-010",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Jak\u00e9 je PSV (SWR), pokud m\u00e1 ant\u00e9na impedanci 150 \u03a9 a kabel 50 \u03a9?",
    choices: [
      { id: "a", text: "3:1" },
      { id: "b", text: "1:1" },
      { id: "c", text: "2:1" },
      { id: "d", text: "100:1" },
    ],
    correctChoiceId: "a",
    explanation:
      "PSV = 150/50 = 3:1. PSV je vždy poměr větší impedance k menší. 100:1 (rozdíl impedancí) je špatný výpočet.",
    relatedLessonIds: ["ant-02"],
    tags: ["psv", "swr", "apply"],
  },
  {
    id: "T-ANT-011",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "K \u010demu slou\u017e\u00ed balun?",
    choices: [
      { id: "a", text: "Převod symetrick\u00e9ho veden\u00ed na nesymetrick\u00e9" },
      { id: "b", text: "Zesílen\u00ed sign\u00e1lu" },
      { id: "c", text: "Filtrování ru\u0161en\u00ed" },
      { id: "d", text: "M\u011b\u0159en\u00ed PSV" },
    ],
    correctChoiceId: "a",
    explanation:
      "Balun = balanced-unbalanced. Převádí symetrické vedení (dipól) na nesymetrické (koax). Nezesíluje ani nefiltruje.",
    relatedLessonIds: ["ant-02"],
    tags: ["balun", "recall"],
  },
  {
    id: "T-ANT-012",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Co znamen\u00e1 PSV (SWR) 1:1?",
    choices: [
      { id: "a", text: "Dokonalé přizpůsobení impedancí" },
      { id: "b", text: "Ant\u00e9na je zkratovan\u00e1" },
      { id: "c", text: "Ant\u00e9na je odpojená" },
      { id: "d", text: "Maxim\u00e1ln\u00ed odrazy na veden\u00ed" },
    ],
    correctChoiceId: "a",
    explanation:
      "PSV 1:1 znamen\u00e1, \u017ee impedance ant\u00e9ny p\u0159esn\u011b odpov\u00edd\u00e1 impedanci veden\u00ed. Neexistují žádné odrazy. Zkratovaná anténa by měla PSV nekonečno.",
    relatedLessonIds: ["ant-02"],
    tags: ["psv", "swr", "recall"],
  },
  {
    id: "T-ANT-013",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Jak\u00fd vliv m\u00e1 vy\u0161\u0161\u00ed frekvence na ztr\u00e1ty v koaxi\u00e1ln\u00edm kabelu?",
    choices: [
      { id: "a", text: "Ztr\u00e1ty rostou" },
      { id: "b", text: "Ztr\u00e1ty klesaj\u00ed" },
      { id: "c", text: "Ztr\u00e1ty se nem\u011bn\u00ed" },
      { id: "d", text: "Z\u00e1vis\u00ed na v\u00fdkonu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Ztráty v koaxiálním kabelu rostou s frekvencí. Proto se na VHF/UHF používají kvalitnější kabely (RG-213, Ecoflex) než na HF.",
    relatedLessonIds: ["ant-02"],
    tags: ["koaxial", "ztráty", "recall"],
  },
  {
    id: "T-ANT-014",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Vysok\u00e9 PSV (SWR) m\u016f\u017ee zp\u016fsobit:",
    choices: [
      { id: "a", text: "Poškození koncového stupně vysílače" },
      { id: "b", text: "Zlepšení signálu" },
      { id: "c", text: "Snížení šumu" },
      { id: "d", text: "Zvýšení zisku antény" },
    ],
    correctChoiceId: "a",
    explanation:
      "Vysoké PSV znamená, že se energie odráží zpět do vysílače. Odražená energie se přeměňuje na teplo v koncovém stupni a může ho poškodit.",
    relatedLessonIds: ["ant-02"],
    tags: ["psv", "swr", "analyze"],
  },
  {
    id: "T-ANT-015",
    examPartId: "technical",
    sectionId: "antennas",
    wording:
      "Charakteristick\u00e1 impedance koaxi\u00e1ln\u00edho kabelu z\u00e1vis\u00ed na:",
    choices: [
      { id: "a", text: "Geometrii (poměr průměrů vodičů) a dielektriku" },
      { id: "b", text: "D\u00e9lce kabelu" },
      { id: "c", text: "Frekvenci sign\u00e1lu" },
      { id: "d", text: "V\u00fdkonu vys\u00edla\u010de" },
    ],
    correctChoiceId: "a",
    explanation:
      "Charakteristická impedance závisí na poměru průměrů vnitřního a vnějšího vodiče a na dielektriku mezi nimi. Nezávisí na délce kabelu ani frekvenci.",
    relatedLessonIds: ["ant-02"],
    tags: ["koaxial", "impedance", "analyze"],
  },
];
