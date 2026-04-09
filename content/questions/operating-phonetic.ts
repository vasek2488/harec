import type { Question } from "@/lib/types";

export const operatingPhoneticQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // NATO phonetic alphabet (phonetic-01): O-PHO-001 to O-PHO-026
  // -----------------------------------------------------------------------
  {
    id: "O-PHO-001",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno A?",
    choices: [
      { id: "a", text: "Alfa" },
      { id: "b", text: "Adam" },
      { id: "c", text: "Alpha" },
      { id: "d", text: "Anton" },
    ],
    correctChoiceId: "a",
    explanation:
      "V NATO abecedě je A = Alfa (psáno bez 'ph'). Adam je česká hláskovací abeceda. Alpha je chybný přepis - správně je Alfa. Viz NATO fonetická abeceda.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-002",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno B?",
    choices: [
      { id: "a", text: "Bravo" },
      { id: "b", text: "Božena" },
      { id: "c", text: "Baker" },
      { id: "d", text: "Beta" },
    ],
    correctChoiceId: "a",
    explanation:
      "B = Bravo. Božena je česká abeceda. Baker se používal ve starších vojenských systémech. Beta je řecké písmeno.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-003",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno C?",
    choices: [
      { id: "a", text: "Charlie" },
      { id: "b", text: "Cyril" },
      { id: "c", text: "Cecil" },
      { id: "d", text: "Coca" },
    ],
    correctChoiceId: "a",
    explanation:
      "C = Charlie. Cyril je česká abeceda. Cecil a Coca nejsou součástí žádné standardní hláskování abecedy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-004",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno D?",
    choices: [
      { id: "a", text: "Delta" },
      { id: "b", text: "David" },
      { id: "c", text: "Dog" },
      { id: "d", text: "Donna" },
    ],
    correctChoiceId: "a",
    explanation:
      "D = Delta. David je česká abeceda. Dog se používal ve starších systémech. Viz NATO abeceda.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-005",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno E?",
    choices: [
      { id: "a", text: "Echo" },
      { id: "b", text: "Emil" },
      { id: "c", text: "Edward" },
      { id: "d", text: "Easy" },
    ],
    correctChoiceId: "a",
    explanation:
      "E = Echo. Emil je česká abeceda. Edward a Easy se používaly ve starších vojenských systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-006",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno F?",
    choices: [
      { id: "a", text: "Foxtrot" },
      { id: "b", text: "František" },
      { id: "c", text: "Fox" },
      { id: "d", text: "Florida" },
    ],
    correctChoiceId: "a",
    explanation:
      "F = Foxtrot. František je česká abeceda. Fox je neúplná podoba - správně je Foxtrot.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-007",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno G?",
    choices: [
      { id: "a", text: "Golf" },
      { id: "b", text: "Gustav" },
      { id: "c", text: "George" },
      { id: "d", text: "Gamma" },
    ],
    correctChoiceId: "a",
    explanation:
      "G = Golf. Gustav je česká abeceda. George se používá v britské civilní abecedě. Gamma je řecké písmeno.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-008",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno H?",
    choices: [
      { id: "a", text: "Hotel" },
      { id: "b", text: "Helena" },
      { id: "c", text: "Henry" },
      { id: "d", text: "Havana" },
    ],
    correctChoiceId: "a",
    explanation:
      "H = Hotel. Helena je česká abeceda. Henry se používal ve starších systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-009",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno I?",
    choices: [
      { id: "a", text: "India" },
      { id: "b", text: "Ivan" },
      { id: "c", text: "Italia" },
      { id: "d", text: "Ida" },
    ],
    correctChoiceId: "a",
    explanation:
      "I = India. Ivan je česká abeceda. Italia a Ida nejsou součástí NATO abecedy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-010",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno J?",
    choices: [
      { id: "a", text: "Juliet" },
      { id: "b", text: "Josef" },
      { id: "c", text: "Julie" },
      { id: "d", text: "Jack" },
    ],
    correctChoiceId: "a",
    explanation:
      "J = Juliet (ne Julie!). Josef je česká abeceda. Julie je častá chyba - správná NATO podoba je Juliet.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-011",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno K?",
    choices: [
      { id: "a", text: "Kilo" },
      { id: "b", text: "Karel" },
      { id: "c", text: "King" },
      { id: "d", text: "Kenya" },
    ],
    correctChoiceId: "a",
    explanation:
      "K = Kilo. Karel je česká abeceda. King se používal ve starších systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-012",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno L?",
    choices: [
      { id: "a", text: "Lima" },
      { id: "b", text: "Ludvík" },
      { id: "c", text: "London" },
      { id: "d", text: "Linda" },
    ],
    correctChoiceId: "a",
    explanation:
      "L = Lima (hlavní město Peru, vyslovuje se 'LI-ma'). Ludvík je česká abeceda. London a Linda nejsou NATO.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-013",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno M?",
    choices: [
      { id: "a", text: "Mike" },
      { id: "b", text: "Marie" },
      { id: "c", text: "Metro" },
      { id: "d", text: "Mexico" },
    ],
    correctChoiceId: "a",
    explanation:
      "M = Mike. Marie je česká abeceda. Metro a Mexico nejsou součástí NATO abecedy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-014",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno N?",
    choices: [
      { id: "a", text: "November" },
      { id: "b", text: "Norbert" },
      { id: "c", text: "Nancy" },
      { id: "d", text: "Nectar" },
    ],
    correctChoiceId: "a",
    explanation:
      "N = November. Norbert je česká abeceda. Nancy se používala ve starších systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-015",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno O?",
    choices: [
      { id: "a", text: "Oscar" },
      { id: "b", text: "Ota" },
      { id: "c", text: "Oliver" },
      { id: "d", text: "Omega" },
    ],
    correctChoiceId: "a",
    explanation:
      "O = Oscar. Ota je česká abeceda. Oliver se používá v britské civilní abecedě. Omega je řecké písmeno.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-016",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno P?",
    choices: [
      { id: "a", text: "Papa" },
      { id: "b", text: "Petr" },
      { id: "c", text: "Peter" },
      { id: "d", text: "Paris" },
    ],
    correctChoiceId: "a",
    explanation:
      "P = Papa. Petr je česká abeceda. Peter se používal ve starších systémech. Viz NATO abeceda.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-017",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno Q?",
    choices: [
      { id: "a", text: "Quebec" },
      { id: "b", text: "Quido" },
      { id: "c", text: "Queen" },
      { id: "d", text: "Quota" },
    ],
    correctChoiceId: "a",
    explanation:
      "Q = Quebec (vyslovuje se 'ke-BEK'). Quido je česká abeceda. Queen se používala ve starších systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-018",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno R?",
    choices: [
      { id: "a", text: "Romeo" },
      { id: "b", text: "Rudolf" },
      { id: "c", text: "Roger" },
      { id: "d", text: "Robert" },
    ],
    correctChoiceId: "a",
    explanation:
      "R = Romeo. Rudolf je česká abeceda. Roger znamená 'rozuměl jsem', není to hláskovací slovo pro R v NATO.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-019",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno S?",
    choices: [
      { id: "a", text: "Sierra" },
      { id: "b", text: "Svatopluk" },
      { id: "c", text: "Sugar" },
      { id: "d", text: "Samuel" },
    ],
    correctChoiceId: "a",
    explanation:
      "S = Sierra (vyslovuje se 'si-E-ra'). Svatopluk je česká abeceda. Sugar se používal ve starších systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-020",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno T?",
    choices: [
      { id: "a", text: "Tango" },
      { id: "b", text: "Tomáš" },
      { id: "c", text: "Tiger" },
      { id: "d", text: "Texas" },
    ],
    correctChoiceId: "a",
    explanation:
      "T = Tango. Tomáš je česká abeceda. Tiger a Texas nejsou součástí NATO abecedy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-021",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno W?",
    choices: [
      { id: "a", text: "Whiskey" },
      { id: "b", text: "dvojite V" },
      { id: "c", text: "William" },
      { id: "d", text: "Washington" },
    ],
    correctChoiceId: "a",
    explanation:
      "W = Whiskey. 'Dvojité V' je české označení písmene W. William se používal ve starších systémech.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-022",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno X?",
    choices: [
      { id: "a", text: "X-ray" },
      { id: "b", text: "Xaver" },
      { id: "c", text: "Xena" },
      { id: "d", text: "Xenon" },
    ],
    correctChoiceId: "a",
    explanation:
      "X = X-ray (se spojovnikem). Xaver je česká abeceda. Viz NATO abeceda.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-023",
    examPartId: "operating",
    sectionId: "phonetic",
    wording: "Jak se v NATO hláskovací abecedě hláskuje písmeno Z?",
    choices: [
      { id: "a", text: "Zulu" },
      { id: "b", text: "Zuzana" },
      { id: "c", text: "Zebra" },
      { id: "d", text: "Zero" },
    ],
    correctChoiceId: "a",
    explanation:
      "Z = Zulu. Zuzana je česká abeceda. Zebra se používala ve starších systémech. Zero je NATO výslovnost číslice 0.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "recall"],
  },
  {
    id: "O-PHO-024",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak správně vyhláskujete volací značku OK1ABC v NATO abecedě?",
    choices: [
      { id: "a", text: "Oscar Kilo One Alfa Bravo Charlie" },
      { id: "b", text: "Ota Karel Jedna Adam Božena Cyril" },
      { id: "c", text: "Oscar Kilo One Alpha Baker Charlie" },
      { id: "d", text: "Oscar Kilo Una Alfa Bravo Charlie" },
    ],
    correctChoiceId: "a",
    explanation:
      "Používáme NATO slova: O=Oscar, K=Kilo, 1=One, A=Alfa, B=Bravo, C=Charlie. Varianta b) je česká abeceda. Alpha a Baker nejsou správné NATO výrazy.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "volaci-znacky", "apply"],
  },
  {
    id: "O-PHO-025",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v NATO abecedě vyslovuje číslice 9?",
    choices: [
      { id: "a", text: "Niner" },
      { id: "b", text: "Nine" },
      { id: "c", text: "Nein" },
      { id: "d", text: "Nona" },
    ],
    correctChoiceId: "a",
    explanation:
      "Číslice 9 se vyslovuje 'Niner' (ne Nine), aby se zamezilo záměně s německým 'Nein' (ne). Viz pravidla výslovnosti číslic v NATO.",
    relatedLessonIds: ["phonetic-01"],
    tags: ["nato-abeceda", "cislice", "recall"],
  },
  {
    id: "O-PHO-026",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Která číslice se v NATO výslovnosti říká 'Tree'?",
    choices: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "8" },
      { id: "d", text: "0" },
    ],
    correctChoiceId: "a",
    explanation:
      "Číslice 3 se vyslovuje 'Tree' místo 'Three', aby se zamezilo záměně způsobené sibilanty (sykavkami). Další upravené výslovnosti: 4=Fower, 5=Fife, 9=Niner.",
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
      "Jak se v české hláskovací abecedě hláskuje písmeno A?",
    choices: [
      { id: "a", text: "Adam" },
      { id: "b", text: "Alfa" },
      { id: "c", text: "Antonín" },
      { id: "d", text: "Alena" },
    ],
    correctChoiceId: "a",
    explanation:
      "V české abecedě je A = Adam. Alfa je NATO abeceda. Antonín a Alena nejsou standardní hláskovací slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-028",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno B?",
    choices: [
      { id: "a", text: "Božena" },
      { id: "b", text: "Bravo" },
      { id: "c", text: "Boris" },
      { id: "d", text: "Bohumil" },
    ],
    correctChoiceId: "a",
    explanation:
      "B = Božena v české abecedě. Bravo je NATO. Boris a Bohumil nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-029",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno C?",
    choices: [
      { id: "a", text: "Cyril" },
      { id: "b", text: "Charlie" },
      { id: "c", text: "Čestmír" },
      { id: "d", text: "Cecilie" },
    ],
    correctChoiceId: "a",
    explanation:
      "C = Cyril v české abecedě. Charlie je NATO. Čestmír a Cecilie nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-030",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno D?",
    choices: [
      { id: "a", text: "David" },
      { id: "b", text: "Delta" },
      { id: "c", text: "Daniel" },
      { id: "d", text: "Dagmar" },
    ],
    correctChoiceId: "a",
    explanation:
      "D = David v české abecedě. Delta je NATO. Daniel a Dagmar nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-031",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno E?",
    choices: [
      { id: "a", text: "Emil" },
      { id: "b", text: "Echo" },
      { id: "c", text: "Eva" },
      { id: "d", text: "Eduard" },
    ],
    correctChoiceId: "a",
    explanation:
      "E = Emil v české abecedě. Echo je NATO. Eva a Eduard nejsou standardní hláskovací slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-032",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno F?",
    choices: [
      { id: "a", text: "František" },
      { id: "b", text: "Foxtrot" },
      { id: "c", text: "Filip" },
      { id: "d", text: "Ferdinand" },
    ],
    correctChoiceId: "a",
    explanation:
      "F = František v české abecedě. Foxtrot je NATO. Filip a Ferdinand nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-033",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje digraf CH?",
    choices: [
      { id: "a", text: "Chrudim" },
      { id: "b", text: "Charlie Hotel" },
      { id: "c", text: "Cheb" },
      { id: "d", text: "Chomutov" },
    ],
    correctChoiceId: "a",
    explanation:
      "CH = Chrudim. V české abecedě je CH samostatné písmeno. V NATO abecedě digraf CH neexistuje, hláskuje se jako Charlie Hotel. Cheb a Chomutov nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "digraf-ch", "recall"],
  },
  {
    id: "O-PHO-034",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno G?",
    choices: [
      { id: "a", text: "Gustav" },
      { id: "b", text: "Golf" },
      { id: "c", text: "Gabriel" },
      { id: "d", text: "Gusta" },
    ],
    correctChoiceId: "a",
    explanation:
      "G = Gustav v české abecedě. Golf je NATO. Gabriel a Gusta nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-035",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno H?",
    choices: [
      { id: "a", text: "Helena" },
      { id: "b", text: "Hotel" },
      { id: "c", text: "Hana" },
      { id: "d", text: "Hubert" },
    ],
    correctChoiceId: "a",
    explanation:
      "H = Helena v české abecedě. Hotel je NATO. Hana a Hubert nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-036",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno K?",
    choices: [
      { id: "a", text: "Karel" },
      { id: "b", text: "Kilo" },
      { id: "c", text: "Kamil" },
      { id: "d", text: "Klara" },
    ],
    correctChoiceId: "a",
    explanation:
      "K = Karel v české abecedě. Kilo je NATO. Kamil a Klara nejsou standardní hláskovací slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-037",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno M?",
    choices: [
      { id: "a", text: "Marie" },
      { id: "b", text: "Mike" },
      { id: "c", text: "Milan" },
      { id: "d", text: "Marek" },
    ],
    correctChoiceId: "a",
    explanation:
      "M = Marie v české abecedě. Mike je NATO. Milan a Marek nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-038",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno N?",
    choices: [
      { id: "a", text: "Norbert" },
      { id: "b", text: "November" },
      { id: "c", text: "Nikola" },
      { id: "d", text: "Natalie" },
    ],
    correctChoiceId: "a",
    explanation:
      "N = Norbert v české abecedě. November je NATO. Nikola a Natalie nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-039",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno P?",
    choices: [
      { id: "a", text: "Petr" },
      { id: "b", text: "Papa" },
      { id: "c", text: "Pavel" },
      { id: "d", text: "Prokop" },
    ],
    correctChoiceId: "a",
    explanation:
      "P = Petr v české abecedě. Papa je NATO. Pavel a Prokop nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-040",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno R?",
    choices: [
      { id: "a", text: "Rudolf" },
      { id: "b", text: "Romeo" },
      { id: "c", text: "Richard" },
      { id: "d", text: "Robert" },
    ],
    correctChoiceId: "a",
    explanation:
      "R = Rudolf v české abecedě. Romeo je NATO. Richard a Robert nejsou standardní česká hláskovací slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-041",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno S?",
    choices: [
      { id: "a", text: "Svatopluk" },
      { id: "b", text: "Sierra" },
      { id: "c", text: "Stanislav" },
      { id: "d", text: "Simona" },
    ],
    correctChoiceId: "a",
    explanation:
      "S = Svatopluk v české abecedě. Sierra je NATO. Stanislav a Simona nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-042",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno T?",
    choices: [
      { id: "a", text: "Tomáš" },
      { id: "b", text: "Tango" },
      { id: "c", text: "Teodor" },
      { id: "d", text: "Tadeáš" },
    ],
    correctChoiceId: "a",
    explanation:
      "T = Tomáš v české abecedě. Tango je NATO. Teodor a Tadeáš nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-043",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno V?",
    choices: [
      { id: "a", text: "Václav" },
      { id: "b", text: "Victor" },
      { id: "c", text: "Viktor" },
      { id: "d", text: "Vera" },
    ],
    correctChoiceId: "a",
    explanation:
      "V = Václav v české abecedě. Victor je NATO. Viktor je častá záměna s NATO abecedou. Věra není standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-044",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno W?",
    choices: [
      { id: "a", text: "dvojite V" },
      { id: "b", text: "Whiskey" },
      { id: "c", text: "Václav" },
      { id: "d", text: "Wilhelm" },
    ],
    correctChoiceId: "a",
    explanation:
      "W = 'dvojité V' v české abecedě. Whiskey je NATO. Toto je jediné hláskovací slovo v české abecedě, které není křestní jméno.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-045",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno Y?",
    choices: [
      { id: "a", text: "Ypsilon" },
      { id: "b", text: "Yankee" },
      { id: "c", text: "Yarka" },
      { id: "d", text: "York" },
    ],
    correctChoiceId: "a",
    explanation:
      "Y = Ypsilon v české abecedě. Yankee je NATO. Ypsilon je název písmene Y, ne křestní jméno.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-046",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno Z?",
    choices: [
      { id: "a", text: "Zuzana" },
      { id: "b", text: "Zulu" },
      { id: "c", text: "Zdeněk" },
      { id: "d", text: "Zbyněk" },
    ],
    correctChoiceId: "a",
    explanation:
      "Z = Zuzana v české abecedě. Zulu je NATO. Zdeněk a Zbyněk nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-047",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno I?",
    choices: [
      { id: "a", text: "Ivan" },
      { id: "b", text: "India" },
      { id: "c", text: "Igor" },
      { id: "d", text: "Irena" },
    ],
    correctChoiceId: "a",
    explanation:
      "I = Ivan v české abecedě. India je NATO. Igor a Irena nejsou standardní česká hláskovací slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-048",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno J?",
    choices: [
      { id: "a", text: "Josef" },
      { id: "b", text: "Juliet" },
      { id: "c", text: "Jiří" },
      { id: "d", text: "Jana" },
    ],
    correctChoiceId: "a",
    explanation:
      "J = Josef v české abecedě. Juliet je NATO. Jiří a Jana nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-049",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno O?",
    choices: [
      { id: "a", text: "Ota" },
      { id: "b", text: "Oscar" },
      { id: "c", text: "Oldřich" },
      { id: "d", text: "Ondřej" },
    ],
    correctChoiceId: "a",
    explanation:
      "O = Ota v české abecedě. Oscar je NATO. Oldřich a Ondřej nejsou standardní.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
  {
    id: "O-PHO-050",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Kdy se při radioamatérském provozu používá česká hláskovací abeceda?",
    choices: [
      { id: "a", text: "Při vnitrostátních spojeních v českém jazyce" },
      { id: "b", text: "Při všech spojeních bez výjimky" },
      { id: "c", text: "Pouze při soutěžích" },
      { id: "d", text: "Pouze pri CW provozu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Česká abeceda se používá při domácích QSO v češtině. Pro mezinárodní spojení se používá NATO abeceda, aby byla srozumitelná všem operátorům bez ohledu na jazyk.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "provoz", "apply"],
  },
  {
    id: "O-PHO-051",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Který digraf (dvojpísmeno) je unikátní pro českou hláskovací abecedu a v NATO abecedě neexistuje?",
    choices: [
      { id: "a", text: "CH (Chrudim)" },
      { id: "b", text: "SH (Sierra Hotel)" },
      { id: "c", text: "TH (Tango Hotel)" },
      { id: "d", text: "DZ (Delta Zulu)" },
    ],
    correctChoiceId: "a",
    explanation:
      "CH = Chrudim je unikátní pro českou abecedu, kde je CH samostatné písmeno. V NATO abecedě se CH hláskuje jako dvě oddělená písmena: Charlie Hotel.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "digraf-ch", "recall"],
  },
  {
    id: "O-PHO-052",
    examPartId: "operating",
    sectionId: "phonetic",
    wording:
      "Jak se v české hláskovací abecedě hláskuje písmeno Q?",
    choices: [
      { id: "a", text: "Quido" },
      { id: "b", text: "Quebec" },
      { id: "c", text: "Kvido" },
      { id: "d", text: "Kveta" },
    ],
    correctChoiceId: "a",
    explanation:
      "Q = Quido (psáno s Q, ne Kvido). Quebec je NATO. Správný přepis zachovává písmeno Q na začátku slova.",
    relatedLessonIds: ["phonetic-02"],
    tags: ["ceska-abeceda", "recall"],
  },
];
