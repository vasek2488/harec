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
    title: "Struktura volací značky a systém prefixů",
    objective:
      "Rozložit volací značku na prefix, číslo a suffix a vysvětlit význam přídavných označení.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Každá radioamatérská volací značka má tři části: PREFIX určuje zemi (OK = Česko), ČÍSLO určuje oblast nebo kategorii (1 = okres) a SUFFIX je unikátní kombinace písmen přiřazená operátorovi (ABC). Například OK1ABC je český radioamatér.",
        note: "Prefix může být jedno až tři písmena, za nimi následuje jedna číslice a až tři písmena suffixu.",
      },
      {
        type: "fill-blank",
        textBefore: "Ve volací značce OK2XYZ je prefix",
        blank: "OK",
        distractors: ["OK2", "OL", "XYZ"],
        textAfter: ".",
        explanation:
          "Prefix je část před číslicí - označuje zemi. OK2 zahrnuje i číslo, což není prefix samotný.",
      },
      {
        type: "reveal",
        prompt: "Jaký je rozdíl mezi prefixy OK a OL?",
        answer:
          "Oba označují Českou republiku. OK je původní tradiční prefix, OL je dodatečný blok přidělených značek.",
        explanation:
          "ITU přidělilo České republice oba bloky. Stanice OK i OL jsou české. OL se používá i pro speciální a klubové značky.",
      },
      {
        type: "match",
        instruction: "Přiřaďte část volací značky OK2XYZ k jejímu významu:",
        pairs: [
          { left: "OK", right: "Prefix (země)" },
          { left: "2", right: "Číslice (oblast)" },
          { left: "XYZ", right: "Suffix (unikátní označení)" },
        ],
        explanation:
          "Každá volací značka se skládá z prefixu určujícího zemi, číslice a unikátního suffixu.",
      },
      {
        type: "explain",
        content:
          "Když radioamatér vysílá z jiné země nebo v jiném režimu, přidává se lomítko. /P = portable (přenosná stanice), /M = mobile (mobilní), /MM = maritime mobile (na lodi), /AM = aeronautical mobile (v letadle). Prefix cizí země se píše před značku: DL/OK1ABC = český amatér vysílá z Německa.",
        note: "Pořadí je: prefix hostitelského státu / domácí volací značka.",
      },
      {
        type: "select-answer",
        question: "Odkud vysílá stanice DL/OK1ABC?",
        choices: [
          { id: "a", text: "Z Německa" },
          { id: "b", text: "Z České republiky" },
          { id: "c", text: "Z Rakouska" },
          { id: "d", text: "Z Polska" },
        ],
        correctId: "a",
        explanation:
          "DL před lomítkem označuje zemi, ze které stanice vysílá. DL = Německo. OK1ABC je domácí značka operátora.",
      },
      {
        type: "fill-blank",
        textBefore: "Označení OK1ABC/P znamená, že stanice je",
        blank: "přenosná (portable)",
        distractors: [
          "mobilní (mobile)",
          "na lodi (maritime mobile)",
          "v zahraničí",
        ],
        textAfter: ".",
        explanation:
          "/P = portable, tj. přenosná stanice. /M = mobilní, /MM = námořní mobilní. Zahraniční provoz se označuje prefixem hostitelského státu.",
      },
      {
        type: "exam-question",
        questionId: "O-PRF-001",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte všechna správná tvrzení o struktuře volací značky:",
        pool: [
          {
            text: "Prefix určuje zemi působení stanice",
            correct: true,
          },
          {
            text: "OK a OL jsou prefixy České republiky",
            correct: true,
          },
          {
            text: "Suffix je vždy přesně tři písmena",
            correct: false,
          },
          {
            text: "/P za značkou znamená portable",
            correct: true,
          },
          {
            text: "Číslice ve značce je součást prefixu",
            correct: false,
          },
        ],
        explanation:
          "Suffix může mít jedno až tři písmena. Číslice není součást prefixu - odděluje prefix od suffixu a označuje oblast či kategorii.",
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
    title: "Evropské prefixy",
    objective:
      "Přiřadit nejběžnější evropské radioamatérské prefixy ke správným zemím.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Každá evropská země má přidělený blok prefixů od ITU. Pro české radioamatéry je důležité znát prefixy sousedních a nejčastěji slyšitelných zemí. Německo (DL), Polsko (SP), Slovensko (OM), Rakousko (OE) a Maďarsko (HA) jsou naši nejbližší sousedé na pásmech.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte prefix ke správnému státu (sousední a středoevropské země):",
        pairs: [
          { left: "DL", right: "Německo" },
          { left: "SP", right: "Polsko" },
          { left: "HA", right: "Maďarsko" },
          { left: "OE", right: "Rakousko" },
          { left: "OM", right: "Slovensko" },
          { left: "I", right: "Itálie" },
        ],
        explanation:
          "DL = Deutschland, SP = Stacja Polska, OM = bývalé Československo (OK+OM), OE = Oesterreich.",
      },
      {
        type: "fill-blank",
        textBefore: "Prefix DL označuje",
        blank: "Německo",
        distractors: ["Dánsko", "Nizozemsko", "Lucembursko"],
        textAfter: ".",
        explanation:
          "DL = Německo (Deutschland). Dánsko má prefix OZ, Nizozemsko PA, Lucembursko LX.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte prefix ke státu (západní a jižní Evropa):",
        pairs: [
          { left: "F", right: "Francie" },
          { left: "G", right: "Velká Británie" },
          { left: "EA", right: "Španělsko" },
          { left: "PA", right: "Nizozemsko" },
          { left: "ON", right: "Belgie" },
          { left: "SM", right: "Švédsko" },
        ],
        explanation:
          "F = France, G = Great Britain, EA = Espana, PA = Pays-Bas (Nizozemsko), ON = Belgie.",
      },
      {
        type: "select-answer",
        question: "Která země používá prefix 9A?",
        choices: [
          { id: "a", text: "Chorvatsko" },
          { id: "b", text: "Srbsko" },
          { id: "c", text: "Slovinsko" },
          { id: "d", text: "Bosna a Hercegovina" },
        ],
        correctId: "a",
        explanation:
          "9A = Chorvatsko. Srbsko používá YU, Slovinsko S5, Bosna a Hercegovina E7. Po rozpadu Jugoslávie dostal každý stát nový prefix.",
      },
      {
        type: "reveal",
        prompt:
          "Proč má Německo tak mnoho prefixů (DA až DR)?",
        answer:
          "Německo je největší radioamatérská komunita v Evropě. Jeden prefix by nestačil pro všechny stanice, proto ITU přidělilo celý blok DA-DR. Nejběžnější je DL.",
        explanation:
          "Podobně Velká Británie má G, GW (Wales), GM (Skotsko), GI (Severní Irsko) - každý region má vlastní variantu.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte prefix ke státu (severní a východní Evropa):",
        pairs: [
          { left: "LA", right: "Norsko" },
          { left: "OH", right: "Finsko" },
          { left: "UA", right: "Rusko" },
          { left: "LZ", right: "Bulharsko" },
          { left: "YO", right: "Rumunsko" },
          { left: "9A", right: "Chorvatsko" },
        ],
        explanation:
          "LA = Norsko, OH = Finsko, UA = Rusko. LZ, YO a 9A jsou balkánského regionu.",
      },
      {
        type: "explain",
        content:
          "Pro český provoz jsou nejdůležitější prefixy sousedních zemí: OE (Rakousko), DL (Německo), SP (Polsko), OM (Slovensko). Na KV pásmech ale běžně uslyšíte také HB9 (Švýcarsko), S5 (Slovinsko), CT (Portugalsko) nebo SV (Řecko).",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte všechny správné dvojice prefix-země:",
        pool: [
          { text: "HB9 = Švýcarsko", correct: true },
          { text: "S5 = Slovinsko", correct: true },
          { text: "OZ = Norsko", correct: false },
          { text: "LX = Lucembursko", correct: true },
          { text: "CT = Španělsko", correct: false },
        ],
        explanation:
          "OZ = Dánsko (ne Norsko, to je LA). CT = Portugalsko (ne Španělsko, to je EA).",
      },
      {
        type: "exam-question",
        questionId: "O-PRF-029",
      },
      {
        type: "fill-blank",
        textBefore: "Prefix 9A označuje",
        blank: "Chorvatsko",
        distractors: ["Srbsko", "Slovinsko", "Černá Hora"],
        textAfter: ".",
        explanation:
          "9A = Chorvatsko. Srbsko = YU, Slovinsko = S5, Černá Hora = 4O.",
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
    title: "Světové prefixy a ITU regiony",
    objective:
      "Identifikovat světové radioamatérské prefixy a zařadit země do správných ITU regionů.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "ITU (Mezinárodní telekomunikační unie) rozdělila svět do tří regionů pro správu frekvenčního spektra. Region 1 zahrnuje Evropu a Afriku, Region 2 Ameriku a Region 3 Asii a Pacifik. Česká republika patří do Regionu 1.",
      },
      {
        type: "match",
        instruction: "Přiřaďte ITU region k jeho územnímu pokrytí:",
        pairs: [
          { left: "Region 1", right: "Evropa a Afrika" },
          { left: "Region 2", right: "Amerika" },
          { left: "Region 3", right: "Asie a Pacifik" },
        ],
        explanation:
          "Toto rozdělení ovlivňuje přidělování frekvencí - některé kmitočtové plány se mezi regiony liší.",
      },
      {
        type: "fill-blank",
        textBefore: "Česká republika patří do ITU",
        blank: "Regionu 1",
        distractors: ["Regionu 2", "Regionu 3", "Regionu 4"],
        textAfter: ".",
        explanation:
          "Česká republika je v Evropě, která patří do Regionu 1 spolu s Afrikou. Region 4 neexistuje.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte prefix ke státu (Amerika a další):",
        pairs: [
          { left: "W / K", right: "USA" },
          { left: "VE", right: "Kanada" },
          { left: "PY", right: "Brazílie" },
          { left: "JA", right: "Japonsko" },
          { left: "VK", right: "Austrálie" },
          { left: "ZS", right: "Jižní Afrika" },
        ],
        explanation:
          "W a K jsou nejběžnější americké prefixy. VE = Kanada, PY = Brazílie, JA = Japonsko, VK = Austrálie, ZS = Jižní Afrika.",
      },
      {
        type: "select-answer",
        question: "Která země používá prefix JA?",
        choices: [
          { id: "a", text: "Japonsko" },
          { id: "b", text: "Jamajka" },
          { id: "c", text: "Jordánsko" },
          { id: "d", text: "Jižní Korea" },
        ],
        correctId: "a",
        explanation:
          "JA = Japonsko (Japan). Jamajka = 6Y, Jordánsko = JY, Jižní Korea = HL.",
      },
      {
        type: "explain",
        content:
          "Prefixy se přidělují podle bloků stanovených ITU. První písmeno často napovídá region: W, K, N a AA-AL patří USA, V patří mnoha zemím Commonwealthu (VE Kanada, VK Austrálie, VU Indie). Čísla za prefixem nemají mezinárodní význam - každá země je používá jinak.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte prefix ke státu (Asie, Blízký východ, Oceánie):",
        pairs: [
          { left: "VU", right: "Indie" },
          { left: "HL", right: "Jižní Korea" },
          { left: "BY", right: "Čína" },
          { left: "4X", right: "Izrael" },
          { left: "A4", right: "Omán" },
          { left: "ZL", right: "Nový Zéland" },
        ],
        explanation:
          "VU = Indie (V-prefixy často Commonwealth), HL = Jižní Korea, BY = Čína, 4X = Izrael, A4 = Omán, ZL = Nový Zéland.",
      },
      {
        type: "reveal",
        prompt: "Proč má USA tolik různých prefixů (W, K, N, AA-AL)?",
        answer:
          "USA má největší radioamatérskou komunitu na světě (přes 750 000 licencí). Jeden prefix by nestačil, proto ITU přidělilo USA rozsáhlý blok značek včetně W, K, N a AA až AL.",
        explanation:
          "Podobně Rusko využívá UA-UI, Čína BY, Japonsko JA-JS. Velké země potřebují více prefixů.",
      },
      {
        type: "exam-question",
        questionId: "O-PRF-058",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte všechny správné dvojice prefix-země:",
        pool: [
          { text: "W = USA", correct: true },
          { text: "VE = Austrálie", correct: false },
          { text: "PY = Brazílie", correct: true },
          { text: "ZL = Nový Zéland", correct: true },
          { text: "BY = Japonsko", correct: false },
          { text: "JA = Japonsko", correct: true },
        ],
        explanation:
          "VE = Kanada (ne Austrálie, ta je VK). BY = Čína (ne Japonsko, to je JA).",
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
