import type { Lesson } from "@/lib/types";

export const regulationsCzechLawLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Zakon o elektronickych komunikacich
  // -----------------------------------------------------------------------
  {
    id: "czech-law-01",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 1,
    title: "Zakon o elektronickych komunikacich",
    objective:
      "Porozumet zakladu zakona c. 127/2005 Sb., roli CTU a typum opravneni k provozu amaterske stanice.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "Amaterska radiokomunikacni sluzba v Cesku se ridi zakonem c. 127/2005 Sb. o elektronickych komunikacich. Tento zakon stanovuje pravidla pro vyuzivani radioveho spektra, urcuje pravomoci regulatora (CTU) a definuje typy opravneni k provozu. Kazdy radioamater musi znat zakladni ustanoveni tohoto zakona.",
        note: "Zakon byl novelizovan vicekrat, ale zakladni struktura zustava stejna.",
      },
      {
        type: "select-answer",
        question:
          "Ktery zakon je hlavnim pravnim predpisem upravujicim elektronicke komunikace v CR?",
        choices: [
          { id: "a", text: "Zakon c. 127/2005 Sb." },
          { id: "b", text: "Zakon c. 231/2001 Sb." },
          { id: "c", text: "Zakon c. 40/1964 Sb." },
          { id: "d", text: "Zakon c. 89/2012 Sb." },
        ],
        correctId: "a",
        explanation:
          "Zakon c. 127/2005 Sb. o elektronickych komunikacich je hlavnim predpisem. Ostatni zakony se tykaji rozhlasoveho a televizniho vysilani, obcanskeho zakoniku apod.",
      },
      {
        type: "explain",
        content:
          "Cesky telekomunikacni urad (CTU) je nezavisly regulacni organ. Ma na starosti spravu radioveho spektra, pridelovani kmitoctu, vydavani opravneni a dohled nad dodrzovanim zakona. Pro radioamatery je CTU klicovm uradem - prideluje volaci znacky, stanovuje zkusebni podminky a muze ukladat sankce.",
      },
      {
        type: "fill-blank",
        textBefore: "Nezavisly regulacni organ pro elektronicke komunikace v CR se nazyva",
        blank: "Cesky telekomunikacni urad",
        distractors: [
          "Ministerstvo prumyslu a obchodu",
          "Cesky normalizacni institut",
          "Sprava radioovych kmitoctu",
        ],
        textAfter: "(CTU).",
        explanation:
          "CTU je regulatorem dle zakona c. 127/2005 Sb. Ministerstvo prumyslu a obchodu je nadrizeny organ, ale primo nereguluje.",
      },
      {
        type: "match",
        instruction: "Priradte pravomoci CTU ke spravnemu popisu:",
        pairs: [
          { left: "Sprava spektra", right: "Pridelovani a koordinace kmitoctu" },
          { left: "Opravneni", right: "Vydavani individualnich opravneni k provozu" },
          { left: "Dohled", right: "Kontrola dodrzovani zakona a ukladani sankci" },
          { left: "Zkousky", right: "Stanoveni obsahu a organizace zkousek operatoru" },
        ],
        explanation:
          "CTU ma siroke pravomoci - od technickych (kmitocty) pres administrativni (opravneni) az po represivni (sankce).",
      },
      {
        type: "explain",
        content:
          "Zakon rozlisuje dva typy opravneni: individualni opravneni a vseobecne opravneni. Amaterska radiokomunikacni sluzba vyzaduje individualni opravneni - to znamena, ze kazdy operator musi slozit zkousku a ziskat od CTU konkretni povoleni s pridelenou volaci znackou. Bez individuanlniho opravneni nelze legalne provozovat amaterskou stanici.",
      },
      {
        type: "highlight",
        instruction:
          "Oznacte, co je potreba k legalnimu provozu amaterske stanice v CR:",
        terms: [
          { text: "Individualni opravneni od CTU", correct: true },
          { text: "Slozena prukaz zpusobilosti (zkouska)", correct: true },
          { text: "Pridelena volaci znacka", correct: true },
          { text: "Vyssi odborne vzdelani v elektronice", correct: false },
          { text: "Zivnostensky list", correct: false },
          { text: "Souhlas sousedu", correct: false },
        ],
        explanation:
          "K provozu staci zkouska, opravneni a volaci znacka. Vzdelani, zivnostensky list ani souhlas sousedu nejsou vyzadovany zakonem.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-001",
      },
      {
        type: "reveal",
        prompt: "Jake postihy hrozi za provoz amaterske stanice bez opravneni?",
        answer:
          "CTU muze ulozit pokutu az do vyse 1 000 000 Kc. Navic muze narizdit odstaveni zarizeni a zabavit techniku. Neopravneny provoz je spravni delikt.",
        explanation:
          "Pokuty jsou stanoveny zakonem o elektronickych komunikacich a mohou byt velmi vysoke, zvlaste pri opakovanem poruseni.",
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
  // Lesson 2: Vyhlaska o amaterske radiokomunikacni sluzbe
  // -----------------------------------------------------------------------
  {
    id: "czech-law-02",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 2,
    title: "Vyhlaska o amaterske radiokomunikacni sluzbe",
    objective:
      "Znat tridy operatoru, jejich privilegia, vykonove limity a podminky pro ziskani opravneni.",
    estimatedMinutes: 9,
    slides: [
      {
        type: "explain",
        content:
          "Vyhlaska CTU podrobne upravuje amaterskou radiokomunikacni sluzbu. Rozlisuje dve tridy operatoru: tridu A (HAREC uroven - plny pristup) a tridu N (novice - omezeny pristup). Trida urcuje, jake kmitocty a jaky vykon smi operator pouzivat.",
        note: "HAREC = Harmonised Amateur Radio Examination Certificate - mezinarodne uznavany prukaz.",
      },
      {
        type: "match",
        instruction: "Priradte vlastnosti ke spravne tride operatora:",
        pairs: [
          { left: "Trida A", right: "Pristup ke vsem amaterským pasmum" },
          { left: "Trida N", right: "Pristup pouze k vybranym pasmum" },
          { left: "Trida A", right: "Maximalni vykon 750 W PEP na KV" },
          { left: "Trida N", right: "Maximalni vykon 100 W PEP" },
        ],
        explanation:
          "Trida A je plna licence (HAREC uroven), trida N je omezena licence pro zacatecniky.",
      },
      {
        type: "select-answer",
        question: "Jaky je maximalni povoleny vykon pro operatora tridy N?",
        choices: [
          { id: "a", text: "100 W PEP" },
          { id: "b", text: "750 W PEP" },
          { id: "c", text: "10 W PEP" },
          { id: "d", text: "50 W PEP" },
        ],
        correctId: "a",
        explanation:
          "Trida N ma maximalni vykon 100 W PEP. 750 W PEP je limit pro tridu A na KV pasmech.",
      },
      {
        type: "explain",
        content:
          "Vekove podminky: Pro ziskani tridy N neni stanoven minimalni vek - zkousku muze slozit i dite (se zakonnym zastupcem). Pro tridu A se v praxi vyzaduje vek 15 let a vice, protoze zkouska je narocnejsi a vyzaduje hlubsi technicke znalosti. Zkouska pro tridu A zahrnuje techniku, predpisy a provozni postupy.",
      },
      {
        type: "fill-blank",
        textBefore: "Pro ziskani operatorskeho opravneni tridy N",
        blank: "neni stanoven minimalni vek",
        distractors: [
          "je nutny vek alespon 18 let",
          "je nutny vek alespon 15 let",
          "je nutny vek alespon 12 let",
        ],
        textAfter: ".",
        explanation:
          "Trida N nema vekove omezeni - i mladsi uchazec muze slozit zkousku (se zakonnym zastupcem).",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte spravna tvrzeni o tride A:",
        pool: [
          { text: "Opravnuje k provozu na vsech amaterských pasmech", correct: true },
          { text: "Odpovida mezinarodnimu HAREC prukazu", correct: true },
          { text: "Zkouska zahrnuje techniku, predpisy i provoz", correct: true },
          { text: "Maximalni vykon je 100 W PEP", correct: false },
          { text: "Nevyzaduje zadnou zkousku", correct: false },
          { text: "Je urcena pouze pro zacatecniky", correct: false },
        ],
        explanation:
          "Trida A je plna licence s HAREC uznavanim. Maximalni vykon je 750 W PEP na KV, ne 100 W.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-011",
      },
      {
        type: "order",
        instruction:
          "Seradte kroky k ziskani operatorskeho opravneni tridy A ve spravnem poradi:",
        items: [
          "Priprava na zkousku (studium techniky, predpisu, provozu)",
          "Podani prihlasky ke zkousce u CTU",
          "Slozeni zkousky pred zkusebni komisi CTU",
          "Vydani prukazu zpusobilosti operatora tridy A",
          "Prideleni individualni volaci znacky",
        ],
        explanation:
          "Proces je postupny - od studia pres prihlasku a zkousku az k ziskani prukazu a volaci znacky.",
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
  // Lesson 3: Kmitoctove prideleni CR
  // -----------------------------------------------------------------------
  {
    id: "czech-law-03",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 3,
    title: "Kmitoctove prideleni CR",
    objective:
      "Orientovat se v ceskem kmitoctovem planu, znat vykonove limity a rozlisovat primarni a sekundarni prideleni.",
    estimatedMinutes: 9,
    slides: [
      {
        type: "explain",
        content:
          "Cesky kmitoctovy plan vychazi z mezinarodniho radioveho radu ITU a evropskych harmonizaci CEPT. Amaterska sluzba ma v CR pridelena pasma od kratkych vln (KV) az po mikrovlny. Nektere kmitocty jsou prideleny na primarnim zaklade (amater ma prednost), jine na sekundarnim (amater nesmi rusit primarni uzivatele).",
      },
      {
        type: "select-answer",
        question:
          "Co znamena sekundarni prideleni kmitoctoveho pasma pro amaterskou sluzbu?",
        choices: [
          { id: "a", text: "Amater nesmi zpusobit ruseni primarnimu uzivateli a musi strpet ruseni od nej" },
          { id: "b", text: "Amater ma prednost pred vsemi ostatnimi sluzbami" },
          { id: "c", text: "Pasmo je vyhrazeno pouze pro amatery" },
          { id: "d", text: "Amater smi vysilat pouze v noci" },
        ],
        correctId: "a",
        explanation:
          "Sekundarni prideleni znamena, ze amater nesmi rusit primarni sluzbu a musi akceptovat jeji ruseni. Na primarnim prideleni ma amater rovnocenna prava.",
      },
      {
        type: "match",
        instruction: "Priradte vykonove limity ke spravne kombinaci tridy a pasma:",
        pairs: [
          { left: "Trida A, KV pasma", right: "750 W PEP" },
          { left: "Trida A, VKV/UKV", right: "200 W PEP" },
          { left: "Trida N, povolena pasma", right: "100 W PEP" },
        ],
        explanation:
          "Trida A: az 750 W PEP na KV, 200 W PEP na VKV/UKV. Trida N: max 100 W PEP na povolenych pasmech.",
      },
      {
        type: "explain",
        content:
          "Hlavni KV pasma pro amaterskou sluzbu v CR: 160 m (1,8 MHz), 80 m (3,5 MHz), 40 m (7 MHz), 20 m (14 MHz), 15 m (21 MHz), 10 m (28 MHz). Na VKV: 2 m (144 MHz), 70 cm (432 MHz). Nektora pasma maji specificke podminky - napriklad pasmo 60 m (5 MHz) je omezeno nizky vykonem a poctem kanalu.",
        note: "Na pasmech pro EME (Earth-Moon-Earth) a satelitni provoz mohou platit vyjimky z vykonovych limitu.",
      },
      {
        type: "fill-blank",
        textBefore: "Maximalni povoleny vykon pro operatora tridy A na KV pasmech je",
        blank: "750 W PEP",
        distractors: ["1000 W PEP", "200 W PEP", "500 W PEP"],
        textAfter: ".",
        explanation:
          "750 W PEP je maximalni vykon pro tridu A na kratkych vlnach. Na VKV/UKV je limit 200 W PEP.",
      },
      {
        type: "highlight",
        instruction: "Oznacte pasma, ktera jsou v CR pridelena amaterske sluzbe:",
        terms: [
          { text: "144-146 MHz (2 m)", correct: true },
          { text: "430-440 MHz (70 cm)", correct: true },
          { text: "14,0-14,35 MHz (20 m)", correct: true },
          { text: "88-108 MHz (FM rozhlas)", correct: false },
          { text: "380-400 MHz (TETRA)", correct: false },
          { text: "900 MHz (GSM)", correct: false },
        ],
        explanation:
          "144 MHz, 430 MHz a 14 MHz jsou amaterska pasma. FM rozhlas, TETRA a GSM jsou komercni sluzby.",
      },
      {
        type: "exam-question",
        questionId: "R-CZE-021",
      },
      {
        type: "reveal",
        prompt: "Jake vyjimky z vykonovych limitu existuji pro EME a satelitni provoz?",
        answer:
          "Pro EME (odraz od Mesice) a satelitni provoz mohou byt povoleny vyssi vykony nez standardni limity, ale pouze na zaklade specifickeho povoleni CTU nebo v souladu s vyhlaskovou upravou pro dane pasmo.",
        explanation:
          "EME vyzaduje vyssi vykon kvuli obrovskym ztratam na trase Zeme-Mesic-Zeme. Satelitni provoz ma take specificka pravidla.",
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
  // Lesson 4: Volaci znacky a provozni povinnosti
  // -----------------------------------------------------------------------
  {
    id: "czech-law-04",
    examPartId: "regulations",
    sectionId: "czech-law",
    order: 4,
    title: "Volaci znacky a provozni povinnosti",
    objective:
      "Rozumet strukture ceskych volacich znacek, pravidlum identifikace a povinnostem pri provozu.",
    estimatedMinutes: 9,
    slides: [
      {
        type: "explain",
        content:
          "Ceske amaterske volaci znacky maji strukturu dle mezinarodnich pravidel. Prefix OK1 az OK0 je pridelen operatorum tridy A, OK2 operatorum tridy N. Prefix OL se pouziva pro specialni a klubove stanice. Za prefixem nasleduje jedno az tri pismena jako sufix identifikujici konkretniho operatora.",
      },
      {
        type: "match",
        instruction: "Priradte prefix k typu operatora nebo stanice:",
        pairs: [
          { left: "OK1 az OK0", right: "Operator tridy A (individualni)" },
          { left: "OK2", right: "Operator tridy N (novice)" },
          { left: "OL", right: "Specialni a klubove stanice" },
        ],
        explanation:
          "Cislo za OK urcuje kategorii. OK1-OK0 = trida A, OK2 = trida N, OL = specialni/klubove.",
      },
      {
        type: "select-answer",
        question: "Jak casto se musi radioamater identifikovat volaci znackou behem provozu?",
        choices: [
          { id: "a", text: "Kazdych 10 minut a na zacatku a konci provozu" },
          { id: "b", text: "Jednou za hodinu" },
          { id: "c", text: "Pouze na zacatku provozu" },
          { id: "d", text: "Kazdych 30 minut" },
        ],
        correctId: "a",
        explanation:
          "Predpisy vyzaduji identifikaci volaci znackou kazdych 10 minut a vzdy na zacatku a konci vysilani.",
      },
      {
        type: "explain",
        content:
          "Pri provozu mimo trvale stanoviste se pouzivaji sufixy: /P (portable - prenosny provoz), /M (mobile - mobilni provoz), /MM (maritime mobile), /AM (aeronautical mobile). Napriklad OK1ABC/P znamena, ze operator OK1ABC pracuje prenosne. Pri provozu ze zahranici se uvadi prefix zeme - napriklad DL/OK1ABC pro provoz z Nemecka.",
      },
      {
        type: "fill-blank",
        textBefore: "Operator provozujici stanici prenosne prida ke sve volaci znacce sufix",
        blank: "/P",
        distractors: ["/M", "/MM", "/QRP"],
        textAfter: ".",
        explanation:
          "/P = portable (prenosny), /M = mobile (mobilni), /MM = maritime mobile, /QRP neni oficalni sufix.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte povinnosti radioamatera pri provozu stanice:",
        pool: [
          { text: "Vest stanicni denik (log)", correct: true },
          { text: "Identifikovat se kazdych 10 minut", correct: true },
          { text: "Identifikovat se na zacatku a konci provozu", correct: true },
          { text: "Pouzivat pouze schvalena zarizeni", correct: false },
          { text: "Platit mesicni poplatek za kazdou QSO", correct: false },
          { text: "Hlasit kazde spojeni CTU do 24 hodin", correct: false },
        ],
        explanation:
          "Hlavni povinnosti jsou vedeni deniku a pravidelna identifikace. Radioamater si smi stavet vlastni zarizeni a nehlasi jednotliva spojeni.",
      },
      {
        type: "reveal",
        prompt: "Co musi obsahovat stanicni denik (log)?",
        answer:
          "Stanicni denik musi obsahovat: datum a cas spojeni (UTC), volaci znacku protejsi stanice, pouzity kmitocet nebo pasmo, druh provozu (mod) a pripadne dalsi udaje jako RST report. Denik musi byt dostupny pro kontrolu CTU.",
        explanation:
          "Denik je dulezity doklad o provozu. CTU ho muze vyzadat pri kontrole nebo pri setreni ruseni.",
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
      "Znat pravomoci CTU pri kontrolach, sankce za poruseni predpisu, postup pri hlaseni ruseni a zasady reciprocniho licencovani.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "CTU provadi kontroly amaterských stanic - jak planovane, tak na zaklade stiznosti na ruseni. Inspektori CTU maji pravo vstupovat do prostor, kde je stanice provozovana, kontrolovat technicke parametry vysilani, overovat platnost opravneni a nahlizt do stanicniho deniku. Operator je povinen poskytnout soucinnost.",
      },
      {
        type: "select-answer",
        question: "Co je operator povinen pri kontrole CTU?",
        choices: [
          { id: "a", text: "Poskytnout soucinnost, predlozit opravneni a umoznit kontrolu stanice" },
          { id: "b", text: "Ihned ukoncit provoz a odmontovat antenu" },
          { id: "c", text: "Zaplatit poplatek za kontrolu" },
          { id: "d", text: "Informovat sve sousedy o kontrole" },
        ],
        correctId: "a",
        explanation:
          "Operator musi poskytnout soucinnost - predlozit opravneni, stanicni denik a umoznit kontrolu zarizeni. Neni nutne odmontovat antenu ani platit.",
      },
      {
        type: "explain",
        content:
          "Sankce za poruseni: Za provoz bez opravneni hrozi pokuta az 1 000 000 Kc. Za poruseni podminek opravneni (napr. prekroceni vykonu, provoz mimo pridelena pasma) muze CTU ulozit pokutu nebo odebrat opravneni. Ruseni jinych sluzeb je spravni delikt s moznosti vysoke pokuty.",
      },
      {
        type: "fill-blank",
        textBefore: "Maximalni pokuta za provoz amaterske stanice bez opravneni je",
        blank: "1 000 000 Kc",
        distractors: ["100 000 Kc", "500 000 Kc", "10 000 Kc"],
        textAfter: ".",
        explanation:
          "Zakon c. 127/2005 Sb. stanovi maximalni pokutu 1 000 000 Kc za neopravneny provoz radiove stanice.",
      },
      {
        type: "order",
        instruction: "Seradte kroky pri hlaseni ruseni ve spravnem poradi:",
        items: [
          "Zaznamenat cas, kmitocet a charakter ruseni",
          "Pokusit se identifikovat zdroj ruseni (pokud je to mozne)",
          "Podat hlaseni na CTU s popisem ruseni",
          "CTU provede setreni a mereni",
          "CTU rozhodne o opatrenich k odstraneni ruseni",
        ],
        explanation:
          "Postup je od zaznamu pres identifikaci a hlaseni az k setreni CTU. Operator nesmi zasahovat do ciziho zarizeni.",
      },
      {
        type: "match",
        instruction: "Priradte sankce ke spravnemu typu poruseni:",
        pairs: [
          { left: "Provoz bez opravneni", right: "Pokuta az 1 000 000 Kc" },
          { left: "Prekroceni vykonoveho limitu", right: "Pokuta nebo odebrani opravneni" },
          { left: "Ruseni jinych sluzeb", right: "Spravni delikt s moznosti pokuty" },
          { left: "Nevedeni stanicniho deniku", right: "Poruseni podminek opravneni" },
        ],
        explanation:
          "Kazdy typ poruseni ma odpovidajici sankci. Nejprisnejsi postihy jsou za neopravneny provoz.",
      },
      {
        type: "explain",
        content:
          "Reciprocni licencovani: Drzitele CEPT licence (T/R 61-01) mohou provozovat stanici v CR bez dalsich formalit - staci platna licence a pouziti spravneho prefixu (OK/domaci znacka). Pro operatory ze zemi mimo CEPT se uzavira dvoustranna dohoda nebo se vyzaduje specialni povoleni od CTU. Kazdy radioamater ma take povinnosti v oblasti elektromagneticke kompatibility (EMC).",
      },
      {
        type: "highlight",
        instruction: "Oznacte spravna tvrzeni o reciprocnim licencovani v CR:",
        terms: [
          { text: "CEPT licence opravnuje k provozu v CR", correct: true },
          { text: "Zahranicni operator pouziva prefix OK/", correct: true },
          { text: "EMC povinnosti plati i pro amatery", correct: true },
          { text: "Zahranicni operator nepotrebuje zadne opravneni", correct: false },
          { text: "CEPT licence plati pouze v zemi vydani", correct: false },
        ],
        explanation:
          "CEPT licence umoznuje provoz v clenskych zemich vcetne CR. Zahranicni operator vzdy potrebuje platnou licenci sve zeme.",
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
