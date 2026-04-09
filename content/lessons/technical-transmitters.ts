import type { Lesson } from "@/lib/types";

export const technicalTransmittersLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson tx-01: Principles of radio transmitters
  // -----------------------------------------------------------------------
  {
    id: "tx-01",
    examPartId: "technical",
    sectionId: "transmitters",
    order: 1,
    title: "Principy rádiových vysílačů",
    objective:
      "Popsat blokové schéma vysílače, funkci oscilátoru, modulátoru a výkonového zesilovače a vysvětlit požadavky na stabilitu a čistotu signálu.",
    estimatedMinutes: 7,
    slides: [
      {
        type: "explain",
        content:
          "Rádiový vysílač generuje vysokofrekvenční signál, moduluje ho informací (hlas, data) a zesílí na požadovaný výkon pro vyzáření anténou. Základní bloky: oscilátor, modulátor, mezibudiče a výkonový zesilovač (PA).",
      },
      {
        type: "order",
        instruction:
          "Seřaďte bloky vysílače od generování signálu po anténu:",
        items: [
          "Oscilátor (generuje nosnou frekvenci)",
          "Vyrovnávací stupeň (buffer)",
          "Modulátor (přidává informaci)",
          "Mezizesilovač (driver)",
          "Výkonový zesilovač (PA)",
          "Výstupní filtr a anténa",
        ],
        explanation:
          "Oscilátor vytvoří stabilní nosnou, buffer oddělí oscilátor od zátěže, modulátor přidá informaci, driver zesiluje signál na úroveň pro buzení PA, PA dodá plný výkon a výstupní filtr potlačí harmonické.",
      },
      {
        type: "select-answer",
        question: "Jaká je hlavní funkce oscilátoru ve vysílači?",
        choices: [
          { id: "a", text: "Generovat stabilní nosný kmitočet" },
          { id: "b", text: "Zesilovat modulovaný signál" },
          { id: "c", text: "Filtrovat harmonické složky" },
          { id: "d", text: "Přizpůsobit impedanci antény" },
        ],
        correctId: "a",
        explanation:
          "Oscilátor je srdce vysílače - vytváří nosnou frekvenci. Zesílení je úlohou PA, filtrace harmonických zajišťuje výstupní filtr.",
      },
      {
        type: "reveal",
        prompt:
          "Proč se mezi oscilátor a další stupně zařazuje vyrovnávací stupeň (buffer)?",
        answer:
          "Buffer odděluje oscilátor od změn zátěže v dalších stupních. Bez něj by změny v PA nebo modulátoru ovlivňovaly frekvenci oscilátoru (frekvenční tah).",
        explanation:
          "Frekvenční stabilita je kritická - i malé změny frekvence způsobí rušení sousedních stanic. Buffer má vysokou vstupní impedanci a nízkou výstupní.",
      },
      {
        type: "fill-blank",
        textBefore: "Výkonový zesilovač (PA) zesiluje signál na",
        blank: "požadovaný vysílací výkon",
        distractors: [
          "mezifrekvenci",
          "nižší frekvenci",
          "základní pásmo",
        ],
        textAfter: " pro vyzáření anténou.",
        explanation:
          "PA je poslední aktivní stupeň vysílače. Jeho výstupní výkon je to, co se měří jako výkon vysílače (např. 100 W PEP).",
      },
      {
        type: "explain",
        content:
          "Pracovní třída PA ovlivňuje účinnost a linearitu. Třída A je nejlineárnější, ale nejméně účinná (max. 50 %). Třída C má nejvyšší účinnost (až 80 %), ale je silně nelineární - hodí se jen pro FM. Pro SSB je potřeba lineární PA (třída AB).",
        note: "Třída A: do 50 %, AB: 50-65 %, B: do 78 %, C: do 80 %",
      },
      {
        type: "slider",
        question:
          "Vysílač dodává do antény 100 W a odebírá ze zdroje 200 W. Jaká je účinnost PA?",
        min: 10,
        max: 90,
        step: 5,
        unit: "%",
        correctValue: 50,
        tolerance: 5,
        explanation:
          "Účinnost = P_out / P_in = 100/200 = 0,5 = 50 %. Zbytek energie (100 W) se mění v teplo a musí se odvádět chladičem.",
      },
      {
        type: "exam-question",
        questionId: "T-TX-001",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte pracovní třídu PA k její typické účinnosti:",
        pairs: [
          { left: "Třída A", right: "Max. 50 %" },
          { left: "Třída AB", right: "50-65 %" },
          { left: "Třída B", right: "Asi 78 %" },
          { left: "Třída C", right: "Až 80 %" },
        ],
        explanation:
          "S rostoucí třídou roste účinnost, ale klesá linearita. Pro SSB a AM se používá AB, pro FM lze použít nelineární třídu C.",
      },
      {
        type: "pool-pick",
        instruction:
          "Vyberte všechny bloky, které patří do vysílače:",
        pool: [
          { text: "Oscilátor", correct: true },
          { text: "Výkonový zesilovač (PA)", correct: true },
          { text: "MF filtr", correct: false },
          { text: "Modulátor", correct: true },
          { text: "AGC obvod", correct: false },
          { text: "Výstupní filtr", correct: true },
        ],
        explanation:
          "MF filtr a AGC jsou součástí přijímače, ne vysílače.",
      },
    ],
    relatedQuestionIds: [
      "T-TX-001",
      "T-TX-002",
      "T-TX-003",
      "T-TX-004",
      "T-TX-005",
      "T-TX-006",
    ],
    tags: [
      "oscilator",
      "pa",
      "vysilac",
      "buffer",
      "pracovni-trida",
      "ucinnost",
      "analyze",
    ],
  },

  // -----------------------------------------------------------------------
  // Lesson tx-02: Modulation and unwanted emissions
  // -----------------------------------------------------------------------
  {
    id: "tx-02",
    examPartId: "technical",
    sectionId: "transmitters",
    order: 2,
    title: "Modulace a nežádoucí vyzařování",
    objective:
      "Rozlišit AM, FM a SSB modulaci, popsat vznik harmonických a parazitních emisí a vysvětlit způsoby jejich potlačení.",
    estimatedMinutes: 8,
    slides: [
      {
        type: "explain",
        content:
          "Modulace je proces, při kterém se informace (hlas, data) vkládá do nosné vlny. Tři základní druhy: amplitudová modulace (AM) mění výšku vlny, frekvenční modulace (FM) mění frekvenci a jednopásmová modulace (SSB) je úsporná varianta AM s jedním postranním pásmem.",
      },
      {
        type: "select-answer",
        question:
          "Jaký je hlavní důvod, proč radioamatéři na KV preferují SSB před AM?",
        choices: [
          { id: "a", text: "SSB zabírá menší šířku pásma a má vyšší účinnost" },
          { id: "b", text: "SSB má lepší kvalitu zvuku" },
          { id: "c", text: "SSB nepotřebuje oscilátor" },
          { id: "d", text: "SSB lze přijímat jednodušším přijímačem" },
        ],
        correctId: "a",
        explanation:
          "SSB zabírá asi 2,4 kHz oproti 6 kHz u AM. Navíc celý výkon jde do jednoho postranního pásma - žádná energie se neplýtvá na nosnou a druhé pásmo.",
      },
      {
        type: "reveal",
        prompt: "Čím se liší USB a LSB?",
        answer:
          "USB (Upper Sideband) používá horní postranní pásmo, LSB (Lower Sideband) dolní. Na KV pod 10 MHz se tradičně používá LSB, nad 10 MHz USB.",
        explanation:
          "Technicky jsou USB a LSB rovnocenné - rozlišení je jen konvencí, aby se stanice na jednom pásmu snadno domluvily.",
      },
      {
        type: "match",
        instruction:
          "Přiřaďte typ modulace k vlastnosti:",
        pairs: [
          { left: "AM", right: "Nosná + dvě postranní pásma" },
          { left: "SSB", right: "Jen jedno postranní pásmo, bez nosné" },
          { left: "FM", right: "Mění se frekvence nosné" },
          { left: "CW", right: "Klíčovaná nemodulovaná nosná" },
        ],
        explanation:
          "AM obsahuje nosnou a obě postranní pásma. SSB potlačí nosnou i jedno pásmo. FM mění frekvenci. CW je nejjednodušší - zapínání a vypínání nosné.",
      },
      {
        type: "explain",
        content:
          "Nežádoucí vyzařování zahrnuje harmonické (celistvé násobky pracovní frekvence) a parazitní emise (nežádoucí signály na neočekávaných frekvencích). Harmonické vznikají nelinearitou PA, parazitní emise mohou být způsobeny nežádoucí zpětnou vazbou.",
        note: "Harmonické: 2f, 3f, 4f... Např. vysílání na 7 MHz generuje harmonickou na 14 MHz.",
      },
      {
        type: "slider",
        question:
          "Vysílač pracuje na 145 MHz. Na jaké frekvenci leží jeho druhá harmonická?",
        min: 100,
        max: 500,
        step: 5,
        unit: "MHz",
        correctValue: 290,
        tolerance: 5,
        explanation:
          "Druhá harmonická = 2 x pracovní frekvence = 2 x 145 = 290 MHz. Třetí harmonická by byla na 435 MHz - což je v UHF pásmu!",
      },
      {
        type: "fill-blank",
        textBefore: "K potlačení harmonických složek ve výstupu vysílače se používá",
        blank: "dolnopropustní filtr",
        distractors: [
          "hornopropustní filtr",
          "AGC obvod",
          "fázový detektor",
        ],
        textAfter: " za výkonovým zesilovačem.",
        explanation:
          "Dolnopropustní filtr propustí pracovní frekvenci a potlačí vyšší harmonické. Zařazuje se mezi PA a anténu.",
      },
      {
        type: "exam-question",
        questionId: "T-TX-007",
      },
      {
        type: "highlight",
        instruction:
          "Označte nežádoucí emise, které může vysílač generovat:",
        terms: [
          { text: "Harmonické složky", correct: true },
          { text: "Nosná frekvence", correct: false },
          { text: "Parazitní oscilace", correct: true },
          { text: "Intermodulační produkty", correct: true },
          { text: "Postranní pásmo SSB", correct: false },
          { text: "Frekvenční přeslechnuty (splatter)", correct: true },
        ],
        explanation:
          "Nosná frekvence a postranní pásmo SSB jsou žádoucí součásti signálu. Harmonické, parazitní oscilace, intermodulace a splatter jsou nežádoucí emise, které je třeba minimalizovat.",
      },
      {
        type: "select-answer",
        question:
          "Overmodulace (přebuzení) SSB vysílače způsobí:",
        choices: [
          { id: "a", text: "Rozšíření signálu do sousedních kanálů (splatter)" },
          { id: "b", text: "Zvýšení dosahu" },
          { id: "c", text: "Zlepšení srozumitelnosti" },
          { id: "d", text: "Snížení harmonických" },
        ],
        correctId: "a",
        explanation:
          "Přebuzení PA způsobí nelineární zkreslení, které rozšíří spektrum signálu do sousedních frekvencí (splatter). To ruší ostatní stanice a je zakázáno.",
      },
    ],
    relatedQuestionIds: [
      "T-TX-007",
      "T-TX-008",
      "T-TX-009",
      "T-TX-010",
      "T-TX-011",
    ],
    tags: [
      "modulace",
      "am",
      "fm",
      "ssb",
      "harmonicke",
      "parazitni-emise",
      "splatter",
      "analyze",
    ],
  },
];
