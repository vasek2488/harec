import type { Question } from "@/lib/types";

export const operatingSkillsQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // CQ procedure (skills-01)
  // -----------------------------------------------------------------------
  {
    id: "O-SKL-001",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená zkratka CQ v amatérském radiovem provozu?",
    choices: [
      { id: "a", text: "Obecna vyzva vsem stanicim (seek you)" },
      { id: "b", text: "Volani konkretni stanice" },
      { id: "c", text: "Nouzove volani" },
      { id: "d", text: "Zadost o zmenu frekvence" },
    ],
    correctChoiceId: "a",
    explanation:
      "CQ je obecná výzva všem stanicím - 'hledam vas'. Neslouzi k volání konkrétní stanice ani jako nouzový signál. Viz slovnik: CQ.",
    relatedLessonIds: ["skills-01"],
    tags: ["cq", "recall"],
  },
  {
    id: "O-SKL-002",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co je třeba udělat pred vysilanim CQ?",
    choices: [
      { id: "a", text: "Poslechnout, zda je frekvence volna, a zeptat se 'QRL?'" },
      { id: "b", text: "Okamzite zacit vysilat" },
      { id: "c", text: "Nastavit maximalni vykon" },
      { id: "d", text: "Prepnout na nouzovou frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pred CQ je nutné poslouchat a dotázem 'QRL?' ověřit, ze frekvenci nikdo nepoužívá. Okamzite vysílání může způsobit rušení probíhajících spojení. Viz provozní postup.",
    relatedLessonIds: ["skills-01"],
    tags: ["cq", "recall"],
  },
  {
    id: "O-SKL-003",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Kolikrat se opakuje volaci značka pri volání CQ?",
    choices: [
      { id: "a", text: "1 az 3 krat" },
      { id: "b", text: "5 az 10 krat" },
      { id: "c", text: "Presne jednou" },
      { id: "d", text: "Neustale, dokud nekdo neodpovi" },
    ],
    correctChoiceId: "a",
    explanation:
      "Znacka se opakuje 1-3x. Prilis dlouhé CQ je nezdvořilé a snižuje šanci na odpověď, protoze stanice nebudou čekat. Viz provozní postup CQ.",
    relatedLessonIds: ["skills-01"],
    tags: ["cq", "recall"],
  },
  {
    id: "O-SKL-004",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jak správně odpovite na CQ stanice OK2XYZ?",
    choices: [
      { id: "a", text: "OK2XYZ, tady [vase znacka], prijem" },
      { id: "b", text: "CQ CQ CQ, tady [vase znacka]" },
      { id: "c", text: "Ahoj OK2XYZ, jak me slysis?" },
      { id: "d", text: "[vase znacka] vola, konec" },
    ],
    correctChoiceId: "a",
    explanation:
      "Spravny format: značka volane stanice, DE/tady, vlastní značka, příjem/K. Nevysilate CQ pri odpovědi. Viz provozní postup.",
    relatedLessonIds: ["skills-01"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-005",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaky je rozdil mezi 'příjem' (K/over) a 'konec' (SK/out)?",
    choices: [
      { id: "a", text: "'Prijem' predava slovo, 'konec' ukoncuje spojeni" },
      { id: "b", text: "Jsou to synonyma" },
      { id: "c", text: "'Konec' predava slovo, 'prijem' ukoncuje spojeni" },
      { id: "d", text: "'Prijem' se pouziva jen na VHF, 'konec' jen na HF" },
    ],
    correctChoiceId: "a",
    explanation:
      "'K' (over/příjem) znamená: predavam slovo, čekám odpověď. 'SK' (out/konec) znamená: spojení ukončuji. Nesmi se používat zároveň. Viz slovnik: K, SK.",
    relatedLessonIds: ["skills-01"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-006",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená zkratka DE v radiovem provozu?",
    choices: [
      { id: "a", text: "'Od' nebo 'tady' - identifikuje odesilajici stanici" },
      { id: "b", text: "'Deutschland' - nemecka stanice" },
      { id: "c", text: "'Distress Emergency' - nouzove volani" },
      { id: "d", text: "'Direction East' - smer na vychod" },
    ],
    correctChoiceId: "a",
    explanation:
      "DE pochází z francouzského 'de' (od/z) a označuje odesilajici stanici. Nema nic společného s Nemeckem ani s nouzovym volanim. Viz slovnik: DE.",
    relatedLessonIds: ["skills-01"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-007",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená zkratka QRL?",
    choices: [
      { id: "a", text: "Je tato frekvence obsazena?" },
      { id: "b", text: "Jaka je moje poloha?" },
      { id: "c", text: "Jaky je vas vykon?" },
      { id: "d", text: "Mate pro mne zpravu?" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRL = Je frekvence obsazena? Pouziva se pred volanim CQ k ověření, ze frekvenci nikdo nepoužívá. QTH je poloha, QRZ je kdo mne vola. Viz Q-kody.",
    relatedLessonIds: ["skills-01"],
    tags: ["q-kody", "recall"],
  },
  {
    id: "O-SKL-008",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Proc se volaci značka hláskuje fonetickou abecedou?",
    choices: [
      { id: "a", text: "Pro spravne porozumeni pri slabem nebo rusenom signalu" },
      { id: "b", text: "Je to pouze tradice bez praktickeho vyznamu" },
      { id: "c", text: "Je to vyzadovano pouze pri CW provozu" },
      { id: "d", text: "Pouziva se jen pri mezinarodrich spojenich" },
    ],
    correctChoiceId: "a",
    explanation:
      "Foneticka abeceda ICAO/NATO (Alfa, Bravo, Charlie...) zajišťuje jednoznačně porozumění písmenům i pri špatných podmínkách. Pouziva se ve všech módech, ne jen v CW. Viz fonetická abeceda.",
    relatedLessonIds: ["skills-01"],
    tags: ["fonetika", "recall"],
  },
  {
    id: "O-SKL-009",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Spravne pořadí kroků pri volání CQ je:",
    choices: [
      { id: "a", text: "Poslouchat - QRL? - CQ 3x - DE + znacka - prijem" },
      { id: "b", text: "CQ 3x - DE + znacka - poslouchat - prijem" },
      { id: "c", text: "DE + znacka - CQ 3x - prijem - poslouchat" },
      { id: "d", text: "QRL? - prijem - CQ 3x - DE + znacka" },
    ],
    correctChoiceId: "a",
    explanation:
      "Nejprve se poslouchá, pak se ověří QRL?, následuje CQ 3x, vlastní značka a příjem. Volat CQ bez předchozího poslechu je nezdvořilé a může rušit. Viz postup CQ.",
    relatedLessonIds: ["skills-01"],
    tags: ["cq", "apply"],
  },
  {
    id: "O-SKL-010",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená zkratka SK na konci spojení?",
    choices: [
      { id: "a", text: "Konec spojeni (Silent Key / End of Contact)" },
      { id: "b", text: "Stanice pokracuje v poslechu" },
      { id: "c", text: "Zadost o opakovani" },
      { id: "d", text: "Prepnuti na jinou frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "SK znamená konec spojení. Po SK se již neočekává odpověď. V CW se SK vysílá jako prosign. Viz slovnik: SK.",
    relatedLessonIds: ["skills-01"],
    tags: ["qso", "recall"],
  },

  // -----------------------------------------------------------------------
  // RST report (skills-02)
  // -----------------------------------------------------------------------
  {
    id: "O-SKL-011",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co vyjadřuje písmeno R v systemu RST?",
    choices: [
      { id: "a", text: "Readability - citelnost signalu (stupnice 1-5)" },
      { id: "b", text: "Range - dosah signalu v km" },
      { id: "c", text: "Radiation - intenzitu vyzarovani" },
      { id: "d", text: "Reliability - spolehlivost spojeni" },
    ],
    correctChoiceId: "a",
    explanation:
      "R = Readability (čitelnost) na stupnici 1-5, kde R1 = nečitelný a R5 = perfektně čitelný. Nesouvisí s dosahem ani intenzitou. Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "recall"],
  },
  {
    id: "O-SKL-012",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaky rozsah ma stupnice S (Strength) v systemu RST?",
    choices: [
      { id: "a", text: "1 az 9" },
      { id: "b", text: "1 az 5" },
      { id: "c", text: "0 az 10" },
      { id: "d", text: "1 az 99" },
    ],
    correctChoiceId: "a",
    explanation:
      "S (Strength) ma stupnici 1-9, kde S1 = sotva znatelný signál a S9 = extrémně silný signál. Stupnice R je 1-5. Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "recall"],
  },
  {
    id: "O-SKL-013",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Kdyz se používá slozka T (Tone) v RST reportu?",
    choices: [
      { id: "a", text: "Pouze pri CW (telegrafickem) provozu" },
      { id: "b", text: "Pri kazdem druhu provozu" },
      { id: "c", text: "Pouze pri FM provozu" },
      { id: "d", text: "Pouze pri digitalnich modech" },
    ],
    correctChoiceId: "a",
    explanation:
      "T (Tone) hodnotí čistotu CW tónu na stupnici 1-9 a používá se pouze v telegrafii. Ve fonickem provozu se udává jen RS (např. 59). Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "recall"],
  },
  {
    id: "O-SKL-014",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená RST report '59'?",
    choices: [
      { id: "a", text: "Perfektne citelny, extremne silny signal" },
      { id: "b", text: "Sotva citelny, slaby signal" },
      { id: "c", text: "Citelny s obtizemi, prumerny signal" },
      { id: "d", text: "Necitelny, zadny signal" },
    ],
    correctChoiceId: "a",
    explanation:
      "R5 = perfektně čitelný, S9 = extrémně silný signál. 59 je nejlepší možný fonicky report. Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "apply"],
  },
  {
    id: "O-SKL-015",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená hodnota R3 v RST reportu?",
    choices: [
      { id: "a", text: "Signal je citelny s obtizemi" },
      { id: "b", text: "Signal je perfektne citelny" },
      { id: "c", text: "Signal je sotva citelny" },
      { id: "d", text: "Signal je necitelny" },
    ],
    correctChoiceId: "a",
    explanation:
      "R3 = čitelný s obtížemi. R1 = nečitelný, R2 = sotva čitelný, R4 = čitelný s malými obtížemi, R5 = perfektně čitelný. Viz stupnice R.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "recall"],
  },
  {
    id: "O-SKL-016",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Ktere informace se standardne vyměňují behem QSO?",
    choices: [
      { id: "a", text: "Volaci znacky, RST report, jmeno, QTH, popis zarizeni" },
      { id: "b", text: "Volaci znacky, rodne cislo, adresa" },
      { id: "c", text: "Pouze volaci znacky a frekvence" },
      { id: "d", text: "Volaci znacky, cislo povoleni, datum narozeni" },
    ],
    correctChoiceId: "a",
    explanation:
      "Standardni QSO zahrnuje: značky, RS(T) report, jména, QTH (město), zařízení a anténu. Osobni údaje jako rodne číslo se nesdílí. Viz provozní postup QSO.",
    relatedLessonIds: ["skills-02"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-017",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená RST report '579' v CW provozu?",
    choices: [
      { id: "a", text: "Perfektne citelny, sila 7, perfektni ton" },
      { id: "b", text: "Citelny s obtizemi, slaby, spatny ton" },
      { id: "c", text: "Sotva citelny, prumerny, dobry ton" },
      { id: "d", text: "Perfektne citelny, maximalni sila, prumerny ton" },
    ],
    correctChoiceId: "a",
    explanation:
      "R5 = perfektně čitelný, S7 = silný signál, T9 = perfektní čistí tón. T se udává pouze v CW. Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "apply"],
  },
  {
    id: "O-SKL-018",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená číslo 73 v amatérském provozu?",
    choices: [
      { id: "a", text: "Pozdrav - nejlepsi prranri (best regards)" },
      { id: "b", text: "Report o sile signalu" },
      { id: "c", text: "Nouzovy kod" },
      { id: "d", text: "Cislo kanalu" },
    ],
    correctChoiceId: "a",
    explanation:
      "73 je tradiční amatérský pozdrav znamenající 'nejlepší přání' nebo 'best regards'. Pouziva se na konci spojení. Viz slovnik: 73.",
    relatedLessonIds: ["skills-02"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-019",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamená zkratka QTH?",
    choices: [
      { id: "a", text: "Poloha stanice (mesto, lokator)" },
      { id: "b", text: "Cas spojeni" },
      { id: "c", text: "Typ zarizeni" },
      { id: "d", text: "Frekvence vysilani" },
    ],
    correctChoiceId: "a",
    explanation:
      "QTH = 'Jaka je vase poloha?' V praxi se používá jako označení pro město nebo přesnou polohu stanice. Viz Q-kody: QTH.",
    relatedLessonIds: ["skills-02"],
    tags: ["q-kody", "recall"],
  },
  {
    id: "O-SKL-020",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaky je správný pořadí informací ve standardním QSO?",
    choices: [
      { id: "a", text: "Znacky, RST, jmeno + QTH, zarizeni, 73" },
      { id: "b", text: "RST, znacky, zarizeni, jmeno, 73" },
      { id: "c", text: "Jmeno, zarizeni, RST, znacky, 73" },
      { id: "d", text: "73, znacky, RST, jmeno, zarizeni" },
    ],
    correctChoiceId: "a",
    explanation:
      "Standardni QSO začíná vzájemnou identifikací (značky), následuje RST report, osobní informace a popis zařízení. 73 je az na konci. Viz provozní postup.",
    relatedLessonIds: ["skills-02"],
    tags: ["qso", "apply"],
  },

  // -----------------------------------------------------------------------
  // Emergency operation and discipline (skills-03)
  // -----------------------------------------------------------------------
  {
    id: "O-SKL-021",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaky je správný format tísňového volání?",
    choices: [
      { id: "a", text: "MAYDAY MAYDAY MAYDAY, tady [znacka], [popis situace]" },
      { id: "b", text: "SOS SOS SOS, tady [znacka]" },
      { id: "c", text: "HELP, vola [znacka]" },
      { id: "d", text: "Tisen, prosim o pomoc" },
    ],
    correctChoiceId: "a",
    explanation:
      "Ve fonickem provozu se používá MAYDAY 3x, následované identifikací a popisem. SOS je telegrafni signál (CW), ne fonicky. Viz nouzový provoz.",
    relatedLessonIds: ["skills-03"],
    tags: ["nouzovy-provoz", "recall"],
  },
  {
    id: "O-SKL-022",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jak casto se musí radioamater identifikovat behem probihajiciho spojení?",
    choices: [
      { id: "a", text: "Kazdych 10 minut a na zacatku a konci vysilani" },
      { id: "b", text: "Pouze na zacatku a konci spojeni" },
      { id: "c", text: "Kazdych 30 minut" },
      { id: "d", text: "Identifikace neni behem spojeni nutna" },
    ],
    correctChoiceId: "a",
    explanation:
      "Provozni řád vyžaduje identifikací každých 10 minut, plus na začátku a konci vysílání. Jen na začátku a konci nestačí pri delším spojení. Viz předpisy.",
    relatedLessonIds: ["skills-03"],
    tags: ["identifikace", "recall"],
  },
  {
    id: "O-SKL-023",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaka je správná reakce na zaslechnutí signálu MAYDAY?",
    choices: [
      { id: "a", text: "Okamzite prestat vysilat, naslouchat a byt pripraven pomoci" },
      { id: "b", text: "Pokracovat v normalnim provozu" },
      { id: "c", text: "Odpovedet na nouzove volani vlastnim CQ" },
      { id: "d", text: "Zvysit vykon a pokusit se prehlasit nouzovy signal" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pri zaslechnutí MAYDAY je nutné okamžitě přestat vysílat a naslouchat. Jakykoliv další provoz může brát nouzové stanici v komunikaci. Viz nouzový provoz.",
    relatedLessonIds: ["skills-03"],
    tags: ["nouzovy-provoz", "recall"],
  },
  {
    id: "O-SKL-024",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Seradte nouzové signály od nejvyšší priority k nejnižší:",
    choices: [
      { id: "a", text: "MAYDAY, PAN PAN, SECURITE" },
      { id: "b", text: "SECURITE, PAN PAN, MAYDAY" },
      { id: "c", text: "PAN PAN, MAYDAY, SECURITE" },
      { id: "d", text: "MAYDAY, SECURITE, PAN PAN" },
    ],
    correctChoiceId: "a",
    explanation:
      "MAYDAY (tíseň) ma nejvyšší prioritu, následuje PAN PAN (naléhavost) a SECURITE (bezpečnost). Viz nouzové signály.",
    relatedLessonIds: ["skills-03"],
    tags: ["nouzovy-provoz", "recall"],
  },
  {
    id: "O-SKL-025",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Cim se radioamater identifikuje?",
    choices: [
      { id: "a", text: "Pridelenou volaci znackou" },
      { id: "b", text: "Svym jmenem a prijmenim" },
      { id: "c", text: "Cislem povoleni" },
      { id: "d", text: "Adresou trvaleho bydliste" },
    ],
    correctChoiceId: "a",
    explanation:
      "Radioamater se identifikuje přidělenou volaci značkou (např. OK1ABC). Jmeno a QTH se sdělí az v průběhu QSO, ale nejsou prostředkem identifikace. Viz předpisy.",
    relatedLessonIds: ["skills-03"],
    tags: ["identifikace", "recall"],
  },
  {
    id: "O-SKL-026",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co je provozní kázeň radioamatera?",
    choices: [
      { id: "a", text: "Soubor pravidel pro korektrni a ohleduplne vysilani" },
      { id: "b", text: "Trest za poruseni predpisu" },
      { id: "c", text: "Vojensky rezim na amterskych frekvencich" },
      { id: "d", text: "Omezeni vysilaci doby na 1 hodinu denne" },
    ],
    correctChoiceId: "a",
    explanation:
      "Provozni kázeň zahrnuje: identifikací, dodržování bandplanu, pouzivani minimálního výkonu, zdvořilé chování a respektování přednosti nouzového provozu. Viz provozní řád.",
    relatedLessonIds: ["skills-03"],
    tags: ["provozni-kazen", "recall"],
  },
  {
    id: "O-SKL-027",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Smi radioamater vysílat šifrovanou (neveřejnou) komunikaci?",
    choices: [
      { id: "a", text: "Ne, amatersky provoz musi byt nesifrovany a verejne srozumitelny" },
      { id: "b", text: "Ano, bez omezeni" },
      { id: "c", text: "Ano, ale pouze na UHF" },
      { id: "d", text: "Ano, pokud ma souhlas druhe stanice" },
    ],
    correctChoiceId: "a",
    explanation:
      "Amatersky provoz musí byt nešifrovaný a srozumitelný pro kontrolní orgány. Jedinou výjimkou jsou řídící signály družic. Viz předpisy o amatérském provozu.",
    relatedLessonIds: ["skills-03"],
    tags: ["predpisy", "recall"],
  },
  {
    id: "O-SKL-028",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Smi radioamater vysílat hudbu nebo komerční reklamu?",
    choices: [
      { id: "a", text: "Ne, amatersky provoz je urcen pouze pro nekomerccni technicke ucely" },
      { id: "b", text: "Ano, pokud je hudba kratsi nez 30 sekund" },
      { id: "c", text: "Ano, o vikendech" },
      { id: "d", text: "Ano, pokud je to vlastni tvorba" },
    ],
    correctChoiceId: "a",
    explanation:
      "Amaterska služba je určena pro sebevzdělávání, technické experimenty a vzájemnou komunikaci. Komercni obsah a hudba jsou zakázány. Viz předpisy.",
    relatedLessonIds: ["skills-03"],
    tags: ["predpisy", "recall"],
  },
  {
    id: "O-SKL-029",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co musí radioamater uvest v stanicnim deníku (logu)?",
    choices: [
      { id: "a", text: "Datum, cas, frekvenci, druh provozu, znacku protistanice a RST" },
      { id: "b", text: "Pouze znacku protistanice" },
      { id: "c", text: "Jmeno a adresu protistanice" },
      { id: "d", text: "Stanicni denik neni povinny" },
    ],
    correctChoiceId: "a",
    explanation:
      "Stanicni deník obsahuje základní údaje o spojení: datum, čas (UTC), frekvenci, druh provozu, značku a RST. Jmeno a adresa nejsou povinné. Viz provozní řád.",
    relatedLessonIds: ["skills-03"],
    tags: ["provozni-kazen", "recall"],
  },
  {
    id: "O-SKL-030",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaky časový system se používá v amatérském radiovem provozu?",
    choices: [
      { id: "a", text: "UTC (Coordinated Universal Time)" },
      { id: "b", text: "Mistni cas" },
      { id: "c", text: "GMT+1 (stredoevropsky cas)" },
      { id: "d", text: "Libovolny casovy system" },
    ],
    correctChoiceId: "a",
    explanation:
      "V amatérském provozu se používá UTC (dříve označovaný jako GMT). Mistni čas se nepoužívá, protoze stanice jsou v různých časových pásmech. Viz slovnik: UTC.",
    relatedLessonIds: ["skills-03"],
    tags: ["provozni-kazen", "recall"],
  },
];
