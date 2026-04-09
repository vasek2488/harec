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
    title: "Navazovani spojeni - CQ a odpoved",
    objective:
      "Spravne vyvolat obecnou vyzvu CQ a odpovedet na volani jine stanice.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "CQ je obecna vyzva vsem stanicim. Radioamater nejprve posloucha, zda je frekvence volna, a pak vysila: 'CQ CQ CQ, tady OK1ABC OK1ABC OK1ABC, prjem.' Znacka se opakuje 1-3x. Po vyslani CQ stanice ceka na odpoved.",
        note: "CQ pochazi z anglickeho 'seek you' - hledam vas.",
      },
      {
        type: "order",
        instruction: "Seradte kroky spravneho postupu volani CQ:",
        items: [
          "Poslechnout, zda je frekvence volna",
          "Zeptat se 'Je frekvence volna?' (QRL?)",
          "Vyslat CQ 3x",
          "Vyslat DE a vlastni znacku foneticky",
          "Rici 'prijem' nebo 'standing by'",
        ],
        explanation:
          "Pred volanim CQ je nutne overit, ze frekvenci nikdo nepouziva. Teprve pak je mozne volat. Znacka se vysila fonetickou abecedou.",
      },
      {
        type: "fill-blank",
        textBefore: "Pri volani CQ se vlastni znacka opakuje",
        blank: "1-3x",
        distractors: ["5-10x", "jen 1x", "neustale dokola"],
        textAfter: ".",
        explanation:
          "Znacka se opakuje 1 az 3 krat. Prilis dlouhe CQ je nezdvorile a snizuje sanci na odpoved - ostatni stanice nebudou cekat.",
      },
      {
        type: "explain",
        content:
          "Odpoved na CQ: 'OK2DEF OK2DEF, tady OK1ABC OK1ABC, prijem.' Nejprve znacka volane stanice (1-2x), pak DE a vlastni znacka (1-2x). Na KV se pouziva foneticky hlaskovani znacky.",
      },
      {
        type: "select-answer",
        question: "Jak spravne odpovite na CQ stanice OK2DEF?",
        choices: [
          { id: "a", text: "OK2DEF, tady OK1ABC, prijem" },
          { id: "b", text: "CQ CQ CQ, tady OK1ABC" },
          { id: "c", text: "OK1ABC vola OK2DEF, konec" },
          { id: "d", text: "Ahoj OK2DEF, tady OK1ABC" },
        ],
        correctId: "a",
        explanation:
          "Spravny format: znacka volane stanice, 'tady/DE', vlastni znacka, 'prijem/K'. Nevysilate CQ - to je pouze pro obecnou vyzvu. Nepouzivate 'konec' na zacatku.",
      },
      {
        type: "reveal",
        prompt: "Jaky je rozdil mezi 'prijem' (over) a 'konec' (out)?",
        answer:
          "'Prijem' (over/K) znamena, ze predavate slovo a ocekavate odpoved. 'Konec' (out/SK) znamena ukonceni spojeni - nepredpoklada se dalsi odpoved.",
        explanation:
          "Nikdy se nepouziva 'prijem a konec' (over and out) zaroven - je to protimluv.",
      },
      {
        type: "match",
        instruction: "Priradte zkratky k jejich vyznamu:",
        pairs: [
          { left: "CQ", right: "Obecna vyzva vsem stanicim" },
          { left: "DE", right: "Od / tady (identifikace odesilajici stanice)" },
          { left: "K", right: "Prijem - predavam slovo" },
          { left: "SK", right: "Konec spojeni" },
        ],
        explanation:
          "Tyto zkratky pochazeji z telegrafniho provozu (CW) a pouzivaji se i ve fonickem provozu.",
      },
      {
        type: "exam-question",
        questionId: "O-SKL-001",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte vsechna spravna pravidla pro postup QSO:",
        pool: [
          {
            text: "Pred volanim CQ je nutne poslouchat, zda je frekvence volna",
            correct: true,
          },
          {
            text: "CQ se vysila na jakemkoli kmitoctu bez ohledu na bandplan",
            correct: false,
          },
          {
            text: "Znacka se hlaskuje fonetickou abecedou ICAO/NATO",
            correct: true,
          },
          {
            text: "Odpoved na CQ zacina znackou volane stanice",
            correct: true,
          },
          {
            text: "Pri CQ se znacka opakuje minimalne 10x",
            correct: false,
          },
        ],
        explanation:
          "CQ se vysila jen na kmitoctech prislusnych druhu provozu podle bandplanu. Znacka se opakuje 1-3x, ne 10x.",
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
    title: "RST report a vymena informaci",
    objective:
      "Sestavit spravny RST report a vyjmenovat informace vymenujovane behem standardniho spojeni.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "RST system hodnotri kvalitu signalu tremi cisly: R (Readability, citelnost 1-5), S (Strength, sila 1-9) a T (Tone, ton 1-9, pouze pro CW). Ve fonickem provozu se udava pouze RS (napr. '59' znamena perfektne citelny, velmi silny signal).",
        note: "R5 S9 je nejlepsi mozne hodnoceni ve fonickem provozu.",
      },
      {
        type: "match",
        instruction: "Priradte hodnotu R (citelnost) k jejimu vyznamu:",
        pairs: [
          { left: "R1", right: "Necitelny" },
          { left: "R2", right: "Sotva citelny" },
          { left: "R3", right: "Citelny s obtizemi" },
          { left: "R4", right: "Citelny s malymi obtizemi" },
          { left: "R5", right: "Perfektne citelny" },
        ],
        explanation:
          "Stupnice R 1-5 hodnoti, jak dobre rozumite obsahu zpravy. R3 znamena, ze rozumite, ale musi te se soustredit.",
      },
      {
        type: "slider",
        question:
          "Jaky RS report date stanici, ktera je citelna s obtizemi a ma prumerne silny signal?",
        min: 11,
        max: 59,
        step: 1,
        unit: "",
        correctValue: 35,
        tolerance: 2,
        explanation:
          "R3 = citelny s obtizemi, S5 = prumerny signal. Report je tedy 35. S stupnice jde od 1 (sotva znatelny) do 9 (extremne silny).",
      },
      {
        type: "fill-blank",
        textBefore: "V RST reportu 579 hodnota S =",
        blank: "7",
        distractors: ["5", "9", "57"],
        textAfter: " (sila signalu).",
        explanation:
          "V RST 579: R=5 (citelnost), S=7 (sila signalu), T=9 (ton, jen CW). S je druha cifra.",
      },
      {
        type: "explain",
        content:
          "Behem standardniho spojeni (QSO) si stanice vymenuji: volaci znacky, RS(T) report, jmena operatoru, QTH (polohu/mesto), popis zarizeni a anteny. Na konci se vymeni podekavani 73 (pozdrav) a spojeni se ukonci.",
      },
      {
        type: "order",
        instruction: "Seradte typicky prubeh standardniho QSO:",
        items: [
          "Vymena volacich znacek",
          "Predani RST reportu",
          "Jmena operatoru a QTH",
          "Popis zarizeni a anteny",
          "Podekavani 73 a ukonceni",
        ],
        explanation:
          "Standardni QSO ma zavedeny poradek. Nejprve se stanice identifikuji, pak si vymeni report o kvalite signalu a nasledne osobni a technicke udaje.",
      },
      {
        type: "select-answer",
        question: "Co znamena RST report '339'?",
        choices: [
          { id: "a", text: "Citelny s obtizemi, slaby signal, perfektni ton" },
          { id: "b", text: "Sotva citelny, silny signal, spatny ton" },
          { id: "c", text: "Perfektne citelny, prumerny signal, dobry ton" },
          { id: "d", text: "Necitelny, velmi slaby, cistryy ton" },
        ],
        correctId: "a",
        explanation:
          "R3 = citelny s obtizemi, S3 = slaby signal, T9 = perfektni ton. T se udava pouze u CW provozu.",
      },
      {
        type: "exam-question",
        questionId: "O-SKL-011",
      },
      {
        type: "highlight",
        instruction: "Oznacte informace, ktere se bezne vymenujou behem standardniho QSO:",
        terms: [
          { text: "Jmeno operatora", correct: true },
          { text: "Cislo bankovniho uctu", correct: false },
          { text: "QTH (poloha/mesto)", correct: true },
          { text: "RST report", correct: true },
          { text: "Heslo k e-mailu", correct: false },
        ],
        explanation:
          "Behem QSO se nikdy nesdili osobni ci financni udaje. Vymenujou se technicky relevantni informace: znacka, report, jmeno, poloha, zarizeni.",
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
    title: "Nouzovy provoz a zvlastni situace",
    objective:
      "Aplikovat spravny postup pri nouzovem volani a dodrzovat pravidla provozni kazne.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Nouzovy provoz ma tri urovne: MAYDAY (tisen - primo ohrozeny zivot), PAN PAN (nalehavost - vazna situace) a SECURITE (bezpecnost - varovani). Kazdy radioamater musi umet tyto signaly rozpoznat a spravne na ne reagovat.",
        note: "Nouzove signaly se vysiji 3x: 'MAYDAY MAYDAY MAYDAY'.",
      },
      {
        type: "order",
        instruction: "Seradte nouzove signaly podle priority od nejvyssi:",
        items: [
          "MAYDAY (tisen)",
          "PAN PAN (nalehavost)",
          "SECURITE (bezpecnost)",
          "Bezny provoz",
        ],
        explanation:
          "MAYDAY ma absolutni prednost. PAN PAN signalizuje vaznou situaci, SECURITE je informativni varovani. Bezny provoz musi ustoupit vsem nouzbvym signaium.",
      },
      {
        type: "fill-blank",
        textBefore: "Pri zaslechuti tisnoveho volani musi radioamater okamzite",
        blank: "prestat vysilat",
        distractors: ["zvysit vykon", "prepnout na jiny kanal", "vypnout stanici"],
        textAfter: " a naslouchat.",
        explanation:
          "Povinnosti je okamzite uvolnit frekvenci a naslouchat. Prepinani na jiny kanal ci vypnuti stanice by znemoznilo poskytntui pomoci.",
      },
      {
        type: "select-answer",
        question: "Jaky je spravny format tisnoveho volani?",
        choices: [
          { id: "a", text: "MAYDAY MAYDAY MAYDAY, tady [znacka], [popis situace]" },
          { id: "b", text: "SOS SOS SOS, tady [znacka], [popis situace]" },
          { id: "c", text: "HELP HELP HELP, volam vsechny stanice" },
          { id: "d", text: "Nouzove volani, prosim o pomoc [znacka]" },
        ],
        correctId: "a",
        explanation:
          "Spravny format je MAYDAY 3x, nasledovane identifikaci stanice a popisem situace (poloha, povaha nouze, pocet osob). SOS je telegrafni signal, ne fonicky.",
      },
      {
        type: "explain",
        content:
          "Provozni kazen zahrnuje: identifikaci stanice kazdych 10 minut behem spojeni a na zacatku a konci vysilani, dodrzovani bandplanu, pouzivani minimalniho vykonu a zdvorile chovani. Stanice se identifikuje svou pridelenou volaci znackou.",
      },
      {
        type: "reveal",
        prompt: "Jak casto se musi radioamater identifikovat behem probihajiciho spojeni?",
        answer:
          "Kazdych 10 minut. Identifikace se provadi vysilanim pridelene volaci znacky na zacatku a konci vysilani a kazdych 10 minut.",
        explanation:
          "Tento interval vychazi z ceskeho provozniho radu. Cil je umoznit kontrolnim organem identifikovat stanici kdykoli.",
      },
      {
        type: "exam-question",
        questionId: "O-SKL-021",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte vsechna spravna pravidla provozni kazne:",
        pool: [
          {
            text: "Stanice se identifikuje kazdych 10 minut",
            correct: true,
          },
          {
            text: "Radioamater pouziva minimalni potrebny vykon",
            correct: true,
          },
          {
            text: "Na nouzove volani se reaguje okamzitym prerusenim provozu",
            correct: true,
          },
          {
            text: "Identifikace volaci znackou neni nutna pri kratkych spojenich",
            correct: false,
          },
          {
            text: "Radioamater smi vysilat bez povoleni v nouzi kohokoliv",
            correct: false,
          },
        ],
        explanation:
          "Identifikace je povinne vzdy, bez ohledu na delku spojeni. V nouzove situaci smi vysilat bez povoleni pouze osoba v tisni, ne tererti strana.",
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
