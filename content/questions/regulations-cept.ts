import type { Question } from "@/lib/types";

export const regulationsCeptQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // CEPT structure, ECC, T/R 61-01, T/R 61-02 (cept-01): R-CEP-001 to R-CEP-008
  // -----------------------------------------------------------------------
  {
    id: "R-CEP-001",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Co znamená zkratka CEPT?",
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
      "CEPT je Evropska konference poštovních a telekomunikačních správ (Conference Europeenne des administrations des Postes et des Telecommunications). Byla založena v roce 1959.",
    relatedLessonIds: ["cept-01"],
    tags: ["cept", "organizace", "recall"],
  },
  {
    id: "R-CEP-002",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Jaky je hlavní účel výboru ECC v ramci CEPT?",
    choices: [
      {
        id: "a",
        text: "Harmonizace využívání radiofrekvencniho spektra v Evrope",
      },
      {
        id: "b",
        text: "Vydavani radioamatérské licence přímo jednotlivcům",
      },
      {
        id: "c",
        text: "Provozovani satelitních komunikačních systemu",
      },
      {
        id: "d",
        text: "Vyuka radioamatérských kurzu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "ECC (Electronic Communications Committee) je výbor CEPT zodpovědný za harmonizací využívání radiofrekvencniho spektra a satelitních orbit v Evrope. Nevydava licence přímo - to delaji narodni správy.",
    relatedLessonIds: ["cept-01"],
    tags: ["ecc", "harmonizace", "recall"],
  },
  {
    id: "R-CEP-003",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Co upravuje doporučení CEPT T/R 61-01?",
    choices: [
      {
        id: "a",
        text: "CEPT radioamatérskou licenci pro provoz v zemích CEPT",
      },
      {
        id: "b",
        text: "Pozadavky na zkoušku HAREC",
      },
      {
        id: "c",
        text: "Docasne povolení pro návštěvníky z ne-CEPT zemí",
      },
      {
        id: "d",
        text: "Pridel kmitočtů pro amatérskou sluzbu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "T/R 61-01 stanovuje CEPT radioamatérskou licenci, která umožňuje držitelům HAREC certifikátu provozovat amatérskou stanici v jinych zemích CEPT bez potřeby získat místní licenci.",
    relatedLessonIds: ["cept-01"],
    tags: ["tr-61-01", "licence", "recall"],
  },
  {
    id: "R-CEP-004",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Doporuceni T/R 61-02 se týká:",
    choices: [
      {
        id: "a",
        text: "Docasneho povolení pro radioamatéry z ne-CEPT zemí navštěvující země CEPT",
      },
      {
        id: "b",
        text: "Trvaleho povolení pro radioamatéry v jejich domovské zemí",
      },
      {
        id: "c",
        text: "Prodeje radioamatérské techniky v Evrope",
      },
      {
        id: "d",
        text: "Povinneho pouzivani morseovky",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "T/R 61-02 umožňuje radioamatérům ze zemí, které nepřijaly T/R 61-01, získat dočasné povolení k provozu v zemích CEPT. Podminka je držení HAREC certifikátu.",
    relatedLessonIds: ["cept-01"],
    tags: ["tr-61-02", "ne-cept", "recall"],
  },
  {
    id: "R-CEP-005",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Kolik členských států ma přibližně CEPT?",
    choices: [
      { id: "a", text: "Asi 48" },
      { id: "b", text: "Asi 27" },
      { id: "c", text: "Asi 15" },
      { id: "d", text: "Asi 100" },
    ],
    correctChoiceId: "a",
    explanation:
      "CEPT ma přibližně 48 členských států - zahrnuje nejen země EU, ale i další evropské státy včetně například Turecka, Ruska ci zemí zapadniho Balkanu.",
    relatedLessonIds: ["cept-01"],
    tags: ["cept", "clenove", "recall"],
  },
  {
    id: "R-CEP-006",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Jaka je hlavní podmínka pro využití CEPT licence podle T/R 61-01?",
    choices: [
      {
        id: "a",
        text: "Drzitel musí mit platný HAREC certifikát",
      },
      {
        id: "b",
        text: "Drzitel musí složit zkoušku v navštívené zemí",
      },
      {
        id: "c",
        text: "Drzitel musí byt občanem země EU",
      },
      {
        id: "d",
        text: "Drzitel musí používat pouze VKV pásma",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Zakladni podmínkou pro využití CEPT licence (T/R 61-01) je držení platného HAREC certifikátu. Neni nutné byt občanem EU ani skládat zkoušku v navštívené zemí.",
    relatedLessonIds: ["cept-01"],
    tags: ["tr-61-01", "harec", "application"],
  },
  {
    id: "R-CEP-007",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Ktera organizace je nadřazená ECC a WG FM?",
    choices: [
      { id: "a", text: "CEPT" },
      { id: "b", text: "ITU" },
      { id: "c", text: "IARU" },
      { id: "d", text: "ETSI" },
    ],
    correctChoiceId: "a",
    explanation:
      "ECC (Electronic Communications Committee) a jeho pracovni skupiny (včetně WG FM) jsou součástí CEPT. ITU je svetova organizace, IARU je svaz radioamatérů a ETSI je normalizační organizace.",
    relatedLessonIds: ["cept-01"],
    tags: ["cept", "ecc", "organizace", "recall"],
  },
  {
    id: "R-CEP-008",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Radioamater z ne-CEPT země navštíví Nemecko. Podle kterého doporučení může získat dočasné povolení?",
    choices: [
      { id: "a", text: "T/R 61-02" },
      { id: "b", text: "T/R 61-01" },
      { id: "c", text: "ERC Report 32" },
      { id: "d", text: "Radio Regulations ITU" },
    ],
    correctChoiceId: "a",
    explanation:
      "T/R 61-02 se týká dočasného povolení pro návštěvníky z ne-CEPT zemí. T/R 61-01 je pro držitele licenci ze zemí CEPT. ERC Report 32 definuje zkoušky, nikoli povolení.",
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
    wording: "Co znamená zkratka HAREC?",
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
      "HAREC = Harmonised Amateur Radio Examination Certificate. Je to harmonizovaný certifikát prokazující složení zkoušky podle jednotného evropskeho standardu.",
    relatedLessonIds: ["cept-02"],
    tags: ["harec", "certifikat", "recall"],
  },
  {
    id: "R-CEP-010",
    examPartId: "regulations",
    sectionId: "cept",
    wording: "Jaky je hlavní účel certifikátu HAREC?",
    choices: [
      {
        id: "a",
        text: "Umoznit vzájemně uznávání radioamatérských zkoušek mezi zememi CEPT",
      },
      {
        id: "b",
        text: "Povolit provoz jen na VKV pásmech",
      },
      {
        id: "c",
        text: "Nahradit narodni radioamatérské licence",
      },
      {
        id: "d",
        text: "Udelit povolení k prodeji radioamatérské techniky",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "HAREC umožňuje vzájemně uznávání zkoušek - radioamater, který složí zkoušku v jedné zemí CEPT na urovni HAREC, nemusí skládat novou zkoušku v jine zemí CEPT.",
    relatedLessonIds: ["cept-02"],
    tags: ["harec", "uznavani", "recall"],
  },
  {
    id: "R-CEP-011",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Ktery dokument definuje obsah (sylabus) zkoušky pro získání HAREC certifikátu?",
    choices: [
      { id: "a", text: "ERC Report 32" },
      { id: "b", text: "T/R 61-01" },
      { id: "c", text: "Radio Regulations ITU" },
      { id: "d", text: "Doporuceni ECC/REC/(05)06" },
    ],
    correctChoiceId: "a",
    explanation:
      "ERC Report 32 definuje zkušební sylabus - temata a rozsah vědomostí, které musí radioamater prokázat pro získání HAREC certifikátu. T/R 61-01 resi licenci, ne obsah zkoušky.",
    relatedLessonIds: ["cept-02"],
    tags: ["erc-report-32", "sylabus", "recall"],
  },
  {
    id: "R-CEP-012",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Ktere tři hlavní oblasti pokryva zkouška HAREC podle ERC Report 32?",
    choices: [
      {
        id: "a",
        text: "Technika, provozní postupy a předpisy, předpisy",
      },
      {
        id: "b",
        text: "Morseovka, antény a šifrování",
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
      "HAREC zkouška zahrnuje tři hlavní části: technickou teorii (elektrotechnika, součástky, obvody, antény...), provozní postupy a předpisy, a předpisy (narodni i mezinárodní). Morseovka již není povinnou součástí zkoušky HAREC.",
    relatedLessonIds: ["cept-02"],
    tags: ["harec", "sylabus", "recall"],
  },
  {
    id: "R-CEP-013",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Radioamater ze země CEPT cestuje do jine země CEPT. Musi skládat novou zkoušku?",
    choices: [
      {
        id: "a",
        text: "Ne, pokud ma platný HAREC certifikát - stačí CEPT licence podle T/R 61-01",
      },
      {
        id: "b",
        text: "Ano, vždy musí složit místní zkoušku",
      },
      {
        id: "c",
        text: "Ne, ale musí zaplatit roční poplatek v navštívené zemí",
      },
      {
        id: "d",
        text: "Ano, ale jen zkoušku z předpisu navštívené země",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Diky CEPT licenci (T/R 61-01) může držitel HAREC provozovat amatérskou stanici v jine zemí CEPT bez další zkoušky. Musi ale dodržovat místní předpisy navštívené země.",
    relatedLessonIds: ["cept-02", "cept-01"],
    tags: ["cept-licence", "vzajemne-uznavani", "application"],
  },
  {
    id: "R-CEP-014",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Jak se liší CEPT licence (T/R 61-01) od dočasného povolení (T/R 61-02)?",
    choices: [
      {
        id: "a",
        text: "T/R 61-01 je pro radioamatéry ze zemí CEPT, T/R 61-02 pro návštěvníky z ne-CEPT zemí",
      },
      {
        id: "b",
        text: "T/R 61-01 je pro KV pásma, T/R 61-02 pro VKV pásma",
      },
      {
        id: "c",
        text: "T/R 61-01 je pro zacatecniky, T/R 61-02 pro pokrocile",
      },
      {
        id: "d",
        text: "T/R 61-01 platí jen 30 dni, T/R 61-02 platí trvale",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "T/R 61-01 umožňuje radioamatérům ze zemí CEPT provozovat v jinych zemích CEPT. T/R 61-02 poskytuje dočasné povolení pro návštěvníky ze zemí mimo CEPT, které toto doporučení přijaly.",
    relatedLessonIds: ["cept-02", "cept-01"],
    tags: ["tr-61-01", "tr-61-02", "porovnani", "application"],
  },
  {
    id: "R-CEP-015",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Co musí radioamater dodržovat pri provozu v zahraničí na základě CEPT licence?",
    choices: [
      {
        id: "a",
        text: "Predpisy navštívené země (kmitočty, výkony, provozní podmínky)",
      },
      {
        id: "b",
        text: "Pouze předpisy sve domovské země",
      },
      {
        id: "c",
        text: "Pouze mezinárodní předpisy ITU",
      },
      {
        id: "d",
        text: "Zadne - CEPT licence osvobozuje od místních předpisu",
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Pri provozu v zahraničí na základě CEPT licence musí radioamater vždy dodržovat předpisy navštívené země - povolena pásma, maximální výkony a provozní podmínky se mohou lišit od domovské země.",
    relatedLessonIds: ["cept-02"],
    tags: ["cept-licence", "predpisy", "application"],
  },
  {
    id: "R-CEP-016",
    examPartId: "regulations",
    sectionId: "cept",
    wording:
      "Ktera organizace zastupuje zájmy radioamatérů na mezinárodním poli a spolupracuje s CEPT?",
    choices: [
      { id: "a", text: "IARU (International Amateur Radio Union)" },
      { id: "b", text: "ETSI (European Telecommunications Standards Institute)" },
      { id: "c", text: "IEEE (Institute of Electrical and Electronics Engineers)" },
      { id: "d", text: "ARRL (American Radio Relay League)" },
    ],
    correctChoiceId: "a",
    explanation:
      "IARU je mezinárodní svaz radioamatérů, který zastupuje zájmy radioamatérů na mezinárodním poli a spolupracuje s organizacemi jako CEPT a ITU. ARRL je pouze americká organizace, ETSI se zabývá normami a IEEE je profesní spolek.",
    relatedLessonIds: ["cept-02"],
    tags: ["iaru", "organizace", "recall"],
  },
];
