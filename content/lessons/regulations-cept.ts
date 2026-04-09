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
      "Pochopit strukturu CEPT, roli ECC a doporučení T/R 61-01 a T/R 61-02 pro radioamatéry.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "CEPT (Conference Europeenne des administrations des Postes et des Telecommunications) je evropská organizace sdružující přibližně 48 členských států. Byla založena v roce 1959 a jejím cílem je harmonizace poštovních a telekomunikačních služeb v Evropě. Pro radioamatéry je CEPT klíčová - díky ní existuje systém vzájemného uznávání licencí.",
        note: "CEPT zahrnuje i země mimo EU, například Turecko, Rusko či země Balkánu.",
      },
      {
        type: "select-answer",
        question: "Co je hlavním posláním organizace CEPT?",
        choices: [
          {
            id: "a",
            text: "Harmonizace telekomunikací a poštovních služeb v Evropě",
          },
          { id: "b", text: "Vydávání radioamatérských licencí" },
          { id: "c", text: "Provozování satelitních družic" },
          { id: "d", text: "Výuka morseovky" },
        ],
        correctId: "a",
        explanation:
          "CEPT se zabývá harmonizací telekomunikací a poštovních služeb. Licence vydávají národní správy, ne CEPT přímo.",
      },
      {
        type: "explain",
        content:
          "V rámci CEPT působí ECC (Electronic Communications Committee) - výbor pro elektronické komunikace. ECC se stará o harmonizaci využívání radiofrekvenčního spektra a satelitních orbit. Vydává doporučení (Recommendations) a rozhodnutí (Decisions), která přijímají jednotlivé členské státy. Pro radioamatéry jsou klíčová doporučení řady T/R 61.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte zkratky k jejich významu:",
        pairs: [
          { left: "CEPT", right: "Evropská konference poštovních a telekomunikačních správ" },
          { left: "ECC", right: "Výbor pro elektronické komunikace" },
          { left: "WG FM", right: "Pracovní skupina pro správu frekvencí" },
          { left: "IARU", right: "Mezinárodní svaz radioamatérů" },
        ],
        explanation:
          "ECC a jeho pracovní skupiny (včetně WG FM - Frequency Management) jsou organizačně součástí CEPT. IARU je nezávislá organizace zastupující radioamatéry.",
      },
      {
        type: "explain",
        content:
          "Doporučení T/R 61-01 zavádí CEPT radioamatérskou licenci. Držitel HAREC certifikátu z jedné země CEPT může provozovat amatérskou stanici v jiné zemi CEPT, aniž by musel žádat o místní licenci. Stačí mít s sebou platnou domovskou licenci s označením CEPT. Musí však dodržovat předpisy navštívené země.",
        note: "T/R 61-01 se týká radioamatérů ze zemí, které jsou členy CEPT a přijaly toto doporučení.",
      },
      {
        type: "fill-blank",
        textBefore: "Doporučení T/R 61-01 zavádí",
        blank: "CEPT radioamatérskou licenci",
        distractors: [
          "zkušební sylabus HAREC",
          "povinnou morseovku",
          "mezinárodní volací znaky",
        ],
        textAfter:
          "pro provoz v jiných zemích CEPT.",
        explanation:
          "T/R 61-01 je základem systému CEPT licence - umožňuje provoz bez místní licence při cestování po zemích CEPT.",
      },
      {
        type: "explain",
        content:
          "Doporučení T/R 61-02 řeší situaci radioamatérů ze zemí, které nejsou členy CEPT nebo nepřijaly T/R 61-01. Díky T/R 61-02 mohou tito návštěvníci získat dočasné povolení k provozu v zemi CEPT. Podmínka je, že mají HAREC certifikát nebo ekvivalentní kvalifikaci.",
      },
      {
        type: "highlight",
        instruction:
          "Označte pravdivá tvrzení o doporučeních T/R 61-01 a T/R 61-02:",
        terms: [
          { text: "T/R 61-01 je pro radioamatéry ze zemí CEPT", correct: true },
          { text: "T/R 61-02 je pro návštěvníky z ne-CEPT zemí", correct: true },
          { text: "T/R 61-01 vyžaduje HAREC certifikát", correct: true },
          { text: "T/R 61-02 platí pouze na KV pásmech", correct: false },
          { text: "T/R 61-01 nahradí domovskou licenci", correct: false },
        ],
        explanation:
          "T/R 61-01 i T/R 61-02 vyžadují HAREC. T/R 61-02 není omezeno na KV pásma. CEPT licence doplňuje, ale nenahradí domovskou licenci.",
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
  // Lesson 2: HAREC a vzájemné uznávání
  // -----------------------------------------------------------------------
  {
    id: "cept-02",
    examPartId: "regulations",
    sectionId: "cept",
    order: 2,
    title: "HAREC a vzájemné uznávání",
    objective:
      "Vysvětlit účel certifikátu HAREC, princip vzájemného uznávání licencí a roli ERC Report 32.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "HAREC (Harmonised Amateur Radio Examination Certificate) je harmonizovaný certifikát, který prokazuje, že jeho držitel složil radioamatérskou zkoušku podle jednotného evropského standardu. Díky HAREC certifikátu radioamatér nemusí skládat novou zkoušku při stěhování se do jiné země CEPT - jeho kvalifikace je automaticky uznána.",
        note: "HAREC je certifikát o kvalifikaci, ne licence k provozu. Licenci vydává vždy národní správa.",
      },
      {
        type: "select-answer",
        question: "Co přesně je HAREC?",
        choices: [
          {
            id: "a",
            text: "Harmonizovaný certifikát o složení radioamatérské zkoušky",
          },
          { id: "b", text: "Mezinárodní radioamatérská licence" },
          { id: "c", text: "Volací znak pro provoz v zahraničí" },
          { id: "d", text: "Organizace provozující zkoušky" },
        ],
        correctId: "a",
        explanation:
          "HAREC je certifikát (osvědčení), ne licence. Licence se vydává na základě certifikátu národní správou.",
      },
      {
        type: "explain",
        content:
          "Obsah zkoušky HAREC je definován v dokumentu ERC Report 32. Tento sylabus specifikuje tři hlavní oblasti: technickou teorii (elektrotechnika, součástky, přijímače, vysílače, antény, šíření vln, měření, rušení, bezpečnost), provozní postupy (provozní pravidla, Q-kódy, hláskovací abeceda) a předpisy (národní i mezinárodní). Každá země CEPT vytvoří zkoušku pokrývající všechna témata ERC Report 32.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte oblasti, které patří do zkoušky HAREC podle ERC Report 32:",
        pool: [
          { text: "Technická teorie", correct: true },
          { text: "Provozní postupy a předpisy", correct: true },
          { text: "Předpisy (národní a mezinárodní)", correct: true },
          { text: "Programování v jazyce C", correct: false },
          { text: "Stavba antén ze dřeva", correct: false },
          { text: "Dějiny radioamatérství", correct: false },
        ],
        explanation:
          "ERC Report 32 definuje tři pilíře zkoušky: techniku, provoz a předpisy. Programování, stavba antén ani historie nejsou součástí HAREC zkoušky.",
      },
      {
        type: "reveal",
        prompt:
          "Proč je systém HAREC výhodný pro radioamatéry, kteří cestují nebo se stěhují?",
        answer:
          "Držitel HAREC nemusí skládat novou zkoušku v jiné zemi CEPT. Jeho kvalifikace je automaticky uznána díky vzájemnému uznávání. Při cestování může provozovat na základě CEPT licence (T/R 61-01), při stěhování může požádat o místní licenci bez další zkoušky.",
        explanation:
          "Vzájemné uznávání šetří čas i náklady - bez HAREC by radioamatér musel skládat zkoušku v každé zemi zvlášť.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte dokument k jeho účelu:",
        pairs: [
          { left: "ERC Report 32", right: "Definuje sylabus zkoušky HAREC" },
          { left: "T/R 61-01", right: "CEPT licence pro země CEPT" },
          { left: "T/R 61-02", right: "Dočasné povolení pro ne-CEPT návštěvníky" },
          { left: "HAREC certifikát", right: "Potvrzení o složení harmonizované zkoušky" },
        ],
        explanation:
          "Každý dokument má odlišný účel: ERC Report 32 = co se zkouší, HAREC = doklad o úspěšné zkoušce, T/R 61-01 a 61-02 = jak licenci použít v zahraničí.",
      },
      {
        type: "order",
        instruction:
          "Seřaďte kroky, které radioamatér absolvuje od zkoušky po provoz v zahraničí:",
        items: [
          "Složí zkoušku podle sylabu ERC Report 32",
          "Obdrží HAREC certifikát",
          "Získá národní radioamatérskou licenci s označením CEPT",
          "Provozuje v jiné zemi CEPT na základě T/R 61-01",
        ],
        explanation:
          "Proces začíná zkouškou, pokračuje získáním HAREC certifikátu a národní licence, a končí možností provozovat v zahraničí díky CEPT licenci.",
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
