import type { Lesson } from "@/lib/types";

export const regulationsCeptLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: CEPT a ECC
  // -----------------------------------------------------------------------
  {
    id: "cept-01",
    examPartId: "regulations",
    sectionId: "cept",
    order: 1,
    title: "CEPT a ECC",
    objective:
      "Pochopit strukturu CEPT, roli ECC a doporuceni T/R 61-01 a T/R 61-02 pro radioamatery.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "CEPT (Conference Europeenne des administrations des Postes et des Telecommunications) je evropska organizace sdruzujici priblizne 48 clenskych statu. Byla zalozena v roce 1959 a jejim cilem je harmonizace postovnich a telekomunikacnich sluzeb v Evrope. Pro radioamatery je CEPT klicova - diky ni existuje system vzajemneho uznavani licenci.",
        note: "CEPT zahrnuje i zeme mimo EU, napriklad Turecko, Rusko ci zeme Balkanu.",
      },
      {
        type: "select-answer",
        question: "Co je hlavnim poslanim organizace CEPT?",
        choices: [
          {
            id: "a",
            text: "Harmonizace telekomunikaci a postovnich sluzeb v Evrope",
          },
          { id: "b", text: "Vydavani radioamaterskych licenci" },
          { id: "c", text: "Provozovani satelitnich druzic" },
          { id: "d", text: "Vyuka morseovky" },
        ],
        correctId: "a",
        explanation:
          "CEPT se zabyva harmonizaci telekomunikaci a postovnich sluzeb. Licence vydavaji narodni spravy, ne CEPT primo.",
      },
      {
        type: "explain",
        content:
          "V ramci CEPT pusobi ECC (Electronic Communications Committee) - vybor pro elektronicke komunikace. ECC se stara o harmonizaci vyuzivani radiofrekvencniho spektra a satelitnich orbit. Vydava doporuceni (Recommendations) a rozhodnuti (Decisions), ktera prijimaji jednotlive clenske staty. Pro radioamatery jsou klicova doporuceni rady T/R 61.",
      },
      {
        type: "match",
        instruction:
          "Priradte zkratky k jejich vyznamu:",
        pairs: [
          { left: "CEPT", right: "Evropska konference postovnich a telekomunikacnich sprav" },
          { left: "ECC", right: "Vybor pro elektronicke komunikace" },
          { left: "WG FM", right: "Pracovni skupina pro spavu frekvenci" },
          { left: "IARU", right: "Mezinarodni svaz radioamateru" },
        ],
        explanation:
          "ECC a jeho pracovni skupiny (vcetne WG FM - Frequency Management) jsou organizacne soucasti CEPT. IARU je nezavisla organizace zastupujici radioamatery.",
      },
      {
        type: "explain",
        content:
          "Doporuceni T/R 61-01 zavadi CEPT radioamaterskou licenci. Drzitel HAREC certifikatu z jedne zeme CEPT muze provozovat amaterskou stanici v jine zemi CEPT, aniz by musel zadat o mistni licenci. Staci mit s sebou platnou domovskou licenci s oznacenim CEPT. Musi vsak dodrzovat predpisy navstivene zeme.",
        note: "T/R 61-01 se tyka radioamateru ze zemi, ktere jsou cleny CEPT a prijaly toto doporuceni.",
      },
      {
        type: "fill-blank",
        textBefore: "Doporuceni T/R 61-01 zavadi",
        blank: "CEPT radioamaterskou licenci",
        distractors: [
          "zkusebni sylabus HAREC",
          "povinnou morseovku",
          "mezinarodni volaci znaky",
        ],
        textAfter:
          "pro provoz v jinych zemich CEPT.",
        explanation:
          "T/R 61-01 je zakladem systemu CEPT licence - umoznuje provoz bez mistni licence pri cestovani po zemich CEPT.",
      },
      {
        type: "explain",
        content:
          "Doporuceni T/R 61-02 resi situaci radioamateru ze zemi, ktere nejsou cleny CEPT nebo neprijaly T/R 61-01. Diky T/R 61-02 mohou tito navstevnici ziskat docasne povoleni k provozu v zemi CEPT. Podminka je, ze maji HAREC certifikat nebo ekvivalentni kvalifikaci.",
      },
      {
        type: "highlight",
        instruction:
          "Oznacte pravdiva tvrzeni o doporucenich T/R 61-01 a T/R 61-02:",
        terms: [
          { text: "T/R 61-01 je pro radioamatery ze zemi CEPT", correct: true },
          { text: "T/R 61-02 je pro navstevniky z ne-CEPT zemi", correct: true },
          { text: "T/R 61-01 vyzaduje HAREC certifikat", correct: true },
          { text: "T/R 61-02 plati pouze na KV pasmech", correct: false },
          { text: "T/R 61-01 nahradi domovskou licenci", correct: false },
        ],
        explanation:
          "T/R 61-01 i T/R 61-02 vyzaduji HAREC. T/R 61-02 neni omezeno na KV pasma. CEPT licence doplnuje, ale nenahradi domovskou licenci.",
      },
      {
        type: "exam-question",
        questionId: "R-CEP-003",
      },
      {
        type: "exam-question",
        questionId: "R-CEP-004",
      },
    ],
    relatedQuestionIds: [
      "R-CEP-001",
      "R-CEP-002",
      "R-CEP-003",
      "R-CEP-004",
      "R-CEP-005",
      "R-CEP-006",
      "R-CEP-007",
      "R-CEP-008",
    ],
    tags: ["cept", "ecc", "tr-61-01", "tr-61-02", "organizace", "licence"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: HAREC a vzajemne uznavani
  // -----------------------------------------------------------------------
  {
    id: "cept-02",
    examPartId: "regulations",
    sectionId: "cept",
    order: 2,
    title: "HAREC a vzajemne uznavani",
    objective:
      "Vysvetlit ucel certifikatu HAREC, princip vzajemneho uznavani licenci a roli ERC Report 32.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "HAREC (Harmonised Amateur Radio Examination Certificate) je harmonizovany certifikat, ktery prokazuje, ze jeho drzitel slozil radioamaterskou zkousku podle jednotneho evropskeho standardu. Diky HAREC certifikatu radioamater nemusí skladat novou zkousku pri stazeni se do jine zeme CEPT - jeho kvalifikace je automaticky uznana.",
        note: "HAREC je certifikat o kvalifikaci, ne licence k provozu. Licenci vydava vzdy narodni sprava.",
      },
      {
        type: "select-answer",
        question: "Co presne je HAREC?",
        choices: [
          {
            id: "a",
            text: "Harmonizovany certifikat o slozeni radioamaterske zkousky",
          },
          { id: "b", text: "Mezinarodni radioamaterska licence" },
          { id: "c", text: "Volaci znak pro provoz v zahranici" },
          { id: "d", text: "Organizace provozujici zkousky" },
        ],
        correctId: "a",
        explanation:
          "HAREC je certifikat (osvedceni), ne licence. Licence se vydava na zaklade certifikatu narodni spravou.",
      },
      {
        type: "explain",
        content:
          "Obsah zkousky HAREC je definovan v dokumentu ERC Report 32. Tento sylabus specifikuje tri hlavni oblasti: technickou teorii (elektrotechnika, soucastky, prijimace, vysilace, anteny, sireni vln, mereni, ruseni, bezpecnost), provozni postupy (provozni pravidla, Q-kody, hlaskovaci abeceda) a predpisy (narodni i mezinarodni). Kazda zeme CEPT vytvorí zkousku pokryvajici vsechna temata ERC Report 32.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte oblasti, ktere patri do zkousky HAREC podle ERC Report 32:",
        pool: [
          { text: "Technicka teorie", correct: true },
          { text: "Provozni postupy a predpisy", correct: true },
          { text: "Predpisy (narodni a mezinarodni)", correct: true },
          { text: "Programovani v jazyce C", correct: false },
          { text: "Stavba anten ze drevа", correct: false },
          { text: "Dejiny radioamaterstvi", correct: false },
        ],
        explanation:
          "ERC Report 32 definuje tri pilire zkousky: techniku, provoz a predpisy. Programovani, stavba anten ani historie nejsou soucasti HAREC zkousky.",
      },
      {
        type: "reveal",
        prompt:
          "Proc je system HAREC vyhodny pro radioamatery, kteri cestuji nebo se stehuji?",
        answer:
          "Drzitel HAREC nemusi skladat novou zkousku v jine zemi CEPT. Jeho kvalifikace je automaticky uznana diky vzajemnemu uznavani. Pri cestovani muze provozovat na zaklade CEPT licence (T/R 61-01), pri stazeni muze pozadat o mistni licenci bez dalsi zkousky.",
        explanation:
          "Vzajemne uznavani setri cas i naklady - bez HAREC by radioamater musel skladat zkousku v kazde zemi zvlast.",
      },
      {
        type: "match",
        instruction:
          "Priradte dokument k jeho ucelu:",
        pairs: [
          { left: "ERC Report 32", right: "Definuje sylabus zkousky HAREC" },
          { left: "T/R 61-01", right: "CEPT licence pro zeme CEPT" },
          { left: "T/R 61-02", right: "Docasne povoleni pro ne-CEPT navstevniky" },
          { left: "HAREC certifikat", right: "Potvrzeni o slozeni harmonizovane zkousky" },
        ],
        explanation:
          "Kazdy dokument ma odlisny ucel: ERC Report 32 = co se zkusi, HAREC = doklad o uspesne zkousce, T/R 61-01 a 61-02 = jak licenci pouzit v zahranici.",
      },
      {
        type: "order",
        instruction:
          "Seradte kroky, ktere radioamater absolvuje od zkousky po provoz v zahranici:",
        items: [
          "Slozi zkousku podle sylabu ERC Report 32",
          "Obdrzi HAREC certifikat",
          "Ziska narodni radioamaterskou licenci s oznacenim CEPT",
          "Provozuje v jine zemi CEPT na zaklade T/R 61-01",
        ],
        explanation:
          "Proces zacina zkouskou, pokracuje ziskanim HAREC certifikatu a narodni licence, a konci moznosti provozovat v zahranici diky CEPT licenci.",
      },
      {
        type: "exam-question",
        questionId: "R-CEP-011",
      },
      {
        type: "exam-question",
        questionId: "R-CEP-013",
      },
    ],
    relatedQuestionIds: [
      "R-CEP-009",
      "R-CEP-010",
      "R-CEP-011",
      "R-CEP-012",
      "R-CEP-013",
      "R-CEP-014",
      "R-CEP-015",
      "R-CEP-016",
    ],
    tags: [
      "harec",
      "certifikat",
      "vzajemne-uznavani",
      "erc-report-32",
      "sylabus",
      "cept-licence",
    ],
  },
];
