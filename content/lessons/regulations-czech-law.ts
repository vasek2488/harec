import type { Lesson } from "@/lib/types";

export const regulationsCzechLawLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Zákon o elektronických komunikacích
  // -----------------------------------------------------------------------
  {
    id: "czech-law-01",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 1,
    title: "Zákon o elektronických komunikacích",
    objective:
      "Porozumět základu zákona č. 127/2005 Sb., roli ČTÚ a typům oprávnění k provozu amatérské stanice.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "Amatérská radiokomunikační služba v Česku se řídí zákonem č. 127/2005 Sb. o elektronických komunikacích. Tento zákon stanovuje pravidla pro využívání rádiového spektra, určuje pravomoci regulátora (ČTÚ) a definuje typy oprávnění k provozu. Každý radioamatér musí znát základní ustanovení tohoto zákona.",
        note: "Zákon byl novelizován vícekrát, ale základní struktura zůstává stejná.",
      },
      {
        type: "select-answer",
        question:
          "Který zákon je hlavním právním předpisem upravujícím elektronické komunikace v ČR?",
        choices: [
          { id: "a", text: "Zákon č. 127/2005 Sb." },
          { id: "b", text: "Zákon č. 231/2001 Sb." },
          { id: "c", text: "Zákon č. 40/1964 Sb." },
          { id: "d", text: "Zákon č. 89/2012 Sb." },
        ],
        correctId: "a",
        explanation:
          "Zákon č. 127/2005 Sb. o elektronických komunikacích je hlavním předpisem. Ostatní zákony se týkají rozhlasového a televizního vysílání, občanského zákoníku apod.",
      },
      {
        type: "explain",
        content:
          "Český telekomunikační úřad (ČTÚ) je nezávislý regulační orgán. Má na starosti správu rádiového spektra, přidělování kmitočtů, vydávání oprávnění a dohled nad dodržováním zákona. Pro radioamatéry je ČTÚ klíčovým úřadem - přiděluje volací značky, stanovuje zkušební podmínky a může ukládat sankce.",
      },
      {
        type: "fill-blank",
        textBefore: "Nezávislý regulační orgán pro elektronické komunikace v ČR se nazývá",
        blank: "Český telekomunikační úřad",
        distractors: [
          "Ministerstvo průmyslu a obchodu",
          "Český normalizační institut",
          "Správa rádiových kmitočtů",
        ],
        textAfter: "(ČTÚ).",
        explanation:
          "ČTÚ je regulátorem dle zákona č. 127/2005 Sb. Ministerstvo průmyslu a obchodu je nadřízený orgán, ale přímo nereguluje.",
      },
      {
        type: "match",
        instruction: "Přiřaďte pravomoci ČTÚ ke správnému popisu:",
        pairs: [
          { left: "Správa spektra", right: "Přidělování a koordinace kmitočtů" },
          { left: "Oprávnění", right: "Vydávání individuálních oprávnění k provozu" },
          { left: "Dohled", right: "Kontrola dodržování zákona a ukládání sankcí" },
          { left: "Zkoušky", right: "Stanovení obsahu a organizace zkoušek operátorů" },
        ],
        explanation:
          "ČTÚ má široké pravomoci - od technických (kmitočty) přes administrativní (oprávnění) až po represivní (sankce).",
      },
      {
        type: "explain",
        content:
          "Zákon rozlišuje dva typy oprávnění: individuální oprávnění a všeobecné oprávnění. Amatérská radiokomunikační služba vyžaduje individuální oprávnění - to znamená, že každý operátor musí složit zkoušku a získat od ČTÚ konkrétní povolení s přidělenou volací značkou. Bez individuálního oprávnění nelze legálně provozovat amatérskou stanici.",
      },
      {
        type: "highlight",
        instruction:
          "Označte, co je potřeba k legálnímu provozu amatérské stanice v ČR:",
        terms: [
          { text: "Individuální oprávnění od ČTÚ", correct: true },
          { text: "Složený průkaz způsobilosti (zkouška)", correct: true },
          { text: "Přidělená volací značka", correct: true },
          { text: "Vyšší odborné vzdělání v elektronice", correct: false },
          { text: "Živnostenský list", correct: false },
          { text: "Souhlas sousedů", correct: false },
        ],
        explanation:
          "K provozu stačí zkouška, oprávnění a volací značka. Vzdělání, živnostenský list ani souhlas sousedů nejsou vyžadovány zákonem.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-001",
      },
      {
        type: "reveal",
        prompt: "Jaké postihy hrozí za provoz amatérské stanice bez oprávnění?",
        answer:
          "ČTÚ může uložit pokutu až do výše 1 000 000 Kč. Navíc může nařídit odstavení zařízení a zabavit techniku. Neoprávněný provoz je správní delikt.",
        explanation:
          "Pokuty jsou stanoveny zákonem o elektronických komunikacích a mohou být velmi vysoké, zvláště při opakovaném porušení.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-005",
      },
    ],
    relatedQuestionIds: [
      "R-CZE-001", "R-CZE-002", "R-CZE-003", "R-CZE-004", "R-CZE-005",
      "R-CZE-006", "R-CZE-007", "R-CZE-008", "R-CZE-009", "R-CZE-010",
    ],
    tags: ["zakon", "CTU", "opravneni", "regulace", "127/2005"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: Vyhláška o amatérské radiokomunikační službě
  // -----------------------------------------------------------------------
  {
    id: "czech-law-02",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 2,
    title: "Vyhláška o amatérské radiokomunikační službě",
    objective:
      "Znát třídy operátorů, jejich privilegia, výkonové limity a podmínky pro získání oprávnění.",
    estimatedMinutes: 9,
    slides: [
      {
        type: "explain",
        content:
          "Vyhláška ČTÚ podrobně upravuje amatérskou radiokomunikační službu. Rozlišuje dvě třídy operátorů: třídu A (HAREC úroveň - plný přístup) a třídu N (novice - omezený přístup). Třída určuje, jaké kmitočty a jaký výkon smí operátor používat.",
        note: "HAREC = Harmonised Amateur Radio Examination Certificate - mezinárodně uznávaný průkaz.",
      },
      {
        type: "match",
        instruction: "Přiřaďte vlastnosti ke správné třídě operátora:",
        pairs: [
          { left: "Třída A", right: "Přístup ke všem amatérským pásmům" },
          { left: "Třída N", right: "Přístup pouze k vybraným pásmům" },
          { left: "Třída A", right: "Maximální výkon 750 W PEP na KV" },
          { left: "Třída N", right: "Maximální výkon 100 W PEP" },
        ],
        explanation:
          "Třída A je plná licence (HAREC úroveň), třída N je omezená licence pro začátečníky.",
      },
      {
        type: "select-answer",
        question: "Jaký je maximální povolený výkon pro operátora třídy N?",
        choices: [
          { id: "a", text: "100 W PEP" },
          { id: "b", text: "750 W PEP" },
          { id: "c", text: "10 W PEP" },
          { id: "d", text: "50 W PEP" },
        ],
        correctId: "a",
        explanation:
          "Třída N má maximální výkon 100 W PEP. 750 W PEP je limit pro třídu A na KV pásmech.",
      },
      {
        type: "explain",
        content:
          "Věkové podmínky: Pro získání třídy N není stanoven minimální věk - zkoušku může složit i dítě (se zákonným zástupcem). Pro třídu A se v praxi vyžaduje věk 15 let a více, protože zkouška je náročnější a vyžaduje hlubší technické znalosti. Zkouška pro třídu A zahrnuje techniku, předpisy a provozní postupy.",
      },
      {
        type: "fill-blank",
        textBefore: "Pro získání operátorského oprávnění třídy N",
        blank: "není stanoven minimální věk",
        distractors: [
          "je nutný věk alespoň 18 let",
          "je nutný věk alespoň 15 let",
          "je nutný věk alespoň 12 let",
        ],
        textAfter: ".",
        explanation:
          "Třída N nemá věkové omezení - i mladší uchazeč může složit zkoušku (se zákonným zástupcem).",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte správná tvrzení o třídě A:",
        pool: [
          { text: "Opravňuje k provozu na všech amatérských pásmech", correct: true },
          { text: "Odpovídá mezinárodnímu HAREC průkazu", correct: true },
          { text: "Zkouška zahrnuje techniku, předpisy i provoz", correct: true },
          { text: "Maximální výkon je 100 W PEP", correct: false },
          { text: "Nevyžaduje žádnou zkoušku", correct: false },
          { text: "Je určena pouze pro začátečníky", correct: false },
        ],
        explanation:
          "Třída A je plná licence s HAREC uznáváním. Maximální výkon je 750 W PEP na KV, ne 100 W.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-011",
      },
      {
        type: "order",
        instruction:
          "Seřaďte kroky k získání operátorského oprávnění třídy A ve správném pořadí:",
        items: [
          "Příprava na zkoušku (studium techniky, předpisů, provozu)",
          "Podání přihlášky ke zkoušce u ČTÚ",
          "Složení zkoušky před zkušební komisí ČTÚ",
          "Vydání průkazu způsobilosti operátora třídy A",
          "Přidělení individuální volací značky",
        ],
        explanation:
          "Proces je postupný - od studia přes přihlášku a zkoušku až k získání průkazu a volací značky.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-015",
      },
    ],
    relatedQuestionIds: [
      "R-CZE-011", "R-CZE-012", "R-CZE-013", "R-CZE-014", "R-CZE-015",
      "R-CZE-016", "R-CZE-017", "R-CZE-018", "R-CZE-019", "R-CZE-020",
    ],
    tags: ["trida-A", "trida-N", "HAREC", "vyhlaska", "opravneni", "zkouska"],
  },

  // -----------------------------------------------------------------------
  // Lesson 3: Kmitočtové přidělení ČR
  // -----------------------------------------------------------------------
  {
    id: "czech-law-03",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 3,
    title: "Kmitočtové přidělení ČR",
    objective:
      "Orientovat se v českém kmitočtovém plánu, znát výkonové limity a rozlišovat primární a sekundární přidělení.",
    estimatedMinutes: 9,
    slides: [
      {
        type: "explain",
        content:
          "Český kmitočtový plán vychází z mezinárodního rádiového řádu ITU a evropských harmonizací CEPT. Amatérská služba má v ČR přidělena pásma od krátkých vln (KV) až po mikrovlny. Některé kmitočty jsou přiděleny na primárním základě (amatér má přednost), jiné na sekundárním (amatér nesmí rušit primární uživatele).",
      },
      {
        type: "select-answer",
        question:
          "Co znamená sekundární přidělení kmitočtového pásma pro amatérskou službu?",
        choices: [
          { id: "a", text: "Amatér nesmí způsobit rušení primárnímu uživateli a musí strpět rušení od něj" },
          { id: "b", text: "Amatér má přednost před všemi ostatními službami" },
          { id: "c", text: "Pásmo je vyhrazeno pouze pro amatéry" },
          { id: "d", text: "Amatér smí vysílat pouze v noci" },
        ],
        correctId: "a",
        explanation:
          "Sekundární přidělení znamená, že amatér nesmí rušit primární službu a musí akceptovat její rušení. Na primárním přidělení má amatér rovnocenná práva.",
      },
      {
        type: "match",
        instruction: "Přiřaďte výkonové limity ke správné kombinaci třídy a pásma:",
        pairs: [
          { left: "Třída A, KV pásma", right: "750 W PEP" },
          { left: "Třída A, VKV/UKV", right: "200 W PEP" },
          { left: "Třída N, povolená pásma", right: "100 W PEP" },
        ],
        explanation:
          "Třída A: až 750 W PEP na KV, 200 W PEP na VKV/UKV. Třída N: max 100 W PEP na povolených pásmech.",
      },
      {
        type: "explain",
        content:
          "Hlavní KV pásma pro amatérskou službu v ČR: 160 m (1,8 MHz), 80 m (3,5 MHz), 40 m (7 MHz), 20 m (14 MHz), 15 m (21 MHz), 10 m (28 MHz). Na VKV: 2 m (144 MHz), 70 cm (432 MHz). Některá pásma mají specifické podmínky - například pásmo 60 m (5 MHz) je omezeno nízkým výkonem a počtem kanálů.",
        note: "Na pásmech pro EME (Earth-Moon-Earth) a satelitní provoz mohou platit výjimky z výkonových limitů.",
      },
      {
        type: "fill-blank",
        textBefore: "Maximální povolený výkon pro operátora třídy A na KV pásmech je",
        blank: "750 W PEP",
        distractors: ["1000 W PEP", "200 W PEP", "500 W PEP"],
        textAfter: ".",
        explanation:
          "750 W PEP je maximální výkon pro třídu A na krátkých vlnách. Na VKV/UKV je limit 200 W PEP.",
      },
      {
        type: "highlight",
        instruction: "Označte pásma, která jsou v ČR přidělena amatérské službě:",
        terms: [
          { text: "144-146 MHz (2 m)", correct: true },
          { text: "430-440 MHz (70 cm)", correct: true },
          { text: "14,0-14,35 MHz (20 m)", correct: true },
          { text: "88-108 MHz (FM rozhlas)", correct: false },
          { text: "380-400 MHz (TETRA)", correct: false },
          { text: "900 MHz (GSM)", correct: false },
        ],
        explanation:
          "144 MHz, 430 MHz a 14 MHz jsou amatérská pásma. FM rozhlas, TETRA a GSM jsou komerční služby.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-021",
      },
      {
        type: "reveal",
        prompt: "Jaké výjimky z výkonových limitů existují pro EME a satelitní provoz?",
        answer:
          "Pro EME (odraz od Měsíce) a satelitní provoz mohou být povoleny vyšší výkony než standardní limity, ale pouze na základě specifického povolení ČTÚ nebo v souladu s vyhláškou pro dané pásmo.",
        explanation:
          "EME vyžaduje vyšší výkon kvůli obrovským ztrátám na trase Země-Měsíc-Země. Satelitní provoz má také specifická pravidla.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-025",
      },
    ],
    relatedQuestionIds: [
      "R-CZE-021", "R-CZE-022", "R-CZE-023", "R-CZE-024", "R-CZE-025",
      "R-CZE-026", "R-CZE-027", "R-CZE-028", "R-CZE-029", "R-CZE-030",
    ],
    tags: ["kmitocty", "pasma", "vykon", "prideleni", "band-plan"],
  },

  // -----------------------------------------------------------------------
  // Lesson 4: Volací značky a provozní povinnosti
  // -----------------------------------------------------------------------
  {
    id: "czech-law-04",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 4,
    title: "Volací značky a provozní povinnosti",
    objective:
      "Rozumět struktuře českých volacích značek, pravidlům identifikace a povinnostem při provozu.",
    estimatedMinutes: 9,
    slides: [
      {
        type: "explain",
        content:
          "České amatérské volací značky mají strukturu dle mezinárodních pravidel. Prefix OK1 až OK0 je přidělen operátorům třídy A, OK2 operátorům třídy N. Prefix OL se používá pro speciální a klubové stanice. Za prefixem následuje jedno až tři písmena jako sufix identifikující konkrétního operátora.",
      },
      {
        type: "match",
        instruction: "Přiřaďte prefix k typu operátora nebo stanice:",
        pairs: [
          { left: "OK1 až OK0", right: "Operátor třídy A (individuální)" },
          { left: "OK2", right: "Operátor třídy N (novice)" },
          { left: "OL", right: "Speciální a klubové stanice" },
        ],
        explanation:
          "Číslo za OK určuje kategorii. OK1-OK0 = třída A, OK2 = třída N, OL = speciální/klubové.",
      },
      {
        type: "select-answer",
        question: "Jak často se musí radioamatér identifikovat volací značkou během provozu?",
        choices: [
          { id: "a", text: "Každých 10 minut a na začátku a konci provozu" },
          { id: "b", text: "Jednou za hodinu" },
          { id: "c", text: "Pouze na začátku provozu" },
          { id: "d", text: "Každých 30 minut" },
        ],
        correctId: "a",
        explanation:
          "Předpisy vyžadují identifikaci volací značkou každých 10 minut a vždy na začátku a konci vysílání.",
      },
      {
        type: "explain",
        content:
          "Při provozu mimo trvalé stanoviště se používají sufixy: /P (portable - přenosný provoz), /M (mobile - mobilní provoz), /MM (maritime mobile), /AM (aeronautical mobile). Například OK1ABC/P znamená, že operátor OK1ABC pracuje přenosně. Při provozu ze zahraničí se uvádí prefix země - například DL/OK1ABC pro provoz z Německa.",
      },
      {
        type: "fill-blank",
        textBefore: "Operátor provozující stanici přenosně přidá ke své volací značce sufix",
        blank: "/P",
        distractors: ["/M", "/MM", "/QRP"],
        textAfter: ".",
        explanation:
          "/P = portable (přenosný), /M = mobile (mobilní), /MM = maritime mobile, /QRP není oficiální sufix.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte povinnosti radioamatéra při provozu stanice:",
        pool: [
          { text: "Vést staniční deník (log)", correct: true },
          { text: "Identifikovat se každých 10 minut", correct: true },
          { text: "Identifikovat se na začátku a konci provozu", correct: true },
          { text: "Používat pouze schválená zařízení", correct: false },
          { text: "Platit měsíční poplatek za každou QSO", correct: false },
          { text: "Hlásit každé spojení ČTÚ do 24 hodin", correct: false },
        ],
        explanation:
          "Hlavní povinnosti jsou vedení deníku a pravidelná identifikace. Radioamatér si smí stavět vlastní zařízení a nehlásí jednotlivá spojení.",
      },
      {
        type: "reveal",
        prompt: "Co musí obsahovat staniční deník (log)?",
        answer:
          "Staniční deník musí obsahovat: datum a čas spojení (UTC), volací značku protější stanice, použitý kmitočet nebo pásmo, druh provozu (mód) a případně další údaje jako RST report. Deník musí být dostupný pro kontrolu ČTÚ.",
        explanation:
          "Deník je důležitý doklad o provozu. ČTÚ ho může vyžádat při kontrole nebo při šetření rušení.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-031",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-035",
      },
    ],
    relatedQuestionIds: [
      "R-CZE-031", "R-CZE-032", "R-CZE-033", "R-CZE-034", "R-CZE-035",
      "R-CZE-036", "R-CZE-037", "R-CZE-038", "R-CZE-039",
    ],
    tags: ["volaci-znacky", "identifikace", "log", "provoz", "prefix"],
  },

  // -----------------------------------------------------------------------
  // Lesson 5: Kontrola a sankce
  // -----------------------------------------------------------------------
  {
    id: "czech-law-05",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 5,
    title: "Kontrola a sankce",
    objective:
      "Znát pravomoci ČTÚ při kontrolách, sankce za porušení předpisů, postup při hlášení rušení a zásady recipročního licencování.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "ČTÚ provádí kontroly amatérských stanic - jak plánované, tak na základě stížností na rušení. Inspektoři ČTÚ mají právo vstupovat do prostor, kde je stanice provozována, kontrolovat technické parametry vysílání, ověřovat platnost oprávnění a nahlížet do staničního deníku. Operátor je povinen poskytnout součinnost.",
      },
      {
        type: "select-answer",
        question: "Co je operátor povinen při kontrole ČTÚ?",
        choices: [
          { id: "a", text: "Poskytnout součinnost, předložit oprávnění a umožnit kontrolu stanice" },
          { id: "b", text: "Ihned ukončit provoz a odmontovat anténu" },
          { id: "c", text: "Zaplatit poplatek za kontrolu" },
          { id: "d", text: "Informovat své sousedy o kontrole" },
        ],
        correctId: "a",
        explanation:
          "Operátor musí poskytnout součinnost - předložit oprávnění, staniční deník a umožnit kontrolu zařízení. Není nutné odmontovat anténu ani platit.",
      },
      {
        type: "explain",
        content:
          "Sankce za porušení: Za provoz bez oprávnění hrozí pokuta až 1 000 000 Kč. Za porušení podmínek oprávnění (např. překročení výkonu, provoz mimo přidělená pásma) může ČTÚ uložit pokutu nebo odebrat oprávnění. Rušení jiných služeb je správní delikt s možností vysoké pokuty.",
      },
      {
        type: "fill-blank",
        textBefore: "Maximální pokuta za provoz amatérské stanice bez oprávnění je",
        blank: "1 000 000 Kč",
        distractors: ["100 000 Kč", "500 000 Kč", "10 000 Kč"],
        textAfter: ".",
        explanation:
          "Zákon č. 127/2005 Sb. stanoví maximální pokutu 1 000 000 Kč za neoprávněný provoz rádiové stanice.",
      },
      {
        type: "order",
        instruction: "Seřaďte kroky při hlášení rušení ve správném pořadí:",
        items: [
          "Zaznamenat čas, kmitočet a charakter rušení",
          "Pokusit se identifikovat zdroj rušení (pokud je to možné)",
          "Podat hlášení na ČTÚ s popisem rušení",
          "ČTÚ provede šetření a měření",
          "ČTÚ rozhodne o opatřeních k odstranění rušení",
        ],
        explanation:
          "Postup je od záznamu přes identifikaci a hlášení až k šetření ČTÚ. Operátor nesmí zasahovat do cizího zařízení.",
      },
      {
        type: "match",
        instruction: "Přiřaďte sankce ke správnému typu porušení:",
        pairs: [
          { left: "Provoz bez oprávnění", right: "Pokuta až 1 000 000 Kč" },
          { left: "Překročení výkonového limitu", right: "Pokuta nebo odebrání oprávnění" },
          { left: "Rušení jiných služeb", right: "Správní delikt s možností pokuty" },
          { left: "Nevedení staničního deníku", right: "Porušení podmínek oprávnění" },
        ],
        explanation:
          "Každý typ porušení má odpovídající sankci. Nejpřísnější postihy jsou za neoprávněný provoz.",
      },
      {
        type: "explain",
        content:
          "Reciproční licencování: Držitelé CEPT licence (T/R 61-01) mohou provozovat stanici v ČR bez dalších formalit - stačí platná licence a použití správného prefixu (OK/domácí značka). Pro operátory ze zemí mimo CEPT se uzavírá dvoustranná dohoda nebo se vyžaduje speciální povolení od ČTÚ. Každý radioamatér má také povinnosti v oblasti elektromagnetické kompatibility (EMC).",
      },
      {
        type: "highlight",
        instruction: "Označte správná tvrzení o recipročním licencování v ČR:",
        terms: [
          { text: "CEPT licence opravňuje k provozu v ČR", correct: true },
          { text: "Zahraniční operátor používá prefix OK/", correct: true },
          { text: "EMC povinnosti platí i pro amatéry", correct: true },
          { text: "Zahraniční operátor nepotřebuje žádné oprávnění", correct: false },
          { text: "CEPT licence platí pouze v zemi vydání", correct: false },
        ],
        explanation:
          "CEPT licence umožňuje provoz v členských zemích včetně ČR. Zahraniční operátor vždy potřebuje platnou licenci své země.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-040",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-045",
      },
    ],
    relatedQuestionIds: [
      "R-CZE-040", "R-CZE-041", "R-CZE-042", "R-CZE-043", "R-CZE-044",
      "R-CZE-045", "R-CZE-046", "R-CZE-047", "R-CZE-048",
    ],
    tags: ["kontrola", "sankce", "CTU", "ruseni", "CEPT", "EMC", "reciprocita"],
  },
];
