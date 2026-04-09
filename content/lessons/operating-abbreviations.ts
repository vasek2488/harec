import type { Lesson } from "@/lib/types";

export const operatingAbbreviationsLessons: Lesson[] = [
  // -----------------------------------------------------------------------
  // Lesson 1: Operating modes and signal types
  // -----------------------------------------------------------------------
  {
    id: "abbreviations-01",
    examPartId: "operating",
    sectionId: "abbreviations",
    order: 1,
    title: "Zkratky provozních modů a signálů",
    objective:
      "Rozpoznat a správně přiřadit zkratky používané pro provozní módy, typy modulace a základní rádiové pojmy.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "V radioamatérském provozu se používají desítky zkratek pro označení modulačních módů a typů signálů. Nejzákladnější jsou CW (telegrafie), SSB (jednopásmová modulace), FM (frekvenční modulace) a AM (amplitudová modulace). Každý mód má své typické použití a frekvenční rozsah.",
        note: "CW = Continuous Wave, SSB = Single Side Band, FM = Frequency Modulation, AM = Amplitude Modulation",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratku k jejímu českému významu:",
        pairs: [
          { left: "CW", right: "Telegrafie (nepřerušovaná vlna)" },
          { left: "SSB", right: "Jednopásmová modulace" },
          { left: "FM", right: "Frekvenční modulace" },
          { left: "AM", right: "Amplitudová modulace" },
        ],
        explanation:
          "CW = Continuous Wave, SSB = Single Side Band, FM = Frequency Modulation, AM = Amplitude Modulation.",
      },
      {
        type: "fill-blank",
        textBefore: "Zkratka USB znamená",
        blank: "Upper Side Band",
        distractors: ["Universal Serial Bus", "Ultra Short Band", "Upper Signal Bandwidth"],
        textAfter: ", tedy horní postranní pásmo.",
        explanation:
          "V kontextu radioamatérského provozu USB = Upper Side Band. Nezaměňujte s počítačovým USB (Universal Serial Bus).",
      },
      {
        type: "reveal",
        prompt: "Kdy se používá USB a kdy LSB při SSB provozu?",
        answer:
          "USB se používá na pásmech nad 10 MHz (20 m a výše). LSB se používá na pásmech pod 10 MHz (40 m a níže).",
        explanation:
          "Tato konvence je historická dohoda. Výjimkou je pásmo 60 m (5 MHz), kde se používá USB.",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratky digitálních módů k popisu:",
        pairs: [
          { left: "RTTY", right: "Dálnopis (Radio Teletype)" },
          { left: "PSK", right: "Fázová manipulace (Phase Shift Keying)" },
          { left: "FT8", right: "Digitální mód pro slabé signály" },
          { left: "SSTV", right: "Pomalá televize (Slow Scan TV)" },
        ],
        explanation:
          "RTTY je nejstarší digitální mód. PSK31 je oblíbený pro QSO na KV. FT8 umožňuje spojení i při velmi slabém signálu. SSTV přenáší statické obrázky.",
      },
      {
        type: "select-answer",
        question: "Jaká modulace se konvenčně používá pro SSB provoz na pásmu 40 m (7 MHz)?",
        choices: [
          { id: "a", text: "LSB (Lower Side Band)" },
          { id: "b", text: "USB (Upper Side Band)" },
          { id: "c", text: "FM (frekvenční modulace)" },
          { id: "d", text: "AM (amplitudová modulace)" },
        ],
        correctId: "a",
        explanation:
          "Na pásmech pod 10 MHz se konvenčně používá LSB. USB se používá nad 10 MHz. FM se na KV pásmech pro běžný provoz nepoužívá.",
      },
      {
        type: "explain",
        content:
          "TX znamená vysílání (transmit), RX příjem (receive) a TRX je transceiver - zařízení, které umí obojí. RF je rádiová frekvence, AF zvuková frekvence a IF mezifrekvence - tři základní frekvenční oblasti v každém přijímači.",
        note: "TX = Transmit, RX = Receive, TRX = Transceiver, RF = Radio Frequency, AF = Audio Frequency, IF = Intermediate Frequency",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte všechny zkratky, které označují typ modulace nebo provozní mód:",
        pool: [
          { text: "CW", correct: true },
          { text: "FM", correct: true },
          { text: "SWR", correct: false },
          { text: "SSB", correct: true },
          { text: "QTH", correct: false },
          { text: "AM", correct: true },
        ],
        explanation:
          "SWR (Standing Wave Ratio) je měřicí parametr antény. QTH je Q-kód pro polohu stanice. CW, FM, SSB a AM jsou modulační módy.",
      },
      {
        type: "exam-question",
        questionId: "O-ABR-001",
      },
      {
        type: "highlight",
        instruction: "Označte zkratky, které patří mezi typy modulace:",
        terms: [
          { text: "CW", correct: true },
          { text: "FM", correct: true },
          { text: "SWR", correct: false },
          { text: "SSB", correct: true },
          { text: "QTH", correct: false },
          { text: "AM", correct: true },
        ],
        explanation:
          "CW, FM, SSB a AM jsou modulační módy. SWR je poměr stojatých vln, QTH je Q-kód pro stanoviště.",
      },
    ],
    relatedQuestionIds: [
      "O-ABR-001", "O-ABR-002", "O-ABR-003", "O-ABR-004", "O-ABR-005",
      "O-ABR-006", "O-ABR-007", "O-ABR-008", "O-ABR-009", "O-ABR-010",
      "O-ABR-011", "O-ABR-012", "O-ABR-013", "O-ABR-014", "O-ABR-015",
      "O-ABR-016", "O-ABR-017", "O-ABR-018", "O-ABR-019", "O-ABR-020",
      "O-ABR-021", "O-ABR-022", "O-ABR-023", "O-ABR-024", "O-ABR-025",
      "O-ABR-026", "O-ABR-027", "O-ABR-028",
    ],
    tags: ["modulace", "provozni-mody", "cw", "ssb", "fm", "am", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 2: Measurement and technical parameter abbreviations
  // -----------------------------------------------------------------------
  {
    id: "abbreviations-02",
    examPartId: "operating",
    sectionId: "abbreviations",
    order: 2,
    title: "Zkratky měření a technických parametrů",
    objective:
      "Rozpoznat zkratky používané pro měřicí veličiny, technické parametry a součásti rádiového zařízení.",
    estimatedMinutes: 6,
    slides: [
      {
        type: "explain",
        content:
          "Radioamatéři denně pracují se zkratkami technických parametrů. SWR (PSV) vyjadřuje kvalitu přizpůsobení antény, PEP je špičkový obálkový výkon, ERP je efektivní vyzářený výkon a SNR udává poměr signálu k šumu. Tyto hodnoty rozhodují o kvalitě spojení.",
        note: "SWR = Standing Wave Ratio, PEP = Peak Envelope Power, ERP = Effective Radiated Power, SNR = Signal to Noise Ratio",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratku k jejímu českému významu:",
        pairs: [
          { left: "SWR (PSV)", right: "Poměr stojatých vln" },
          { left: "PEP", right: "Špičkový obálkový výkon" },
          { left: "ERP", right: "Efektivní vyzářený výkon" },
          { left: "SNR", right: "Poměr signál-šum" },
        ],
        explanation:
          "SWR ideálně 1:1. PEP je maximální okamžitý výkon modulovaného signálu. ERP zahrnuje zisk antény. SNR čím vyšší, tím lepší příjem.",
      },
      {
        type: "fill-blank",
        textBefore: "Hodnota SWR 1:1 znamená",
        blank: "dokonalé přizpůsobení",
        distractors: ["maximální odraz", "nulový výkon", "přerušené vedení"],
        textAfter: " mezi vysílačem a anténou.",
        explanation:
          "SWR 1:1 znamená, že veškerá energie přechází do antény bez odrazu. Čím vyšší SWR, tím více energie se vrací zpět.",
      },
      {
        type: "select-answer",
        question: "Co měří S-metr na přijímači?",
        choices: [
          { id: "a", text: "Sílu přijímaného signálu" },
          { id: "b", text: "Poměr stojatých vln" },
          { id: "c", text: "Výkon vysílače" },
          { id: "d", text: "Frekvenci signálu" },
        ],
        correctId: "a",
        explanation:
          "S-metr zobrazuje sílu přijímaného signálu ve stupních S1 až S9 a dále v dB nad S9. SWR se měří SWR metrem, ne S-metrem.",
      },
      {
        type: "explain",
        content:
          "Zkratky součástí rádiového zařízení: PA je koncový stupeň (výkonový zesilovač), LNA je nízkošumový předzesilovač, BPF je pásmový filtr, LPF je dolní propust. VFO je proměnný oscilátor, PLL je smyčka fázového závěsu a AGC je automatické řízení zisku.",
        note: "PA = Power Amplifier, LNA = Low Noise Amplifier, BPF = Band Pass Filter, LPF = Low Pass Filter",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratku součástky k popisu:",
        pairs: [
          { left: "PA", right: "Koncový (výkonový) stupeň" },
          { left: "LNA", right: "Nízkošumový předzesilovač" },
          { left: "BPF", right: "Pásmový filtr" },
          { left: "LPF", right: "Dolní propust" },
        ],
        explanation:
          "PA zesiluje signál na výstupní výkon. LNA zesiluje slabý signál s minimálním přidaným šumem. BPF propouští jen vybrané pásmo. LPF propouští frekvence pod mezní hodnotou.",
      },
      {
        type: "reveal",
        prompt: "Co je VFO a k čemu slouží?",
        answer:
          "VFO = Variable Frequency Oscillator (proměnný frekvenční oscilátor). Slouží k naladění přijímače nebo vysílače na požadovanou frekvenci.",
        explanation:
          "Moderní TRX používají místo analogového VFO digitální syntezátor s PLL (Phase-Locked Loop), ale zkratka VFO se stále běžně používá.",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte zkratky, které označují technický parametr nebo měřicí veličinu:",
        pool: [
          { text: "SWR", correct: true },
          { text: "PEP", correct: true },
          { text: "CQ", correct: false },
          { text: "SNR", correct: true },
          { text: "dB", correct: true },
          { text: "QSL", correct: false },
        ],
        explanation:
          "CQ je výzva k navázání spojení, QSL je potvrzení spojení. SWR, PEP, SNR a dB jsou technické parametry.",
      },
      {
        type: "exam-question",
        questionId: "O-ABR-029",
      },
      {
        type: "fill-blank",
        textBefore: "Zkratka PA znamená",
        blank: "Power Amplifier",
        distractors: ["Phase Adapter", "Pulse Antenna", "Program Audio"],
        textAfter: ", tedy výkonový (koncový) zesilovač.",
        explanation:
          "PA = Power Amplifier je koncový stupeň vysílače, který zesiluje signál na požadovaný výkon před anténou.",
      },
    ],
    relatedQuestionIds: [
      "O-ABR-029", "O-ABR-030", "O-ABR-031", "O-ABR-032", "O-ABR-033",
      "O-ABR-034", "O-ABR-035", "O-ABR-036", "O-ABR-037", "O-ABR-038",
      "O-ABR-039", "O-ABR-040", "O-ABR-041", "O-ABR-042", "O-ABR-043",
      "O-ABR-044", "O-ABR-045", "O-ABR-046", "O-ABR-047", "O-ABR-048",
      "O-ABR-049", "O-ABR-050", "O-ABR-051", "O-ABR-052", "O-ABR-053",
      "O-ABR-054", "O-ABR-055", "O-ABR-056",
    ],
    tags: ["swr", "pep", "erp", "snr", "pa", "lna", "filtr", "vfo", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 3: Organizations and services
  // -----------------------------------------------------------------------
  {
    id: "abbreviations-03",
    examPartId: "operating",
    sectionId: "abbreviations",
    order: 3,
    title: "Zkratky organizací a služeb",
    objective:
      "Rozpoznat zkratky mezinárodních i českých radioamatérských organizací, diplomových programů a služeb.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Radioamatérský svět má své organizace a služby se zaběhlými zkratkami. ITU je Mezinárodní telekomunikační unie pod OSN, IARU sdružuje národní radioamatérské svazy. V ČR působí Český radioklub (ČRK) a regulátorem je ČTÚ (Český telekomunikační úřad).",
        note: "ITU = International Telecommunication Union, IARU = International Amateur Radio Union",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratku organizace k jejímu popisu:",
        pairs: [
          { left: "ITU", right: "Mezinárodní telekomunikační unie" },
          { left: "IARU", right: "Mezinárodní amatérská rádiová unie" },
          { left: "ČRK", right: "Český radioklub" },
          { left: "ČTÚ", right: "Český telekomunikační úřad" },
        ],
        explanation:
          "ITU je agentura OSN pro telekomunikace. IARU zastupuje radioamatéry v ITU. ČRK je národní svaz, ČTÚ je státní regulátor.",
      },
      {
        type: "fill-blank",
        textBefore: "Zkratka IARU znamená",
        blank: "International Amateur Radio Union",
        distractors: [
          "International Association of Radio Users",
          "International Antenna Research Unit",
          "Internet Amateur Radio Utility",
        ],
        textAfter: ".",
        explanation:
          "IARU sdružuje národní radioamatérské organizace z celého světa a zastupuje zájmy radioamatérů v ITU.",
      },
      {
        type: "select-answer",
        question: "Která organizace koordinuje mezinárodní pásmový plán pro radioamatéry?",
        choices: [
          { id: "a", text: "IARU" },
          { id: "b", text: "ITU" },
          { id: "c", text: "ARRL" },
          { id: "d", text: "ČTÚ" },
        ],
        correctId: "a",
        explanation:
          "IARU koordinuje pásmový plán (bandplan) pro radioamatéry. ITU přiděluje frekvenční pásma obecně. ARRL je americký radioklub. ČTÚ je český regulátor.",
      },
      {
        type: "reveal",
        prompt: "Jaký je vztah mezi ITU a IARU?",
        answer:
          "ITU je vládní organizace OSN, která přiděluje frekvence. IARU je nevládní organizace, která zastupuje radioamatéry jako sektorový člen ITU.",
        explanation:
          "ITU rozhoduje o přidělení kmitočtových pásem na Světových radiokomunikačních konferencích (WRC). IARU tam hájí zájmy radioamatérů.",
      },
      {
        type: "explain",
        content:
          "Diplomové programy a služby: DXCC je prestižní diplom za spojení se 100 zeměmi, WAZ za spojení se všemi 40 zónami CQ, WAS za všech 50 států USA. ARES je nouzová radioamatérská služba. QSL bureau je sběrna potvrzovacích lístků.",
        note: "DXCC = DX Century Club, WAZ = Worked All Zones, WAS = Worked All States, ARES = Amateur Radio Emergency Service",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratku k popisu služby nebo programu:",
        pairs: [
          { left: "DXCC", right: "Diplom za 100 zemí" },
          { left: "WAZ", right: "Diplom za všechny zóny" },
          { left: "ARES", right: "Nouzová radioamatérská služba" },
          { left: "QSL bureau", right: "Sběrna potvrzovacích lístků" },
        ],
        explanation:
          "DXCC vyžaduje potvrzená spojení se 100+ zeměmi. WAZ vyžaduje spojení se všemi 40 zónami CQ. ARES poskytuje komunikaci při katastrofách.",
      },
      {
        type: "exam-question",
        questionId: "O-ABR-057",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte zkratky, které označují radioamatérskou organizaci:",
        pool: [
          { text: "IARU", correct: true },
          { text: "DXCC", correct: false },
          { text: "ČRK", correct: true },
          { text: "ARRL", correct: true },
          { text: "SWR", correct: false },
          { text: "RSGB", correct: true },
        ],
        explanation:
          "DXCC je diplomový program, SWR je technický parametr. IARU, ČRK, ARRL (americký) a RSGB (britský radioklub) jsou organizace.",
      },
    ],
    relatedQuestionIds: [
      "O-ABR-057", "O-ABR-058", "O-ABR-059", "O-ABR-060", "O-ABR-061",
      "O-ABR-062", "O-ABR-063", "O-ABR-064", "O-ABR-065", "O-ABR-066",
      "O-ABR-067", "O-ABR-068", "O-ABR-069", "O-ABR-070", "O-ABR-071",
      "O-ABR-072", "O-ABR-073", "O-ABR-074", "O-ABR-075", "O-ABR-076",
      "O-ABR-077", "O-ABR-078", "O-ABR-079", "O-ABR-080", "O-ABR-081",
      "O-ABR-082", "O-ABR-083", "O-ABR-084",
    ],
    tags: ["organizace", "itu", "iaru", "crk", "ctu", "dxcc", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 4: Antennas, feedlines, propagation
  // -----------------------------------------------------------------------
  {
    id: "abbreviations-04",
    examPartId: "operating",
    sectionId: "abbreviations",
    order: 4,
    title: "Zkratky antén, vedení a šíření",
    objective:
      "Rozpoznat zkratky používané pro typy antén, napájecí vedení a způsoby šíření rádiových vln.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Antény a vedení mají vlastní soubor zkratek. GP je svislá anténa s protiváhou, Yagi je směrová anténa s prvky. Balun je symetrizační člen (balanced-unbalanced), coax je koaxiální kabel. VSWR je napěťový poměr stojatých vln.",
        note: "GP = Ground Plane, balun = balanced-unbalanced transformer, VSWR = Voltage Standing Wave Ratio",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratku k popisu antény nebo vedení:",
        pairs: [
          { left: "GP", right: "Svislá anténa s protiváhou" },
          { left: "Yagi", right: "Směrová anténa s prvky" },
          { left: "Balun", right: "Symetrizační člen" },
          { left: "Coax", right: "Koaxiální kabel" },
        ],
        explanation:
          "GP (Ground Plane) je vertikální anténa. Yagi-Uda je pojmenovaná po japonských vynálezcích. Balun převádí symetrické vedení na nesymetrické.",
      },
      {
        type: "fill-blank",
        textBefore: "Zkratka DX v radioamatérském provozu označuje",
        blank: "dálkové spojení",
        distractors: ["digitální výměnu", "dvojitý výkon", "denní provoz"],
        textAfter: " (z anglického Distance).",
        explanation:
          "DX původně z telegrafního provozu, kde D = distance a X = neznámá/velká. Dnes označuje spojení na velkou vzdálenost.",
      },
      {
        type: "select-answer",
        question: "Co znamená zkratka VSWR?",
        choices: [
          { id: "a", text: "Voltage Standing Wave Ratio (napěťový poměr stojatých vln)" },
          { id: "b", text: "Variable Signal Wave Range (proměnný rozsah signálu)" },
          { id: "c", text: "Vertical Short Wave Receiver (vertikální krátkovlnný přijímač)" },
          { id: "d", text: "Very Strong Wave Reflection (velmi silný odraz vln)" },
        ],
        correctId: "a",
        explanation:
          "VSWR = Voltage Standing Wave Ratio. Je to totéž co SWR, jen se zdůrazňuje, že se měří poměr napětí. Ideální hodnota je 1:1.",
      },
      {
        type: "reveal",
        prompt: "Co je to ladder line (žebříčkové vedení)?",
        answer:
          "Ladder line je symetrické dvouvodičové vedení s nízkou ztrátou. Má impedanci 300-600 ohm a používá se k napájení symetrických antén.",
        explanation:
          "Na rozdíl od koaxiálního kabelu má ladder line výrazně nižší ztráty, ale musí být vedena daleko od kovových předmětů.",
      },
      {
        type: "explain",
        content:
          "Zkratky šíření vln: MUF je maximální použitelná frekvence pro ionosférické šíření, LUF je nejnižší použitelná frekvence. E-skip je odraz od sporadické vrstvy E, tropo je troposférické šíření a scatter je rozptyl signálu.",
        note: "MUF = Maximum Usable Frequency, LUF = Lowest Usable Frequency",
      },
      {
        type: "exam-question",
        questionId: "O-ABR-085",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte zkratky související s šířením rádiových vln:",
        pool: [
          { text: "MUF", correct: true },
          { text: "LUF", correct: true },
          { text: "PA", correct: false },
          { text: "E-skip", correct: true },
          { text: "BPF", correct: false },
          { text: "Tropo", correct: true },
        ],
        explanation:
          "PA je výkonový zesilovač a BPF je pásmový filtr - obojí jsou součásti zařízení. MUF, LUF, E-skip a tropo souvisí se šířením vln.",
      },
    ],
    relatedQuestionIds: [
      "O-ABR-085", "O-ABR-086", "O-ABR-087", "O-ABR-088", "O-ABR-089",
      "O-ABR-090", "O-ABR-091", "O-ABR-092", "O-ABR-093", "O-ABR-094",
      "O-ABR-095", "O-ABR-096", "O-ABR-097", "O-ABR-098", "O-ABR-099",
      "O-ABR-100", "O-ABR-101", "O-ABR-102", "O-ABR-103", "O-ABR-104",
      "O-ABR-105", "O-ABR-106", "O-ABR-107", "O-ABR-108", "O-ABR-109",
      "O-ABR-110", "O-ABR-111", "O-ABR-112",
    ],
    tags: ["anteny", "vedeni", "sireni", "muf", "dx", "gp", "yagi", "recall"],
  },

  // -----------------------------------------------------------------------
  // Lesson 5: Digital modes, logging, modern tools
  // -----------------------------------------------------------------------
  {
    id: "abbreviations-05",
    examPartId: "operating",
    sectionId: "abbreviations",
    order: 5,
    title: "Zkratky digitálního provozu a moderní komunikace",
    objective:
      "Rozpoznat zkratky digitálních provozních módů, logovacích systémů a moderních komunikačních nástrojů.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Moderní radioamatérský provoz zahrnuje digitální módy: APRS pro přenos polohy a telemetrie, DMR pro digitální hlasovou komunikaci, D-STAR jako digitální standard od ICOM a FT8/FT4 pro spojení slabými signály. Tyto módy výrazně rozšířily možnosti radioamatérů.",
        note: "APRS = Automatic Packet Reporting System, DMR = Digital Mobile Radio, D-STAR = Digital Smart Technologies for Amateur Radio",
      },
      {
        type: "match",
        instruction: "Přiřaďte zkratku digitálního módu k popisu:",
        pairs: [
          { left: "APRS", right: "Automatický systém hlášení polohy" },
          { left: "DMR", right: "Digitální mobilní rádio" },
          { left: "D-STAR", right: "Digitální hlasový a datový mód" },
          { left: "FT8", right: "Digitální mód pro slabé signály" },
        ],
        explanation:
          "APRS přenáší GPS polohu přes rádio. DMR je standard z komerční sféry adaptovaný pro radioamatéry. D-STAR vyvinula firma ICOM. FT8 vytvořil Joe Taylor (K1JT).",
      },
      {
        type: "fill-blank",
        textBefore: "APRS slouží primárně k přenosu",
        blank: "polohy a telemetrie",
        distractors: ["hlasu a videa", "Morseovy abecedy", "e-mailových zpráv"],
        textAfter: " v reálném čase.",
        explanation:
          "APRS (Automatic Packet Reporting System) přenáší GPS souřadnice, meteorologická data a krátké zprávy na frekvenci 144,800 MHz v Evropě.",
      },
      {
        type: "select-answer",
        question: "Který digitální mód je nejvhodnější pro spojení při velmi slabém signálu?",
        choices: [
          { id: "a", text: "FT8" },
          { id: "b", text: "RTTY" },
          { id: "c", text: "SSTV" },
          { id: "d", text: "APRS" },
        ],
        correctId: "a",
        explanation:
          "FT8 dokáže dekódovat signály až -24 dB pod úrovní šumu. RTTY potřebuje výrazně silnější signál. SSTV přenáší obrázky a APRS slouží pro polohová data.",
      },
      {
        type: "explain",
        content:
          "Zkratky pro logování a závody: RST je report čitelnosti, síly a tónu signálu. NR je sériové číslo v závodě, MULT je násobič bodů. LoTW (Logbook of The World) je elektronický systém ARRL pro potvrzování spojení, eQSL je alternativní služba a ClubLog je logovací platforma.",
        note: "RST = Readability/Strength/Tone, LoTW = Logbook of The World",
      },
      {
        type: "reveal",
        prompt: "Co je LoTW a k čemu slouží?",
        answer:
          "LoTW = Logbook of The World. Je to elektronický systém ARRL pro potvrzování spojení pomocí digitálních podpisů. Nahrazuje papírové QSL lístky.",
        explanation:
          "LoTW používá kryptografické certifikáty k ověření identity stanic. Potvrzená spojení se počítají pro diplomy DXCC, WAS a WAZ.",
      },
      {
        type: "exam-question",
        questionId: "O-ABR-113",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte zkratky, které patří k digitálním provozním módům:",
        pool: [
          { text: "FT8", correct: true },
          { text: "DMR", correct: true },
          { text: "LoTW", correct: false },
          { text: "APRS", correct: true },
          { text: "RST", correct: false },
          { text: "D-STAR", correct: true },
        ],
        explanation:
          "LoTW je logovací služba, RST je systém hodnocení signálu. FT8, DMR, APRS a D-STAR jsou digitální provozní módy.",
      },
    ],
    relatedQuestionIds: [
      "O-ABR-113", "O-ABR-114", "O-ABR-115", "O-ABR-116", "O-ABR-117",
      "O-ABR-118", "O-ABR-119", "O-ABR-120", "O-ABR-121", "O-ABR-122",
      "O-ABR-123", "O-ABR-124", "O-ABR-125", "O-ABR-126", "O-ABR-127",
      "O-ABR-128", "O-ABR-129", "O-ABR-130", "O-ABR-131", "O-ABR-132",
      "O-ABR-133", "O-ABR-134", "O-ABR-135", "O-ABR-136", "O-ABR-137",
      "O-ABR-138", "O-ABR-139", "O-ABR-140",
    ],
    tags: ["digitalni-mody", "aprs", "dmr", "dstar", "ft8", "lotw", "recall"],
  },
];
