import type { Question } from "@/lib/types";

export const technicalTransmittersQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Transmitter principles (tx-01)
  // -----------------------------------------------------------------------
  {
    id: "T-TX-001",
    examPartId: "technical",
    sectionId: "transmitters",
    wording: "Jaká je hlavní funkce oscilátoru ve vysílači?",
    choices: [
      { id: "a", text: "Generovat stabilní nosný kmitočet" },
      { id: "b", text: "Zesilovat signál na požadovaný výkon" },
      { id: "c", text: "Modulovat signál hlasem" },
      { id: "d", text: "Filtrovat harmonické složky" },
    ],
    correctChoiceId: "a",
    explanation:
      "Oscilátor je zdrojem nosné frekvence. Zesílení zajišťuje PA, modulaci modulátor a filtraci harmonických výstupní filtr. Stabilita oscilátoru je kritická - nestabilní frekvence ruší sousední stanice.",
    relatedLessonIds: ["tx-01"],
    tags: ["oscilator", "recall"],
  },
  {
    id: "T-TX-002",
    examPartId: "technical",
    sectionId: "transmitters",
    wording:
      "Proč se mezi oscilátor a další stupně vysílače zařazuje vyrovnávací stupeň (buffer)?",
    choices: [
      { id: "a", text: "Aby změny zátěže v dalších stupních neovlivňovaly frekvenci oscilátoru" },
      { id: "b", text: "Aby se zvýšil výkon na dvojnásobek" },
      { id: "c", text: "Aby se moduloval signál" },
      { id: "d", text: "Aby se potlačil šum" },
    ],
    correctChoiceId: "a",
    explanation:
      "Buffer izoluje oscilátor od zátěže. Bez bufferu by kolísání impedance modulátoru nebo PA způsobovalo nestabilitu frekvence (frekvenční tah). Buffer nezesiluje výkon výrazně - to je úloha driveru a PA.",
    relatedLessonIds: ["tx-01"],
    tags: ["buffer", "oscilator", "recall"],
  },
  {
    id: "T-TX-003",
    examPartId: "technical",
    sectionId: "transmitters",
    wording:
      "Která pracovní třída výkonového zesilovače je nejvhodnější pro SSB vysílač?",
    choices: [
      { id: "a", text: "Třída AB" },
      { id: "b", text: "Třída C" },
      { id: "c", text: "Třída D" },
      { id: "d", text: "Třída A s účinností 80 %" },
    ],
    correctChoiceId: "a",
    explanation:
      "SSB vyžaduje lineární zesílení, jinak vzniká zkreslení (splatter). Třída AB nabízí dobrý kompromis mezi linearitou a účinností (50-65 %). Třída C je nelineární - vhodná jen pro FM. Třída A má max. 50 % účinnosti, ne 80 %.",
    relatedLessonIds: ["tx-01"],
    tags: ["pracovni-trida", "pa", "ssb", "apply"],
  },
  {
    id: "T-TX-004",
    examPartId: "technical",
    sectionId: "transmitters",
    wording:
      "Vysílač dodává do antény 75 W a odebírá ze zdroje 150 W. Jaká je účinnost PA?",
    choices: [
      { id: "a", text: "50 %" },
      { id: "b", text: "75 %" },
      { id: "c", text: "25 %" },
      { id: "d", text: "200 %" },
    ],
    correctChoiceId: "a",
    explanation:
      "Účinnost = P_out/P_in = 75/150 = 0,5 = 50 %. Zbývajících 75 W se mění v teplo. Účinnost nemůže překročit 100 % (odpověď 200 % porušuje zákon zachování energie).",
    relatedLessonIds: ["tx-01"],
    tags: ["ucinnost", "pa", "apply"],
  },
  {
    id: "T-TX-005",
    examPartId: "technical",
    sectionId: "transmitters",
    wording:
      "Třída C výkonového zesilovače se vyznačuje:",
    choices: [
      { id: "a", text: "Vysokou účinností, ale silnou nelinearitou" },
      { id: "b", text: "Nízkou účinností a vysokou linearitou" },
      { id: "c", text: "Účinností maximálně 25 %" },
      { id: "d", text: "Vhodností pro všechny druhy modulace" },
    ],
    correctChoiceId: "a",
    explanation:
      "Třída C má účinnost až 80 %, ale je silně nelineární - tranzistor vede méně než polovinu periody. Proto je vhodná jen pro FM, kde nelinearita nevadí (konstantní obálka). Pro AM a SSB je nepoužitelná.",
    relatedLessonIds: ["tx-01"],
    tags: ["pracovni-trida", "pa", "analyze"],
  },
  {
    id: "T-TX-006",
    examPartId: "technical",
    sectionId: "transmitters",
    wording:
      "Jaká je funkce výstupního filtru za PA vysílače?",
    choices: [
      { id: "a", text: "Potlačit harmonické a nežádoucí emise" },
      { id: "b", text: "Zesilovat signál na vyšší výkon" },
      { id: "c", text: "Modulovat signál" },
      { id: "d", text: "Stabilizovat frekvenci oscilátoru" },
    ],
    correctChoiceId: "a",
    explanation:
      "Výstupní filtr (obvykle dolnopropustní) propustí pracovní frekvenci a potlačí harmonické složky, které by jinak rušily jiné služby. Zesílení zajišťuje PA, ne filtr.",
    relatedLessonIds: ["tx-01"],
    tags: ["harmonicke", "filtr", "recall"],
  },

  // -----------------------------------------------------------------------
  // Modulation & unwanted emissions (tx-02)
  // -----------------------------------------------------------------------
  {
    id: "T-TX-007",
    examPartId: "technical",
    sectionId: "transmitters",
    wording: "Jaký je hlavní rozdíl mezi AM a SSB?",
    choices: [
      { id: "a", text: "SSB potlačí nosnou a jedno postranní pásmo, čímž šetří šířku pásma a výkon" },
      { id: "b", text: "AM má užší šířku pásma než SSB" },
      { id: "c", text: "SSB vysílá na dvou frekvencích současně" },
      { id: "d", text: "AM nevyužívá nosnou vlnu" },
    ],
    correctChoiceId: "a",
    explanation:
      "AM obsahuje nosnou + obě postranní pásma (2x informace). SSB odstraní nosnou a jedno pásmo - zabírá poloviční šířku a veškerý výkon jde do užitečného signálu. AM má širší pásmo, ne užší.",
    relatedLessonIds: ["tx-02"],
    tags: ["modulace", "am", "ssb", "recall"],
  },
  {
    id: "T-TX-008",
    examPartId: "technical",
    sectionId: "transmitters",
    wording:
      "Na jaké frekvenci leží druhá harmonická vysílače pracujícího na 7,050 MHz?",
    choices: [
      { id: "a", text: "14,100 MHz" },
      { id: "b", text: "21,150 MHz" },
      { id: "c", text: "3,525 MHz" },
      { id: "d", text: "7,100 MHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "Druhá harmonická = 2 x pracovní frekvence = 2 x 7,050 = 14,100 MHz. Třetí harmonická (21,150 MHz) je trojnásobek. Subharmonická (3,525 MHz) reálně nevzniká. 7,100 MHz není harmonická.",
    relatedLessonIds: ["tx-02"],
    tags: ["harmonicke", "apply"],
  },
  {
    id: "T-TX-009",
    examPartId: "technical",
    sectionId: "transmitters",
    wording: "K potlačení harmonických složek ve výstupu vysílače se používá:",
    choices: [
      { id: "a", text: "Dolnopropustní filtr za výkonovým zesilovačem" },
      { id: "b", text: "Hornopropustní filtr před oscilátorem" },
      { id: "c", text: "Zvýšení výkonu PA" },
      { id: "d", text: "Zkrácení anténního kabelu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Dolnopropustní filtr propustí pracovní frekvenci a potlačí vyšší harmonické. Hornopropustní filtr by naopak harmonické propustil. Zvýšení výkonu problém zhoršuje. Délka kabelu nemá na harmonické přímý vliv.",
    relatedLessonIds: ["tx-02"],
    tags: ["harmonicke", "filtr", "recall"],
  },
  {
    id: "T-TX-010",
    examPartId: "technical",
    sectionId: "transmitters",
    wording: "Co způsobí overmodulace (přebuzení) SSB vysílače?",
    choices: [
      { id: "a", text: "Rozšíření signálu do sousedních kanálů (splatter)" },
      { id: "b", text: "Zvýšení dosahu bez vedlejších účinků" },
      { id: "c", text: "Zúžení šířky pásma signálu" },
      { id: "d", text: "Zlepšení poměru signál/šum" },
    ],
    correctChoiceId: "a",
    explanation:
      "Přebuzení způsobí nelineární zkreslení v PA, které rozšíří spektrum signálu (splatter). To ruší stanice na sousedních frekvencích. Dosah se přebuzením nezvyšuje - naopak klesá srozumitelnost.",
    relatedLessonIds: ["tx-02"],
    tags: ["splatter", "ssb", "analyze"],
  },
  {
    id: "T-TX-011",
    examPartId: "technical",
    sectionId: "transmitters",
    wording:
      "Při frekvenční modulaci (FM) se mění:",
    choices: [
      { id: "a", text: "Frekvence nosné vlny podle modulačního signálu" },
      { id: "b", text: "Amplituda nosné vlny podle modulačního signálu" },
      { id: "c", text: "Fáze i amplituda současně" },
      { id: "d", text: "Výkon vysílače podle hlasitosti" },
    ],
    correctChoiceId: "a",
    explanation:
      "U FM se mění frekvence nosné úměrně okamžité hodnotě modulačního signálu. Amplituda zůstává konstantní - to je hlavní výhoda FM (odolnost proti amplitudovému rušení). Změna amplitudy je AM.",
    relatedLessonIds: ["tx-02"],
    tags: ["modulace", "fm", "recall"],
  },
];
