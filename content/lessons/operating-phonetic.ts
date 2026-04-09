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
    title: "Mezinarodni hlaskovaci abeceda (NATO)",
    objective:
      "Spravne hlaskovat pismena a cisla podle mezinarodni hlaskovaci abecedy NATO.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Pri radiovem provozu je spravne porozumeni klicove. Suma, ruseni a slaby signal mohou zkreslovat pismena. Proto se pouziva hlaskovaci abeceda NATO, kde kazde pismeno ma jednoznacne slovo. Napriklad misto 'B' rikame 'Bravo', aby si ho nikdo nespletl s 'D' nebo 'P'.",
        note: "NATO fonetickou abecedu pouzivaji piloti, namornici i radioamateri po celem svete.",
      },
      {
        type: "match",
        instruction: "Priradte pismeno ke spravnemu hlaskovaci slovu (A-F):",
        pairs: [
          { left: "A", right: "Alfa" },
          { left: "B", right: "Bravo" },
          { left: "C", right: "Charlie" },
          { left: "D", right: "Delta" },
          { left: "E", right: "Echo" },
          { left: "F", right: "Foxtrot" },
        ],
        explanation:
          "Alfa se pise bez 'ph' (ne Alpha), aby byla vyslovnost jednoznacna ve vsech jazycich.",
      },
      {
        type: "fill-blank",
        textBefore: "Pismeno G se v NATO abecede hlaskuje jako",
        blank: "Golf",
        distractors: ["Gustav", "Gamma", "George"],
        textAfter: ".",
        explanation:
          "Golf - neplest s ceskou abecedou, kde G = Gustav. George se pouziva v britske civilni abecede.",
      },
      {
        type: "match",
        instruction: "Priradte pismena G-M ke spravnym slovum:",
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
          "Juliet (ne Julie) a Lima (ne Linda) jsou caste chyby. Zapamatujte si presna NATO slova.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte spravne NATO hlaskovani pro pismena N, O a P:",
        pool: [
          { text: "N = November", correct: true },
          { text: "O = Oscar", correct: true },
          { text: "P = Papa", correct: true },
          { text: "N = Norbert", correct: false },
          { text: "O = Ota", correct: false },
          { text: "P = Peter", correct: false },
        ],
        explanation:
          "Norbert a Ota jsou z ceske abecedy, ne NATO. NATO pouziva November, Oscar, Papa.",
      },
      {
        type: "match",
        instruction: "Priradte pismena N-S ke spravnym NATO slovum:",
        pairs: [
          { left: "N", right: "November" },
          { left: "O", right: "Oscar" },
          { left: "P", right: "Papa" },
          { left: "Q", right: "Quebec" },
          { left: "R", right: "Romeo" },
          { left: "S", right: "Sierra" },
        ],
        explanation:
          "Quebec se vyslovuje 'ke-BEK'. Sierra ma dve 'r' - vyslovuje se 'si-E-ra'.",
      },
      {
        type: "fill-blank",
        textBefore: "Pismeno W se v NATO abecede hlaskuje jako",
        blank: "Whiskey",
        distractors: ["William", "dvojite V", "Wilson"],
        textAfter: ".",
        explanation:
          "'Dvojite V' je ceske oznaceni. V NATO abecede je W vzdy Whiskey.",
      },
      {
        type: "match",
        instruction: "Priradte pismena T-Z ke spravnym NATO slovum:",
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
          "X-ray se pise se spojovnikem. Zulu se vyslovuje 'ZU-lu'.",
      },
      {
        type: "explain",
        content:
          "Pri hlaskovani znacek pouzivame NATO abecedu pro pismena a specialni vyslovnost pro cislice: 0 = Zero, 1 = One, 2 = Two, 3 = Tree (ne Three!), 4 = Fower (ne Four!), 5 = Fife (ne Five!), 6 = Six, 7 = Seven, 8 = Eight, 9 = Niner (ne Nine!).",
        note: "Upravena vyslovnost cislic brani zamene: Tree/Three, Fower/Four, Fife/Five, Niner/Nine.",
      },
      {
        type: "select-answer",
        question:
          "Jak spravne vyhlaskujete znacku DL3XY v NATO abecede?",
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
          "D = Delta (ne David), L = Lima (ne Ludwig), 3 = Tree (ne Three/Tri), X = X-ray, Y = Yankee (ne Ypsilon). Pouzivame vyhradne NATO slova a upravenou vyslovnost cislic.",
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
    title: "Ceska hlaskovaci abeceda",
    objective:
      "Spravne hlaskovat pismena podle ceske hlaskovaci abecedy a rozlisit ji od NATO abecedy.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Ceska hlaskovaci abeceda pouziva ceska krestni jmena a slova. Pouziva se pri vnitrostatnich spojenich v ceskem jazyce. Pro mezinarodni provoz se pouziva NATO abeceda. Ceska abeceda ma navic pismeno CH (digraf), ktere v NATO abecede neexistuje.",
        note: "Pri mezinarodnim QSO vzdy pouzivejte NATO abecedu, ne ceskou.",
      },
      {
        type: "match",
        instruction:
          "Priradte pismena A-F k ceskym hlaskovacim slovum:",
        pairs: [
          { left: "A", right: "Adam" },
          { left: "B", right: "Bozena" },
          { left: "C", right: "Cyril" },
          { left: "D", right: "David" },
          { left: "E", right: "Emil" },
          { left: "F", right: "Frantisek" },
        ],
        explanation:
          "Ceska abeceda pouziva prevazne ceska krestni jmena. Srovnejte: NATO ma Alfa, Bravo, Charlie...",
      },
      {
        type: "fill-blank",
        textBefore: "Pismeno K se v ceske hlaskovaci abecede hlaskuje jako",
        blank: "Karel",
        distractors: ["Kilo", "Kamil", "Klara"],
        textAfter: ".",
        explanation:
          "Karel je spravne ceske hlaskovaci slovo. Kilo je NATO varianta. Kamil ani Klara nejsou standardni.",
      },
      {
        type: "match",
        instruction:
          "Priradte pismena G-L (vcetne CH) k ceskym hlaskovacim slovum:",
        pairs: [
          { left: "G", right: "Gustav" },
          { left: "H", right: "Helena" },
          { left: "CH", right: "Chrudim" },
          { left: "I", right: "Ivan" },
          { left: "J", right: "Josef" },
          { left: "K", right: "Karel" },
          { left: "L", right: "Ludvik" },
        ],
        explanation:
          "CH = Chrudim je unikatni pro ceskou abecedu. V NATO abecede digraf CH neexistuje.",
      },
      {
        type: "reveal",
        prompt:
          "Proc ma ceska hlaskovaci abeceda pismeno CH, ale NATO abeceda ne?",
        answer:
          "Cestina ma digraf CH jako samostatne pismeno abecedy. V anglictine (a NATO) CH neni samostatne pismeno - hlaskuje se jako Charlie Hotel.",
        explanation:
          "Chrudim je mesto ve vychodnich Cechach. CH = Chrudim je jediny digraf v ceske hlaskovaci abecede.",
      },
      {
        type: "match",
        instruction:
          "Priradte pismena M-R k ceskym hlaskovacim slovum:",
        pairs: [
          { left: "M", right: "Marie" },
          { left: "N", right: "Norbert" },
          { left: "O", right: "Ota" },
          { left: "P", right: "Petr" },
          { left: "Q", right: "Quido" },
          { left: "R", right: "Rudolf" },
        ],
        explanation:
          "Quido (ne Kvido) - zachovava se pismeno Q. Srovnejte s NATO: Mike, November, Oscar, Papa, Quebec, Romeo.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte spravne ceske hlaskovaci slova:",
        pool: [
          { text: "S = Svatopluk", correct: true },
          { text: "T = Tomas", correct: true },
          { text: "U = Urban", correct: true },
          { text: "V = Viktor", correct: false },
          { text: "W = Whiskey", correct: false },
        ],
        explanation:
          "V ceske abecede je V = Vaclav (ne Viktor, to je NATO). W = dvojite V (ne Whiskey, to je NATO).",
      },
      {
        type: "match",
        instruction:
          "Priradte pismena S-Z k ceskym hlaskovacim slovum:",
        pairs: [
          { left: "S", right: "Svatopluk" },
          { left: "T", right: "Tomas" },
          { left: "U", right: "Urban" },
          { left: "V", right: "Vaclav" },
          { left: "W", right: "dvojite V" },
          { left: "X", right: "Xaver" },
          { left: "Y", right: "Ypsilon" },
          { left: "Z", right: "Zuzana" },
        ],
        explanation:
          "W = 'dvojite V' je unikatni - pouziva popis pismene, ne jmeno. Ypsilon oznacuje pismeno Y.",
      },
      {
        type: "select-answer",
        question:
          "Jaky je hlavni rozdil mezi ceskou a NATO hlaskovaci abecedou?",
        choices: [
          {
            id: "a",
            text: "Ceska pouziva ceska jmena a ma digraf CH, NATO pouziva mezinarodne srozumitelna slova",
          },
          {
            id: "b",
            text: "NATO abeceda ma vice pismen nez ceska",
          },
          {
            id: "c",
            text: "Ceska abeceda se pouziva jen v armade",
          },
          {
            id: "d",
            text: "Mezi abecedami neni zadny rozdil",
          },
        ],
        correctId: "a",
        explanation:
          "Ceska abeceda pouziva ceska jmena (Adam, Bozena...) a obsahuje CH = Chrudim. NATO abeceda pouziva mezinarodne srozumitelna slova (Alfa, Bravo...) a je standardem pro mezinarodni radiovy provoz.",
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
