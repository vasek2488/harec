import type { Question } from "@/lib/types";

export const regulationsCeptQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // CEPT structure, ECC, T/R 61-01, T/R 61-02 (cept-01): R-CEP-001 to R-CEP-008
  // -----------------------------------------------------------------------
  {
    id: "R-CEP-001",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Co znamena zkratka CEPT?",
    choices: [
      {
        id: "a",
        text: "Conference Europeenne des administrations des Postes et des Telecommunications",
      },
      {
        id: "b",
        text: "Central European Post and Telecommunications",
      },
      {
        id: "c",
        text: "Committee of European Postal Technologies",
      },
      {
        id: "d",
        text: "Council of European Providers of Telecommunications",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "CEPT je Evropska konference postovnich a telekomunikacnich sprav (Conference Europeenne des administrations des Postes et des Telecommunications). Byla zalozena v roce 1959.",
    relatedLessonIds: ["cept-01"],
    tags: ["cept", "organizace", "recall"],
  },
  {
    id: "R-CEP-002",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Jaky je hlavni ucel vyboru ECC v ramci CEPT?",
    choices: [
      {
        id: "a",
        text: "Harmonizace vyuzivani radiofrekvencniho spektra v Evrope",
      },
      {
        id: "b",
        text: "Vydavani radioamaterske licence primo jednotlivcum",
      },
      {
        id: "c",
        text: "Provozovani satelitnich komunikacnich systemu",
      },
      {
        id: "d",
        text: "Vyuka radioamaterskych kurzu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "ECC (Electronic Communications Committee) je vybor CEPT zodpovedny za harmonizaci vyuzivani radiofrekvencniho spektra a satelitnich orbit v Evrope. Nevydava licence primo - to delaji narodni spravy.",
    relatedLessonIds: ["cept-01"],
    tags: ["ecc", "harmonizace", "recall"],
  },
  {
    id: "R-CEP-003",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Co upravuje doporuceni CEPT T/R 61-01?",
    choices: [
      {
        id: "a",
        text: "CEPT radioamaterskou licenci pro provoz v zemich CEPT",
      },
      {
        id: "b",
        text: "Pozadavky na zkousku HAREC",
      },
      {
        id: "c",
        text: "Docasne povoleni pro navstevniky z ne-CEPT zemi",
      },
      {
        id: "d",
        text: "Pridel kmitoctu pro amaterskou sluzbu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "T/R 61-01 stanovuje CEPT radioamaterskou licenci, ktera umoznuje drzitelum HAREC certifikatu provozovat amaterskou stanici v jinych zemich CEPT bez potreby ziskat mistni licenci.",
    relatedLessonIds: ["cept-01"],
    tags: ["tr-61-01", "licence", "recall"],
  },
  {
    id: "R-CEP-004",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Doporuceni T/R 61-02 se tyka:",
    choices: [
      {
        id: "a",
        text: "Docasneho povoleni pro radioamatery z ne-CEPT zemi navstevujici zeme CEPT",
      },
      {
        id: "b",
        text: "Trvaleho povoleni pro radioamatery v jejich domovske zemi",
      },
      {
        id: "c",
        text: "Prodeje radioamaterske techniky v Evrope",
      },
      {
        id: "d",
        text: "Povinneho pouzivani morseovky",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "T/R 61-02 umoznuje radioamaterum ze zemi, ktere neprijaly T/R 61-01, ziskat docasne povoleni k provozu v zemich CEPT. Podminka je drzeni HAREC certifikatu.",
    relatedLessonIds: ["cept-01"],
    tags: ["tr-61-02", "ne-cept", "recall"],
  },
  {
    id: "R-CEP-005",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Kolik clenskych statu ma priblizne CEPT?",
    choices: [
      { id: "a", text: "Asi 48" },
      { id: "b", text: "Asi 27" },
      { id: "c", text: "Asi 15" },
      { id: "d", text: "Asi 100" },
    ],
    correctChoiceId: "a",
    explanation:
      "CEPT ma priblizne 48 clenskych statu - zahrnuje nejen zeme EU, ale i dalsi evropske staty vcetne napriklad Turecka, Ruska ci zemi zapadniho Balkanu.",
    relatedLessonIds: ["cept-01"],
    tags: ["cept", "clenove", "recall"],
  },
  {
    id: "R-CEP-006",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Jaka je hlavni podminka pro vyuziti CEPT licence podle T/R 61-01?",
    choices: [
      {
        id: "a",
        text: "Drzitel musi mit platny HAREC certifikat",
      },
      {
        id: "b",
        text: "Drzitel musi slozit zkousku v navstivene zemi",
      },
      {
        id: "c",
        text: "Drzitel musi byt obcanem zeme EU",
      },
      {
        id: "d",
        text: "Drzitel musi pouzivat pouze VKV pasma",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Zakladni podminkou pro vyuziti CEPT licence (T/R 61-01) je drzeni platneho HAREC certifikatu. Neni nutne byt obcanem EU ani skladat zkousku v navstivene zemi.",
    relatedLessonIds: ["cept-01"],
    tags: ["tr-61-01", "harec", "application"],
  },
  {
    id: "R-CEP-007",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Ktera organizace je nadrazena ECC a WG FM?",
    choices: [
      { id: "a", text: "CEPT" },
      { id: "b", text: "ITU" },
      { id: "c", text: "IARU" },
      { id: "d", text: "ETSI" },
    ],
    correctChoiceId: "a",
    explanation:
      "ECC (Electronic Communications Committee) a jeho pracovni skupiny (vcetne WG FM) jsou soucasti CEPT. ITU je svetova organizace, IARU je svaz radioamateru a ETSI je normalizacni organizace.",
    relatedLessonIds: ["cept-01"],
    tags: ["cept", "ecc", "organizace", "recall"],
  },
  {
    id: "R-CEP-008",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Radioamater z ne-CEPT zeme navstivi Nemecko. Podle ktereho doporuceni muze ziskat docasne povoleni?",
    choices: [
      { id: "a", text: "T/R 61-02" },
      { id: "b", text: "T/R 61-01" },
      { id: "c", text: "ERC Report 32" },
      { id: "d", text: "Radio Regulations ITU" },
    ],
    correctChoiceId: "a",
    explanation:
      "T/R 61-02 se tyka docasneho povoleni pro navstevniky z ne-CEPT zemi. T/R 61-01 je pro drzitele licenci ze zemi CEPT. ERC Report 32 definuje zkousky, nikoli povoleni.",
    relatedLessonIds: ["cept-01", "cept-02"],
    tags: ["tr-61-02", "ne-cept", "application"],
  },

  // -----------------------------------------------------------------------
  // HAREC, mutual recognition, exam syllabus (cept-02): R-CEP-009 to R-CEP-016
  // -----------------------------------------------------------------------
  {
    id: "R-CEP-009",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Co znamena zkratka HAREC?",
    choices: [
      {
        id: "a",
        text: "Harmonised Amateur Radio Examination Certificate",
      },
      {
        id: "b",
        text: "High Authority Radio Equipment Certificate",
      },
      {
        id: "c",
        text: "Harmonised Amateur Radio Equipment Commission",
      },
      {
        id: "d",
        text: "High Amateur Radio Examination Committee",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "HAREC = Harmonised Amateur Radio Examination Certificate. Je to harmonizovany certifikat prokazujici slozeni zkousky podle jednotneho evropskeho standardu.",
    relatedLessonIds: ["cept-02"],
    tags: ["harec", "certifikat", "recall"],
  },
  {
    id: "R-CEP-010",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Jaky je hlavni ucel certifikatu HAREC?",
    choices: [
      {
        id: "a",
        text: "Umoznit vzajemne uznavani radioamaterskych zkousek mezi zememi CEPT",
      },
      {
        id: "b",
        text: "Povolit provoz jen na VKV pasmech",
      },
      {
        id: "c",
        text: "Nahradit narodni radioamaterske licence",
      },
      {
        id: "d",
        text: "Udelit povoleni k prodeji radioamaterske techniky",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "HAREC umoznuje vzajemne uznavani zkousek - radioamater, ktery slozi zkousku v jedne zemi CEPT na urovni HAREC, nemusí skladat novou zkousku v jine zemi CEPT.",
    relatedLessonIds: ["cept-02"],
    tags: ["harec", "uznavani", "recall"],
  },
  {
    id: "R-CEP-011",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Ktery dokument definuje obsah (sylabus) zkousky pro ziskani HAREC certifikatu?",
    choices: [
      { id: "a", text: "ERC Report 32" },
      { id: "b", text: "T/R 61-01" },
      { id: "c", text: "Radio Regulations ITU" },
      { id: "d", text: "Doporuceni ECC/REC/(05)06" },
    ],
    correctChoiceId: "a",
    explanation:
      "ERC Report 32 definuje zkusebni sylabus - temata a rozsah vedomosti, ktere musi radioamater prokazat pro ziskani HAREC certifikatu. T/R 61-01 resi licenci, ne obsah zkousky.",
    relatedLessonIds: ["cept-02"],
    tags: ["erc-report-32", "sylabus", "recall"],
  },
  {
    id: "R-CEP-012",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Ktere tri hlavni oblasti pokryva zkouska HAREC podle ERC Report 32?",
    choices: [
      {
        id: "a",
        text: "Technika, provozni postupy a predpisy, predpisy",
      },
      {
        id: "b",
        text: "Morseovka, anteny a sifrovani",
      },
      {
        id: "c",
        text: "Elektronika, programovani a matematika",
      },
      {
        id: "d",
        text: "Historie, zeměpis a jazyky",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "HAREC zkouska zahrnuje tri hlavni casti: technickou teorii (elektrotechnika, soucástky, obvody, anteny...), provozni postupy a predpisy, a predpisy (narodni i mezinarodni). Morseovka jiz neni povinnou soucasti zkousky HAREC.",
    relatedLessonIds: ["cept-02"],
    tags: ["harec", "sylabus", "recall"],
  },
  {
    id: "R-CEP-013",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Radioamater ze zeme CEPT cestuje do jine zeme CEPT. Musi skladat novou zkousku?",
    choices: [
      {
        id: "a",
        text: "Ne, pokud ma platny HAREC certifikat - staci CEPT licence podle T/R 61-01",
      },
      {
        id: "b",
        text: "Ano, vzdy musi slozit mistni zkousku",
      },
      {
        id: "c",
        text: "Ne, ale musi zaplatit rocni poplatek v navstivene zemi",
      },
      {
        id: "d",
        text: "Ano, ale jen zkousku z predpisu navstivene zeme",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Diky CEPT licenci (T/R 61-01) muze drzitel HAREC provozovat amaterskou stanici v jine zemi CEPT bez dalsi zkousky. Musi ale dodrzovat mistni predpisy navstivene zeme.",
    relatedLessonIds: ["cept-02", "cept-01"],
    tags: ["cept-licence", "vzajemne-uznavani", "application"],
  },
  {
    id: "R-CEP-014",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Jak se lisi CEPT licence (T/R 61-01) od docasneho povoleni (T/R 61-02)?",
    choices: [
      {
        id: "a",
        text: "T/R 61-01 je pro radioamatery ze zemi CEPT, T/R 61-02 pro navstevniky z ne-CEPT zemi",
      },
      {
        id: "b",
        text: "T/R 61-01 je pro KV pasma, T/R 61-02 pro VKV pasma",
      },
      {
        id: "c",
        text: "T/R 61-01 je pro zacatecniky, T/R 61-02 pro pokrocile",
      },
      {
        id: "d",
        text: "T/R 61-01 plati jen 30 dni, T/R 61-02 plati trvale",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "T/R 61-01 umoznuje radioamaterum ze zemi CEPT provozovat v jinych zemich CEPT. T/R 61-02 poskytuje docasne povoleni pro navstevniky ze zemi mimo CEPT, ktere toto doporuceni prijaly.",
    relatedLessonIds: ["cept-02", "cept-01"],
    tags: ["tr-61-01", "tr-61-02", "porovnani", "application"],
  },
  {
    id: "R-CEP-015",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Co musi radioamater dodrzovat pri provozu v zahranici na zaklade CEPT licence?",
    choices: [
      {
        id: "a",
        text: "Predpisy navstivene zeme (kmitocty, vykony, provozni podminky)",
      },
      {
        id: "b",
        text: "Pouze predpisy sve domovske zeme",
      },
      {
        id: "c",
        text: "Pouze mezinarodni predpisy ITU",
      },
      {
        id: "d",
        text: "Zadne - CEPT licence osloboduje od mistnich predpisu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Pri provozu v zahranici na zaklade CEPT licence musi radioamater vzdy dodrzovat predpisy navstivene zeme - povolena pasma, maximalni vykony a provozni podminky se mohou lisit od domovske zeme.",
    relatedLessonIds: ["cept-02"],
    tags: ["cept-licence", "predpisy", "application"],
  },
  {
    id: "R-CEP-016",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Ktera organizace zastupuje zajmy radioamateru na mezinarodnim poli a spolupracuje s CEPT?",
    choices: [
      { id: "a", text: "IARU (International Amateur Radio Union)" },
      { id: "b", text: "ETSI (European Telecommunications Standards Institute)" },
      { id: "c", text: "IEEE (Institute of Electrical and Electronics Engineers)" },
      { id: "d", text: "ARRL (American Radio Relay League)" },
    ],
    correctChoiceId: "a",
    explanation:
      "IARU je mezinarodni svaz radioamateru, ktery zastupuje zajmy radioamateru na mezinarodnim poli a spolupracuje s organizacemi jako CEPT a ITU. ARRL je pouze americka organizace, ETSI se zabyva normami a IEEE je profesni spolek.",
    relatedLessonIds: ["cept-02"],
    tags: ["iaru", "organizace", "recall"],
  },
];
