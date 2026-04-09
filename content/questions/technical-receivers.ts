import type { Question } from "@/lib/types";

export const technicalReceiversQuestions: Question[] = [
  // -----------------------------------------------------------------------
  // Receiver principles (rx-01)
  // -----------------------------------------------------------------------
  {
    id: "T-RX-001",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Jaká je hlavní výhoda superheterodynního přijímače?",
    choices: [
      { id: "a", text: "Filtrace a zesílení probíhají na pevné mezifrekvenci" },
      { id: "b", text: "Nepotřebuje lokální oscilátor" },
      { id: "c", text: "Má nejnižší spotřebu energie" },
      { id: "d", text: "Nepotřebuje anténu" },
    ],
    correctChoiceId: "a",
    explanation:
      "Superheterodyn převádí přijímaný signál na pevnou MF, kde lze snadno realizovat kvalitní filtr. Lokální oscilátor je naopak nezbytnou součástí tohoto přijímače.",
    relatedLessonIds: ["rx-01"],
    tags: ["superheterodyn", "recall"],
  },
  {
    id: "T-RX-002",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Co je to mezifrekvence (MF) v superheterodynním přijímači?",
    choices: [
      { id: "a", text: "Pevná frekvence vzniklá směšováním přijímaného signálu s lokálním oscilátorem" },
      { id: "b", text: "Frekvence nosné vlny vysílače" },
      { id: "c", text: "Frekvence NF signálu na výstupu" },
      { id: "d", text: "Frekvence napájecího zdroje" },
    ],
    correctChoiceId: "a",
    explanation:
      "MF = |f_přijímaná - f_LO|. Typické hodnoty MF jsou 455 kHz pro AM přijímače a 10,7 MHz pro FM. Na této pevné frekvenci probíhá hlavní filtrace a zesílení.",
    relatedLessonIds: ["rx-01"],
    tags: ["mezifrekvence", "recall"],
  },
  {
    id: "T-RX-003",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Jaká je typická mezifrekvence klasického KV superheterodynního přijímače?",
    choices: [
      { id: "a", text: "455 kHz" },
      { id: "b", text: "10,7 MHz" },
      { id: "c", text: "50 Hz" },
      { id: "d", text: "1 GHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "455 kHz je standardní MF pro AM/KV přijímače. 10,7 MHz se používá u VHF FM přijímačů. Moderní KV přijímače mohou mít i vyšší první MF (např. 45 MHz) pro lepší potlačení zrcadlové frekvence.",
    relatedLessonIds: ["rx-01"],
    tags: ["mezifrekvence", "recall"],
  },
  {
    id: "T-RX-004",
    examPartId: "technical",
    sectionId: "receivers",
    wording: "Co je to zrcadlová frekvence (image frequency)?",
    choices: [
      { id: "a", text: "Nežádoucí frekvence, která po směšování dává stejnou MF jako užitečný signál" },
      { id: "b", text: "Frekvence na které přijímač vysílá" },
      { id: "c", text: "Druhá harmonická přijímaného signálu" },
      { id: "d", text: "Frekvence lokálního oscilátoru" },
    ],
    correctChoiceId: "a",
    explanation:
      "Zrcadlová frekvence leží od LO na opačné straně než užitečný signál, vzdálena o 2x MF. Potlačuje se vstupním filtrem před směšovačem. Čím vyšší MF, tím snazší potlačení.",
    relatedLessonIds: ["rx-01"],
    tags: ["zrcadlova-frekvence", "analyze"],
  },
  {
    id: "T-RX-005",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Přijímač s MF 455 kHz je naladěn na 7,100 MHz. LO je na 7,555 MHz. Na jaké frekvenci leží zrcadlový signál?",
    choices: [
      { id: "a", text: "8,010 MHz" },
      { id: "b", text: "6,645 MHz" },
      { id: "c", text: "7,555 MHz" },
      { id: "d", text: "7,100 MHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "Zrcadlová frekvence = f_LO + MF = 7,555 + 0,455 = 8,010 MHz. Leží na opačné straně od LO než užitečný signál, vzdálena o 2x MF (2 x 455 = 910 kHz) od přijímané frekvence.",
    relatedLessonIds: ["rx-01"],
    tags: ["zrcadlova-frekvence", "apply"],
  },
  {
    id: "T-RX-006",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Přijímač s přímým směšováním (direct conversion) se liší od superheterodynu tím, že:",
    choices: [
      { id: "a", text: "Směšuje přijatý signál přímo na nulovou frekvenci (baseband)" },
      { id: "b", text: "Nemá žádný oscilátor" },
      { id: "c", text: "Používá dvě mezifrekvence" },
      { id: "d", text: "Zesiluje signál bez směšování" },
    ],
    correctChoiceId: "a",
    explanation:
      "Přímé směšování (homodyne) směšuje signál s oscilátorem na stejné frekvenci, čímž získá přímo NF signál. Oscilátor je stále potřebný. Dvě MF má přijímač s dvojím směšováním.",
    relatedLessonIds: ["rx-01"],
    tags: ["prime-smesovani", "recall"],
  },
  {
    id: "T-RX-007",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Co je hlavním rysem SDR (Software Defined Radio) přijímače?",
    choices: [
      { id: "a", text: "Signál se digitalizuje A/D převodníkem a zpracovává softwarově" },
      { id: "b", text: "Používá výhradně analogové filtry" },
      { id: "c", text: "Nemůže přijímat SSB signály" },
      { id: "d", text: "Pracuje pouze na VHF" },
    ],
    correctChoiceId: "a",
    explanation:
      "SDR digitalizuje VF signál co nejdříve a veškerou filtraci, demodulaci a zpracování provádí softwarově. Může přijímat libovolný druh modulace pouhou změnou programu.",
    relatedLessonIds: ["rx-01"],
    tags: ["sdr", "recall"],
  },
  {
    id: "T-RX-008",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Jaká je funkce směšovače v superheterodynním přijímači?",
    choices: [
      { id: "a", text: "Převádí přijímaný signál na mezifrekvenci" },
      { id: "b", text: "Zesiluje VF signál z antény" },
      { id: "c", text: "Demoduluje signál na NF" },
      { id: "d", text: "Generuje nosnou frekvenci" },
    ],
    correctChoiceId: "a",
    explanation:
      "Směšovač kombinuje přijímaný signál s lokálním oscilátorem a na výstupu vzniká mezifrekvence. VF zesílení zajišťuje předzesilovač, demodulaci detektor, generování nosné oscilátor.",
    relatedLessonIds: ["rx-01"],
    tags: ["superheterodyn", "smesovac", "recall"],
  },

  // -----------------------------------------------------------------------
  // Receiver characteristics (rx-02)
  // -----------------------------------------------------------------------
  {
    id: "T-RX-009",
    examPartId: "technical",
    sectionId: "receivers",
    wording: "Co vyjadřuje citlivost přijímače?",
    choices: [
      { id: "a", text: "Nejslabší signál, který přijímač dokáže použitelně zpracovat" },
      { id: "b", text: "Maximální výkon, který přijímač vydrží bez poškození" },
      { id: "c", text: "Šířku propuštěného pásma" },
      { id: "d", text: "Výstupní výkon NF zesilovače" },
    ],
    correctChoiceId: "a",
    explanation:
      "Citlivost udává minimální vstupní signál pro daný poměr signál/šum (např. 10 dB SINAD). Měří se v mikrovoltech nebo dBm. Maximální snesitelný výkon souvisí s dynamickým rozsahem, ne citlivostí.",
    relatedLessonIds: ["rx-02"],
    tags: ["citlivost", "recall"],
  },
  {
    id: "T-RX-010",
    examPartId: "technical",
    sectionId: "receivers",
    wording: "Selektivita přijímače je schopnost:",
    choices: [
      { id: "a", text: "Oddělit žádaný signál od blízkých nežádoucích signálů" },
      { id: "b", text: "Přijímat co nejslabší signály" },
      { id: "c", text: "Pracovat na více pásmech současně" },
      { id: "d", text: "Automaticky ladit na nejsilnější signál" },
    ],
    correctChoiceId: "a",
    explanation:
      "Selektivita závisí především na kvalitě MF filtru. Příjem slabých signálů je citlivost. Selektivita určuje, jak dobře přijímač potlačí signály na sousedních frekvencích.",
    relatedLessonIds: ["rx-02"],
    tags: ["selektivita", "recall"],
  },
  {
    id: "T-RX-011",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Jaká je typická šířka pásma MF filtru pro příjem SSB?",
    choices: [
      { id: "a", text: "Přibližně 2,4 kHz" },
      { id: "b", text: "Přibližně 300 Hz" },
      { id: "c", text: "Přibližně 15 kHz" },
      { id: "d", text: "Přibližně 100 kHz" },
    ],
    correctChoiceId: "a",
    explanation:
      "SSB signál zabírá asi 2,4 kHz. Filtr 300 Hz je pro CW, 15 kHz pro FM. Šířka filtru musí odpovídat šířce přijímaného signálu - příliš úzký filtr ořízne modulaci, příliš široký propustí rušení.",
    relatedLessonIds: ["rx-02"],
    tags: ["mf-filtr", "ssb", "recall"],
  },
  {
    id: "T-RX-012",
    examPartId: "technical",
    sectionId: "receivers",
    wording: "Funkce AGC (automatické řízení zisku) v přijímači je:",
    choices: [
      { id: "a", text: "Udržovat přibližně konstantní NF výstup při měnící se síle signálu" },
      { id: "b", text: "Automaticky ladit přijímač na nejsilnější signál" },
      { id: "c", text: "Potlačovat šum při absenci signálu" },
      { id: "d", text: "Stabilizovat frekvenci lokálního oscilátoru" },
    ],
    correctChoiceId: "a",
    explanation:
      "AGC snižuje zisk při silných signálech a zvyšuje při slabých. Potlačení šumu je funkce squelch (šumová uzávěra). Stabilizace oscilátoru se řeší jinak (krystal, PLL).",
    relatedLessonIds: ["rx-02"],
    tags: ["agc", "recall"],
  },
  {
    id: "T-RX-013",
    examPartId: "technical",
    sectionId: "receivers",
    wording: "Dynamický rozsah přijímače vyjadřuje:",
    choices: [
      { id: "a", text: "Rozsah mezi nejslabším a nejsilnějším zpracovatelným signálem" },
      { id: "b", text: "Rozsah frekvencí, které přijímač pokrývá" },
      { id: "c", text: "Počet pásem, na kterých přijímač pracuje" },
      { id: "d", text: "Rozsah regulace hlasitosti" },
    ],
    correctChoiceId: "a",
    explanation:
      "Dynamický rozsah v dB vyjadřuje poměr mezi nejsilnějším signálem (bez zkreslení) a nejslabším zpracovatelným signálem. Frekvenční rozsah je jiný parametr.",
    relatedLessonIds: ["rx-02"],
    tags: ["dynamicky-rozsah", "recall"],
  },
  {
    id: "T-RX-014",
    examPartId: "technical",
    sectionId: "receivers",
    wording: "Intermodulační produkty v přijímači vznikají:",
    choices: [
      { id: "a", text: "Směšováním dvou silných signálů v nelineárním stupni" },
      { id: "b", text: "Špatným přizpůsobením antény" },
      { id: "c", text: "Nedostatečným napájecím napětím" },
      { id: "d", text: "Příliš úzkým MF filtrem" },
    ],
    correctChoiceId: "a",
    explanation:
      "Intermodulace nastává, když dva nebo více silných signálů vstoupí do nelineárního stupně (směšovač, VF zesilovač) a vytvoří falešné signály na kombinačních frekvencích (f1 +/- f2, 2f1 - f2 atd.).",
    relatedLessonIds: ["rx-02"],
    tags: ["intermodulace", "analyze"],
  },
  {
    id: "T-RX-015",
    examPartId: "technical",
    sectionId: "receivers",
    wording:
      "Který parametr přijímače je nejdůležitější pro příjem slabého signálu vedle silné stanice?",
    choices: [
      { id: "a", text: "Dynamický rozsah a selektivita" },
      { id: "b", text: "Pouze citlivost" },
      { id: "c", text: "Pouze výstupní výkon NF" },
      { id: "d", text: "Počet mezifrekvenčních stupňů" },
    ],
    correctChoiceId: "a",
    explanation:
      "Samotná citlivost nestačí - přijímač musí mít dostatečný dynamický rozsah, aby silný signál nezpůsobil zkreslení, a dobrou selektivitu, aby ho odfiltroval. Obě vlastnosti jsou klíčové současně.",
    relatedLessonIds: ["rx-02"],
    tags: ["dynamicky-rozsah", "selektivita", "analyze"],
  },
];
