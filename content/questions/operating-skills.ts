import type { Question } from "@/lib/types";

export const operatingSkillsQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // CQ procedure (skills-01)
  // -----------------------------------------------------------------------
  {
    id: "O-SKL-001",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena zkratka CQ v amaterskem radiovem provozu?",
    choices: [
      { id: "a", text: "Obecna vyzva vsem stanicim (seek you)" },
      { id: "b", text: "Volani konkretni stanice" },
      { id: "c", text: "Nouzove volani" },
      { id: "d", text: "Zadost o zmenu frekvence" },
    ],
    correctChoiceId: "a",
    explanation:
      "CQ je obecna vyzva vsem stanicim - 'hledam vas'. Neslouzi k volani konkretni stanice ani jako nouzovy signal. Viz slovnik: CQ.",
    relatedLessonIds: ["skills-01"],
    tags: ["cq", "recall"],
  },
  {
    id: "O-SKL-002",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co je treba udelat pred vysilanim CQ?",
    choices: [
      { id: "a", text: "Poslechnout, zda je frekvence volna, a zeptat se 'QRL?'" },
      { id: "b", text: "Okamzite zacit vysilat" },
      { id: "c", text: "Nastavit maximalni vykon" },
      { id: "d", text: "Prepnout na nouzovou frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pred CQ je nutne poslouchat a dotazem 'QRL?' overit, ze frekvenci nikdo nepouziva. Okamzite vysilani muze zpusobit ruseni probihajicich spojeni. Viz provozni postup.",
    relatedLessonIds: ["skills-01"],
    tags: ["cq", "recall"],
  },
  {
    id: "O-SKL-003",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Kolikrat se opakuje volaci znacka pri volani CQ?",
    choices: [
      { id: "a", text: "1 az 3 krat" },
      { id: "b", text: "5 az 10 krat" },
      { id: "c", text: "Presne jednou" },
      { id: "d", text: "Neustale, dokud nekdo neodpovi" },
    ],
    correctChoiceId: "a",
    explanation:
      "Znacka se opakuje 1-3x. Prilis dlouhe CQ je nezdvorile a snizuje sanci na odpoved, protoze stanice nebudou cekat. Viz provozni postup CQ.",
    relatedLessonIds: ["skills-01"],
    tags: ["cq", "recall"],
  },
  {
    id: "O-SKL-004",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jak spravne odpovite na CQ stanice OK2XYZ?",
    choices: [
      { id: "a", text: "OK2XYZ, tady [vase znacka], prijem" },
      { id: "b", text: "CQ CQ CQ, tady [vase znacka]" },
      { id: "c", text: "Ahoj OK2XYZ, jak me slysis?" },
      { id: "d", text: "[vase znacka] vola, konec" },
    ],
    correctChoiceId: "a",
    explanation:
      "Spravny format: znacka volane stanice, DE/tady, vlastni znacka, prijem/K. Nevysilate CQ pri odpovedi. Viz provozni postup.",
    relatedLessonIds: ["skills-01"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-005",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaky je rozdil mezi 'prijem' (K/over) a 'konec' (SK/out)?",
    choices: [
      { id: "a", text: "'Prijem' predava slovo, 'konec' ukoncuje spojeni" },
      { id: "b", text: "Jsou to synonyma" },
      { id: "c", text: "'Konec' predava slovo, 'prijem' ukoncuje spojeni" },
      { id: "d", text: "'Prijem' se pouziva jen na VHF, 'konec' jen na HF" },
    ],
    correctChoiceId: "a",
    explanation:
      "'K' (over/prijem) znamena: predavam slovo, cekam odpoved. 'SK' (out/konec) znamena: spojeni ukoncuji. Nesmi se pouzivat zaroven. Viz slovnik: K, SK.",
    relatedLessonIds: ["skills-01"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-006",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena zkratka DE v radiovem provozu?",
    choices: [
      { id: "a", text: "'Od' nebo 'tady' - identifikuje odesilajici stanici" },
      { id: "b", text: "'Deutschland' - nemecka stanice" },
      { id: "c", text: "'Distress Emergency' - nouzove volani" },
      { id: "d", text: "'Direction East' - smer na vychod" },
    ],
    correctChoiceId: "a",
    explanation:
      "DE pochazi z francouzskeho 'de' (od/z) a oznacuje odesilajici stanici. Nema nic spolecneho s Nemeckem ani s nouzovym volanim. Viz slovnik: DE.",
    relatedLessonIds: ["skills-01"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-007",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena zkratka QRL?",
    choices: [
      { id: "a", text: "Je tato frekvence obsazena?" },
      { id: "b", text: "Jaka je moje poloha?" },
      { id: "c", text: "Jaky je vas vykon?" },
      { id: "d", text: "Mate pro mne zpravu?" },
    ],
    correctChoiceId: "a",
    explanation:
      "QRL = Je frekvence obsazena? Pouziva se pred volanim CQ k overeni, ze frekvenci nikdo nepouziva. QTH je poloha, QRZ je kdo mne vola. Viz Q-kody.",
    relatedLessonIds: ["skills-01"],
    tags: ["q-kody", "recall"],
  },
  {
    id: "O-SKL-008",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Proc se volaci znacka hlaskuje fonetickou abecedou?",
    choices: [
      { id: "a", text: "Pro spravne porozumeni pri slabem nebo rusenom signalu" },
      { id: "b", text: "Je to pouze tradice bez praktickeho vyznamu" },
      { id: "c", text: "Je to vyzadovano pouze pri CW provozu" },
      { id: "d", text: "Pouziva se jen pri mezinarodrich spojenich" },
    ],
    correctChoiceId: "a",
    explanation:
      "Foneticka abeceda ICAO/NATO (Alfa, Bravo, Charlie...) zajistuje jednoznacne porozumeni pismenum i pri spatnych podmninkach. Pouziva se ve vsech modech, ne jen v CW. Viz foneticka abeceda.",
    relatedLessonIds: ["skills-01"],
    tags: ["fonetika", "recall"],
  },
  {
    id: "O-SKL-009",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Spravne poradi kroku pri volani CQ je:",
    choices: [
      { id: "a", text: "Poslouchat - QRL? - CQ 3x - DE + znacka - prijem" },
      { id: "b", text: "CQ 3x - DE + znacka - poslouchat - prijem" },
      { id: "c", text: "DE + znacka - CQ 3x - prijem - poslouchat" },
      { id: "d", text: "QRL? - prijem - CQ 3x - DE + znacka" },
    ],
    correctChoiceId: "a",
    explanation:
      "Nejprve se poslouchca, pak se overri QRL?, nasleduje CQ 3x, vlastni znacka a prijem. Volat CQ bez predchoriho poslechu je nezdvorile a muze rusit. Viz postup CQ.",
    relatedLessonIds: ["skills-01"],
    tags: ["cq", "apply"],
  },
  {
    id: "O-SKL-010",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena zkratka SK na konci spojeni?",
    choices: [
      { id: "a", text: "Konec spojeni (Silent Key / End of Contact)" },
      { id: "b", text: "Stanice pokracuje v poslechu" },
      { id: "c", text: "Zadost o opakovani" },
      { id: "d", text: "Prepnuti na jinou frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "SK znamena konec spojeni. Po SK se jiz neocekava odpoved. V CW se SK vysila jako prosign. Viz slovnik: SK.",
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
    wording: "Co vyjadruje pismeno R v systemu RST?",
    choices: [
      { id: "a", text: "Readability - citelnost signalu (stupnice 1-5)" },
      { id: "b", text: "Range - dosah signalu v km" },
      { id: "c", text: "Radiation - intenzitu vyzarovani" },
      { id: "d", text: "Reliability - spolehlivost spojeni" },
    ],
    correctChoiceId: "a",
    explanation:
      "R = Readability (citelnost) na stupnici 1-5, kde R1 = necitelny a R5 = perfektne citelny. Nesouvisri s dosahem ani intenzitou. Viz slovnik: RST.",
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
      "S (Strength) ma stupnici 1-9, kde S1 = sotva znatelny signal a S9 = extremne silny signal. Stupnice R je 1-5. Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "recall"],
  },
  {
    id: "O-SKL-013",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Kdyz se pouziva slozka T (Tone) v RST reportu?",
    choices: [
      { id: "a", text: "Pouze pri CW (telegrafickem) provozu" },
      { id: "b", text: "Pri kazdem druhu provozu" },
      { id: "c", text: "Pouze pri FM provozu" },
      { id: "d", text: "Pouze pri digitalnich modech" },
    ],
    correctChoiceId: "a",
    explanation:
      "T (Tone) hodnotri cistotu CW tonu na stupnici 1-9 a pouziva se pouze v telegrafii. Ve fonickem provozu se udava jen RS (napr. 59). Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "recall"],
  },
  {
    id: "O-SKL-014",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena RST report '59'?",
    choices: [
      { id: "a", text: "Perfektne citelny, extremne silny signal" },
      { id: "b", text: "Sotva citelny, slaby signal" },
      { id: "c", text: "Citelny s obtizemi, prumerny signal" },
      { id: "d", text: "Necitelny, zadny signal" },
    ],
    correctChoiceId: "a",
    explanation:
      "R5 = perfektne citelny, S9 = extremne silny signal. 59 je nejlepsi mozny fonicky report. Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "apply"],
  },
  {
    id: "O-SKL-015",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena hodnota R3 v RST reportu?",
    choices: [
      { id: "a", text: "Signal je citelny s obtizemi" },
      { id: "b", text: "Signal je perfektne citelny" },
      { id: "c", text: "Signal je sotva citelny" },
      { id: "d", text: "Signal je necitelny" },
    ],
    correctChoiceId: "a",
    explanation:
      "R3 = citelny s obtizemi. R1 = necitelny, R2 = sotva citelny, R4 = citelny s malymi obtizemi, R5 = perfektne citelny. Viz stupnice R.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "recall"],
  },
  {
    id: "O-SKL-016",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Ktere informace se standardne vymenujou behem QSO?",
    choices: [
      { id: "a", text: "Volaci znacky, RST report, jmeno, QTH, popis zarizeni" },
      { id: "b", text: "Volaci znacky, rodne cislo, adresa" },
      { id: "c", text: "Pouze volaci znacky a frekvence" },
      { id: "d", text: "Volaci znacky, cislo povoleni, datum narozeni" },
    ],
    correctChoiceId: "a",
    explanation:
      "Standardni QSO zahrnuje: znacky, RS(T) report, jmena, QTH (mesto), zarizeni a antenu. Osobni udaje jako rodne cislo se nesdili. Viz provozni postup QSO.",
    relatedLessonIds: ["skills-02"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-017",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena RST report '579' v CW provozu?",
    choices: [
      { id: "a", text: "Perfektne citelny, sila 7, perfektni ton" },
      { id: "b", text: "Citelny s obtizemi, slaby, spatny ton" },
      { id: "c", text: "Sotva citelny, prumerny, dobry ton" },
      { id: "d", text: "Perfektne citelny, maximalni sila, prumerny ton" },
    ],
    correctChoiceId: "a",
    explanation:
      "R5 = perfektne citelny, S7 = silny signal, T9 = perfektni cisti ton. T se udava pouze v CW. Viz slovnik: RST.",
    relatedLessonIds: ["skills-02"],
    tags: ["rst", "apply"],
  },
  {
    id: "O-SKL-018",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena cislo 73 v amaterskem provozu?",
    choices: [
      { id: "a", text: "Pozdrav - nejlepsi prranri (best regards)" },
      { id: "b", text: "Report o sile signalu" },
      { id: "c", text: "Nouzovy kod" },
      { id: "d", text: "Cislo kanalu" },
    ],
    correctChoiceId: "a",
    explanation:
      "73 je tradicni amatersky pozdrav znamenajici 'nejlepsi prani' nebo 'best regards'. Pouziva se na konci spojeni. Viz slovnik: 73.",
    relatedLessonIds: ["skills-02"],
    tags: ["qso", "recall"],
  },
  {
    id: "O-SKL-019",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co znamena zkratka QTH?",
    choices: [
      { id: "a", text: "Poloha stanice (mesto, lokator)" },
      { id: "b", text: "Cas spojeni" },
      { id: "c", text: "Typ zarizeni" },
      { id: "d", text: "Frekvence vysilani" },
    ],
    correctChoiceId: "a",
    explanation:
      "QTH = 'Jaka je vase poloha?' V praxi se pouziva jako oznaceni pro mesto nebo presnou polohu stanice. Viz Q-kody: QTH.",
    relatedLessonIds: ["skills-02"],
    tags: ["q-kody", "recall"],
  },
  {
    id: "O-SKL-020",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaky je spravny poradri informaci ve standardnim QSO?",
    choices: [
      { id: "a", text: "Znacky, RST, jmeno + QTH, zarizeni, 73" },
      { id: "b", text: "RST, znacky, zarizeni, jmeno, 73" },
      { id: "c", text: "Jmeno, zarizeni, RST, znacky, 73" },
      { id: "d", text: "73, znacky, RST, jmeno, zarizeni" },
    ],
    correctChoiceId: "a",
    explanation:
      "Standardni QSO zacina vzajemnou identifikaci (znacky), nasleduje RST report, osobni informace a popis zarizeni. 73 je az na konci. Viz provozni postup.",
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
    wording: "Jaky je spravny format tisnoveho volani?",
    choices: [
      { id: "a", text: "MAYDAY MAYDAY MAYDAY, tady [znacka], [popis situace]" },
      { id: "b", text: "SOS SOS SOS, tady [znacka]" },
      { id: "c", text: "HELP, vola [znacka]" },
      { id: "d", text: "Tisen, prosim o pomoc" },
    ],
    correctChoiceId: "a",
    explanation:
      "Ve fonickem provozu se pouziva MAYDAY 3x, nasledovane identifikaci a popisem. SOS je telegrafni signal (CW), ne fonicky. Viz nouzovy provoz.",
    relatedLessonIds: ["skills-03"],
    tags: ["nouzovy-provoz", "recall"],
  },
  {
    id: "O-SKL-022",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jak casto se musi radioamater identifikovat behem probihajiciho spojeni?",
    choices: [
      { id: "a", text: "Kazdych 10 minut a na zacatku a konci vysilani" },
      { id: "b", text: "Pouze na zacatku a konci spojeni" },
      { id: "c", text: "Kazdych 30 minut" },
      { id: "d", text: "Identifikace neni behem spojeni nutna" },
    ],
    correctChoiceId: "a",
    explanation:
      "Provozni rad vyzaduje identifikaci kazdych 10 minut, plus na zacatku a konci vysilani. Jen na zacatku a konci nestaci pri delsim spojeni. Viz predpisy.",
    relatedLessonIds: ["skills-03"],
    tags: ["identifikace", "recall"],
  },
  {
    id: "O-SKL-023",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaka je spravna reakce na zaslechuti signalu MAYDAY?",
    choices: [
      { id: "a", text: "Okamzite prestat vysilat, naslouchat a byt pripraven pomoci" },
      { id: "b", text: "Pokracovat v normalnim provozu" },
      { id: "c", text: "Odpovedet na nouzove volani vlastnim CQ" },
      { id: "d", text: "Zvysit vykon a pokusit se prehlasit nouzovy signal" },
    ],
    correctChoiceId: "a",
    explanation:
      "Pri zaslechuti MAYDAY je nutne okamzite prestat vysilat a naslouchat. Jakykoliv dalsi provoz muze brat nouzove stanici v komunikaci. Viz nouzovy provoz.",
    relatedLessonIds: ["skills-03"],
    tags: ["nouzovy-provoz", "recall"],
  },
  {
    id: "O-SKL-024",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Seradte nouzove signaly od nejvyssi priority k nejnizsi:",
    choices: [
      { id: "a", text: "MAYDAY, PAN PAN, SECURITE" },
      { id: "b", text: "SECURITE, PAN PAN, MAYDAY" },
      { id: "c", text: "PAN PAN, MAYDAY, SECURITE" },
      { id: "d", text: "MAYDAY, SECURITE, PAN PAN" },
    ],
    correctChoiceId: "a",
    explanation:
      "MAYDAY (tisen) ma nejvyssi prioritu, nasleduje PAN PAN (nalehavost) a SECURITE (bezpecnost). Viz nouzove signaly.",
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
      "Radioamater se identifikuje pridelenou volaci znackou (napr. OK1ABC). Jmeno a QTH se sdeli az v prubehu QSO, ale nejsou prostredkem identifikace. Viz predpisy.",
    relatedLessonIds: ["skills-03"],
    tags: ["identifikace", "recall"],
  },
  {
    id: "O-SKL-026",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co je provozni kazen radioamatera?",
    choices: [
      { id: "a", text: "Soubor pravidel pro korektrni a ohleduplne vysilani" },
      { id: "b", text: "Trest za poruseni predpisu" },
      { id: "c", text: "Vojensky rezim na amterskych frekvencich" },
      { id: "d", text: "Omezeni vysilaci doby na 1 hodinu denne" },
    ],
    correctChoiceId: "a",
    explanation:
      "Provozni kazen zahrnuje: identifikaci, dodrzovani bandplanu, pouzivani minimalniho vykonu, zdvorile chovani a respektovani prednosti nouzoveho provozu. Viz provozni rad.",
    relatedLessonIds: ["skills-03"],
    tags: ["provozni-kazen", "recall"],
  },
  {
    id: "O-SKL-027",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Smi radioamater vysilat sifrovanou (neverejnou) komunikaci?",
    choices: [
      { id: "a", text: "Ne, amatersky provoz musi byt nesifrovany a verejne srozumitelny" },
      { id: "b", text: "Ano, bez omezeni" },
      { id: "c", text: "Ano, ale pouze na UHF" },
      { id: "d", text: "Ano, pokud ma souhlas druhe stanice" },
    ],
    correctChoiceId: "a",
    explanation:
      "Amatersky provoz musi byt nesifrovany a srozumitelny pro kontrolni organy. Jedinou vyjimkou jsou ridici signaly druzic. Viz predpisy o amaterskem provozu.",
    relatedLessonIds: ["skills-03"],
    tags: ["predpisy", "recall"],
  },
  {
    id: "O-SKL-028",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Smi radioamater vysilat hudbu nebo komerci reklamu?",
    choices: [
      { id: "a", text: "Ne, amatersky provoz je urcen pouze pro nekomerccni technicke ucely" },
      { id: "b", text: "Ano, pokud je hudba kratsi nez 30 sekund" },
      { id: "c", text: "Ano, o vikendech" },
      { id: "d", text: "Ano, pokud je to vlastni tvorba" },
    ],
    correctChoiceId: "a",
    explanation:
      "Amaterska sluzba je urcena pro sebevzdelvani, technicke experimenty a vzajemnou komunikaci. Komercni obsah a hudba jsou zakazany. Viz predpisy.",
    relatedLessonIds: ["skills-03"],
    tags: ["predpisy", "recall"],
  },
  {
    id: "O-SKL-029",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Co musi radioamater uvest v stanicnim deniku (logu)?",
    choices: [
      { id: "a", text: "Datum, cas, frekvenci, druh provozu, znacku protistanice a RST" },
      { id: "b", text: "Pouze znacku protistanice" },
      { id: "c", text: "Jmeno a adresu protistanice" },
      { id: "d", text: "Stanicni denik neni povinny" },
    ],
    correctChoiceId: "a",
    explanation:
      "Stanicni denik obsahuje zakladni udaje o spojeni: datum, cas (UTC), frekvenci, druh provozu, znacku a RST. Jmeno a adresa nejsou povinne. Viz provozni rad.",
    relatedLessonIds: ["skills-03"],
    tags: ["provozni-kazen", "recall"],
  },
  {
    id: "O-SKL-030",
    examPartId: "operating",
    sectionId: "skills",
    wording: "Jaky casovy system se pouziva v amaterskem radiovem provozu?",
    choices: [
      { id: "a", text: "UTC (Coordinated Universal Time)" },
      { id: "b", text: "Mistni cas" },
      { id: "c", text: "GMT+1 (stredoevropsky cas)" },
      { id: "d", text: "Libovolny casovy system" },
    ],
    correctChoiceId: "a",
    explanation:
      "V amaterskem provozu se pouziva UTC (drive oznacovany jako GMT). Mistni cas se nepouziva, protoze stanice jsou v ruznych casovych pasmech. Viz slovnik: UTC.",
    relatedLessonIds: ["skills-03"],
    tags: ["provozni-kazen", "recall"],
  },
];
