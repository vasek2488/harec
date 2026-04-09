import type { Question } from "@/lib/types";

export const regulationsCzechLawQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // czech-law-01: Zakon, CTU, authorization (R-CZE-001 to R-CZE-010)
  // -----------------------------------------------------------------------
  {
    id: "R-CZE-001",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Ktery zákon je hlavním právním předpisem upravujicim elektronické komunikace v CR?",
    choices: [
      { id: "a", text: "Zakon c. 127/2005 Sb." },
      { id: "b", text: "Zakon c. 231/2001 Sb." },
      { id: "c", text: "Zakon c. 183/2006 Sb." },
      { id: "d", text: "Zakon c. 89/2012 Sb." },
    ],
    correctChoiceId: "a",
    explanation:
      "Zakon c. 127/2005 Sb. o elektronických komunikacich je hlavním předpisem. 231/2001 je zákon o rozhlasu a televizi, 183/2006 je stavební zákon, 89/2012 je občanský zákoník.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["zakon", "regulace"],
  },
  {
    id: "R-CZE-002",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Ktery orgán je regulátorem elektronických komunikaci v Ceske republice?",
    choices: [
      { id: "a", text: "Cesky telekomunikacni urad (CTU)" },
      { id: "b", text: "Ministerstvo prumyslu a obchodu" },
      { id: "c", text: "Ceska posta" },
      { id: "d", text: "Spravni rad Ceska" },
    ],
    correctChoiceId: "a",
    explanation:
      "CTU (Cesky telekomunikační úřad) je nezávislý regulační orgán pro elektronické komunikace. Ministerstvo je nadřízený orgán, ale přímo nereguluje.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["CTU", "regulator"],
  },
  {
    id: "R-CZE-003",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jake oprávnění je potřeba k provozu amatérské radiostanice v CR?",
    choices: [
      { id: "a", text: "Individualni opravneni vydane CTU" },
      { id: "b", text: "Vseobecne opravneni (bez zadosti)" },
      { id: "c", text: "Zivnostensky list" },
      { id: "d", text: "Povoleni od obecniho uradu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Amaterska služba vyžaduje individuální oprávnění od CTU na základě slozene zkoušky. Vseobecne oprávnění se týká jinych služeb (např. Wi-Fi, PMR).",
    relatedLessonIds: ["czech-law-01"],
    tags: ["opravneni", "individualni"],
  },
  {
    id: "R-CZE-004",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Ktera z následujících cinnosti NENI v pravomocí CTU?",
    choices: [
      { id: "a", text: "Stanoveni cen radioamaterského zarizeni" },
      { id: "b", text: "Pridelovani kmitoctu" },
      { id: "c", text: "Vydavani individualnich opravneni" },
      { id: "d", text: "Ukladani pokut za poruseni zakona" },
    ],
    correctChoiceId: "a",
    explanation:
      "CTU neregulují ceny zařízení - to je vec volného trhu. CTU ale přiděluje kmitočty, vydává oprávnění a ukládá pokuty.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["CTU", "pravomoci"],
  },
  {
    id: "R-CZE-005",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Co hrozi za provoz amatérské radiostanice bez platného oprávnění?",
    choices: [
      { id: "a", text: "Pokuta az 1 000 000 Kc" },
      { id: "b", text: "Pokuta az 10 000 Kc" },
      { id: "c", text: "Pouze napomenuti" },
      { id: "d", text: "Zadna sankce, pokud nedojde k ruseni" },
    ],
    correctChoiceId: "a",
    explanation:
      "Za neoprávněný provoz radiostanice může CTU uložit pokutu az 1 000 000 Kc dle zákona c. 127/2005 Sb.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["sankce", "pokuta"],
  },
  {
    id: "R-CZE-006",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Co je podmínkou pro získání individuálního oprávnění k provozu amatérské stanice?",
    choices: [
      { id: "a", text: "Slozeni zkousky odborne zpusobilosti pred CTU" },
      { id: "b", text: "Absolvovani kurzu na vysoke skole" },
      { id: "c", text: "Zaplaceni rocniho poplatku" },
      { id: "d", text: "Doporuceni od jineho radioamatera" },
    ],
    correctChoiceId: "a",
    explanation:
      "Zakladni podmínkou je složení zkoušky odborné způsobilosti. Kurz na VS není vyžadován, poplatek se platí az za oprávnění, doporučení není potřeba.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["zkouska", "opravneni"],
  },
  {
    id: "R-CZE-007",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky je rozdil mezi individuálním a vseobecnym oprávněním?",
    choices: [
      { id: "a", text: "Individualni se vydava konkretni osobe po zkousce, vseobecne plati obecne bez zadosti" },
      { id: "b", text: "Individualni je zdarma, vseobecne je za poplatek" },
      { id: "c", text: "Individualni plati jen na rok, vseobecne na dobu neurcitou" },
      { id: "d", text: "Individualni se tyka pouze KV pasem, vseobecne vsech pasem" },
    ],
    correctChoiceId: "a",
    explanation:
      "Individualni oprávnění se vydává konkrétnímu operatorovi po složení zkoušky. Vseobecne oprávnění (např. pro Wi-Fi) platí pro každého bez žádosti.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["opravneni", "individualni", "vseobecne"],
  },
  {
    id: "R-CZE-008",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Kdo přiděluje volaci značky amaterskim stanicím v CR?",
    choices: [
      { id: "a", text: "Cesky telekomunikacni urad (CTU)" },
      { id: "b", text: "Cesky radioklub (CRK)" },
      { id: "c", text: "Mezinarodni telekomunikacni unie (ITU)" },
      { id: "d", text: "Operator si voli sam" },
    ],
    correctChoiceId: "a",
    explanation:
      "Volaci značky přiděluje CTU pri vydání individuálního oprávnění. CRK je stavovská organizace bez regulačních pravomocí, ITU přiděluje bloky prefixu státem.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["CTU", "volaci-znacky"],
  },
  {
    id: "R-CZE-009",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Zakon o elektronických komunikacich c. 127/2005 Sb. upravuje mimo jine:",
    choices: [
      { id: "a", text: "Spravu radioveho spektra a podminky vyuzivani kmitoctu" },
      { id: "b", text: "Vyrobu a prodej radiovych prijimaci" },
      { id: "c", text: "Obsah rozhlasoveho a televizniho vysilani" },
      { id: "d", text: "Ochranu osobnich udaju na internetu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Zakon 127/2005 Sb. se zabývá správou spektra, podmínkami pro využívání kmitočtů a provoz sítí. Obsah vysílání resi zákon o rozhlasu a televizi.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["zakon", "spektrum"],
  },
  {
    id: "R-CZE-010",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Amaterska radiokomunikační služba je dle zákona definovana jako:",
    choices: [
      { id: "a", text: "Sluzba pro sebevzdelavani, vzajemnou komunikaci a technicke experimenty" },
      { id: "b", text: "Komercni sluzba pro prenos dat" },
      { id: "c", text: "Bezpecnostni sluzba pro krizove situace" },
      { id: "d", text: "Sluzba pro vysilani reklamnich sdleni" },
    ],
    correctChoiceId: "a",
    explanation:
      "Amaterska služba je určena pro sebevzdělávání, vzájemnou komunikaci a technické experimenty. Nesmi byt používaná pro komerční účely.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["definice", "amaterska-sluzba"],
  },

  // -----------------------------------------------------------------------
  // czech-law-02: Classes, privileges, age, exams (R-CZE-011 to R-CZE-020)
  // -----------------------------------------------------------------------
  {
    id: "R-CZE-011",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Kolik trid operátorů amatérské služby existuje v CR?",
    choices: [
      { id: "a", text: "Dve (trida A a trida N)" },
      { id: "b", text: "Tri (trida A, B a C)" },
      { id: "c", text: "Jedna (jednotna trida)" },
      { id: "d", text: "Ctyri (trida A, B, C a N)" },
    ],
    correctChoiceId: "a",
    explanation:
      "V CR existují dvě třídy: třída A (HAREC uroven, plný přístup) a třída N (novice, omezený přístup).",
    relatedLessonIds: ["czech-law-02"],
    tags: ["trida-A", "trida-N", "operatori"],
  },
  {
    id: "R-CZE-012",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Trida A operátora amatérské služby odpovídá mezinarodnimu průkazu:",
    choices: [
      { id: "a", text: "HAREC (Harmonised Amateur Radio Examination Certificate)" },
      { id: "b", text: "CEPT Novice Licence" },
      { id: "c", text: "FCC General Class" },
      { id: "d", text: "IARU Bronze Certificate" },
    ],
    correctChoiceId: "a",
    explanation:
      "Trida A odpovídá HAREC průkazu, který je mezinárodně uznávaný v ramci CEPT. CEPT Novice Licence odpovídá třídě N.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["HAREC", "trida-A", "CEPT"],
  },
  {
    id: "R-CZE-013",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky je maximální povoleny výkon pro operátora třídy N?",
    choices: [
      { id: "a", text: "100 W PEP" },
      { id: "b", text: "750 W PEP" },
      { id: "c", text: "10 W PEP" },
      { id: "d", text: "200 W PEP" },
    ],
    correctChoiceId: "a",
    explanation:
      "Trida N ma maximální výkon 100 W PEP. 750 W PEP je limit pro třídu A na KV, 200 W pro třídu A na VKV/UKV.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["trida-N", "vykon"],
  },
  {
    id: "R-CZE-014",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Ke kterým pasmum ma přístup operátor třídy A?",
    choices: [
      { id: "a", text: "Ke vsem amaterským pasmum pridelenym v CR" },
      { id: "b", text: "Pouze k pasmum nad 30 MHz" },
      { id: "c", text: "Pouze k pasmum 144 MHz a 430 MHz" },
      { id: "d", text: "Ke vsem pasmum bez omezeni vykonu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Trida A ma přístup ke všem amaterským pasmum v CR. Trida N ma přístup pouze k vybraným pasmum. I třída A ma výkonové limity.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["trida-A", "pasma"],
  },
  {
    id: "R-CZE-015",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky je minimální věk pro získání oprávnění třídy N?",
    choices: [
      { id: "a", text: "Neni stanoven minimalni vek" },
      { id: "b", text: "15 let" },
      { id: "c", text: "18 let" },
      { id: "d", text: "12 let" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pro třídu N není stanoven minimální věk. Zkousku může složit i mladší uchazeč, přihláška se podává se zákonným zástupcem.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["trida-N", "vek"],
  },
  {
    id: "R-CZE-016",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Z jakých části se sklada zkouška pro získání oprávnění třídy A?",
    choices: [
      { id: "a", text: "Technika, predpisy a provozni postupy" },
      { id: "b", text: "Pouze technicke znalosti" },
      { id: "c", text: "Pouze predpisy a provoz" },
      { id: "d", text: "Technika a Morseova abeceda" },
    ],
    correctChoiceId: "a",
    explanation:
      "Zkouska pro třídu A zahrnuje tři oblasti: techniku, předpisy a provozní postupy. Morseova abeceda již není povinná soucast zkoušky.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["zkouska", "trida-A"],
  },
  {
    id: "R-CZE-017",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Muze operátor třídy N povýšit na třídu A?",
    choices: [
      { id: "a", text: "Ano, slozenim zkousky pro tridu A" },
      { id: "b", text: "Ano, automaticky po 5 letech provozu" },
      { id: "c", text: "Ne, musi podat zcela novou zadost" },
      { id: "d", text: "Ano, po absolvovani povinneho kurzu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Operator třídy N může povýšit na třídu A slozenim příslušné zkoušky. Automaticke povýšení neexistuje.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["trida-N", "trida-A", "povyseni"],
  },
  {
    id: "R-CZE-018",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Ktery orgán organizuje zkoušky odborné způsobilosti pro radioamatéry?",
    choices: [
      { id: "a", text: "Cesky telekomunikacni urad (CTU)" },
      { id: "b", text: "Cesky radioklub (CRK)" },
      { id: "c", text: "Ministerstvo skolstvi" },
      { id: "d", text: "IARU (International Amateur Radio Union)" },
    ],
    correctChoiceId: "a",
    explanation:
      "Zkousky organizuje CTU. CRK může pomáhat s přípravou, ale zkoušky samotné jsou v kompetenci CTU.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["CTU", "zkouska"],
  },
  {
    id: "R-CZE-019",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Operator třídy N smí provozovat stanici:",
    choices: [
      { id: "a", text: "Pouze na vybranych pasmech s omezenym vykonem" },
      { id: "b", text: "Na vsech pasmech bez omezeni" },
      { id: "c", text: "Pouze pod dozorem operatora tridy A" },
      { id: "d", text: "Pouze na pasmu 2 m (144 MHz)" },
    ],
    correctChoiceId: "a",
    explanation:
      "Trida N opravňuje k provozu na vybraných pásmech s maximálním výkonem 100 W PEP. Neni nutný dozor operátora třídy A.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["trida-N", "privilegia"],
  },
  {
    id: "R-CZE-020",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Co znamená zkratka HAREC?",
    choices: [
      { id: "a", text: "Harmonised Amateur Radio Examination Certificate" },
      { id: "b", text: "High Authority Radio Equipment Certificate" },
      { id: "c", text: "Ham Amateur Radio European Certificate" },
      { id: "d", text: "Harmonised Amateur Radio Emergency Communication" },
    ],
    correctChoiceId: "a",
    explanation:
      "HAREC = Harmonised Amateur Radio Examination Certificate. Je to mezinárodně uznávaný průkaz způsobilosti operátora odpovídající třídě A.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["HAREC", "definice"],
  },

  // -----------------------------------------------------------------------
  // czech-law-03: Band plan, power limits, allocations (R-CZE-021 to R-CZE-030)
  // -----------------------------------------------------------------------
  {
    id: "R-CZE-021",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky je maximální povoleny výkon pro operátora třídy A na KV pásmech?",
    choices: [
      { id: "a", text: "750 W PEP" },
      { id: "b", text: "1000 W PEP" },
      { id: "c", text: "500 W PEP" },
      { id: "d", text: "200 W PEP" },
    ],
    correctChoiceId: "a",
    explanation:
      "Na KV pásmech je pro třídu A maximální výkon 750 W PEP. Na VKV/UKV je limit 200 W PEP.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["vykon", "KV", "trida-A"],
  },
  {
    id: "R-CZE-022",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky je maximální povoleny výkon pro operátora třídy A na pásmu 144 MHz?",
    choices: [
      { id: "a", text: "200 W PEP" },
      { id: "b", text: "750 W PEP" },
      { id: "c", text: "100 W PEP" },
      { id: "d", text: "500 W PEP" },
    ],
    correctChoiceId: "a",
    explanation:
      "Na VKV/UKV pásmech (včetně 144 MHz) je maximální výkon pro třídu A 200 W PEP, na KV az 750 W PEP.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["vykon", "VKV", "trida-A"],
  },
  {
    id: "R-CZE-023",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Co znamená sekundární přidělení kmitočtového pásma pro amatérskou sluzbu?",
    choices: [
      { id: "a", text: "Amater nesmi rusit primarni sluzbu a musi snest ruseni od ni" },
      { id: "b", text: "Amater ma prednost pred ostatnimi sluzbami" },
      { id: "c", text: "Pasmo je vyhrazeno jen pro amatery" },
      { id: "d", text: "Amater smi vysilat pouze digitalnimi mody" },
    ],
    correctChoiceId: "a",
    explanation:
      "Sekundarni přidělení znamená podřízený status - amater nesmí způsobit rušení primární službě a musí akceptovat rušení od ni.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["prideleni", "sekundarni", "primarni"],
  },
  {
    id: "R-CZE-024",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Ktere pásmo je v CR prideleno amatérské službě na VKV?",
    choices: [
      { id: "a", text: "144-146 MHz" },
      { id: "b", text: "88-108 MHz" },
      { id: "c", text: "150-160 MHz" },
      { id: "d", text: "170-180 MHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pasmo 144-146 MHz (2 m) je prideleno amatérské službě. 88-108 MHz je FM rozhlas, ostatni pásma jsou přiřazena jinym službám.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["pasmo", "VKV", "144MHz"],
  },
  {
    id: "R-CZE-025",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jake pásmo je prideleno amatérské službě v oblasti UKV kolem 430 MHz?",
    choices: [
      { id: "a", text: "430-440 MHz" },
      { id: "b", text: "420-430 MHz" },
      { id: "c", text: "440-460 MHz" },
      { id: "d", text: "400-410 MHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pasmo 430-440 MHz (70 cm) je prideleno amatérské službě. Ostatni uvedene rozsahy jsou přiřazeny jinym službám.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["pasmo", "UKV", "430MHz"],
  },
  {
    id: "R-CZE-026",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Pasmo 14,0-14,35 MHz (20 m) je v CR prideleno amatérské službě na základě:",
    choices: [
      { id: "a", text: "Primarniho prideleni" },
      { id: "b", text: "Sekundarniho prideleni" },
      { id: "c", text: "Docasneho povoleni" },
      { id: "d", text: "Vseobecneho opravneni" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pasmo 20 m (14 MHz) je jedním z pásem s primárním přidělením amatérské službě - amater zde ma rovnocenná prava s ostatnimi primárními uzivateli.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["prideleni", "primarni", "20m"],
  },
  {
    id: "R-CZE-027",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Pasmo 60 m (5 MHz) ma v CR pro amatery jakou specifickou podmínku?",
    choices: [
      { id: "a", text: "Omezeny vykon a omezeny pocet kanalu" },
      { id: "b", text: "Neomezeny vykon pro tridu A" },
      { id: "c", text: "Pristup pouze pro klubove stanice" },
      { id: "d", text: "Pasmo neni v CR vubec prideleno" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pasmo 60 m (5 MHz) je v CR dostupné s omezeným výkonem a omezeným počtem kanalu. Je to pásmo se specifickými pravidly kvuli sdílení s jinymi službami.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["pasmo", "60m", "omezeni"],
  },
  {
    id: "R-CZE-028",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Z ceho vychází český kmitočtový plan pro amatérskou sluzbu?",
    choices: [
      { id: "a", text: "Z Radioveho radu ITU a harmonizaci CEPT" },
      { id: "b", text: "Z rozhodnuti ceskeho parlamentu" },
      { id: "c", text: "Z doporuceni IARU" },
      { id: "d", text: "Z americkeho FCC" },
    ],
    correctChoiceId: "a",
    explanation:
      "Cesky kmitočtový plan vychází z mezinárodního Radioveho řádu ITU a evropských harmonizací CEPT. IARU vydává doporučení k pásmovému planu, ale ta nejsou právně závazná.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["ITU", "CEPT", "kmitocty"],
  },
  {
    id: "R-CZE-029",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Ktery kmitočtový rozsah odpovídá amatérskému pásmu 80 m?",
    choices: [
      { id: "a", text: "3,5-3,8 MHz" },
      { id: "b", text: "7,0-7,2 MHz" },
      { id: "c", text: "1,8-2,0 MHz" },
      { id: "d", text: "5,3-5,4 MHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pasmo 80 m odpovídá rozsahu 3,5-3,8 MHz. 7 MHz je pásmo 40 m, 1,8 MHz je pásmo 160 m, 5 MHz je pásmo 60 m.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["pasmo", "80m", "kmitocty"],
  },
  {
    id: "R-CZE-030",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Pro EME (Earth-Moon-Earth) provoz v CR platí:",
    choices: [
      { id: "a", text: "Mohou byt povoleny vyssi vykony nez standardni limity" },
      { id: "b", text: "EME provoz je v CR zakazan" },
      { id: "c", text: "Plati stejne vykonove limity jako pro bezny provoz" },
      { id: "d", text: "EME provoz je povolen pouze na pasmu 2 m" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pro EME provoz mohou byt povoleny vyšší výkony kvuli obrovským ztrátám na trase Země-Měsíc-Země, na základě specifického povolení nebo vyhlášky.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["EME", "vykon", "vyjimky"],
  },

  // -----------------------------------------------------------------------
  // czech-law-04: Call signs, logging, identification (R-CZE-031 to R-CZE-039)
  // -----------------------------------------------------------------------
  {
    id: "R-CZE-031",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky prefix je přidělen českým amaterskim stanicím třídy A?",
    choices: [
      { id: "a", text: "OK1 az OK0" },
      { id: "b", text: "OK2" },
      { id: "c", text: "OL" },
      { id: "d", text: "OM" },
    ],
    correctChoiceId: "a",
    explanation:
      "OK1 az OK0 jsou prefixy pro třídu A. OK2 je pro třídu N, OL pro speciální/klubove stanice. OM je prefix Slovenska.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["volaci-znacky", "prefix", "trida-A"],
  },
  {
    id: "R-CZE-032",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky prefix je přidělen operátorům třídy N v CR?",
    choices: [
      { id: "a", text: "OK2" },
      { id: "b", text: "OK1" },
      { id: "c", text: "OL" },
      { id: "d", text: "OK9" },
    ],
    correctChoiceId: "a",
    explanation:
      "OK2 je prefix vyhrazený pro operátory třídy N (novice). OK1 az OK0 (krome OK2) jsou pro třídu A.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["volaci-znacky", "prefix", "trida-N"],
  },
  {
    id: "R-CZE-033",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Prefix OL se v CR používá pro:",
    choices: [
      { id: "a", text: "Specialni a klubove stanice" },
      { id: "b", text: "Operatory tridy A" },
      { id: "c", text: "Operatory tridy N" },
      { id: "d", text: "Zahranicni operatory" },
    ],
    correctChoiceId: "a",
    explanation:
      "OL je prefix pro speciální a klubove stanice v CR. Individualni operátoři maji prefix OK.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["volaci-znacky", "OL", "klub"],
  },
  {
    id: "R-CZE-034",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jak casto se musí radioamater identifikovat volaci značkou?",
    choices: [
      { id: "a", text: "Kazdych 10 minut a na zacatku a konci provozu" },
      { id: "b", text: "Jednou za hodinu" },
      { id: "c", text: "Pouze na zacatku provozu" },
      { id: "d", text: "Kazdych 30 minut" },
    ],
    correctChoiceId: "a",
    explanation:
      "Operator se musí identifikovat volaci značkou každých 10 minut a vždy na začátku a konci vysílání.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["identifikace", "interval"],
  },
  {
    id: "R-CZE-035",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky sufix se prida k volaci znacce pri prenosnem provozu?",
    choices: [
      { id: "a", text: "/P" },
      { id: "b", text: "/M" },
      { id: "c", text: "/MM" },
      { id: "d", text: "/QRP" },
    ],
    correctChoiceId: "a",
    explanation:
      "/P = portable (přenosný provoz). /M = mobile (mobilní), /MM = maritime mobile. /QRP není standardní sufix.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["sufix", "portable", "provoz"],
  },
  {
    id: "R-CZE-036",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jak se označuje mobilní provoz amatérské stanice?",
    choices: [
      { id: "a", text: "Sufixem /M za volaci znackou" },
      { id: "b", text: "Sufixem /P za volaci znackou" },
      { id: "c", text: "Prefixem M/ pred volaci znackou" },
      { id: "d", text: "Zadnou zvlastni znackou" },
    ],
    correctChoiceId: "a",
    explanation:
      "Mobilni provoz se označuje sufixem /M za volaci značkou, např. OK1ABC/M. /P je pro přenosný provoz.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["sufix", "mobile", "provoz"],
  },
  {
    id: "R-CZE-037",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Cesky radioamater provozujici stanici v Nemecku pouzije značku:",
    choices: [
      { id: "a", text: "DL/OK1ABC (nemecky prefix / ceska znacka)" },
      { id: "b", text: "OK1ABC/DL" },
      { id: "c", text: "Svoji ceskou znacku bez zmeny" },
      { id: "d", text: "Nemeckou znacku pridelenou mistnim uradem" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pri provozu v zahraničí se používá prefix hostitelské země pred lomítkem a vlastní značka. DL je prefix Nemecka.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["zahranici", "prefix", "CEPT"],
  },
  {
    id: "R-CZE-038",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Co musí obsahovat staniční deník (log)?",
    choices: [
      { id: "a", text: "Datum, cas (UTC), volaci znacku protistanice, kmitocet a mod" },
      { id: "b", text: "Pouze datum a volaci znacku" },
      { id: "c", text: "Pouze pocet spojeni za den" },
      { id: "d", text: "Denik neni povinny" },
    ],
    correctChoiceId: "a",
    explanation:
      "Stanicni deník musí obsahovat základní údaje o každém spojení: datum, čas v UTC, volaci značku protistanice, pouzity kmitočet nebo pásmo a druh provozu (mod).",
    relatedLessonIds: ["czech-law-04"],
    tags: ["log", "denik", "povinnosti"],
  },
  {
    id: "R-CZE-039",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Smi radioamater stavet a používat vlastní vysílací zařízení?",
    choices: [
      { id: "a", text: "Ano, pokud splnuje technicke podminky stanovene predpisy" },
      { id: "b", text: "Ne, smi pouzivat pouze tovarni zarizeni" },
      { id: "c", text: "Ano, bez jakychkoliv omezeni" },
      { id: "d", text: "Pouze pokud je schvaleno CTU" },
    ],
    correctChoiceId: "a",
    explanation:
      "Radioamater smí stavet a používat vlastní zařízení, pokud splnuje technické parametry (výkon, šířka pásma, rušení). To je jedna z vyhod amatérské služby.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["zarizeni", "stavba", "vlastni"],
  },

  // -----------------------------------------------------------------------
  // czech-law-05: Inspections, penalties, reciprocal (R-CZE-040 to R-CZE-048)
  // -----------------------------------------------------------------------
  {
    id: "R-CZE-040",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Co je operátor povinen pri kontrole CTU?",
    choices: [
      { id: "a", text: "Poskytnout soucinnost, predlozit opravneni a umoznit kontrolu stanice" },
      { id: "b", text: "Ukoncit provoz a neodpovidat na otazky" },
      { id: "c", text: "Zaplatit poplatek za kontrolu" },
      { id: "d", text: "Odeslat denik na CTU do 7 dnu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Operator musí poskytnout soucinnost - ukazat oprávnění, staniční deník a umožnit kontrolu zařízení. Zadny poplatek za kontrolu se neplati.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["kontrola", "CTU", "soucinnost"],
  },
  {
    id: "R-CZE-041",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaka je maximální pokuta za provoz radiostanice bez oprávnění dle zákona c. 127/2005 Sb.?",
    choices: [
      { id: "a", text: "1 000 000 Kc" },
      { id: "b", text: "100 000 Kc" },
      { id: "c", text: "500 000 Kc" },
      { id: "d", text: "50 000 Kc" },
    ],
    correctChoiceId: "a",
    explanation:
      "Maximalni pokuta za neoprávněný provoz radiostanice je 1 000 000 Kc. Skutecna výše pokuty zavisi na zavaznosti porušení.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["pokuta", "sankce"],
  },
  {
    id: "R-CZE-042",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Co může CTU narizdit pri zjisteni neopravneneho provozu?",
    choices: [
      { id: "a", text: "Odstaveni zarizeni a zabaveni techniky" },
      { id: "b", text: "Pouze ústni napomenuti" },
      { id: "c", text: "Zaslani informacniho dopisu" },
      { id: "d", text: "Zapis do rejstriku trestu" },
    ],
    correctChoiceId: "a",
    explanation:
      "CTU může krome pokuty narizdit odstaveni zařízení a zabavit techniku. Zapis do rejstriku trestu spadá pod trestni pravo, ne spravn delikt.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["sankce", "odstaveni"],
  },
  {
    id: "R-CZE-043",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Jaky je prvni krok pri zjisteni rušení od jine stanice?",
    choices: [
      { id: "a", text: "Zaznamenat cas, kmitocet a charakter ruseni" },
      { id: "b", text: "Ihned kontaktovat policii" },
      { id: "c", text: "Pokusit se rusici stanici zamezit ve vysilani" },
      { id: "d", text: "Zvysit vykon vlastni stanice" },
    ],
    correctChoiceId: "a",
    explanation:
      "Prvnim krokem je zdokumentovani rušení - čas, kmitočet, charakter. Nasledne se podává hlaseni na CTU, ne na policii. Zasahovat do cizich zařízení je zakázáno.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["ruseni", "hlaseni", "postup"],
  },
  {
    id: "R-CZE-044",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Kam se podává hlaseni o rušení radioveho provozu?",
    choices: [
      { id: "a", text: "Na Cesky telekomunikacni urad (CTU)" },
      { id: "b", text: "Na Policii CR" },
      { id: "c", text: "Na obecni urad" },
      { id: "d", text: "Na Cesky radioklub (CRK)" },
    ],
    correctChoiceId: "a",
    explanation:
      "Hlaseni o rušení se podává na CTU, který je kompetentni orgán pro setreni a reseni rušení v radiovem spektru.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["ruseni", "CTU", "hlaseni"],
  },
  {
    id: "R-CZE-045",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Drzitel CEPT licence (T/R 61-01) může v CR provozovat stanici:",
    choices: [
      { id: "a", text: "Ano, bez dalsich formalit s pouzitim prefixu OK/" },
      { id: "b", text: "Ne, musi vzdy pozadat o ceske opravneni" },
      { id: "c", text: "Ano, ale pouze na pasmu 2 m" },
      { id: "d", text: "Ano, ale pouze po registraci na CTU" },
    ],
    correctChoiceId: "a",
    explanation:
      "CEPT licence opravňuje k provozu v členských zemích včetně CR bez dalších formalit. Operator pouzije prefix OK/ pred svou domovskou značkou.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["CEPT", "reciprocita", "zahranici"],
  },
  {
    id: "R-CZE-046",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Operator ze země mimo CEPT chce provozovat stanici v CR. Co musí udělat?",
    choices: [
      { id: "a", text: "Pozadat CTU o specialni povoleni nebo vyuzit dvoustrannou dohodu" },
      { id: "b", text: "Staci mít jakykoliv zahranicni prukaz" },
      { id: "c", text: "Musi slozit ceskou zkousku" },
      { id: "d", text: "Provoz ze zahranici neni v CR mozny" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pro operátory ze zemí mimo CEPT je potřeba speciální povolení od CTU nebo existence dvoustranne dohody mezi CR a danou zemí.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["reciprocita", "non-CEPT", "povoleni"],
  },
  {
    id: "R-CZE-047",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Co znamená zkratka EMC v kontextu provozu radiostanice?",
    choices: [
      { id: "a", text: "Elektromagneticka kompatibilita" },
      { id: "b", text: "Elektronicky merici certifikat" },
      { id: "c", text: "Evropska mezinarodni certifikace" },
      { id: "d", text: "Externi modulator komunikace" },
    ],
    correctChoiceId: "a",
    explanation:
      "EMC = Elektromagneticka kompatibilita. Radioamater musí zajistit, aby jeho stanice nerusila jine elektronické pristroje a současně byla odolna vuci rušení.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["EMC", "kompatibilita"],
  },
  {
    id: "R-CZE-048",
    examPartId: "regulations",
    sectionId: "czech-law",
    wording: "Ktere technické požadavky musí splnovat amatérská radiostanice?",
    choices: [
      { id: "a", text: "Dodrzeni vykonoveho limitu, sirky pasma vysilani a pozadavku EMC" },
      { id: "b", text: "Pouze dodrzeni vykonoveho limitu" },
      { id: "c", text: "Zadne, radioamater si muze stavet cokoliv" },
      { id: "d", text: "Pouze pouziti certifikovanych antennich systemu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Stanice musí splnovat výkonové limity, emise v ramci povolenych pásem a šířky, a požadavky elektromagneticke kompatibility (EMC). Antenni systemy nemusí byt certifikovany.",
    relatedLessonIds: ["czech-law-05"],
    tags: ["technicke-pozadavky", "EMC", "vykon"],
  },
];
