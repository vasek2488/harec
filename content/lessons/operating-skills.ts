import type { Lesson } from "@/lib/types";

export const operatingSkillsLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Making a contact - CQ and responding
  // -----------------------------------------------------------------------
  {
    id: "skills-01",
    examPartId: "operating",
    sectionId: "skills",
    order: 1,
    title: "Navazování spojení - CQ a odpověď",
    objective:
      "Správně vyvolat obecnou výzvu CQ a odpovědět na volání jiné stanice.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "CQ je obecná výzva všem stanicím. Radioamatér nejprve poslouchá, zda je frekvence volná, a pak vysílá: 'CQ CQ CQ, tady OK1ABC OK1ABC OK1ABC, příjem.' Značka se opakuje 1-3x. Po vyslání CQ stanice čeká na odpověď.",
        note: "CQ pochází z anglického 'seek you' - hledám vás.",
      },
      {
        type: "order",
        instruction: "Seřaďte kroky správného postupu volání CQ:",
        items: [
          "Poslechnout, zda je frekvence volná",
          "Zeptat se 'Je frekvence volná?' (QRL?)",
          "Vyslat CQ 3x",
          "Vyslat DE a vlastní značku foneticky",
          "Říci 'příjem' nebo 'standing by'",
        ],
        explanation:
          "Před voláním CQ je nutné ověřit, že frekvenci nikdo nepoužívá. Teprve pak je možné volat. Značka se vysílá fonetickou abecedou.",
      },
      {
        type: "fill-blank",
        textBefore: "Při volání CQ se vlastní značka opakuje",
        blank: "1-3x",
        distractors: ["5-10x", "jen 1x", "neustále dokola"],
        textAfter: ".",
        explanation:
          "Značka se opakuje 1 až 3 krát. Příliš dlouhé CQ je nezdvořilé a snižuje šanci na odpověď - ostatní stanice nebudou čekat.",
      },
      {
        type: "explain",
        content:
          "Odpověď na CQ: 'OK2DEF OK2DEF, tady OK1ABC OK1ABC, příjem.' Nejprve značka volané stanice (1-2x), pak DE a vlastní značka (1-2x). Na KV se používá fonetické hláskování značky.",
      },
      {
        type: "select-answer",
        question: "Jak správně odpovíte na CQ stanice OK2DEF?",
        choices: [
          { id: "a", text: "OK2DEF, tady OK1ABC, příjem" },
          { id: "b", text: "CQ CQ CQ, tady OK1ABC" },
          { id: "c", text: "OK1ABC volá OK2DEF, konec" },
          { id: "d", text: "Ahoj OK2DEF, tady OK1ABC" },
        ],
        correctId: "a",
        explanation:
          "Správný formát: značka volané stanice, 'tady/DE', vlastní značka, 'příjem/K'. Nevysíláte CQ - to je pouze pro obecnou výzvu. Nepoužíváte 'konec' na začátku.",
      },
      {
        type: "reveal",
        prompt: "Jaký je rozdíl mezi 'příjem' (over) a 'konec' (out)?",
        answer:
          "'Příjem' (over/K) znamená, že předáváte slovo a očekáváte odpověď. 'Konec' (out/SK) znamená ukončení spojení - nepředpokládá se další odpověď.",
        explanation:
          "Nikdy se nepoužívá 'příjem a konec' (over and out) zároveň - je to protimluv.",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratky k jejich významu:",
        pairs: [
          { left: "CQ", right: "Obecná výzva všem stanicím" },
          { left: "DE", right: "Od / tady (identifikace odesílající stanice)" },
          { left: "K", right: "Příjem - předávám slovo" },
          { left: "SK", right: "Konec spojení" },
        ],
        explanation:
          "Tyto zkratky pocházejí z telegrafního provozu (CW) a používají se i ve fonickém provozu.",
      },
      {
        type: "exam-question",
        questionId: "O-SKL-001",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte všechna správná pravidla pro postup QSO:",
        pool: [
          {
            text: "Před voláním CQ je nutné poslouchat, zda je frekvence volná",
            correct: true,
          },
          {
            text: "CQ se vysílá na jakémkoli kmitočtu bez ohledu na bandplán",
            correct: false,
          },
          {
            text: "Značka se hláskuje fonetickou abecedou ICAO/NATO",
            correct: true,
          },
          {
            text: "Odpověď na CQ začíná značkou volané stanice",
            correct: true,
          },
          {
            text: "Při CQ se značka opakuje minimálně 10x",
            correct: false,
          },
        ],
        explanation:
          "CQ se vysílá jen na kmitočtech příslušných druhů provozu podle bandplánu. Značka se opakuje 1-3x, ne 10x.",
      },
    ],
    relatedQuestionIds: [
      "O-SKL-001",
      "O-SKL-002",
      "O-SKL-003",
      "O-SKL-004",
      "O-SKL-005",
      "O-SKL-006",
      "O-SKL-007",
      "O-SKL-008",
      "O-SKL-009",
      "O-SKL-010",
    ],
    tags: ["cq", "qso", "volaci-znacka", "fonetika", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: RST report and information exchange
  // -----------------------------------------------------------------------
  {
    id: "skills-02",
    examPartId: "operating",
    sectionId: "skills",
    order: 2,
    title: "RST report a výměna informací",
    objective:
      "Sestavit správný RST report a vyjmenovat informace vyměňované během standardního spojení.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "RST systém hodnotí kvalitu signálu třemi čísly: R (Readability, čitelnost 1-5), S (Strength, síla 1-9) a T (Tone, tón 1-9, pouze pro CW). Ve fonickém provozu se udává pouze RS (např. '59' znamená perfektně čitelný, velmi silný signál).",
        note: "R5 S9 je nejlepší možné hodnocení ve fonickém provozu.",
      },
      {
        type: "match",
        instruction: "Přiřaďte hodnotu R (čitelnost) k jejímu významu:",
        pairs: [
          { left: "R1", right: "Nečitelný" },
          { left: "R2", right: "Sotva čitelný" },
          { left: "R3", right: "Čitelný s obtížemi" },
          { left: "R4", right: "Čitelný s malými obtížemi" },
          { left: "R5", right: "Perfektně čitelný" },
        ],
        explanation:
          "Stupnice R 1-5 hodnotí, jak dobře rozumíte obsahu zprávy. R3 znamená, že rozumíte, ale musíte se soustředit.",
      },
      {
        type: "slider",
        question:
          "Jaký RS report dáte stanici, která je čitelná s obtížemi a má průměrně silný signál?",
        min: 11,
        max: 59,
        step: 1,
        unit: "",
        correctValue: 35,
        tolerance: 2,
        explanation:
          "R3 = čitelný s obtížemi, S5 = průměrný signál. Report je tedy 35. S stupnice jde od 1 (sotva znatelný) do 9 (extrémně silný).",
      },
      {
        type: "fill-blank",
        textBefore: "V RST reportu 579 hodnota S =",
        blank: "7",
        distractors: ["5", "9", "57"],
        textAfter: " (síla signálu).",
        explanation:
          "V RST 579: R=5 (čitelnost), S=7 (síla signálu), T=9 (tón, jen CW). S je druhá cifra.",
      },
      {
        type: "explain",
        content:
          "Během standardního spojení (QSO) si stanice vymění: volací značky, RS(T) report, jména operátorů, QTH (polohu/město), popis zařízení a antény. Na konci se vymění poděkování 73 (pozdrav) a spojení se ukončí.",
      },
      {
        type: "order",
        instruction: "Seřaďte typický průběh standardního QSO:",
        items: [
          "Výměna volacích značek",
          "Předání RST reportu",
          "Jména operátorů a QTH",
          "Popis zařízení a antény",
          "Poděkování 73 a ukončení",
        ],
        explanation:
          "Standardní QSO má zavedený pořádek. Nejprve se stanice identifikují, pak si vymění report o kvalitě signálu a následně osobní a technické údaje.",
      },
      {
        type: "select-answer",
        question: "Co znamená RST report '339'?",
        choices: [
          { id: "a", text: "Čitelný s obtížemi, slabý signál, perfektní tón" },
          { id: "b", text: "Sotva čitelný, silný signál, špatný tón" },
          { id: "c", text: "Perfektně čitelný, průměrný signál, dobrý tón" },
          { id: "d", text: "Nečitelný, velmi slabý, čistý tón" },
        ],
        correctId: "a",
        explanation:
          "R3 = čitelný s obtížemi, S3 = slabý signál, T9 = perfektní tón. T se udává pouze u CW provozu.",
      },
      {
        type: "exam-question",
        questionId: "O-SKL-011",
      },
      {
        type: "highlight",
        instruction: "Označte informace, které se běžně vyměňují během standardního QSO:",
        terms: [
          { text: "Jméno operátora", correct: true },
          { text: "Číslo bankovního účtu", correct: false },
          { text: "QTH (poloha/město)", correct: true },
          { text: "RST report", correct: true },
          { text: "Heslo k e-mailu", correct: false },
        ],
        explanation:
          "Během QSO se nikdy nesdílí osobní či finanční údaje. Vyměňují se technicky relevantní informace: značka, report, jméno, poloha, zařízení.",
      },
    ],
    relatedQuestionIds: [
      "O-SKL-011",
      "O-SKL-012",
      "O-SKL-013",
      "O-SKL-014",
      "O-SKL-015",
      "O-SKL-016",
      "O-SKL-017",
      "O-SKL-018",
      "O-SKL-019",
      "O-SKL-020",
    ],
    tags: ["rst", "report", "qso", "signal", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 3: Emergency operation and special situations
  // -----------------------------------------------------------------------
  {
    id: "skills-03",
    examPartId: "operating",
    sectionId: "skills",
    order: 3,
    title: "Nouzový provoz a zvláštní situace",
    objective:
      "Aplikovat správný postup při nouzovém volání a dodržovat pravidla provozní kázně.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Nouzový provoz má tři úrovně: MAYDAY (tíseň - přímo ohrožený život), PAN PAN (naléhavost - vážná situace) a SECURITE (bezpečnost - varování). Každý radioamatér musí umět tyto signály rozpoznat a správně na ně reagovat.",
        note: "Nouzové signály se vysílají 3x: 'MAYDAY MAYDAY MAYDAY'.",
      },
      {
        type: "order",
        instruction: "Seřaďte nouzové signály podle priority od nejvyšší:",
        items: [
          "MAYDAY (tíseň)",
          "PAN PAN (naléhavost)",
          "SECURITE (bezpečnost)",
          "Běžný provoz",
        ],
        explanation:
          "MAYDAY má absolutní přednost. PAN PAN signalizuje vážnou situaci, SECURITE je informativní varování. Běžný provoz musí ustoupit všem nouzovým signálům.",
      },
      {
        type: "fill-blank",
        textBefore: "Při zaslechnutí tísňového volání musí radioamatér okamžitě",
        blank: "přestat vysílat",
        distractors: ["zvýšit výkon", "přepnout na jiný kanál", "vypnout stanici"],
        textAfter: " a naslouchat.",
        explanation:
          "Povinností je okamžitě uvolnit frekvenci a naslouchat. Přepínání na jiný kanál či vypnutí stanice by znemožnilo poskytnutí pomoci.",
      },
      {
        type: "select-answer",
        question: "Jaký je správný formát tísňového volání?",
        choices: [
          { id: "a", text: "MAYDAY MAYDAY MAYDAY, tady [značka], [popis situace]" },
          { id: "b", text: "SOS SOS SOS, tady [značka], [popis situace]" },
          { id: "c", text: "HELP HELP HELP, volám všechny stanice" },
          { id: "d", text: "Nouzové volání, prosím o pomoc [značka]" },
        ],
        correctId: "a",
        explanation:
          "Správný formát je MAYDAY 3x, následované identifikací stanice a popisem situace (poloha, povaha nouze, počet osob). SOS je telegrafní signál, ne fonický.",
      },
      {
        type: "explain",
        content:
          "Provozní kázeň zahrnuje: identifikaci stanice každých 10 minut během spojení a na začátku a konci vysílání, dodržování bandplánu, používání minimálního výkonu a zdvořilé chování. Stanice se identifikuje svou přidělenou volací značkou.",
      },
      {
        type: "reveal",
        prompt: "Jak často se musí radioamatér identifikovat během probíhajícího spojení?",
        answer:
          "Každých 10 minut. Identifikace se provádí vysíláním přidělené volací značky na začátku a konci vysílání a každých 10 minut.",
        explanation:
          "Tento interval vychází z českého provozního řádu. Cíl je umožnit kontrolním orgánům identifikovat stanici kdykoli.",
      },
      {
        type: "exam-question",
        questionId: "O-SKL-021",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte všechna správná pravidla provozní kázně:",
        pool: [
          {
            text: "Stanice se identifikuje každých 10 minut",
            correct: true,
          },
          {
            text: "Radioamatér používá minimální potřebný výkon",
            correct: true,
          },
          {
            text: "Na nouzové volání se reaguje okamžitým přerušením provozu",
            correct: true,
          },
          {
            text: "Identifikace volací značkou není nutná při krátkých spojeních",
            correct: false,
          },
          {
            text: "Radioamatér smí vysílat bez povolení v nouzi kohokoli",
            correct: false,
          },
        ],
        explanation:
          "Identifikace je povinná vždy, bez ohledu na délku spojení. V nouzové situaci smí vysílat bez povolení pouze osoba v tísni, ne třetí strana.",
      },
    ],
    relatedQuestionIds: [
      "O-SKL-021",
      "O-SKL-022",
      "O-SKL-023",
      "O-SKL-024",
      "O-SKL-025",
      "O-SKL-026",
      "O-SKL-027",
      "O-SKL-028",
      "O-SKL-029",
      "O-SKL-030",
    ],
    tags: ["nouzovy-provoz", "mayday", "identifikace", "provozni-kazen", "apply"],
  },
];
