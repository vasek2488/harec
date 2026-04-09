import type { Lesson } from "@/lib/types";

export const operatingPrefixesLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Callsign structure and prefix system
  // -----------------------------------------------------------------------
  {
    id: "prefixes-01",
    examPartId: "operating",
    sectionId: "prefixes",
    order: 1,
    title: "Struktura volaci znacky a system prefixu",
    objective:
      "Rozlozit volaci znacku na prefix, cislo a suffix a vysvetlit vyznam pridavnych oznaceni.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Kazda radioamaterskam volaci znacka ma tri casti: PREFIX urcuje zemi (OK = Cesko), CISLO urcuje oblast nebo kategorii (1 = okres) a SUFFIX je unikatni kombinace pismen prirazena operatorovi (ABC). Napriklad OK1ABC je cesky radioamater.",
        note: "Prefix muze byt jedno az tri pismena, za nimi nasleduje jedna cislice a az tri pismena suffixu.",
      },
      {
        type: "fill-blank",
        textBefore: "Ve volaci znacce OK2XYZ je prefix",
        blank: "OK",
        distractors: ["OK2", "OL", "XYZ"],
        textAfter: ".",
        explanation:
          "Prefix je cast pred cislici - oznacuje zemi. OK2 zahrnuje i cislo, coz neni prefix samotny.",
      },
      {
        type: "reveal",
        prompt: "Jaky je rozdil mezi prefixy OK a OL?",
        answer:
          "Oba oznacuji Ceskou republiku. OK je puvodni traditionalni prefix, OL je dodatecny blok pridelenych znacek.",
        explanation:
          "ITU pridelilo Ceske republice oba bloky. Stanice OK i OL jsou ceske. OL se pouziva i pro specialni a klubove znacky.",
      },
      {
        type: "match",
        instruction: "Priradte cast volaci znacky OK2XYZ k jejimu vyznamu:",
        pairs: [
          { left: "OK", right: "Prefix (zeme)" },
          { left: "2", right: "Cislice (oblast)" },
          { left: "XYZ", right: "Suffix (unikatni oznaceni)" },
        ],
        explanation:
          "Kazda volaci znacka se sklada z prefixu urcujiciho zemi, cislice a unikatniho suffixu.",
      },
      {
        type: "explain",
        content:
          "Kdyz radioamater vysilam z jine zeme nebo v jinem rezimu, pridava se lomitko. /P = portable (prenosna stanice), /M = mobile (mobilni), /MM = maritime mobile (na lodi), /AM = aeronautical mobile (v letadle). Prefix cizi zeme se pise pred znacku: DL/OK1ABC = cesky amater vysilam z Nemecka.",
        note: "Poradi je: prefix hostitelskeho statu / domaci volaci znacka.",
      },
      {
        type: "select-answer",
        question: "Odkud vysila stanice DL/OK1ABC?",
        choices: [
          { id: "a", text: "Z Nemecka" },
          { id: "b", text: "Z Ceske republiky" },
          { id: "c", text: "Z Rakouska" },
          { id: "d", text: "Z Polska" },
        ],
        correctId: "a",
        explanation:
          "DL pred lomitkem oznacuje zemi, ze ktere stanice vysila. DL = Nemecko. OK1ABC je domaci znacka operatora.",
      },
      {
        type: "fill-blank",
        textBefore: "Oznaceni OK1ABC/P znamena, ze stanice je",
        blank: "prenosna (portable)",
        distractors: [
          "mobilni (mobile)",
          "na lodi (maritime mobile)",
          "v zahranici",
        ],
        textAfter: ".",
        explanation:
          "/P = portable, tj. prenosna stanice. /M = mobilni, /MM = namorni mobilni. Zahranicni provoz se oznacuje prefixem hostitelskeho statu.",
      },
      {
        type: "exam-question",
        questionId: "O-PRF-001",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte vsechna spravna tvrzeni o strukture volaci znacky:",
        pool: [
          {
            text: "Prefix urcuje zemi pusobeni stanice",
            correct: true,
          },
          {
            text: "OK a OL jsou prefixy Ceske republiky",
            correct: true,
          },
          {
            text: "Suffix je vzdy presne tri pismena",
            correct: false,
          },
          {
            text: "/P za znackou znamena portable",
            correct: true,
          },
          {
            text: "Cislice v znacce je soucast prefixu",
            correct: false,
          },
        ],
        explanation:
          "Suffix muze mit jedno az tri pismena. Cislice neni soucast prefixu - odddeluje prefix od suffixu a oznacuje oblast ci kategorii.",
      },
    ],
    relatedQuestionIds: [
      "O-PRF-001",
      "O-PRF-002",
      "O-PRF-003",
      "O-PRF-004",
      "O-PRF-005",
      "O-PRF-006",
      "O-PRF-007",
      "O-PRF-008",
      "O-PRF-009",
      "O-PRF-010",
      "O-PRF-011",
      "O-PRF-012",
      "O-PRF-013",
      "O-PRF-014",
      "O-PRF-015",
      "O-PRF-016",
      "O-PRF-017",
      "O-PRF-018",
      "O-PRF-019",
      "O-PRF-020",
      "O-PRF-021",
      "O-PRF-022",
      "O-PRF-023",
      "O-PRF-024",
      "O-PRF-025",
      "O-PRF-026",
      "O-PRF-027",
      "O-PRF-028",
    ],
    tags: ["volaci-znacka", "prefix", "suffix", "portable", "mobile", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: European prefixes
  // -----------------------------------------------------------------------
  {
    id: "prefixes-02",
    examPartId: "operating",
    sectionId: "prefixes",
    order: 2,
    title: "Evropske prefixy",
    objective:
      "Priradit nejbeznejsi evropske radioamaterskam prefixy ke spravnym zemim.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Kazda evropska zeme ma prideleny blok prefixu od ITU. Pro ceske radioamatery je dulezite znat prefixy sousednich a nejcasteji slysitelnych zemi. Nemecko (DL), Polsko (SP), Slovensko (OM), Rakousko (OE) a Madarsko (HA) jsou nasi nejblizsi sousede na pasmech.",
      },
      {
        type: "match",
        instruction:
          "Priradte prefix ke spravnemu statu (sousedni a stredoevropske zeme):",
        pairs: [
          { left: "DL", right: "Nemecko" },
          { left: "SP", right: "Polsko" },
          { left: "HA", right: "Madarsko" },
          { left: "OE", right: "Rakousko" },
          { left: "OM", right: "Slovensko" },
          { left: "I", right: "Italie" },
        ],
        explanation:
          "DL = Deutschland, SP = Stacja Polska, OM = byvale Ceskoslovensko (OK+OM), OE = Oesterreich.",
      },
      {
        type: "fill-blank",
        textBefore: "Prefix DL oznacuje",
        blank: "Nemecko",
        distractors: ["Dansko", "Nizozemsko", "Lucembursko"],
        textAfter: ".",
        explanation:
          "DL = Nemecko (Deutschland). Dansko ma prefix OZ, Nizozemsko PA, Lucembursko LX.",
      },
      {
        type: "match",
        instruction:
          "Priradte prefix ke statu (zapadni a jizni Evropa):",
        pairs: [
          { left: "F", right: "Francie" },
          { left: "G", right: "Velka Britanie" },
          { left: "EA", right: "Spanelsko" },
          { left: "PA", right: "Nizozemsko" },
          { left: "ON", right: "Belgie" },
          { left: "SM", right: "Svedsko" },
        ],
        explanation:
          "F = France, G = Great Britain, EA = Espana, PA = Pays-Bas (Nizozemsko), ON = Belgie.",
      },
      {
        type: "select-answer",
        question: "Ktera zeme pouziva prefix 9A?",
        choices: [
          { id: "a", text: "Chorvatsko" },
          { id: "b", text: "Srbsko" },
          { id: "c", text: "Slovinsko" },
          { id: "d", text: "Bosna a Hercegovina" },
        ],
        correctId: "a",
        explanation:
          "9A = Chorvatsko. Srbsko pouziva YU, Slovinsko S5, Bosna a Hercegovina E7. Po rozpadu Jugoslavie dostal kazdy stat novy prefix.",
      },
      {
        type: "reveal",
        prompt:
          "Proc ma Nemecko tak mnoho prefixu (DA az DR)?",
        answer:
          "Nemecko je nejvetsi radioamaterskam komunita v Evrope. Jeden prefix by nestacil pro vsechny stanice, proto ITU pridelilo cely blok DA-DR. Nejbeznejsi je DL.",
        explanation:
          "Podobne Velka Britanie ma G, GW (Wales), GM (Skotsko), GI (Severni Irsko) - kazdy region ma vlastni variantu.",
      },
      {
        type: "match",
        instruction:
          "Priradte prefix ke statu (severni a vychodni Evropa):",
        pairs: [
          { left: "LA", right: "Norsko" },
          { left: "OH", right: "Finsko" },
          { left: "UA", right: "Rusko" },
          { left: "LZ", right: "Bulharsko" },
          { left: "YO", right: "Rumunsko" },
          { left: "9A", right: "Chorvatsko" },
        ],
        explanation:
          "LA = Norsko, OH = Finsko, UA = Rusko. LZ, YO a 9A jsou balkanskeho regionu.",
      },
      {
        type: "explain",
        content:
          "Pro cesky provoz jsou nejdulezitejsi prefixy sousednich zemi: OE (Rakousko), DL (Nemecko), SP (Polsko), OM (Slovensko). Na KV pasmech ale bezne uslysite take HB9 (Svycarsko), S5 (Slovinsko), CT (Portugalsko) nebo SV (Recko).",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte vsechny spravne dvojice prefix-zeme:",
        pool: [
          { text: "HB9 = Svycarsko", correct: true },
          { text: "S5 = Slovinsko", correct: true },
          { text: "OZ = Norsko", correct: false },
          { text: "LX = Lucembursko", correct: true },
          { text: "CT = Spanelsko", correct: false },
        ],
        explanation:
          "OZ = Dansko (ne Norsko, to je LA). CT = Portugalsko (ne Spanelsko, to je EA).",
      },
      {
        type: "exam-question",
        questionId: "O-PRF-029",
      },
      {
        type: "fill-blank",
        textBefore: "Prefix 9A oznacuje",
        blank: "Chorvatsko",
        distractors: ["Srbsko", "Slovinsko", "Cerna Hora"],
        textAfter: ".",
        explanation:
          "9A = Chorvatsko. Srbsko = YU, Slovinsko = S5, Cerna Hora = 4O.",
      },
    ],
    relatedQuestionIds: [
      "O-PRF-029",
      "O-PRF-030",
      "O-PRF-031",
      "O-PRF-032",
      "O-PRF-033",
      "O-PRF-034",
      "O-PRF-035",
      "O-PRF-036",
      "O-PRF-037",
      "O-PRF-038",
      "O-PRF-039",
      "O-PRF-040",
      "O-PRF-041",
      "O-PRF-042",
      "O-PRF-043",
      "O-PRF-044",
      "O-PRF-045",
      "O-PRF-046",
      "O-PRF-047",
      "O-PRF-048",
      "O-PRF-049",
      "O-PRF-050",
      "O-PRF-051",
      "O-PRF-052",
      "O-PRF-053",
      "O-PRF-054",
      "O-PRF-055",
      "O-PRF-056",
      "O-PRF-057",
    ],
    tags: ["evropske-prefixy", "prefix", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 3: World prefixes and ITU regions
  // -----------------------------------------------------------------------
  {
    id: "prefixes-03",
    examPartId: "operating",
    sectionId: "prefixes",
    order: 3,
    title: "Svetove prefixy a ITU regiony",
    objective:
      "Identifikovat svetove radioamaterskam prefixy a zaradit zeme do spravnych ITU regionu.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "ITU (Mezinarodni telekomunikacni unie) rozdelila svet do tri regionu pro spravu frekvencniho spektra. Region 1 zahrnuje Evropu a Afriku, Region 2 Ameriku a Region 3 Asii a Pacifik. Ceska republika patri do Regionu 1.",
      },
      {
        type: "match",
        instruction: "Priradte ITU region k jeho uzemnimu pokryti:",
        pairs: [
          { left: "Region 1", right: "Evropa a Afrika" },
          { left: "Region 2", right: "Amerika" },
          { left: "Region 3", right: "Asie a Pacifik" },
        ],
        explanation:
          "Toto rozdeleni ovlivnuje pridelovani frekvenci - nektere kmitoctove plany se mezi regiony lisi.",
      },
      {
        type: "fill-blank",
        textBefore: "Ceska republika patri do ITU",
        blank: "Regionu 1",
        distractors: ["Regionu 2", "Regionu 3", "Regionu 4"],
        textAfter: ".",
        explanation:
          "Ceska republika je v Evrope, ktera patri do Regionu 1 spolu s Afrikou. Region 4 neexistuje.",
      },
      {
        type: "match",
        instruction:
          "Priradte prefix ke statu (Amerika a dalsi):",
        pairs: [
          { left: "W / K", right: "USA" },
          { left: "VE", right: "Kanada" },
          { left: "PY", right: "Brazilie" },
          { left: "JA", right: "Japonsko" },
          { left: "VK", right: "Australie" },
          { left: "ZS", right: "Jizni Afrika" },
        ],
        explanation:
          "W a K jsou nejbeznejsi americke prefixy. VE = Kanada, PY = Brazilie, JA = Japonsko, VK = Australie, ZS = Jizni Afrika.",
      },
      {
        type: "select-answer",
        question: "Ktera zeme pouziva prefix JA?",
        choices: [
          { id: "a", text: "Japonsko" },
          { id: "b", text: "Jamajka" },
          { id: "c", text: "Jordansko" },
          { id: "d", text: "Jizni Korea" },
        ],
        correctId: "a",
        explanation:
          "JA = Japonsko (Japan). Jamajka = 6Y, Jordansko = JY, Jizni Korea = HL.",
      },
      {
        type: "explain",
        content:
          "Prefixy se prideluji podle bloku stanovenych ITU. Prvni pismeno casto napovida region: W, K, N a AA-AL patri USA, V patri mnoha zemi Commonwealthu (VE Kanada, VK Australie, VU Indie). Cisla za prefixem nemaji mezinarodni vyznam - kazda zeme je pouziva jinak.",
      },
      {
        type: "match",
        instruction:
          "Priradte prefix ke statu (Asie, Blizky vychod, Oceanie):",
        pairs: [
          { left: "VU", right: "Indie" },
          { left: "HL", right: "Jizni Korea" },
          { left: "BY", right: "Cina" },
          { left: "4X", right: "Izrael" },
          { left: "A4", right: "Oman" },
          { left: "ZL", right: "Novy Zeland" },
        ],
        explanation:
          "VU = Indie (V-prefixy casto Commonwealth), HL = Jizni Korea, BY = Cina, 4X = Izrael, A4 = Oman, ZL = Novy Zeland.",
      },
      {
        type: "reveal",
        prompt: "Proc ma USA tolik ruznych prefixu (W, K, N, AA-AL)?",
        answer:
          "USA ma nejvetsi radioamaterskou komunitu na svete (pres 750 000 licenci). Jeden prefix by nestacil, proto ITU pridelilo USA rozsahly blok znacek vcetne W, K, N a AA az AL.",
        explanation:
          "Podobne Rusko vyuziva UA-UI, Cina BY, Japonsko JA-JS. Velke zeme potrebuji vice prefixu.",
      },
      {
        type: "exam-question",
        questionId: "O-PRF-058",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte vsechny spravne dvojice prefix-zeme:",
        pool: [
          { text: "W = USA", correct: true },
          { text: "VE = Australie", correct: false },
          { text: "PY = Brazilie", correct: true },
          { text: "ZL = Novy Zeland", correct: true },
          { text: "BY = Japonsko", correct: false },
          { text: "JA = Japonsko", correct: true },
        ],
        explanation:
          "VE = Kanada (ne Australie, ta je VK). BY = Cina (ne Japonsko, to je JA).",
      },
    ],
    relatedQuestionIds: [
      "O-PRF-058",
      "O-PRF-059",
      "O-PRF-060",
      "O-PRF-061",
      "O-PRF-062",
      "O-PRF-063",
      "O-PRF-064",
      "O-PRF-065",
      "O-PRF-066",
      "O-PRF-067",
      "O-PRF-068",
      "O-PRF-069",
      "O-PRF-070",
      "O-PRF-071",
      "O-PRF-072",
      "O-PRF-073",
      "O-PRF-074",
      "O-PRF-075",
      "O-PRF-076",
      "O-PRF-077",
      "O-PRF-078",
      "O-PRF-079",
      "O-PRF-080",
      "O-PRF-081",
      "O-PRF-082",
      "O-PRF-083",
      "O-PRF-084",
      "O-PRF-085",
    ],
    tags: ["svetove-prefixy", "itu-regiony", "prefix", "recall"],
  },
];
