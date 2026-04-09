import type { Question } from "@/lib/types";

export const operatingPhoneticQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // NATO phonetic alphabet (phonetic-01): O-PHO-001 to O-PHO-026
  // -----------------------------------------------------------------------
  {
    id: "O-PHO-001",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno A?",
    choices: [
      { id: "a", text: "Alfa" },
      { id: "b", text: "Adam" },
      { id: "c", text: "Alpha" },
      { id: "d", text: "Anton" },
    ],
    correctChoiceId: "a",
    explanation:
      "V NATO abecede je A = Alfa (psano bez 'ph'). Adam je ceska hlaskovaci abeceda. Alpha je chybny prepis - spravne je Alfa. Viz NATO foneticky abeceda.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-002",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno B?",
    choices: [
      { id: "a", text: "Bravo" },
      { id: "b", text: "Bozena" },
      { id: "c", text: "Baker" },
      { id: "d", text: "Beta" },
    ],
    correctChoiceId: "a",
    explanation:
      "B = Bravo. Bozena je ceska abeceda. Baker se pouzival ve starsich vojenskich systémech. Beta je recke pismeno.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-003",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno C?",
    choices: [
      { id: "a", text: "Charlie" },
      { id: "b", text: "Cyril" },
      { id: "c", text: "Cecil" },
      { id: "d", text: "Coca" },
    ],
    correctChoiceId: "a",
    explanation:
      "C = Charlie. Cyril je ceska abeceda. Cecil a Coca nejsou soucasti zadne standardni hlaskovaci abecedy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-004",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno D?",
    choices: [
      { id: "a", text: "Delta" },
      { id: "b", text: "David" },
      { id: "c", text: "Dog" },
      { id: "d", text: "Donna" },
    ],
    correctChoiceId: "a",
    explanation:
      "D = Delta. David je ceska abeceda. Dog se pouzival ve starsich systémech. Viz NATO abeceda.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-005",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno E?",
    choices: [
      { id: "a", text: "Echo" },
      { id: "b", text: "Emil" },
      { id: "c", text: "Edward" },
      { id: "d", text: "Easy" },
    ],
    correctChoiceId: "a",
    explanation:
      "E = Echo. Emil je ceska abeceda. Edward a Easy se pouzivaly ve starsich vojenskich systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-006",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno F?",
    choices: [
      { id: "a", text: "Foxtrot" },
      { id: "b", text: "Frantisek" },
      { id: "c", text: "Fox" },
      { id: "d", text: "Florida" },
    ],
    correctChoiceId: "a",
    explanation:
      "F = Foxtrot. Frantisek je ceska abeceda. Fox je neuplna podoba - spravne je Foxtrot.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-007",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno G?",
    choices: [
      { id: "a", text: "Golf" },
      { id: "b", text: "Gustav" },
      { id: "c", text: "George" },
      { id: "d", text: "Gamma" },
    ],
    correctChoiceId: "a",
    explanation:
      "G = Golf. Gustav je ceska abeceda. George se pouziva v britske civilni abecede. Gamma je recke pismeno.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-008",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno H?",
    choices: [
      { id: "a", text: "Hotel" },
      { id: "b", text: "Helena" },
      { id: "c", text: "Henry" },
      { id: "d", text: "Havana" },
    ],
    correctChoiceId: "a",
    explanation:
      "H = Hotel. Helena je ceska abeceda. Henry se pouzival ve starsich systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-009",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno I?",
    choices: [
      { id: "a", text: "India" },
      { id: "b", text: "Ivan" },
      { id: "c", text: "Italia" },
      { id: "d", text: "Ida" },
    ],
    correctChoiceId: "a",
    explanation:
      "I = India. Ivan je ceska abeceda. Italia a Ida nejsou soucasti NATO abecedy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-010",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno J?",
    choices: [
      { id: "a", text: "Juliet" },
      { id: "b", text: "Josef" },
      { id: "c", text: "Julie" },
      { id: "d", text: "Jack" },
    ],
    correctChoiceId: "a",
    explanation:
      "J = Juliet (ne Julie!). Josef je ceska abeceda. Julie je casta chyba - spravna NATO podoba je Juliet.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-011",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno K?",
    choices: [
      { id: "a", text: "Kilo" },
      { id: "b", text: "Karel" },
      { id: "c", text: "King" },
      { id: "d", text: "Kenya" },
    ],
    correctChoiceId: "a",
    explanation:
      "K = Kilo. Karel je ceska abeceda. King se pouzival ve starsich systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-012",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno L?",
    choices: [
      { id: "a", text: "Lima" },
      { id: "b", text: "Ludvik" },
      { id: "c", text: "London" },
      { id: "d", text: "Linda" },
    ],
    correctChoiceId: "a",
    explanation:
      "L = Lima (hlavni mesto Peru, vyslovuje se 'LI-ma'). Ludvik je ceska abeceda. London a Linda nejsou NATO.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-013",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno M?",
    choices: [
      { id: "a", text: "Mike" },
      { id: "b", text: "Marie" },
      { id: "c", text: "Metro" },
      { id: "d", text: "Mexico" },
    ],
    correctChoiceId: "a",
    explanation:
      "M = Mike. Marie je ceska abeceda. Metro a Mexico nejsou soucasti NATO abecedy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-014",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno N?",
    choices: [
      { id: "a", text: "November" },
      { id: "b", text: "Norbert" },
      { id: "c", text: "Nancy" },
      { id: "d", text: "Nectar" },
    ],
    correctChoiceId: "a",
    explanation:
      "N = November. Norbert je ceska abeceda. Nancy se pouzivala ve starsich systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-015",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno O?",
    choices: [
      { id: "a", text: "Oscar" },
      { id: "b", text: "Ota" },
      { id: "c", text: "Oliver" },
      { id: "d", text: "Omega" },
    ],
    correctChoiceId: "a",
    explanation:
      "O = Oscar. Ota je ceska abeceda. Oliver se pouziva v britske civilni abecede. Omega je recke pismeno.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-016",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno P?",
    choices: [
      { id: "a", text: "Papa" },
      { id: "b", text: "Petr" },
      { id: "c", text: "Peter" },
      { id: "d", text: "Paris" },
    ],
    correctChoiceId: "a",
    explanation:
      "P = Papa. Petr je ceska abeceda. Peter se pouzival ve starsich systémech. Viz NATO abeceda.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-017",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno Q?",
    choices: [
      { id: "a", text: "Quebec" },
      { id: "b", text: "Quido" },
      { id: "c", text: "Queen" },
      { id: "d", text: "Quota" },
    ],
    correctChoiceId: "a",
    explanation:
      "Q = Quebec (vyslovuje se 'ke-BEK'). Quido je ceska abeceda. Queen se pouzivala ve starsich systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-018",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno R?",
    choices: [
      { id: "a", text: "Romeo" },
      { id: "b", text: "Rudolf" },
      { id: "c", text: "Roger" },
      { id: "d", text: "Robert" },
    ],
    correctChoiceId: "a",
    explanation:
      "R = Romeo. Rudolf je ceska abeceda. Roger znamena 'rozumel jsem', neni to hlaskovaci slovo pro R v NATO.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-019",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno S?",
    choices: [
      { id: "a", text: "Sierra" },
      { id: "b", text: "Svatopluk" },
      { id: "c", text: "Sugar" },
      { id: "d", text: "Samuel" },
    ],
    correctChoiceId: "a",
    explanation:
      "S = Sierra (vyslovuje se 'si-E-ra'). Svatopluk je ceska abeceda. Sugar se pouzival ve starsich systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-020",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno T?",
    choices: [
      { id: "a", text: "Tango" },
      { id: "b", text: "Tomas" },
      { id: "c", text: "Tiger" },
      { id: "d", text: "Texas" },
    ],
    correctChoiceId: "a",
    explanation:
      "T = Tango. Tomas je ceska abeceda. Tiger a Texas nejsou soucasti NATO abecedy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-021",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno W?",
    choices: [
      { id: "a", text: "Whiskey" },
      { id: "b", text: "dvojite V" },
      { id: "c", text: "William" },
      { id: "d", text: "Washington" },
    ],
    correctChoiceId: "a",
    explanation:
      "W = Whiskey. 'Dvojite V' je ceske oznaceni pismene W. William se pouzival ve starsich systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-022",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno X?",
    choices: [
      { id: "a", text: "X-ray" },
      { id: "b", text: "Xaver" },
      { id: "c", text: "Xena" },
      { id: "d", text: "Xenon" },
    ],
    correctChoiceId: "a",
    explanation:
      "X = X-ray (se spojovnikem). Xaver je ceska abeceda. Viz NATO abeceda.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-023",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hlaskovaci abecede hlaskuje pismeno Z?",
    choices: [
      { id: "a", text: "Zulu" },
      { id: "b", text: "Zuzana" },
      { id: "c", text: "Zebra" },
      { id: "d", text: "Zero" },
    ],
    correctChoiceId: "a",
    explanation:
      "Z = Zulu. Zuzana je ceska abeceda. Zebra se pouzivala ve starsich systémech. Zero je NATO vyslovnost cislice 0.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-024",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak spravne vyhlaskujete volaci znacku OK1ABC v NATO abecede?",
    choices: [
      { id: "a", text: "Oscar Kilo One Alfa Bravo Charlie" },
      { id: "b", text: "Ota Karel Jedna Adam Bozena Cyril" },
      { id: "c", text: "Oscar Kilo One Alpha Baker Charlie" },
      { id: "d", text: "Oscar Kilo Una Alfa Bravo Charlie" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pouzivame NATO slova: O=Oscar, K=Kilo, 1=One, A=Alfa, B=Bravo, C=Charlie. Varianta b) je ceska abeceda. Alpha a Baker nejsou spravne NATO vyrazy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "volaci-znacky", "apply"],
  },
  {
    id: "O-PHO-025",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v NATO abecede vyslovuje cislice 9?",
    choices: [
      { id: "a", text: "Niner" },
      { id: "b", text: "Nine" },
      { id: "c", text: "Nein" },
      { id: "d", text: "Nona" },
    ],
    correctChoiceId: "a",
    explanation:
      "Cislice 9 se vyslovuje 'Niner' (ne Nine), aby se zamezilo zamene s nemeckym 'Nein' (ne). Viz pravidla vyslovnosti cislic v NATO.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "cislice", "recall"],
  },
  {
    id: "O-PHO-026",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Ktera cislice se v NATO vyslovnosti rika 'Tree'?",
    choices: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "8" },
      { id: "d", text: "0" },
    ],
    correctChoiceId: "a",
    explanation:
      "Cislice 3 se vyslovuje 'Tree' misto 'Three', aby se zamezilo zamene zpusobene siblanty (sykavkami). Dalsi upravene vyslovnosti: 4=Fower, 5=Fife, 9=Niner.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "cislice", "recall"],
  },

  // -----------------------------------------------------------------------
  // Czech phonetic alphabet (phonetic-02): O-PHO-027 to O-PHO-052
  // -----------------------------------------------------------------------
  {
    id: "O-PHO-027",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno A?",
    choices: [
      { id: "a", text: "Adam" },
      { id: "b", text: "Alfa" },
      { id: "c", text: "Antonin" },
      { id: "d", text: "Alena" },
    ],
    correctChoiceId: "a",
    explanation:
      "V ceske abecede je A = Adam. Alfa je NATO abeceda. Antonin a Alena nejsou standardni hlaskovaci slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-028",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno B?",
    choices: [
      { id: "a", text: "Bozena" },
      { id: "b", text: "Bravo" },
      { id: "c", text: "Boris" },
      { id: "d", text: "Bohumil" },
    ],
    correctChoiceId: "a",
    explanation:
      "B = Bozena v ceske abecede. Bravo je NATO. Boris a Bohumil nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-029",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno C?",
    choices: [
      { id: "a", text: "Cyril" },
      { id: "b", text: "Charlie" },
      { id: "c", text: "Cestmir" },
      { id: "d", text: "Cecilie" },
    ],
    correctChoiceId: "a",
    explanation:
      "C = Cyril v ceske abecede. Charlie je NATO. Cestmir a Cecilie nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-030",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno D?",
    choices: [
      { id: "a", text: "David" },
      { id: "b", text: "Delta" },
      { id: "c", text: "Daniel" },
      { id: "d", text: "Dagmar" },
    ],
    correctChoiceId: "a",
    explanation:
      "D = David v ceske abecede. Delta je NATO. Daniel a Dagmar nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-031",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno E?",
    choices: [
      { id: "a", text: "Emil" },
      { id: "b", text: "Echo" },
      { id: "c", text: "Eva" },
      { id: "d", text: "Eduard" },
    ],
    correctChoiceId: "a",
    explanation:
      "E = Emil v ceske abecede. Echo je NATO. Eva a Eduard nejsou standardni hlaskovaci slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-032",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno F?",
    choices: [
      { id: "a", text: "Frantisek" },
      { id: "b", text: "Foxtrot" },
      { id: "c", text: "Filip" },
      { id: "d", text: "Ferdinand" },
    ],
    correctChoiceId: "a",
    explanation:
      "F = Frantisek v ceske abecede. Foxtrot je NATO. Filip a Ferdinand nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-033",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje digraf CH?",
    choices: [
      { id: "a", text: "Chrudim" },
      { id: "b", text: "Charlie Hotel" },
      { id: "c", text: "Cheb" },
      { id: "d", text: "Chomutov" },
    ],
    correctChoiceId: "a",
    explanation:
      "CH = Chrudim. V ceske abecede je CH samostatne pismeno. V NATO abecede digraf CH neexistuje, hlaskuje se jako Charlie Hotel. Cheb a Chomutov nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "digraf-ch", "recall"],
  },
  {
    id: "O-PHO-034",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno G?",
    choices: [
      { id: "a", text: "Gustav" },
      { id: "b", text: "Golf" },
      { id: "c", text: "Gabriel" },
      { id: "d", text: "Gusta" },
    ],
    correctChoiceId: "a",
    explanation:
      "G = Gustav v ceske abecede. Golf je NATO. Gabriel a Gusta nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-035",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno H?",
    choices: [
      { id: "a", text: "Helena" },
      { id: "b", text: "Hotel" },
      { id: "c", text: "Hana" },
      { id: "d", text: "Hubert" },
    ],
    correctChoiceId: "a",
    explanation:
      "H = Helena v ceske abecede. Hotel je NATO. Hana a Hubert nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-036",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno K?",
    choices: [
      { id: "a", text: "Karel" },
      { id: "b", text: "Kilo" },
      { id: "c", text: "Kamil" },
      { id: "d", text: "Klara" },
    ],
    correctChoiceId: "a",
    explanation:
      "K = Karel v ceske abecede. Kilo je NATO. Kamil a Klara nejsou standardni hlaskovaci slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-037",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno M?",
    choices: [
      { id: "a", text: "Marie" },
      { id: "b", text: "Mike" },
      { id: "c", text: "Milan" },
      { id: "d", text: "Marek" },
    ],
    correctChoiceId: "a",
    explanation:
      "M = Marie v ceske abecede. Mike je NATO. Milan a Marek nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-038",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno N?",
    choices: [
      { id: "a", text: "Norbert" },
      { id: "b", text: "November" },
      { id: "c", text: "Nikola" },
      { id: "d", text: "Natalie" },
    ],
    correctChoiceId: "a",
    explanation:
      "N = Norbert v ceske abecede. November je NATO. Nikola a Natalie nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-039",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno P?",
    choices: [
      { id: "a", text: "Petr" },
      { id: "b", text: "Papa" },
      { id: "c", text: "Pavel" },
      { id: "d", text: "Prokop" },
    ],
    correctChoiceId: "a",
    explanation:
      "P = Petr v ceske abecede. Papa je NATO. Pavel a Prokop nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-040",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno R?",
    choices: [
      { id: "a", text: "Rudolf" },
      { id: "b", text: "Romeo" },
      { id: "c", text: "Richard" },
      { id: "d", text: "Robert" },
    ],
    correctChoiceId: "a",
    explanation:
      "R = Rudolf v ceske abecede. Romeo je NATO. Richard a Robert nejsou standardni ceska hlaskovaci slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-041",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno S?",
    choices: [
      { id: "a", text: "Svatopluk" },
      { id: "b", text: "Sierra" },
      { id: "c", text: "Stanislav" },
      { id: "d", text: "Simona" },
    ],
    correctChoiceId: "a",
    explanation:
      "S = Svatopluk v ceske abecede. Sierra je NATO. Stanislav a Simona nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-042",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno T?",
    choices: [
      { id: "a", text: "Tomas" },
      { id: "b", text: "Tango" },
      { id: "c", text: "Teodor" },
      { id: "d", text: "Tadeáš" },
    ],
    correctChoiceId: "a",
    explanation:
      "T = Tomas v ceske abecede. Tango je NATO. Teodor a Tadeas nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-043",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno V?",
    choices: [
      { id: "a", text: "Vaclav" },
      { id: "b", text: "Victor" },
      { id: "c", text: "Viktor" },
      { id: "d", text: "Vera" },
    ],
    correctChoiceId: "a",
    explanation:
      "V = Vaclav v ceske abecede. Victor je NATO. Viktor je casta zamena s NATO abecedou. Vera neni standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-044",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno W?",
    choices: [
      { id: "a", text: "dvojite V" },
      { id: "b", text: "Whiskey" },
      { id: "c", text: "Vaclav" },
      { id: "d", text: "Wilhelm" },
    ],
    correctChoiceId: "a",
    explanation:
      "W = 'dvojite V' v ceske abecede. Whiskey je NATO. Toto je jedine hlaskovaci slovo v ceske abecede, ktere neni krestni jmeno.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-045",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno Y?",
    choices: [
      { id: "a", text: "Ypsilon" },
      { id: "b", text: "Yankee" },
      { id: "c", text: "Yarka" },
      { id: "d", text: "York" },
    ],
    correctChoiceId: "a",
    explanation:
      "Y = Ypsilon v ceske abecede. Yankee je NATO. Ypsilon je nazev pismene Y, ne krestni jmeno.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-046",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno Z?",
    choices: [
      { id: "a", text: "Zuzana" },
      { id: "b", text: "Zulu" },
      { id: "c", text: "Zdenek" },
      { id: "d", text: "Zbynek" },
    ],
    correctChoiceId: "a",
    explanation:
      "Z = Zuzana v ceske abecede. Zulu je NATO. Zdenek a Zbynek nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-047",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno I?",
    choices: [
      { id: "a", text: "Ivan" },
      { id: "b", text: "India" },
      { id: "c", text: "Igor" },
      { id: "d", text: "Irena" },
    ],
    correctChoiceId: "a",
    explanation:
      "I = Ivan v ceske abecede. India je NATO. Igor a Irena nejsou standardni ceska hlaskovaci slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-048",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno J?",
    choices: [
      { id: "a", text: "Josef" },
      { id: "b", text: "Juliet" },
      { id: "c", text: "Jiri" },
      { id: "d", text: "Jana" },
    ],
    correctChoiceId: "a",
    explanation:
      "J = Josef v ceske abecede. Juliet je NATO. Jiri a Jana nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-049",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno O?",
    choices: [
      { id: "a", text: "Ota" },
      { id: "b", text: "Oscar" },
      { id: "c", text: "Oldrich" },
      { id: "d", text: "Ondrej" },
    ],
    correctChoiceId: "a",
    explanation:
      "O = Ota v ceske abecede. Oscar je NATO. Oldrich a Ondrej nejsou standardni.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-050",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Kdy se pri radioamaterskem provozu pouziva ceska hlaskovaci abeceda?",
    choices: [
      { id: "a", text: "Pri vnitrostatnich spojenich v ceskem jazyce" },
      { id: "b", text: "Pri vsech spojenich bez vyjimky" },
      { id: "c", text: "Pouze pri soutezich" },
      { id: "d", text: "Pouze pri CW provozu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Ceska abeceda se pouziva pri domacich QSO v cestine. Pro mezinarodni spojeni se pouziva NATO abeceda, aby byla srozumitelna vsem operatorum bez ohledu na jazyk.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "provoz", "apply"],
  },
  {
    id: "O-PHO-051",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Ktery digraf (dvojpismeno) je unikatni pro ceskou hlaskovaci abecedu a v NATO abecede neexistuje?",
    choices: [
      { id: "a", text: "CH (Chrudim)" },
      { id: "b", text: "SH (Sierra Hotel)" },
      { id: "c", text: "TH (Tango Hotel)" },
      { id: "d", text: "DZ (Delta Zulu)" },
    ],
    correctChoiceId: "a",
    explanation:
      "CH = Chrudim je unikatni pro ceskou abecedu, kde je CH samostatne pismeno. V NATO abecede se CH hlaskuje jako dve oddelena pismena: Charlie Hotel.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "digraf-ch", "recall"],
  },
  {
    id: "O-PHO-052",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v ceske hlaskovaci abecede hlaskuje pismeno Q?",
    choices: [
      { id: "a", text: "Quido" },
      { id: "b", text: "Quebec" },
      { id: "c", text: "Kvido" },
      { id: "d", text: "Kveta" },
    ],
    correctChoiceId: "a",
    explanation:
      "Q = Quido (psano s Q, ne Kvido). Quebec je NATO. Spravny prepis zachovava pismeno Q na zacatku slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
];
