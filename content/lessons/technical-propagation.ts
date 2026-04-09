import type { Lesson } from "@/lib/types";

export const technicalPropagationLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson prop-01: Ionospheric HF propagation
  // -----------------------------------------------------------------------
  {
    id: "prop-01",
    examPartId: "technical",
    sectionId: "propagation",
    order: 1,
    title: "\u0160\u00ed\u0159en\u00ed KV sign\u00e1l\u016f ionosf\u00e9rou",
    objective:
      "Vysv\u011btlit \u0161\u00ed\u0159en\u00ed kr\u00e1tk\u00fdch vln odrazem od ionosf\u00e9ry, vrstvy D/E/F, MUF a vliv slune\u010dn\u00ed aktivity.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Kr\u00e1tk\u00e9 vlny (HF, 3-30 MHz) se mohou \u0161\u00ed\u0159it na velk\u00e9 vzd\u00e1lenosti d\u00edky odrazu od ionosf\u00e9ry - vrstvy ionizovan\u00e9ho plynu ve v\u00fd\u0161ce 60-400 km. Ionosf\u00e9ra m\u00e1 t\u0159i hlavn\u00ed vrstvy: D (60-90 km), E (90-150 km) a F (150-400 km).",
        note: "Vrstva F se v noci slou\u010d\u00ed do jedn\u00e9, p\u0159es den se d\u011bl\u00ed na F1 a F2.",
      },
      {
        type: "order",
        instruction:
          "Se\u0159a\u010fte ionosf\u00e9rick\u00e9 vrstvy od nejni\u017e\u0161\u00ed po nejvy\u0161\u0161\u00ed:",
        items: [
          "Vrstva D (60-90 km)",
          "Vrstva E (90-150 km)",
          "Vrstva F1 (150-250 km)",
          "Vrstva F2 (250-400 km)",
        ],
        explanation:
          "Vrstvy jsou pojmenov\u00e1ny abecedn\u011b od nejni\u017e\u0161\u00ed. F2 je nejvy\u0161\u0161\u00ed a nejd\u016fle\u017eit\u011bj\u0161\u00ed pro d\u00e1lkov\u00e9 KV spojen\u00ed.",
      },
      {
        type: "explain",
        content:
          "Vrstva D existuje jen p\u0159es den a KV sign\u00e1ly pohlcuje (zejm\u00e9na ni\u017e\u0161\u00ed frekvence). Proto je p\u00e1smo 80 m lep\u0161\u00ed na DX v noci, kdy vrstva D zmiz\u00ed. Vrstva F2 je hlavn\u00ed odrazn\u00e1 vrstva pro d\u00e1lkov\u00e9 KV spojen\u00ed.",
      },
      {
        type: "select-answer",
        question:
          "Kter\u00e1 ionosf\u00e9rick\u00e1 vrstva je nejd\u016fle\u017eit\u011bj\u0161\u00ed pro d\u00e1lkov\u00e9 KV spojen\u00ed?",
        choices: [
          { id: "a", text: "F2" },
          { id: "b", text: "D" },
          { id: "c", text: "E" },
          { id: "d", text: "Troposf\u00e9ra" },
        ],
        correctId: "a",
        explanation:
          "Vrstva F2 ve v\u00fd\u0161ce 250-400 km je hlavn\u00ed odraznou vrstvou. Vrstva D sign\u00e1ly pohlcuje, E odrazuje jen ob\u010das (sporadick\u00e1 E).",
      },
      {
        type: "fill-blank",
        textBefore:
          "Maxim\u00e1ln\u00ed pou\u017eiteln\u00e1 frekvence pro ionosf\u00e9rick\u00fd odraz se naz\u00fdv\u00e1",
        blank: "MUF",
        distractors: ["LUF", "FOT", "SFI"],
        textAfter:
          " (Maximum Usable Frequency).",
        explanation:
          "MUF je nejvy\u0161\u0161\u00ed frekvence, kter\u00e1 se je\u0161t\u011b odraz\u00ed od ionosf\u00e9ry. LUF je nejni\u017e\u0161\u00ed pou\u017eiteln\u00e1 frekvence (pod n\u00ed je \u00fatlum moc velk\u00fd).",
      },
      {
        type: "slider",
        question:
          "P\u0159i vysok\u00e9 slune\u010dn\u00ed aktivit\u011b m\u016f\u017ee MUF na denn\u00ed cest\u011b dos\u00e1hnout p\u0159ibli\u017en\u011b:",
        min: 10,
        max: 60,
        step: 1,
        unit: "MHz",
        correctValue: 40,
        tolerance: 10,
        explanation:
          "P\u0159i vysok\u00e9 slune\u010dn\u00ed aktivit\u011b (SFI > 150) m\u016f\u017ee MUF p\u0159ekro\u010dit 40 MHz. P\u0159i n\u00edzk\u00e9 aktivit\u011b kles\u00e1 pod 15 MHz.",
      },
      {
        type: "reveal",
        prompt: "Co je to mrtv\u00e1 z\u00f3na (skip zone)?",
        answer:
          "Oblast mezi dosahem p\u0159\u00edzemn\u00ed vlny a m\u00edstem, kde dopad\u00e1 odra\u017een\u00e1 vlna z ionosf\u00e9ry. V t\u00e9to z\u00f3n\u011b nen\u00ed sign\u00e1l sly\u0161et.",
        explanation:
          "Mrtv\u00e1 z\u00f3na je typick\u00e1 pro KV. Na VHF/UHF se obvykle nevyskytuje, proto\u017ee tyto frekvence ionosf\u00e9rou proch\u00e1zej\u00ed.",
      },
      {
        type: "match",
        instruction: "P\u0159i\u0159a\u010fte pojmy k jejich v\u00fdznamu:",
        pairs: [
          { left: "MUF", right: "Nejvy\u0161\u0161\u00ed frekvence pro odraz" },
          { left: "Mrtv\u00e1 z\u00f3na", right: "Oblast bez sign\u00e1lu" },
          { left: "Vrstva D", right: "Pohlcuje ni\u017e\u0161\u00ed KV frekvence" },
          { left: "Slune\u010dn\u00ed aktivita", right: "Zvy\u0161uje ionizaci a MUF" },
        ],
        explanation:
          "Slune\u010dn\u00ed aktivita (m\u011b\u0159en\u00e1 indexem SFI) p\u0159\u00edmo ovliv\u0148uje stupe\u0148 ionizace a t\u00edm MUF.",
      },
      {
        type: "exam-question",
        questionId: "T-PRO-001",
      },
      {
        type: "highlight",
        instruction:
          "Vyberte faktory, kter\u00e9 ovliv\u0148uj\u00ed \u0161\u00ed\u0159en\u00ed KV sign\u00e1l\u016f ionosf\u00e9rou:",
        terms: [
          { text: "Slune\u010dn\u00ed aktivita", correct: true },
          { text: "V\u00fdkon vys\u00edla\u010de", correct: false },
          { text: "Ro\u010dn\u00ed obdob\u00ed", correct: true },
          { text: "Typ modulace", correct: false },
          { text: "Denn\u00ed doba", correct: true },
          { text: "Frekvence", correct: true },
        ],
        explanation:
          "V\u00fdkon a modulace neovliv\u0148uj\u00ed ionosf\u00e9ru - ovliv\u0148uj\u00ed jen s\u00edlu sign\u00e1lu. Ionizace z\u00e1vis\u00ed na slunci, ro\u010dn\u00edm obdob\u00ed a denn\u00ed dob\u011b.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte spr\u00e1vn\u00e1 tvrzen\u00ed o ionosf\u00e9rick\u00e9m \u0161\u00ed\u0159en\u00ed:",
        pool: [
          {
            text: "Vrstva D v noci mizí a KV útlum klesá",
            correct: true,
          },
          {
            text: "Vy\u0161\u0161\u00ed slune\u010dn\u00ed aktivita zvy\u0161uje MUF",
            correct: true,
          },
          {
            text: "P\u00e1smo 10 m je pou\u017eiteln\u00e9 pro DX i p\u0159i n\u00edzk\u00e9 slune\u010dn\u00ed aktivit\u011b",
            correct: false,
          },
          {
            text: "VHF sign\u00e1ly b\u011b\u017en\u011b proch\u00e1zej\u00ed ionosf\u00e9rou",
            correct: true,
          },
        ],
        explanation:
          "P\u00e1smo 10 m (28 MHz) pot\u0159ebuje vysokou MUF, tedy vysokou slune\u010dn\u00ed aktivitu. P\u0159i n\u00edzk\u00e9 aktivit\u011b je MUF \u010dasto pod 28 MHz.",
      },
    ],
    relatedQuestionIds: [
      "T-PRO-001",
      "T-PRO-002",
      "T-PRO-003",
      "T-PRO-004",
      "T-PRO-005",
      "T-PRO-006",
      "T-PRO-007",
      "T-PRO-008",
      "T-PRO-009",
    ],
    tags: ["ionosfera", "hf", "muf", "skip-zone", "slunecni-aktivita", "analyze"],
  },

  // -----------------------------------------------------------------------
  // Lesson prop-02: VHF/UHF propagation
  // -----------------------------------------------------------------------
  {
    id: "prop-02",
    examPartId: "technical",
    sectionId: "propagation",
    order: 2,
    title: "\u0160\u00ed\u0159en\u00ed VHF/UHF sign\u00e1l\u016f",
    objective:
      "Popsat \u0161\u00ed\u0159en\u00ed na p\u0159\u00edmou viditelnost, troposf\u00e9rick\u00fd rozptyl, ductingu a difrakci.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Na VHF (30-300 MHz) a UHF (300-3000 MHz) se sign\u00e1ly \u0161\u00ed\u0159\u00ed p\u0159edev\u0161\u00edm na p\u0159\u00edmou viditelnost (line of sight). Dosah z\u00e1vis\u00ed na v\u00fd\u0161ce ant\u00e9n a zak\u0159iven\u00ed Zem\u011b. Vzorec pro vzd\u00e1lenost horizontu: d [km] \u2248 3,57 \u00d7 \u221ah [m].",
        note: "Ant\u00e9na ve v\u00fd\u0161ce 10 m vid\u00ed cca 11 km k horizontu.",
      },
      {
        type: "slider",
        question:
          "Jak daleko vid\u00ed ant\u00e9na ve v\u00fd\u0161ce 25 m k r\u00e1diov\u00e9mu horizontu? (d \u2248 3,57 \u00d7 \u221ah)",
        min: 5,
        max: 30,
        step: 0.5,
        unit: "km",
        correctValue: 17.9,
        tolerance: 1.5,
        explanation:
          "d = 3,57 \u00d7 \u221a25 = 3,57 \u00d7 5 = 17,85 km. Ve skute\u010dnosti je dosah m\u00edrn\u011b v\u011bt\u0161\u00ed d\u00edky refrakci v atmosf\u00e9\u0159e.",
      },
      {
        type: "explain",
        content:
          "Za zvl\u00e1\u0161tn\u00edch podm\u00ednek se VHF/UHF sign\u00e1ly \u0161\u00ed\u0159\u00ed d\u00e1le ne\u017e p\u0159\u00edm\u00e1 viditelnost. Troposf\u00e9rick\u00fd ducting vznikne p\u0159i teplotn\u00ed inverzi - sign\u00e1l se \u0161\u00ed\u0159\u00ed v 'kan\u00e1le' nad Zem\u00ed na stovky km. Typick\u00e9 v l\u00e9t\u011b nad mo\u0159em.",
      },
      {
        type: "select-answer",
        question:
          "Kter\u00fd jev umo\u017e\u0148uje \u0161\u00ed\u0159en\u00ed VHF sign\u00e1lu za p\u0159ek\u00e1\u017ekou (kopcem)?",
        choices: [
          { id: "a", text: "Difrakce na hran\u011b (knife-edge)" },
          { id: "b", text: "Ionosf\u00e9rick\u00fd odraz" },
          { id: "c", text: "P\u0159\u00edzemn\u00ed vlna" },
          { id: "d", text: "Absorpce ve vrstv\u011b D" },
        ],
        correctId: "a",
        explanation:
          "Knife-edge difrakce nastane, kdy\u017e se vlna ohýbá p\u0159es ostrou hranu p\u0159ek\u00e1\u017eky. Ionosf\u00e9rick\u00fd odraz na VHF normáln\u011b nefunguje.",
      },
      {
        type: "fill-blank",
        textBefore:
          "Troposf\u00e9rick\u00fd ducting vznik\u00e1 p\u0159i",
        blank: "teplotn\u00ed inverzi",
        distractors: ["slune\u010dn\u00edch skvrnách", "magnetick\u00e9 bou\u0159i", "polární záři"],
        textAfter: " v doln\u00ed atmosf\u00e9\u0159e.",
        explanation:
          "Teplotn\u00ed inverze znamen\u00e1, \u017ee tepl\u00fd vzduch je nad studen\u00fdm - opak norm\u00e1ln\u00edho stavu. To ohýbá r\u00e1diov\u00e9 vlny k zemi.",
      },
      {
        type: "match",
        instruction: "P\u0159i\u0159a\u010fte mechanismus \u0161\u00ed\u0159en\u00ed k popisu:",
        pairs: [
          { left: "P\u0159\u00edm\u00e1 viditelnost", right: "Z\u00e1kladn\u00ed VHF/UHF \u0161\u00ed\u0159en\u00ed" },
          { left: "Ducting", right: "Teplotn\u00ed inverze, stovky km" },
          { left: "Knife-edge difrakce", right: "Ohyb vlny p\u0159es hranu" },
          { left: "Troposf\u00e9rick\u00fd rozptyl", right: "Rozptyl na nehomogenit\u00e1ch" },
        ],
        explanation:
          "Troposf\u00e9rick\u00fd rozptyl (tropo scatter) umo\u017e\u0148uje slabé spojen\u00ed na 300-500 km, ale vy\u017eaduje velk\u00fd v\u00fdkon a sm\u011brov\u00e9 ant\u00e9ny.",
      },
      {
        type: "reveal",
        prompt: "Pro\u010d se na VHF/UHF pou\u017e\u00edvaj\u00ed v\u011bt\u0161inou vertik\u00e1ln\u011b polarizovan\u00e9 ant\u00e9ny pro FM provoz?",
        answer:
          "FM opakovače a mobilní stanice standardně používají vertikální polarizaci. Sladění polarizace mezi stanicemi minimalizuje ztráty.",
        explanation:
          "Pro SSB a CW na VHF se naopak pou\u017e\u00edv\u00e1 horizont\u00e1ln\u00ed polarizace, proto\u017ee troposf\u00e9rick\u00e9 \u0161\u00ed\u0159en\u00ed l\u00e9pe funguje s horizont\u00e1ln\u00ed.",
      },
      {
        type: "exam-question",
        questionId: "T-PRO-010",
      },
      {
        type: "highlight",
        instruction:
          "Vyberte jevy, kter\u00e9 mohou prodlou\u017eit dosah VHF spojen\u00ed za horizont:",
        terms: [
          { text: "Ducting", correct: true },
          { text: "Knife-edge difrakce", correct: true },
          { text: "Sporadická vrstva E", correct: true },
          { text: "Odraz od vrstvy D", correct: false },
          { text: "Troposf\u00e9rick\u00fd rozptyl", correct: true },
        ],
        explanation:
          "Sporadická E (Es) m\u016f\u017ee výjime\u010dn\u011b odrazit VHF sign\u00e1ly na stovky km. Vrstva D VHF sign\u00e1ly neovliv\u0148uje - ty j\u00ed proch\u00e1zej\u00ed.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte spr\u00e1vn\u00e1 tvrzen\u00ed o VHF/UHF \u0161\u00ed\u0159en\u00ed:",
        pool: [
          {
            text: "Dosah na p\u0159\u00edmou viditelnost z\u00e1vis\u00ed na v\u00fd\u0161ce ant\u00e9n",
            correct: true,
          },
          {
            text: "UHF sign\u00e1ly se b\u011b\u017en\u011b odr\u00e1\u017eej\u00ed od ionosf\u00e9ry",
            correct: false,
          },
          {
            text: "Ducting m\u016f\u017ee prodlou\u017eit dosah na stovky km",
            correct: true,
          },
          {
            text: "Vy\u0161\u0161\u00ed frekvence maj\u00ed v\u011bt\u0161\u00ed \u00fatlum volným prostorem",
            correct: true,
          },
          {
            text: "Na UHF sta\u010d\u00ed ni\u017e\u0161\u00ed v\u00fdkon ne\u017e na VHF pro stejn\u00fd dosah",
            correct: false,
          },
        ],
        explanation:
          "UHF sign\u00e1ly proch\u00e1zej\u00ed ionosf\u00e9rou (proto se pou\u017e\u00edvaj\u00ed pro satelity). Vy\u0161\u0161\u00ed frekvence maj\u00ed v\u011bt\u0161\u00ed \u00fatlum, tak\u017ee na UHF pot\u0159ebujete v\u00edce v\u00fdkonu.",
      },
    ],
    relatedQuestionIds: [
      "T-PRO-010",
      "T-PRO-011",
      "T-PRO-012",
      "T-PRO-013",
      "T-PRO-014",
      "T-PRO-015",
      "T-PRO-016",
      "T-PRO-017",
    ],
    tags: ["vhf", "uhf", "line-of-sight", "ducting", "difrakce", "apply"],
  },
];
