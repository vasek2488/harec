import type { Lesson } from "@/lib/types";

export const operatingPhoneticLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: NATO phonetic alphabet
  // -----------------------------------------------------------------------
  {
    id: "phonetic-01",
    examPartId: "operating",
    sectionId: "phonetic",
    order: 1,
    title: "Mezinárodní hláskování abeceda (NATO)",
    objective:
      "Správně hláskovat písmena a čísla podle mezinárodní hláskování abecedy NATO.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Při rádiovém provozu je správné porozumění klíčové. Šum, rušení a slabý signál mohou zkreslovat písmena. Proto se používá hláskování abeceda NATO, kde každé písmeno má jednoznačné slovo. Například místo 'B' říkáme 'Bravo', aby si ho nikdo nespletl s 'D' nebo 'P'.",
        note: "NATO fonetickou abecedu používají piloti, námořníci i radioamatéři po celém světě.",
      },
      {
        type: "match",
        instruction: "Přiřaďte písmeno ke správnému hláskování slovu (A-F):",
        pairs: [
          { left: "A", right: "Alfa" },
          { left: "B", right: "Bravo" },
          { left: "C", right: "Charlie" },
          { left: "D", right: "Delta" },
          { left: "E", right: "Echo" },
          { left: "F", right: "Foxtrot" },
        ],
        explanation:
          "Alfa se píše bez 'ph' (ne Alpha), aby byla výslovnost jednoznačná ve všech jazycích.",
      },
      {
        type: "fill-blank",
        textBefore: "Písmeno G se v NATO abecedě hláskuje jako",
        blank: "Golf",
        distractors: ["Gustav", "Gamma", "George"],
        textAfter: ".",
        explanation:
          "Golf - neplést s českou abecedou, kde G = Gustav. George se používá v britské civilní abecedě.",
      },
      {
        type: "match",
        instruction: "Přiřaďte písmena G-M ke správným slovům:",
        pairs: [
          { left: "G", right: "Golf" },
          { left: "H", right: "Hotel" },
          { left: "I", right: "India" },
          { left: "J", right: "Juliet" },
          { left: "K", right: "Kilo" },
          { left: "L", right: "Lima" },
          { left: "M", right: "Mike" },
        ],
        explanation:
          "Juliet (ne Julie) a Lima (ne Linda) jsou časté chyby. Zapamatujte si přesná NATO slova.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte správné NATO hláskování pro písmena N, O a P:",
        pool: [
          { text: "N = November", correct: true },
          { text: "O = Oscar", correct: true },
          { text: "P = Papa", correct: true },
          { text: "N = Norbert", correct: false },
          { text: "O = Ota", correct: false },
          { text: "P = Peter", correct: false },
        ],
        explanation:
          "Norbert a Ota jsou z české abecedy, ne NATO. NATO používá November, Oscar, Papa.",
      },
      {
        type: "match",
        instruction: "Přiřaďte písmena N-S ke správným NATO slovům:",
        pairs: [
          { left: "N", right: "November" },
          { left: "O", right: "Oscar" },
          { left: "P", right: "Papa" },
          { left: "Q", right: "Quebec" },
          { left: "R", right: "Romeo" },
          { left: "S", right: "Sierra" },
        ],
        explanation:
          "Quebec se vyslovuje 'ke-BEK'. Sierra má dvě 'r' - vyslovuje se 'si-E-ra'.",
      },
      {
        type: "fill-blank",
        textBefore: "Písmeno W se v NATO abecedě hláskuje jako",
        blank: "Whiskey",
        distractors: ["William", "dvojité V", "Wilson"],
        textAfter: ".",
        explanation:
          "'Dvojité V' je české označení. V NATO abecedě je W vždy Whiskey.",
      },
      {
        type: "match",
        instruction: "Přiřaďte písmena T-Z ke správným NATO slovům:",
        pairs: [
          { left: "T", right: "Tango" },
          { left: "U", right: "Uniform" },
          { left: "V", right: "Victor" },
          { left: "W", right: "Whiskey" },
          { left: "X", right: "X-ray" },
          { left: "Y", right: "Yankee" },
          { left: "Z", right: "Zulu" },
        ],
        explanation:
          "X-ray se píše se spojovníkem. Zulu se vyslovuje 'ZU-lu'.",
      },
      {
        type: "explain",
        content:
          "Při hláskování značek používáme NATO abecedu pro písmena a speciální výslovnost pro číslice: 0 = Zero, 1 = One, 2 = Two, 3 = Tree (ne Three!), 4 = Fower (ne Four!), 5 = Fife (ne Five!), 6 = Six, 7 = Seven, 8 = Eight, 9 = Niner (ne Nine!).",
        note: "Upravená výslovnost číslic brání záměně: Tree/Three, Fower/Four, Fife/Five, Niner/Nine.",
      },
      {
        type: "select-answer",
        question:
          "Jak správně vyhláskujete značku DL3XY v NATO abecedě?",
        choices: [
          {
            id: "a",
            text: "Delta Lima Tree X-ray Yankee",
          },
          {
            id: "b",
            text: "David Lima Three X-ray Yankee",
          },
          {
            id: "c",
            text: "Delta Lima Tri X-ray Ypsilon",
          },
          {
            id: "d",
            text: "Delta Ludwig Tree X-ray Yankee",
          },
        ],
        correctId: "a",
        explanation:
          "D = Delta (ne David), L = Lima (ne Ludwig), 3 = Tree (ne Three/Tri), X = X-ray, Y = Yankee (ne Ypsilon). Používáme výhradně NATO slova a upravenou výslovnost číslic.",
      },
      {
        type: "exam-question",
        questionId: "O-PHO-001",
      },
    ],
    relatedQuestionIds: [
      "O-PHO-001",
      "O-PHO-002",
      "O-PHO-003",
      "O-PHO-004",
      "O-PHO-005",
      "O-PHO-006",
      "O-PHO-007",
      "O-PHO-008",
      "O-PHO-009",
      "O-PHO-010",
      "O-PHO-011",
      "O-PHO-012",
      "O-PHO-013",
      "O-PHO-014",
      "O-PHO-015",
      "O-PHO-016",
      "O-PHO-017",
      "O-PHO-018",
      "O-PHO-019",
      "O-PHO-020",
      "O-PHO-021",
      "O-PHO-022",
      "O-PHO-023",
      "O-PHO-024",
      "O-PHO-025",
      "O-PHO-026",
    ],
    tags: ["nato-abeceda", "hlaskovani", "volaci-znacky", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: Czech phonetic alphabet
  // -----------------------------------------------------------------------
  {
    id: "phonetic-02",
    examPartId: "operating",
    sectionId: "phonetic",
    order: 2,
    title: "Česká hláskování abeceda",
    objective:
      "Správně hláskovat písmena podle české hláskování abecedy a rozlišit ji od NATO abecedy.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Česká hláskování abeceda používá česká křestní jména a slova. Používá se při vnitrostátních spojeních v českém jazyce. Pro mezinárodní provoz se používá NATO abeceda. Česká abeceda má navíc písmeno CH (digraf), které v NATO abecedě neexistuje.",
        note: "Při mezinárodním QSO vždy používejte NATO abecedu, ne českou.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte písmena A-F k českým hláskování slovům:",
        pairs: [
          { left: "A", right: "Adam" },
          { left: "B", right: "Božena" },
          { left: "C", right: "Cyril" },
          { left: "D", right: "David" },
          { left: "E", right: "Emil" },
          { left: "F", right: "František" },
        ],
        explanation:
          "Česká abeceda používá převážně česká křestní jména. Srovnejte: NATO má Alfa, Bravo, Charlie...",
      },
      {
        type: "fill-blank",
        textBefore: "Písmeno K se v české hláskování abecedě hláskuje jako",
        blank: "Karel",
        distractors: ["Kilo", "Kamil", "Klára"],
        textAfter: ".",
        explanation:
          "Karel je správné české hláskování slovo. Kilo je NATO varianta. Kamil ani Klára nejsou standardní.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte písmena G-L (včetně CH) k českým hláskování slovům:",
        pairs: [
          { left: "G", right: "Gustav" },
          { left: "H", right: "Helena" },
          { left: "CH", right: "Chrudim" },
          { left: "I", right: "Ivan" },
          { left: "J", right: "Josef" },
          { left: "K", right: "Karel" },
          { left: "L", right: "Ludvík" },
        ],
        explanation:
          "CH = Chrudim je unikátní pro českou abecedu. V NATO abecedě digraf CH neexistuje.",
      },
      {
        type: "reveal",
        prompt:
          "Proč má česká hláskování abeceda písmeno CH, ale NATO abeceda ne?",
        answer:
          "Čeština má digraf CH jako samostatné písmeno abecedy. V angličtině (a NATO) CH není samostatné písmeno - hláskuje se jako Charlie Hotel.",
        explanation:
          "Chrudim je město ve východních Čechách. CH = Chrudim je jediný digraf v české hláskování abecedě.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte písmena M-R k českým hláskování slovům:",
        pairs: [
          { left: "M", right: "Marie" },
          { left: "N", right: "Norbert" },
          { left: "O", right: "Ota" },
          { left: "P", right: "Petr" },
          { left: "Q", right: "Quido" },
          { left: "R", right: "Rudolf" },
        ],
        explanation:
          "Quido (ne Kvido) - zachovává se písmeno Q. Srovnejte s NATO: Mike, November, Oscar, Papa, Quebec, Romeo.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte správné české hláskování slova:",
        pool: [
          { text: "S = Svatopluk", correct: true },
          { text: "T = Tomáš", correct: true },
          { text: "U = Urban", correct: true },
          { text: "V = Viktor", correct: false },
          { text: "W = Whiskey", correct: false },
        ],
        explanation:
          "V české abecedě je V = Václav (ne Viktor, to je NATO). W = dvojité V (ne Whiskey, to je NATO).",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte písmena S-Z k českým hláskování slovům:",
        pairs: [
          { left: "S", right: "Svatopluk" },
          { left: "T", right: "Tomáš" },
          { left: "U", right: "Urban" },
          { left: "V", right: "Václav" },
          { left: "W", right: "dvojité V" },
          { left: "X", right: "Xaver" },
          { left: "Y", right: "Ypsilon" },
          { left: "Z", right: "Zuzana" },
        ],
        explanation:
          "W = 'dvojité V' je unikátní - používá popis písmene, ne jméno. Ypsilon označuje písmeno Y.",
      },
      {
        type: "select-answer",
        question:
          "Jaký je hlavní rozdíl mezi českou a NATO hláskování abecedou?",
        choices: [
          {
            id: "a",
            text: "Česká používá česká jména a má digraf CH, NATO používá mezinárodně srozumitelná slova",
          },
          {
            id: "b",
            text: "NATO abeceda má více písmen než česká",
          },
          {
            id: "c",
            text: "Česká abeceda se používá jen v armádě",
          },
          {
            id: "d",
            text: "Mezi abecedami není žádný rozdíl",
          },
        ],
        correctId: "a",
        explanation:
          "Česká abeceda používá česká jména (Adam, Božena...) a obsahuje CH = Chrudim. NATO abeceda používá mezinárodně srozumitelná slova (Alfa, Bravo...) a je standardem pro mezinárodní rádiový provoz.",
      },
      {
        type: "exam-question",
        questionId: "O-PHO-027",
      },
    ],
    relatedQuestionIds: [
      "O-PHO-027",
      "O-PHO-028",
      "O-PHO-029",
      "O-PHO-030",
      "O-PHO-031",
      "O-PHO-032",
      "O-PHO-033",
      "O-PHO-034",
      "O-PHO-035",
      "O-PHO-036",
      "O-PHO-037",
      "O-PHO-038",
      "O-PHO-039",
      "O-PHO-040",
      "O-PHO-041",
      "O-PHO-042",
      "O-PHO-043",
      "O-PHO-044",
      "O-PHO-045",
      "O-PHO-046",
      "O-PHO-047",
      "O-PHO-048",
      "O-PHO-049",
      "O-PHO-050",
      "O-PHO-051",
      "O-PHO-052",
    ],
    tags: ["ceska-abeceda", "hlaskovani", "digraf-ch", "recall"],
  },
];
