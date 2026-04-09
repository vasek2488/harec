import type { Question } from "@/lib/types";

export const technicalPropagationQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Ionospheric HF propagation (prop-01)
  // -----------------------------------------------------------------------
  {
    id: "T-PRO-001",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Kter\u00e1 ionosf\u00e9rick\u00e1 vrstva je hlavn\u00ed p\u0159\u00ed\u010dinou d\u00e1lkov\u00e9ho \u0161\u00ed\u0159en\u00ed KV sign\u00e1l\u016f?",
    choices: [
      { id: "a", text: "Vrstva F2" },
      { id: "b", text: "Vrstva D" },
      { id: "c", text: "Vrstva E" },
      { id: "d", text: "Troposf\u00e9ra" },
    ],
    correctChoiceId: "a",
    explanation:
      "Vrstva F2 (250-400 km) je nejvýše a umožňuje odrazy na největší vzdálenosti. Vrstva D sign\u00e1ly pohlcuje. Troposf\u00e9ra ovliv\u0148uje VHF/UHF, ne KV.",
    relatedLessonIds: ["prop-01"],
    tags: ["ionosfera", "recall"],
  },
  {
    id: "T-PRO-002",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Co je MUF (Maximum Usable Frequency)?",
    choices: [
      { id: "a", text: "Nejvy\u0161\u0161\u00ed frekvence, kter\u00e1 se je\u0161t\u011b odraz\u00ed od ionosf\u00e9ry" },
      { id: "b", text: "Maxim\u00e1ln\u00ed frekvence vys\u00edla\u010de" },
      { id: "c", text: "Nejvy\u0161\u0161\u00ed povolen\u00e1 frekvence" },
      { id: "d", text: "Frekvence s nejmen\u0161\u00edm \u00fatlumem" },
    ],
    correctChoiceId: "a",
    explanation:
      "MUF je nejvyšší frekvence, při které se signál ještě odrazí od ionosféry zpět k Zemi. Nad MUF signál projde do vesmíru.",
    relatedLessonIds: ["prop-01"],
    tags: ["muf", "recall"],
  },
  {
    id: "T-PRO-003",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Jak ovliv\u0148uje vysok\u00e1 slune\u010dn\u00ed aktivita \u0161\u00ed\u0159en\u00ed KV sign\u00e1l\u016f?",
    choices: [
      { id: "a", text: "Zvy\u0161uje ionizaci a MUF, otevírá vyšší pásma" },
      { id: "b", text: "Sni\u017euje MUF" },
      { id: "c", text: "Nem\u00e1 \u017e\u00e1dn\u00fd vliv" },
      { id: "d", text: "Zhor\u0161uje pouze VHF p\u0159\u00edjem" },
    ],
    correctChoiceId: "a",
    explanation:
      "Vyšší sluneční aktivita (víc UV záření) zvyšuje ionizaci ionosféry, tím roste MUF a otevírají se vyšší KV pásma (15 m, 10 m).",
    relatedLessonIds: ["prop-01"],
    tags: ["slunecni-aktivita", "muf", "analyze"],
  },
  {
    id: "T-PRO-004",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Vrstva D ionosf\u00e9ry KV sign\u00e1ly:",
    choices: [
      { id: "a", text: "Pohlcuje (zejm\u00e9na ni\u017e\u0161\u00ed frekvence)" },
      { id: "b", text: "Odr\u00e1\u017e\u00ed na velk\u00e9 vzd\u00e1lenosti" },
      { id: "c", text: "Zesiluje" },
      { id: "d", text: "Neovliv\u0148uje" },
    ],
    correctChoiceId: "a",
    explanation:
      "Vrstva D (60-90 km) existuje jen přes den a pohlcuje KV signály, zejména na nižších frekvencích. Proto je pásmo 80 m přes den horší pro DX.",
    relatedLessonIds: ["prop-01"],
    tags: ["ionosfera", "recall"],
  },
  {
    id: "T-PRO-005",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Pro\u010d je p\u00e1smo 80 m lep\u0161\u00ed pro d\u00e1lkov\u00e9 spojen\u00ed v noci ne\u017e p\u0159es den?",
    choices: [
      { id: "a", text: "V noci zmiz\u00ed vrstva D, kter\u00e1 sign\u00e1l pohlcuje" },
      { id: "b", text: "V noci je men\u0161\u00ed ru\u0161en\u00ed" },
      { id: "c", text: "V noci je MUF vy\u0161\u0161\u00ed" },
      { id: "d", text: "V noci se zv\u011bt\u0161uje v\u00fdkon vys\u00edla\u010de" },
    ],
    correctChoiceId: "a",
    explanation:
      "Vrstva D přes den pohlcuje signály na nižších KV frekvencích. V noci vrstva D mizí a signály na 3,5 MHz se mohou odrazit od vrstvy F.",
    relatedLessonIds: ["prop-01"],
    tags: ["ionosfera", "analyze"],
  },
  {
    id: "T-PRO-006",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Co je mrtv\u00e1 z\u00f3na (skip zone)?",
    choices: [
      { id: "a", text: "Oblast mezi koncem p\u0159\u00edzemn\u00ed vlny a dopadem prostorové vlny" },
      { id: "b", text: "P\u00e1smo bez radioamat\u00e9rsk\u00e9ho provozu" },
      { id: "c", text: "Frekvence, kter\u00e1 se ne\u0161\u00ed\u0159\u00ed" },
      { id: "d", text: "Oblast s maxim\u00e1ln\u00edm sign\u00e1lem" },
    ],
    correctChoiceId: "a",
    explanation:
      "Mrtvá zóna je oblast, kde přízemní vlna už nedosahuje a prostorová vlna (odražená od ionosféry) ještě nedopadá. V této oblasti signál neslyšíme.",
    relatedLessonIds: ["prop-01"],
    tags: ["skip-zone", "recall"],
  },
  {
    id: "T-PRO-007",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Kter\u00e1 vrstva ionosf\u00e9ry m\u016f\u017ee ob\u010das v\u00fdjime\u010dn\u011b odrazit VHF sign\u00e1ly?",
    choices: [
      { id: "a", text: "Sporadick\u00e1 vrstva E (Es)" },
      { id: "b", text: "Vrstva D" },
      { id: "c", text: "Vrstva F1" },
      { id: "d", text: "Exosf\u00e9ra" },
    ],
    correctChoiceId: "a",
    explanation:
      "Sporadická E (Es) vzniká nepravidelně, zejména v létě, a může odrazit signály i nad 50 MHz na vzdálenosti stovek km. Vrstva D VHF neodráží.",
    relatedLessonIds: ["prop-01"],
    tags: ["ionosfera", "vhf", "recall"],
  },
  {
    id: "T-PRO-008",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Co se stane s KV sign\u00e1lem na frekvenci vy\u0161\u0161\u00ed ne\u017e MUF?",
    choices: [
      { id: "a", text: "Projde ionosf\u00e9rou do vesm\u00edru" },
      { id: "b", text: "Odraz\u00ed se s vy\u0161\u0161\u00edm ziskem" },
      { id: "c", text: "Zes\u00edl\u00ed se" },
      { id: "d", text: "Pohlt\u00ed ho vrstva D" },
    ],
    correctChoiceId: "a",
    explanation:
      "Nad MUF ionosféra signál neodrazí a ten projde do vesmíru. Proto je MUF horní hranicí pro ionosférické šíření.",
    relatedLessonIds: ["prop-01"],
    tags: ["muf", "analyze"],
  },
  {
    id: "T-PRO-009",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Ve kter\u00e9m ro\u010dn\u00edm obdob\u00ed jsou obecn\u011b lep\u0161\u00ed podm\u00ednky pro DX na vy\u0161\u0161\u00edch KV p\u00e1smech?",
    choices: [
      { id: "a", text: "Kolem rovnodenn\u00ed (ja\u0159e/podzim)" },
      { id: "b", text: "V zim\u011b" },
      { id: "c", text: "V l\u00e9t\u011b" },
      { id: "d", text: "Ro\u010dn\u00ed obdob\u00ed nem\u00e1 vliv" },
    ],
    correctChoiceId: "a",
    explanation:
      "Rovnodenní (březen/září) přinášejí vyšší MUF díky optimálnímu úhlu slunečního záření. V zimě je MUF obecně nižší, léto přináší útlum ve vrstvě D.",
    relatedLessonIds: ["prop-01"],
    tags: ["slunecni-aktivita", "analyze"],
  },

  // -----------------------------------------------------------------------
  // VHF/UHF propagation (prop-02)
  // -----------------------------------------------------------------------
  {
    id: "T-PRO-010",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "VHF/UHF sign\u00e1ly se \u0161\u00ed\u0159\u00ed p\u0159edev\u0161\u00edm:",
    choices: [
      { id: "a", text: "Na p\u0159\u00edmou viditelnost (line of sight)" },
      { id: "b", text: "Odrazem od ionosf\u00e9ry" },
      { id: "c", text: "P\u0159\u00edzemn\u00ed vlnou" },
      { id: "d", text: "Pouze p\u0159es satelity" },
    ],
    correctChoiceId: "a",
    explanation:
      "VHF/UHF signály procházejí ionosférou a šíří se na přímou viditelnost. Přízemní vlna funguje jen na nízkých frekvencích (LF/MF).",
    relatedLessonIds: ["prop-02"],
    tags: ["vhf", "uhf", "line-of-sight", "recall"],
  },
  {
    id: "T-PRO-011",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Co ovliv\u0148uje dosah VHF spojen\u00ed na p\u0159\u00edmou viditelnost?",
    choices: [
      { id: "a", text: "V\u00fd\u0161ka ant\u00e9n nad ter\u00e9nem" },
      { id: "b", text: "Slune\u010dn\u00ed aktivita" },
      { id: "c", text: "Stav ionosf\u00e9ry" },
      { id: "d", text: "Magnetick\u00e9 pole Zem\u011b" },
    ],
    correctChoiceId: "a",
    explanation:
      "Na přímou viditelnost rozhoduje výška antén a zakřivení Země. Vzorec d \u2248 3,57 \u00d7 \u221ah. Ionosféra VHF šíření běžně neovlivňuje.",
    relatedLessonIds: ["prop-02"],
    tags: ["vhf", "line-of-sight", "recall"],
  },
  {
    id: "T-PRO-012",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Troposf\u00e9rick\u00fd ducting vznik\u00e1 p\u0159i:",
    choices: [
      { id: "a", text: "Teplotn\u00ed inverzi v doln\u00ed atmosf\u00e9\u0159e" },
      { id: "b", text: "Vysok\u00e9 slune\u010dn\u00ed aktivit\u011b" },
      { id: "c", text: "Magnetick\u00e9 bou\u0159i" },
      { id: "d", text: "Sn\u011bhov\u00e9 sr\u00e1\u017eky" },
    ],
    correctChoiceId: "a",
    explanation:
      "Teplotní inverze (teplý vzduch nad studeným) ohýbá rádiové vlny a vytváří 'kanál', ve kterém se VHF/UHF signály šíří na stovky km.",
    relatedLessonIds: ["prop-02"],
    tags: ["ducting", "recall"],
  },
  {
    id: "T-PRO-013",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Kter\u00fd jev umo\u017e\u0148uje \u0161\u00ed\u0159en\u00ed VHF sign\u00e1lu za kopcem (p\u0159ek\u00e1\u017ekou)?",
    choices: [
      { id: "a", text: "Knife-edge difrakce" },
      { id: "b", text: "Ionosf\u00e9rick\u00fd odraz" },
      { id: "c", text: "Ducting" },
      { id: "d", text: "Absorpce" },
    ],
    correctChoiceId: "a",
    explanation:
      "Knife-edge difrakce nastane, když se vlna ohýbá přes ostrou hranu překážky (hřeben kopce). Ionosférický odraz na VHF běžně nefunguje.",
    relatedLessonIds: ["prop-02"],
    tags: ["difrakce", "recall"],
  },
  {
    id: "T-PRO-014",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Jak daleko dosáhne anténa ve výšce 16 m k rádiovému horizontu? (d \u2248 3,57 \u00d7 \u221ah)",
    choices: [
      { id: "a", text: "P\u0159ibli\u017en\u011b 14 km" },
      { id: "b", text: "P\u0159ibli\u017en\u011b 57 km" },
      { id: "c", text: "P\u0159ibli\u017en\u011b 4 km" },
      { id: "d", text: "P\u0159ibli\u017en\u011b 36 km" },
    ],
    correctChoiceId: "a",
    explanation:
      "d = 3,57 \u00d7 \u221a16 = 3,57 \u00d7 4 = 14,28 km. Odpověď 57 km (3,57 \u00d7 16) zapomíná na odmocninu.",
    relatedLessonIds: ["prop-02"],
    tags: ["line-of-sight", "apply"],
  },
  {
    id: "T-PRO-015",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Co je troposf\u00e9rick\u00fd rozptyl (tropo scatter)?",
    choices: [
      { id: "a", text: "Rozptyl sign\u00e1lu na nehomogenit\u00e1ch v troposf\u00e9\u0159e" },
      { id: "b", text: "Odraz od de\u0161t\u011b" },
      { id: "c", text: "Odraz od povrchu Zem\u011b" },
      { id: "d", text: "Odraz od Měsíce" },
    ],
    correctChoiceId: "a",
    explanation:
      "Tropo scatter rozptyluje signál na nehomogenitách (vlhkost, teplota) v troposféře. Umožňuje spojení na 300-500 km, ale vyžaduje velký výkon a směrové antény.",
    relatedLessonIds: ["prop-02"],
    tags: ["tropo-scatter", "recall"],
  },
  {
    id: "T-PRO-016",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Jak se m\u011bn\u00ed \u00fatlum sign\u00e1lu voln\u00fdm prostorem s rostouci frekvenc\u00ed?",
    choices: [
      { id: "a", text: "Roste (vy\u0161\u0161\u00ed frekvence = v\u011bt\u0161\u00ed \u00fatlum)" },
      { id: "b", text: "Kles\u00e1" },
      { id: "c", text: "Nem\u011bn\u00ed se" },
      { id: "d", text: "Závisí pouze na vzdálenosti" },
    ],
    correctChoiceId: "a",
    explanation:
      "Útlum volným prostorem roste s frekvencí (i se vzdáleností). Proto na UHF potřebujeme větší výkon nebo zisk antény pro stejný dosah jako na VHF.",
    relatedLessonIds: ["prop-02"],
    tags: ["free-space-loss", "analyze"],
  },
  {
    id: "T-PRO-017",
    examPartId: "technical",
    sectionId: "propagation",
    wording:
      "Kter\u00fd typ spojen\u00ed vyu\u017e\u00edv\u00e1 pr\u016fchod VHF/UHF sign\u00e1l\u016f ionosf\u00e9rou?",
    choices: [
      { id: "a", text: "Satelitn\u00ed spojen\u00ed" },
      { id: "b", text: "DX na kr\u00e1tk\u00fdch vln\u00e1ch" },
      { id: "c", text: "Přízemní vlna" },
      { id: "d", text: "P\u0159\u00edm\u00e1 viditelnost na HF" },
    ],
    correctChoiceId: "a",
    explanation:
      "Satelitní komunikace využívá toho, že VHF/UHF signály procházejí ionosférou do vesmíru (a zpět). KV signály se naopak od ionosféry odrážejí.",
    relatedLessonIds: ["prop-02"],
    tags: ["uhf", "vhf", "analyze"],
  },
];
