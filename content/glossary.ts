import type { GlossaryTerm } from "@/lib/types";

export const glossary: GlossaryTerm[] = [
  // -----------------------------------------------------------------------
  // Technical Theory terms (from theory-01, theory-02, theory-03)
  // -----------------------------------------------------------------------
  {
    id: "napeti",
    term: "Napětí (U)",
    definition:
      "Elektrické napětí je rozdíl potenciálů mezi dvěma body obvodu. Měří se ve voltech [V]. V analogiích odpovídá tlaku vody v potrubí.",
    relatedLessonIds: ["theory-01"],
    tags: ["napeti", "ohmov-zakon"],
  },
  {
    id: "proud",
    term: "Proud (I)",
    definition:
      "Elektrický proud je tok elektrického náboje vodičem. Měří se v ampérech [A]. 1 ampér = 1 coulomb náboje za sekundu.",
    relatedLessonIds: ["theory-01"],
    tags: ["proud", "ohmov-zakon"],
  },
  {
    id: "odpor",
    term: "Odpor (R)",
    definition:
      "Elektrický odpor je veličina vyjadřující, jak moc součástka brání průchodu proudu. Měří se v ohmech [Ω]. R = U/I.",
    relatedLessonIds: ["theory-01"],
    tags: ["odpor", "ohmov-zakon"],
  },
  {
    id: "vykon",
    term: "Výkon (P)",
    definition:
      "Elektrický výkon je energie spotřebovaná za jednotku času. Měří se ve wattech [W]. P = U × I = I² × R = U²/R.",
    relatedLessonIds: ["theory-01"],
    tags: ["vykon", "ohmov-zakon"],
  },
  {
    id: "ohmov-zakon",
    term: "Ohmův zákon",
    definition:
      "Základní zákon elektrotechniky: U = I × R. Vyjadřuje přímou úměru mezi napětím a proudem při konstantním odporu.",
    relatedLessonIds: ["theory-01"],
    tags: ["ohmov-zakon", "napeti", "proud", "odpor"],
  },
  {
    id: "frekvence",
    term: "Frekvence (f)",
    definition:
      "Počet kmitů střídavého signálu za sekundu. Měří se v hertzech [Hz]. 1 MHz = 1 000 000 Hz.",
    relatedLessonIds: ["theory-02"],
    tags: ["frekvence", "stridavy-proud"],
  },
  {
    id: "vlnova-delka",
    term: "Vlnová délka (λ)",
    definition:
      "Vzdálenost, kterou elektromagnetická vlna urazí za jednu periodu. λ = c/f. Při 145 MHz je vlnová délka přibližně 2 m.",
    relatedLessonIds: ["theory-02"],
    tags: ["vlnova-delka", "frekvence", "em-vlny"],
  },
  {
    id: "perioda",
    term: "Perioda (T)",
    definition:
      "Doba trvání jednoho kmitu střídavého signálu. T = 1/f. Při frekvenci 1 MHz je perioda 1 μs.",
    relatedLessonIds: ["theory-02"],
    tags: ["perioda", "frekvence", "stridavy-proud"],
  },
  {
    id: "impedance",
    term: "Impedance (Z)",
    definition:
      "Celkový odpor střídavému proudu v obvodu, vyjádřený v ohmech. Zahrnuje činný odpor (R) i reaktanci (X). Z² = R² + X². Standardní impedance v radioamatérské praxi je 50 Ω.",
    relatedLessonIds: ["theory-03"],
    tags: ["impedance", "reaktance", "stridavy-proud"],
  },
  {
    id: "reaktance",
    term: "Reaktance (X)",
    definition:
      "Odpor, který ve střídavém obvodu kladou kondenzátory (kapacitní Xc) a cívky (indukční Xl). Měří se v ohmech [Ω].",
    relatedLessonIds: ["theory-03"],
    tags: ["reaktance", "kapacita", "indukcnost"],
  },
  {
    id: "kapacita",
    term: "Kapacita (C)",
    definition:
      "Schopnost kondenzátoru uchovávat elektrický náboj. Měří se ve faradech [F]. Běžné hodnoty v radiotechnice jsou pF až μF.",
    relatedLessonIds: ["theory-03"],
    tags: ["kapacita", "reaktance"],
  },
  {
    id: "indukcnost",
    term: "Indukčnost (L)",
    definition:
      "Vlastnost cívky vytvářet magnetické pole při průchodu proudu. Měří se v henry [H]. Běžné hodnoty: μH až mH.",
    relatedLessonIds: ["theory-03"],
    tags: ["indukcnost", "reaktance"],
  },

  // -----------------------------------------------------------------------
  // Components & Circuits
  // -----------------------------------------------------------------------
  {
    id: "rezistor",
    term: "Rezistor",
    definition: "Součástka s definovaným odporem. Omezuje proud v obvodu. Hodnota se určuje barevným kódem nebo číselným označením.",
    relatedLessonIds: ["comp-01"],
    tags: ["soucastky", "odpor"],
  },
  {
    id: "kondenzator",
    term: "Kondenzátor",
    definition: "Součástka ukládající energii v elektrickém poli. Propouští střídavý proud, blokuje stejnosměrný. Kapacita se měří ve faradech.",
    relatedLessonIds: ["comp-01", "theory-03"],
    tags: ["soucastky", "kapacita"],
  },
  {
    id: "civka",
    term: "Cívka (induktor)",
    definition: "Součástka ukládající energii v magnetickém poli. Propouští DC, blokuje VF. Indukčnost se měří v henry.",
    relatedLessonIds: ["comp-01", "theory-03"],
    tags: ["soucastky", "indukcnost"],
  },
  {
    id: "dioda",
    term: "Dioda",
    definition: "Polovodičová součástka propouštějící proud jen jedním směrem. Používá se k usměrnění, detekci a ochraně.",
    relatedLessonIds: ["comp-02"],
    tags: ["soucastky", "polovodice"],
  },
  {
    id: "tranzistor",
    term: "Tranzistor",
    definition: "Polovodičová součástka pro zesilování a spínání. Typy: bipolární (NPN/PNP) a unární (FET, MOSFET).",
    relatedLessonIds: ["comp-02"],
    tags: ["soucastky", "polovodice"],
  },
  {
    id: "rezonance",
    term: "Rezonance",
    definition: "Stav LC obvodu, kdy kapacitní a induktivní reaktance jsou stejné (Xc = Xl). Rezonanční frekvence: f = 1/(2π√(LC)).",
    relatedLessonIds: ["circuits-02"],
    tags: ["rezonance", "obvody"],
  },
  {
    id: "q-faktor",
    term: "Činitel jakosti (Q)",
    definition: "Míra selektivity rezonančního obvodu. Vyšší Q = užší pásmo propustnosti = lepší selektivita. Q = f0/B.",
    relatedLessonIds: ["circuits-02"],
    tags: ["q-faktor", "rezonance", "obvody"],
  },

  // -----------------------------------------------------------------------
  // Receivers & Transmitters
  // -----------------------------------------------------------------------
  {
    id: "superheterodyn",
    term: "Superheterodyn",
    definition: "Typ přijímače, který převádí přijímaný signál na mezifrekvenční (IF) signál směšováním s lokálním oscilátorem. Nejrozšířenější architektura.",
    relatedLessonIds: ["rx-01"],
    tags: ["prijimace", "superheterodyn"],
  },
  {
    id: "citlivost",
    term: "Citlivost přijímače",
    definition: "Nejslabší signál, který přijímač dokáže zpracovat s dostatečným poměrem S/N. Měří se v μV nebo dBm.",
    relatedLessonIds: ["rx-02"],
    tags: ["prijimace", "citlivost"],
  },
  {
    id: "selektivita",
    term: "Selektivita",
    definition: "Schopnost přijímače oddělit žádaný signál od signálů na sousedních frekvencích. Závisí na kvalitě IF filtru.",
    relatedLessonIds: ["rx-02"],
    tags: ["prijimace", "selektivita"],
  },
  {
    id: "agc",
    term: "AGC (Automatic Gain Control)",
    definition: "Automatické řízení zisku. Udržuje konstantní úroveň zvuku při měnící se síle signálu.",
    relatedLessonIds: ["rx-02"],
    tags: ["prijimace", "agc"],
  },
  {
    id: "oscilator",
    term: "Oscilátor",
    definition: "Obvod generující střídavý signál určité frekvence. Základ každého vysílače.",
    relatedLessonIds: ["tx-01"],
    tags: ["vysilace", "oscilator"],
  },
  {
    id: "koncovy-stupen",
    term: "Koncový stupeň (PA)",
    definition: "Výkonový zesilovač na výstupu vysílače. Zesílí signál na požadovaný vyzařovaný výkon.",
    relatedLessonIds: ["tx-01"],
    tags: ["vysilace", "koncovy-stupen"],
  },
  {
    id: "ssb",
    term: "SSB (Single Side Band)",
    definition: "Modulace s jedním postranním pásmem. Úspornější než AM - vysílá jen jeden postranní pásmo bez nosné. USB nad 10 MHz, LSB pod 10 MHz.",
    relatedLessonIds: ["tx-02"],
    tags: ["modulace", "ssb"],
  },

  // -----------------------------------------------------------------------
  // Antennas & Propagation
  // -----------------------------------------------------------------------
  {
    id: "dipol",
    term: "Dipól",
    definition: "Základní anténa - dva vodiče o celkové délce λ/2. Impedance ve středu ≈73 Ω. Délka [m] ≈ 150/f [MHz].",
    relatedLessonIds: ["ant-01"],
    tags: ["anteny", "dipol"],
  },
  {
    id: "yagi",
    term: "Yagi anténa",
    definition: "Směrová anténa s direktorY, zářičem a reflektorem. Více direktorů = větší zisk a směrovost.",
    relatedLessonIds: ["ant-01"],
    tags: ["anteny", "yagi"],
  },
  {
    id: "psv",
    term: "PSV (SWR)",
    definition: "Poměr stojatých vln - měří kvalitu přizpůsobení antény. PSV 1:1 = ideální. PSV > 3:1 = špatné přizpůsobení, hrozí poškození vysílače.",
    relatedLessonIds: ["ant-02"],
    tags: ["anteny", "psv"],
  },
  {
    id: "balun",
    term: "Balun",
    definition: "Převoděč mezi symetrickým (balanced) a nesymetrickým (unbalanced) vedením. Používá se mezi koaxem a dipólem.",
    relatedLessonIds: ["ant-02"],
    tags: ["anteny", "balun"],
  },
  {
    id: "ionosfera",
    term: "Ionosféra",
    definition: "Ionizovaná vrstva atmosféry (60-600 km). Odráží KV signály zpět k Zemi. Vrstvy D, E, F1, F2 se liší výškou a ionizací.",
    relatedLessonIds: ["prop-01"],
    tags: ["sireni", "ionosfera"],
  },
  {
    id: "muf",
    term: "MUF (Maximum Usable Frequency)",
    definition: "Nejvyšší frekvence, která se ještě odrazí od ionosféry pro danou trasu. Závisí na sluneční aktivitě a denní době.",
    relatedLessonIds: ["prop-01"],
    tags: ["sireni", "muf"],
  },

  // -----------------------------------------------------------------------
  // Measurements
  // -----------------------------------------------------------------------
  {
    id: "decibel",
    term: "Decibel (dB)",
    definition: "Logaritmická jednotka pro poměr výkonů: dB = 10×log₁₀(P2/P1). +3 dB = zdvojení, +10 dB = 10×, −3 dB = polovina.",
    relatedLessonIds: ["meas-01"],
    tags: ["mereni", "decibel"],
  },
  {
    id: "dummy-load",
    term: "Dummy load (umělá zátěž)",
    definition: "Nezářující rezistivní zátěž 50 Ω pro testování vysílačů bez vyzařování do éteru.",
    relatedLessonIds: ["meas-01"],
    tags: ["mereni", "dummy-load"],
  },

  // -----------------------------------------------------------------------
  // Interference
  // -----------------------------------------------------------------------
  {
    id: "tvi",
    term: "TVI (Television Interference)",
    definition: "Rušení televizního příjmu radioamatérským vysílačem, typicky harmonickými frekvencemi.",
    relatedLessonIds: ["intf-01"],
    tags: ["ruseni", "tvi"],
  },
  {
    id: "bci",
    term: "BCI (Broadcast Interference)",
    definition: "Rušení rozhlasového příjmu radioamatérským vysílačem.",
    relatedLessonIds: ["intf-01"],
    tags: ["ruseni", "bci"],
  },
  {
    id: "harmonicke",
    term: "Harmonické (vyzařování)",
    definition: "Nežádoucí signály na násobcích základní frekvence (2f, 3f...). Potlačují se LP filtrem.",
    relatedLessonIds: ["intf-01", "tx-02"],
    tags: ["ruseni", "harmonicke"],
  },

  // -----------------------------------------------------------------------
  // Safety
  // -----------------------------------------------------------------------
  {
    id: "proudovy-chranic",
    term: "Proudový chránič (FI/RCD)",
    definition: "Zařízení odpojující obvod při úniku proudu (typicky 30 mA). Chrání před úrazem elektrickým proudem.",
    relatedLessonIds: ["safety-01"],
    tags: ["bezpecnost"],
  },
  {
    id: "rf-expozice",
    term: "RF expozice",
    definition: "Vystavení lidského těla vysokofrekvenčnímu záření. Může způsobit tepelné poškození tkání. Intenzita klesá se čtvercem vzdálenosti.",
    relatedLessonIds: ["safety-02"],
    tags: ["bezpecnost", "rf-expozice"],
  },

  // =======================================================================
  // OPERATING SECTION
  // =======================================================================

  // -----------------------------------------------------------------------
  // Frequency bands & band names
  // -----------------------------------------------------------------------
  {
    id: "kv-pasmo",
    term: "KV (krátké vlny)",
    definition: "Frekvenční pásmo 3-30 MHz (vlnové délky 100-10 m). Hlavní pásmo pro dálkové radioamatérské spojení díky odrazu od ionosféry.",
    relatedLessonIds: ["frequencies-01"],
    tags: ["pasma", "kv"],
  },
  {
    id: "vkv-pasmo",
    term: "VKV (velmi krátké vlny)",
    definition: "Frekvenční pásmo 30-300 MHz (vlnové délky 10-1 m). Zahrnuje radioamatérská pásma 6 m, 2 m a 1,25 m. Šíření převážně přímou vlnou.",
    relatedLessonIds: ["frequencies-01"],
    tags: ["pasma", "vkv"],
  },
  {
    id: "ukv-pasmo",
    term: "UKV (ultra krátké vlny)",
    definition: "Frekvenční pásmo 300 MHz - 3 GHz. Zahrnuje radioamatérské pásmo 70 cm (432 MHz) a 23 cm (1296 MHz). Šíření přímou vlnou.",
    relatedLessonIds: ["frequencies-01"],
    tags: ["pasma", "ukv"],
  },
  {
    id: "shf-pasmo",
    term: "SHF (Super High Frequency)",
    definition: "Frekvenční pásmo 3-30 GHz. Používá se pro mikrovlnné radioamatérské experimenty, satelitní komunikaci a radiolokaci.",
    relatedLessonIds: ["frequencies-01"],
    tags: ["pasma", "shf"],
  },
  {
    id: "pasmo-160m",
    term: "Pásmo 160 m (1,8 MHz)",
    definition: "Nejnižší radioamatérské KV pásmo. Šíření převážně povrchovou vlnou a v noci prostorovou vlnou. Vyžaduje velké antény.",
    relatedLessonIds: ["frequencies-02"],
    tags: ["pasma", "kv"],
  },
  {
    id: "pasmo-80m",
    term: "Pásmo 80 m (3,5 MHz)",
    definition: "KV pásmo pro regionální spojení, zejména v noci. Často využívané pro české a evropské spojení. Silné atmosférické rušení v létě.",
    relatedLessonIds: ["frequencies-02"],
    tags: ["pasma", "kv"],
  },
  {
    id: "pasmo-40m",
    term: "Pásmo 40 m (7 MHz)",
    definition: "Univerzální KV pásmo pro spojení na střední vzdálenosti. Ve dne regionální, v noci interkontinentální dosah.",
    relatedLessonIds: ["frequencies-02"],
    tags: ["pasma", "kv"],
  },
  {
    id: "pasmo-20m",
    term: "Pásmo 20 m (14 MHz)",
    definition: "Nejoblíbenější DX pásmo. Otevřené přes den, umožňuje interkontinentální spojení. Hlavní pásmo pro závodění.",
    relatedLessonIds: ["frequencies-03"],
    tags: ["pasma", "kv", "dx"],
  },
  {
    id: "pasmo-15m",
    term: "Pásmo 15 m (21 MHz)",
    definition: "KV pásmo pro DX spojení za dobrých podmínek šíření. Otevřené hlavně kolem maxima slunečního cyklu.",
    relatedLessonIds: ["frequencies-03"],
    tags: ["pasma", "kv", "dx"],
  },
  {
    id: "pasmo-10m",
    term: "Pásmo 10 m (28 MHz)",
    definition: "Nejvyšší KV pásmo. Výborné DX podmínky při vysoké sluneční aktivitě. Může se otevřít i při sporadické vrstvě E.",
    relatedLessonIds: ["frequencies-03"],
    tags: ["pasma", "kv", "dx"],
  },
  {
    id: "pasmo-6m",
    term: "Pásmo 6 m (50 MHz)",
    definition: "Přechodové pásmo mezi KV a VKV, nazývané \"magic band\". Občasné DX otevření díky sporadické vrstvě E.",
    relatedLessonIds: ["frequencies-03"],
    tags: ["pasma", "vkv"],
  },
  {
    id: "pasmo-2m",
    term: "Pásmo 2 m (144 MHz)",
    definition: "Nejpoužívanější VKV pásmo. FM převaděče, packet radio, SSB kontesty. Dosah typicky 50-300 km přímou vlnou.",
    relatedLessonIds: ["frequencies-04"],
    tags: ["pasma", "vkv"],
  },
  {
    id: "pasmo-70cm",
    term: "Pásmo 70 cm (432 MHz)",
    definition: "Druhé nejpoužívanější UKV pásmo. FM převaděče, digitální módy, ATV. Menší antény než na 2 m.",
    relatedLessonIds: ["frequencies-04"],
    tags: ["pasma", "ukv"],
  },

  // -----------------------------------------------------------------------
  // Modes
  // -----------------------------------------------------------------------
  {
    id: "cw",
    term: "CW (Continuous Wave)",
    definition: "Telegrafní provoz Morseovou abecedou. Nejstarší druh modulace, velmi úzká šířka pásma (cca 100 Hz). Označení emise A1A.",
    relatedLessonIds: ["skills-01", "frequencies-01"],
    tags: ["mody", "cw"],
  },
  {
    id: "fm-mod",
    term: "FM (frekvenční modulace)",
    definition: "Modulace, při které se mění frekvence nosné vlny podle modulačního signálu. Používá se hlavně na VKV/UKV. Označení emise F3E.",
    relatedLessonIds: ["tx-02", "frequencies-04"],
    tags: ["modulace", "fm"],
  },
  {
    id: "am-mod",
    term: "AM (amplitudová modulace)",
    definition: "Modulace, při které se mění amplituda nosné vlny. Obsahuje nosnou a dvě postranní pásma. Označení emise A3E.",
    relatedLessonIds: ["tx-02"],
    tags: ["modulace", "am"],
  },
  {
    id: "rtty",
    term: "RTTY (Radio Teletype)",
    definition: "Digitální mód využívající FSK (frekvenční klíčování). Historicky první digitální mód v radioamatérské praxi.",
    relatedLessonIds: ["skills-02"],
    tags: ["mody", "digitalni"],
  },
  {
    id: "ft8",
    term: "FT8",
    definition: "Moderní digitální mód pro slabé signály. Délka sekvence 15 s, šířka pásma 50 Hz. Automaticky dekódovaný, populární pro DX spojení.",
    relatedLessonIds: ["skills-02"],
    tags: ["mody", "digitalni"],
  },
  {
    id: "psk31",
    term: "PSK31",
    definition: "Digitální mód s fázovým klíčováním a šířkou pásma pouhých 31 Hz. Umožňuje psaní textu v reálném čase i při slabých signálech.",
    relatedLessonIds: ["skills-02"],
    tags: ["mody", "digitalni"],
  },
  {
    id: "sstv",
    term: "SSTV (Slow Scan Television)",
    definition: "Přenos statických obrázků po rádiu pomocí zvukových tónů. Jeden snímek trvá typicky 1-2 minuty.",
    relatedLessonIds: ["skills-02"],
    tags: ["mody", "digitalni"],
  },

  // -----------------------------------------------------------------------
  // Q codes
  // -----------------------------------------------------------------------
  {
    id: "qth",
    term: "QTH",
    definition: "Q kód pro stanoviště (polohu). \"Jaké je vaše QTH?\" = \"Kde se nacházíte?\" V praxi označuje místo bydliště nebo vysílání.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qso",
    term: "QSO",
    definition: "Q kód pro rádiové spojení. \"Navázali jsme QSO\" = \"Uskutečnili jsme spojení.\" Základní pojem radioamatérského provozu.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qsl",
    term: "QSL",
    definition: "Q kód pro potvrzení příjmu. QSL lístek je pohlednice potvrzující rádiové spojení. Slouží k získání diplomů a potvrzení DX.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qrm",
    term: "QRM",
    definition: "Q kód pro rušení od jiných stanic (umělé rušení). \"Mám QRM\" = \"Jsem rušen jinými stanicemi.\"",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qrn",
    term: "QRN",
    definition: "Q kód pro atmosférické rušení (přírodní šum). \"Mám QRN\" = \"Jsem rušen atmosférickými poruchami.\"",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qrz",
    term: "QRZ",
    definition: "Q kód znamenající \"Kdo mě volá?\" Používá se k dotazu na volací značku volající stanice.",
    relatedLessonIds: ["q-codes-01"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qrt",
    term: "QRT",
    definition: "Q kód pro ukončení vysílání. \"Jdu QRT\" = \"Končím vysílání a vypínám stanici.\"",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qrs",
    term: "QRS",
    definition: "Q kód pro žádost o pomalejší vysílání (v CW). \"QRS prosím\" = \"Vysílejte pomaleji.\"",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz", "cw"],
  },
  {
    id: "qrv",
    term: "QRV",
    definition: "Q kód znamenající \"Jsem připraven\" nebo \"Jste připraven?\" Signalizuje pohotovost k provozu.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qsb",
    term: "QSB",
    definition: "Q kód pro kolísání síly signálu (fading). \"Máte QSB\" = \"Váš signál kolísá.\"",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz", "sireni"],
  },
  {
    id: "qrg",
    term: "QRG",
    definition: "Q kód pro frekvenci. \"Jaký je váš QRG?\" = \"Na jaké frekvenci vysíláte?\"",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qsy",
    term: "QSY",
    definition: "Q kód pro přeladění na jinou frekvenci. \"QSY 14.250\" = \"Přelaďte na 14,250 MHz.\"",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qrp",
    term: "QRP",
    definition: "Q kód pro snížení výkonu nebo provoz s nízkým výkonem. V praxi označuje provoz do 5 W (CW) nebo 10 W (SSB).",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qro",
    term: "QRO",
    definition: "Q kód pro zvýšení výkonu nebo provoz s vysokým výkonem. Opak QRP.",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz"],
  },
  {
    id: "qrx",
    term: "QRX",
    definition: "Q kód pro čekání. \"QRX 5 minut\" = \"Počkejte 5 minut, pak vás znovu zavolám.\"",
    relatedLessonIds: ["q-codes-02"],
    tags: ["q-kody", "provoz"],
  },

  // -----------------------------------------------------------------------
  // Phonetic alphabet
  // -----------------------------------------------------------------------
  {
    id: "foneticky-abeceda",
    term: "Fonetická abeceda NATO",
    definition: "Mezinárodní hláskovací abeceda (Alfa, Bravo, Charlie...). V radioamatérském provozu se povinně používá ke srozumitelnému předávání volacích značek.",
    relatedLessonIds: ["phonetic-01", "phonetic-02"],
    tags: ["provoz", "foneticka-abeceda"],
  },

  // -----------------------------------------------------------------------
  // Common abbreviations & operating concepts
  // -----------------------------------------------------------------------
  {
    id: "cq",
    term: "CQ",
    definition: "Všeobecná výzva k navázání spojení. \"CQ CQ CQ, tady OK1ABC\" - stanice hledá jakoukoliv protistanici.",
    relatedLessonIds: ["abbreviations-01"],
    tags: ["zkratky", "provoz"],
  },
  {
    id: "73",
    term: "73",
    definition: "Telegrafní zkratka pro \"nejlepší pozdravy\". Používá se na závěr spojení. Nikdy se neříká \"sedmdesát tři\" ani \"73s\".",
    relatedLessonIds: ["abbreviations-01"],
    tags: ["zkratky", "provoz"],
  },
  {
    id: "88",
    term: "88",
    definition: "Telegrafní zkratka pro \"hubičky a pozdravy\". Tradičně používáno při spojení s operátorkou (YL).",
    relatedLessonIds: ["abbreviations-01"],
    tags: ["zkratky", "provoz"],
  },
  {
    id: "om",
    term: "OM (Old Man)",
    definition: "Oslovení mužského radioamatéra. V praxi se používá bez ohledu na věk jako přátelské oslovení.",
    relatedLessonIds: ["abbreviations-01"],
    tags: ["zkratky", "provoz"],
  },
  {
    id: "yl",
    term: "YL (Young Lady)",
    definition: "Označení pro ženskou radioamatérku (svobodnou). Nezávisí na věku.",
    relatedLessonIds: ["abbreviations-01"],
    tags: ["zkratky", "provoz"],
  },
  {
    id: "xyl",
    term: "XYL",
    definition: "Označení pro manželku radioamatéra (ex-Young Lady). Používá se v radioamatérském slangu.",
    relatedLessonIds: ["abbreviations-02"],
    tags: ["zkratky", "provoz"],
  },
  {
    id: "dx",
    term: "DX",
    definition: "Označení pro dálkové spojení nebo vzdálenou stanici. Na KV typicky interkontinentální spojení, na VKV spojení nad 300 km.",
    relatedLessonIds: ["abbreviations-02"],
    tags: ["zkratky", "provoz", "dx"],
  },
  {
    id: "qsl-card",
    term: "QSL lístek",
    definition: "Pohlednice potvrzující uskutečněné rádiové spojení. Obsahuje volací značky, datum, čas, pásmo, mód a report. Zasílá se přímo nebo přes QSL bureau.",
    relatedLessonIds: ["abbreviations-02"],
    tags: ["provoz", "qsl"],
  },
  {
    id: "contest",
    term: "Contest (závod)",
    definition: "Radioamatérský závod, při kterém se stanice snaží navázat co nejvíce spojení za daný čas. Vyměňují se závodní kódy.",
    relatedLessonIds: ["abbreviations-03"],
    tags: ["provoz", "zavody"],
  },
  {
    id: "pile-up",
    term: "Pile-up",
    definition: "Situace, kdy mnoho stanic najednou volá jednu vzácnou stanici (DX). Vyžaduje disciplínu a znalost provozních postupů.",
    relatedLessonIds: ["abbreviations-03"],
    tags: ["provoz", "dx"],
  },
  {
    id: "split-operation",
    term: "Split provoz",
    definition: "Provozní technika, kdy DX stanice vysílá na jedné frekvenci a poslouchá na jiné (obvykle o 1-5 kHz výše). Zabraňuje zahlcení jedné frekvence.",
    relatedLessonIds: ["abbreviations-03"],
    tags: ["provoz", "dx"],
  },
  {
    id: "ragchew",
    term: "Ragchew",
    definition: "Neformální dlouhé spojení, \"pokec\" po rádiu. Opakem rychlých závodních spojení.",
    relatedLessonIds: ["skills-01"],
    tags: ["provoz"],
  },
  {
    id: "net",
    term: "Net (síťový provoz)",
    definition: "Organizované setkání stanic na domluvené frekvenci a čase. Řídí jej kontrolní stanice (net control).",
    relatedLessonIds: ["skills-01"],
    tags: ["provoz"],
  },

  // -----------------------------------------------------------------------
  // Call sign structure
  // -----------------------------------------------------------------------
  {
    id: "volaci-znacka-struktura",
    term: "Volací značka (struktura)",
    definition: "Jedinečný identifikátor radioamatéra přidělený úřadem. Skládá se z prefixu (země), čísla (oblast) a sufixu (osobní). Například OK1ABC.",
    relatedLessonIds: ["prefixes-01"],
    tags: ["provoz", "volaci-znacky"],
  },
  {
    id: "prefix",
    term: "Prefix volací značky",
    definition: "Začátek volací značky určující zemi (OK = Česko, DL = Německo, SP = Polsko). Definován ITU a přidělován národním úřadem.",
    relatedLessonIds: ["prefixes-01"],
    tags: ["provoz", "volaci-znacky"],
  },
  {
    id: "suffix",
    term: "Suffix volací značky",
    definition: "Koncová část volací značky za číslem, identifikující konkrétní stanici (např. ABC v OK1ABC).",
    relatedLessonIds: ["prefixes-01"],
    tags: ["provoz", "volaci-znacky"],
  },
  {
    id: "portable",
    term: "Přenosný provoz (/P)",
    definition: "Označení přidávané k volací značce při vysílání z přenosné stanice mimo trvalé QTH. Například OK1ABC/P.",
    relatedLessonIds: ["prefixes-02"],
    tags: ["provoz", "volaci-znacky"],
  },
  {
    id: "mobile",
    term: "Mobilní provoz (/M)",
    definition: "Označení přidávané k volací značce při vysílání z pohybujícího se vozidla. Například OK1ABC/M.",
    relatedLessonIds: ["prefixes-02"],
    tags: ["provoz", "volaci-znacky"],
  },
  {
    id: "dxcc",
    term: "DXCC (DX Century Club)",
    definition: "Prestižní diplom ARRL za potvrzená spojení se 100 a více zeměmi (entitami). Základní DX diplom.",
    relatedLessonIds: ["prefixes-02", "abbreviations-04"],
    tags: ["provoz", "dx", "diplomy"],
  },

  // -----------------------------------------------------------------------
  // Repeater, simplex, duplex & related concepts
  // -----------------------------------------------------------------------
  {
    id: "prevadec",
    term: "Převaděč (repeater)",
    definition: "Automatická stanice přijímající signál na jedné frekvenci a současně jej vysílající na druhé s větším výkonem. Rozšiřuje dosah na VKV/UKV.",
    relatedLessonIds: ["frequencies-04", "skills-01"],
    tags: ["provoz", "prevadec"],
  },
  {
    id: "simplex",
    term: "Simplex",
    definition: "Provoz na jedné frekvenci, kde obě stanice střídavě vysílají a přijímají na stejném kmitočtu.",
    relatedLessonIds: ["frequencies-04", "skills-01"],
    tags: ["provoz"],
  },
  {
    id: "duplex",
    term: "Duplex (offset)",
    definition: "Provoz přes převaděč s různou vysílací a přijímací frekvencí. Offset (posuv) je rozdíl mezi nimi (např. -600 kHz na 2 m).",
    relatedLessonIds: ["frequencies-04"],
    tags: ["provoz", "prevadec"],
  },
  {
    id: "ctcss",
    term: "CTCSS (subtón)",
    definition: "Subtónový systém pro otevření squelche převaděče. Nízkofrekvenční tón (67-254 Hz) přidaný k vysílanému signálu. Zabraňuje otevření převaděče šumem.",
    relatedLessonIds: ["frequencies-04"],
    tags: ["provoz", "prevadec"],
  },
  {
    id: "squelch",
    term: "Squelch (šumová brána)",
    definition: "Obvod potlačující reprodukci šumu při absenci signálu. Nastavuje se tak, aby se zvuk aktivoval pouze při příjmu dostatečně silného signálu.",
    relatedLessonIds: ["rx-02", "skills-01"],
    tags: ["prijimace", "provoz"],
  },

  // -----------------------------------------------------------------------
  // Propagation-related operating
  // -----------------------------------------------------------------------
  {
    id: "skip",
    term: "Skip (přeskok)",
    definition: "Odraz rádiového signálu od ionosféry zpět k Zemi. Umožňuje spojení na velké vzdálenosti na KV pásmech.",
    relatedLessonIds: ["prop-01", "frequencies-01"],
    tags: ["sireni", "provoz"],
  },
  {
    id: "skip-zone",
    term: "Skip zóna (mrtvá zóna)",
    definition: "Oblast mezi koncem dosahu povrchové vlny a místem dopadu prostorové vlny, kde nelze signál přijmout.",
    relatedLessonIds: ["prop-01"],
    tags: ["sireni"],
  },
  {
    id: "long-path",
    term: "Long path (dlouhá cesta)",
    definition: "Šíření signálu delší cestou kolem zeměkoule (přes 20 000 km). Opačný směr než přímá (short path) trasa.",
    relatedLessonIds: ["prop-02"],
    tags: ["sireni", "dx"],
  },
  {
    id: "short-path",
    term: "Short path (krátká cesta)",
    definition: "Šíření signálu nejkratší cestou mezi dvěma body na zeměkouli. Standardní směr antény pro dané spojení.",
    relatedLessonIds: ["prop-02"],
    tags: ["sireni", "dx"],
  },
  {
    id: "greyline",
    term: "Grey line (šedá linie)",
    definition: "Přechodová zóna mezi dnem a nocí na zemském povrchu. Umožňuje výjimečné DX podmínky na nižších KV pásmech.",
    relatedLessonIds: ["prop-02"],
    tags: ["sireni", "dx"],
  },

  // -----------------------------------------------------------------------
  // Digital mode concepts & signal reports
  // -----------------------------------------------------------------------
  {
    id: "waterfall",
    term: "Waterfall (vodopádový diagram)",
    definition: "Grafické zobrazení frekvencí v čase. Barva znázorňuje sílu signálu. Hlavní vizuální nástroj pro digitální módy a SDR.",
    relatedLessonIds: ["skills-02"],
    tags: ["mody", "digitalni"],
  },
  {
    id: "rst-report",
    term: "RST report (signálový report)",
    definition: "Systém hodnocení kvality signálu: R (čitelnost 1-5), S (síla 1-9), T (tón 1-9, jen pro CW). Pro fón se používá RS (bez T).",
    relatedLessonIds: ["skills-01", "abbreviations-04"],
    tags: ["provoz", "report"],
  },
  {
    id: "s-metr",
    term: "S-metr",
    definition: "Ukazatel síly přijímaného signálu na přijímači. Stupnice S1-S9, pak dB nad S9. Jeden stupeň S odpovídá přibližně 6 dB.",
    relatedLessonIds: ["skills-01", "meas-01"],
    tags: ["provoz", "mereni"],
  },

  // =======================================================================
  // REGULATIONS SECTION
  // =======================================================================

  // -----------------------------------------------------------------------
  // ITU
  // -----------------------------------------------------------------------
  {
    id: "itu",
    term: "ITU (International Telecommunication Union)",
    definition: "Mezinárodní telekomunikační unie, specializovaná agentura OSN. Spravuje rádiové spektrum a vydává Radiokomunikační řád.",
    relatedLessonIds: ["itu-01"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "itu-r",
    term: "ITU-R (Radiocommunication Sector)",
    definition: "Radiokomunikační sektor ITU. Vydává doporučení pro využití rádiového spektra a koordinaci frekvencí.",
    relatedLessonIds: ["itu-01"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "radio-regulations",
    term: "Radiokomunikační řád (Radio Regulations)",
    definition: "Mezinárodní smlouva ITU upravující využívání rádiového spektra. Definuje kmitočtové příděly, podmínky provozu a technické parametry.",
    relatedLessonIds: ["itu-01"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "wrc",
    term: "WRC (World Radiocommunication Conference)",
    definition: "Světová radiokomunikační konference ITU. Koná se každé 3-4 roky, reviduje Radiokomunikační řád a přiděluje frekvenční pásma.",
    relatedLessonIds: ["itu-01"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "itu-region-1",
    term: "ITU Region 1",
    definition: "Regulační oblast ITU zahrnující Evropu, Afriku, Blízký východ a severní Asii. Česká republika patří do Regionu 1.",
    relatedLessonIds: ["itu-02"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "itu-region-2",
    term: "ITU Region 2",
    definition: "Regulační oblast ITU zahrnující Severní a Jižní Ameriku. Má odlišné kmitočtové příděly než Region 1.",
    relatedLessonIds: ["itu-02"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "itu-region-3",
    term: "ITU Region 3",
    definition: "Regulační oblast ITU zahrnující jižní a východní Asii, Oceánii a Austrálii.",
    relatedLessonIds: ["itu-02"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "amaterska-sluzba",
    term: "Amatérská služba (Amateur Service)",
    definition: "Radiokomunikační služba definovaná ITU pro sebevzdělávání, technické experimenty a vzájemnou komunikaci radioamatérů.",
    relatedLessonIds: ["itu-02"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "amaterska-druzicova-sluzba",
    term: "Amatérská družicová služba",
    definition: "Radiokomunikační služba využívající pozemní a kosmické stanice na umělých družicích Země pro účely amatérské služby.",
    relatedLessonIds: ["itu-02"],
    tags: ["predpisy", "itu"],
  },
  {
    id: "article-25",
    term: "Článek 25 (Article 25)",
    definition: "Článek Radiokomunikačního řádu ITU věnovaný amatérské službě. Stanovuje základní podmínky pro provoz radioamatérských stanic.",
    relatedLessonIds: ["itu-03"],
    tags: ["predpisy", "itu"],
  },

  // -----------------------------------------------------------------------
  // CEPT
  // -----------------------------------------------------------------------
  {
    id: "cept",
    term: "CEPT",
    definition: "Evropská konference poštovních a telekomunikačních správ. Vydává doporučení umožňující vzájemné uznávání radioamatérských oprávnění v Evropě.",
    relatedLessonIds: ["cept-01"],
    tags: ["predpisy", "cept"],
  },
  {
    id: "ecc",
    term: "ECC (Electronic Communications Committee)",
    definition: "Výbor pro elektronické komunikace v rámci CEPT. Připravuje harmonizační opatření pro využívání rádiového spektra.",
    relatedLessonIds: ["cept-01"],
    tags: ["predpisy", "cept"],
  },
  {
    id: "harec",
    term: "HAREC (Harmonised Amateur Radio Examination Certificate)",
    definition: "Harmonizovaný průkaz radioamatérské zkoušky dle CEPT. Odpovídá nejvyšší třídě (v ČR třída A) a umožňuje provoz v zemích CEPT.",
    relatedLessonIds: ["cept-01"],
    tags: ["predpisy", "cept", "harec"],
  },
  {
    id: "tr-61-01",
    term: "T/R 61-01",
    definition: "Doporučení CEPT umožňující držitelům CEPT licence dočasně vysílat v jiné členské zemi bez žádosti o místní licenci.",
    relatedLessonIds: ["cept-02"],
    tags: ["predpisy", "cept"],
  },
  {
    id: "tr-61-02",
    term: "T/R 61-02",
    definition: "Doporučení CEPT pro harmonizované zkoušky radioamatérů. Definuje rozsah znalostí pro HAREC zkoušku.",
    relatedLessonIds: ["cept-02"],
    tags: ["predpisy", "cept"],
  },
  {
    id: "erc-report-32",
    term: "ERC Report 32",
    definition: "Zpráva ERC (nyní ECC) obsahující sylabus pro HAREC zkoušku. Definuje tři okruhy: techniku, provoz a předpisy.",
    relatedLessonIds: ["cept-02"],
    tags: ["predpisy", "cept"],
  },

  // -----------------------------------------------------------------------
  // Czech regulations
  // -----------------------------------------------------------------------
  {
    id: "ctu",
    term: "ČTÚ (Český telekomunikační úřad)",
    definition: "Národní regulátor v oblasti telekomunikací v ČR. Přiděluje volací značky, vydává oprávnění a dohlíží na využívání rádiového spektra.",
    relatedLessonIds: ["czech-law-01"],
    tags: ["predpisy", "ceske-pravo"],
  },
  {
    id: "trida-a",
    term: "Třída A (CEPT/HAREC)",
    definition: "Nejvyšší třída radioamatérského oprávnění v ČR. Umožňuje provoz na všech amatérských pásmech s maximálním výkonem. Odpovídá HAREC.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["predpisy", "ceske-pravo"],
  },
  {
    id: "trida-n",
    term: "Třída N (novice)",
    definition: "Nižší třída radioamatérského oprávnění v ČR. Omezená pásma a snížený maximální výkon. Jednodušší zkouška.",
    relatedLessonIds: ["czech-law-02"],
    tags: ["predpisy", "ceske-pravo"],
  },
  {
    id: "vseobecne-opravneni",
    term: "Všeobecné oprávnění",
    definition: "Typ oprávnění ČTÚ, které stanovuje podmínky využívání rádiových kmitočtů pro amatérskou službu. Platí obecně pro všechny radioamatéry.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["predpisy", "ceske-pravo"],
  },
  {
    id: "individualni-opravneni",
    term: "Individuální oprávnění",
    definition: "Oprávnění ČTÚ vydané konkrétní osobě. Obsahuje přidělenou volací značku a podmínky provozu stanice.",
    relatedLessonIds: ["czech-law-03"],
    tags: ["predpisy", "ceske-pravo"],
  },
  {
    id: "volaci-znacka-predpis",
    term: "Volací značka",
    definition: "Jedinečný identifikátor přidělený ČTÚ každé radioamatérské stanici. V ČR tvaru OKxXXX (třída A) nebo OKxXXX (třída N). Musí být vysílána na začátku a konci spojení.",
    relatedLessonIds: ["czech-law-04"],
    tags: ["predpisy", "ceske-pravo", "volaci-znacky"],
  },

  // -----------------------------------------------------------------------
  // Emission designators
  // -----------------------------------------------------------------------
  {
    id: "oznaceni-emise",
    term: "Označení emise (emission designator)",
    definition: "Třímístný kód popisující typ vysílání dle ITU. Definuje typ modulace, charakter signálu a typ přenášené informace.",
    relatedLessonIds: ["itu-03", "tx-02"],
    tags: ["predpisy", "modulace"],
  },
  {
    id: "a1a",
    term: "A1A",
    definition: "Označení emise pro telegrafii (CW). A = amplitudová modulace s dvojím postranním pásmem, 1 = digitální bez podnosné, A = telegrafiepro sluchový příjem.",
    relatedLessonIds: ["itu-03", "tx-02"],
    tags: ["predpisy", "modulace", "cw"],
  },
  {
    id: "j3e",
    term: "J3E",
    definition: "Označení emise pro SSB fónii. J = jednopásmová modulace s potlačenou nosnou, 3 = analogový signál, E = telefonie.",
    relatedLessonIds: ["itu-03", "tx-02"],
    tags: ["predpisy", "modulace", "ssb"],
  },
  {
    id: "f3e",
    term: "F3E",
    definition: "Označení emise pro FM fónii. F = frekvenční modulace, 3 = analogový signál, E = telefonie.",
    relatedLessonIds: ["itu-03", "tx-02"],
    tags: ["predpisy", "modulace", "fm"],
  },
  {
    id: "a3e",
    term: "A3E",
    definition: "Označení emise pro AM fónii. A = amplitudová modulace s dvojím postranním pásmem, 3 = analogový signál, E = telefonie.",
    relatedLessonIds: ["itu-03", "tx-02"],
    tags: ["predpisy", "modulace", "am"],
  },

  // =======================================================================
  // ADDITIONAL TECHNICAL TERMS
  // =======================================================================

  // -----------------------------------------------------------------------
  // Filters
  // -----------------------------------------------------------------------
  {
    id: "filtr-dolni-propust",
    term: "Filtr dolní propust (lowpass, LP)",
    definition: "Filtr propouštějící frekvence pod mezním kmitočtem a tlumící vyšší frekvence. Na výstupu vysílače potlačuje harmonické.",
    relatedLessonIds: ["circuits-01", "intf-01"],
    tags: ["obvody", "filtry"],
  },
  {
    id: "filtr-horni-propust",
    term: "Filtr horní propust (highpass, HP)",
    definition: "Filtr propouštějící frekvence nad mezním kmitočtem a tlumící nižší frekvence. Používá se k ochraně přijímačů před silnými signály z nižších pásem.",
    relatedLessonIds: ["circuits-01", "intf-01"],
    tags: ["obvody", "filtry"],
  },
  {
    id: "filtr-pasmova-propust",
    term: "Filtr pásmová propust (bandpass, BP)",
    definition: "Filtr propouštějící frekvence v určitém rozsahu a tlumící frekvence mimo něj. Klíčový prvek přijímačů pro výběr žádaného pásma.",
    relatedLessonIds: ["circuits-01", "rx-01"],
    tags: ["obvody", "filtry"],
  },
  {
    id: "filtr-notch",
    term: "Notch filtr (pásmová zádrž)",
    definition: "Filtr potlačující úzký rozsah frekvencí. V přijímačích se používá k odstranění rušícího signálu na konkrétní frekvenci.",
    relatedLessonIds: ["circuits-01", "rx-02"],
    tags: ["obvody", "filtry"],
  },

  // -----------------------------------------------------------------------
  // Modulation details
  // -----------------------------------------------------------------------
  {
    id: "pm-mod",
    term: "PM (fázová modulace)",
    definition: "Modulace, při které se mění fáze nosné vlny. Úzce souvisí s FM. V radioamatérské praxi se vyskytuje zejména u digitálních módů.",
    relatedLessonIds: ["tx-02"],
    tags: ["modulace"],
  },
  {
    id: "dsb",
    term: "DSB (Double Side Band)",
    definition: "Modulace s dvojím postranním pásmem. AM signál s oběma postranními pásmy. Méně efektivní než SSB, protože obsahuje redundantní informaci.",
    relatedLessonIds: ["tx-02"],
    tags: ["modulace"],
  },
  {
    id: "usb",
    term: "USB (Upper Side Band)",
    definition: "Horní postranní pásmo. Standardní SSB mód na frekvencích nad 10 MHz. Přenáší pouze horní postranní pásmo bez nosné.",
    relatedLessonIds: ["tx-02", "frequencies-03"],
    tags: ["modulace", "ssb"],
  },
  {
    id: "lsb",
    term: "LSB (Lower Side Band)",
    definition: "Dolní postranní pásmo. Standardní SSB mód na frekvencích pod 10 MHz. Přenáší pouze dolní postranní pásmo bez nosné.",
    relatedLessonIds: ["tx-02", "frequencies-02"],
    tags: ["modulace", "ssb"],
  },
  {
    id: "modulacni-index",
    term: "Modulační index",
    definition: "Poměr frekvenčního zdvihu nosné k frekvenci modulačního signálu u FM. Určuje šířku pásma vysílaného signálu.",
    relatedLessonIds: ["tx-02"],
    tags: ["modulace", "fm"],
  },
  {
    id: "frekvencni-zdvih",
    term: "Frekvenční zdvih (deviace)",
    definition: "Maximální odchylka frekvence nosné vlny od jmenovité hodnoty při FM. U radioamatérské FM na VKV typicky ±5 kHz.",
    relatedLessonIds: ["tx-02"],
    tags: ["modulace", "fm"],
  },

  // -----------------------------------------------------------------------
  // Receiver concepts
  // -----------------------------------------------------------------------
  {
    id: "mezifrekvence",
    term: "Mezifrekvence (IF)",
    definition: "Pevná frekvence v superheterodynu, na kterou se převádí přijímaný signál. Umožňuje optimální filtraci a zesílení. Typicky 455 kHz nebo 10,7 MHz.",
    relatedLessonIds: ["rx-01"],
    tags: ["prijimace", "mezifrekvence"],
  },
  {
    id: "smesoac",
    term: "Směšovač (mixer)",
    definition: "Obvod kombinující přijímaný signál s lokálním oscilátorem za vzniku mezifrekvence. Klíčový prvek superheterodynu.",
    relatedLessonIds: ["rx-01"],
    tags: ["prijimace", "smesoac"],
  },
  {
    id: "bfo",
    term: "BFO (Beat Frequency Oscillator)",
    definition: "Záznějový oscilátor v přijímači pro příjem CW a SSB signálů. Vytváří nosnou vlnu potřebnou k demodulaci těchto signálů.",
    relatedLessonIds: ["rx-01"],
    tags: ["prijimace", "bfo"],
  },
  {
    id: "sumove-cislo",
    term: "Šumové číslo (Noise Figure)",
    definition: "Míra vlastního šumu přijímače nebo zesilovače vyjádřená v dB. Nižší hodnota = citlivější přijímač. Důležité zejména na VKV a výše.",
    relatedLessonIds: ["rx-02"],
    tags: ["prijimace", "sum"],
  },
  {
    id: "dynamicky-rozsah",
    term: "Dynamický rozsah",
    definition: "Rozsah úrovní signálů, které přijímač dokáže zpracovat bez zkreslení. Od nejslabšího detekovatelného po nejsilnější nezkreslený signál.",
    relatedLessonIds: ["rx-02"],
    tags: ["prijimace"],
  },
  {
    id: "intermodulace",
    term: "Intermodulace (IMD)",
    definition: "Nežádoucí produkty vznikající v nelineárních obvodech směšováním dvou nebo více silných signálů. Projevuje se falešnými signály v přijímači.",
    relatedLessonIds: ["rx-02", "intf-01"],
    tags: ["prijimace", "ruseni"],
  },
  {
    id: "zrcadlova-frekvence",
    term: "Zrcadlová frekvence (image frequency)",
    definition: "Nežádoucí frekvence vzdálená od žádaného signálu o dvojnásobek mezifrekvence. Může způsobit příjem falešných signálů v superheterodynu.",
    relatedLessonIds: ["rx-01"],
    tags: ["prijimace"],
  },

  // -----------------------------------------------------------------------
  // Transmitter concepts
  // -----------------------------------------------------------------------
  {
    id: "exciter",
    term: "Exciter (budič)",
    definition: "Část vysílače generující a modulující signál o nízkém výkonu. Signál je poté zesílen koncovým stupněm.",
    relatedLessonIds: ["tx-01"],
    tags: ["vysilace"],
  },
  {
    id: "driver-stage",
    term: "Driver (mezistupeň)",
    definition: "Zesilovací stupeň mezi exciterem a koncovým stupněm vysílače. Zesiluje signál na úroveň potřebnou pro buzení PA.",
    relatedLessonIds: ["tx-01"],
    tags: ["vysilace"],
  },
  {
    id: "alc",
    term: "ALC (Automatic Level Control)",
    definition: "Automatická regulace úrovně ve vysílači. Zabraňuje přebuzení koncového stupně a vzniku nežádoucích vedlejších vysílání.",
    relatedLessonIds: ["tx-01"],
    tags: ["vysilace", "alc"],
  },
  {
    id: "splatter",
    term: "Splatter",
    definition: "Nežádoucí rozšíření šířky pásma vysílaného signálu způsobené přebuzením vysílače. Ruší sousední frekvence.",
    relatedLessonIds: ["tx-02", "intf-01"],
    tags: ["vysilace", "ruseni"],
  },
  {
    id: "key-click",
    term: "Key click (klíčovací zákmit)",
    definition: "Nežádoucí rušení na sousedních frekvencích při CW provozu, způsobené příliš strmými náběžnými hranami signálu.",
    relatedLessonIds: ["tx-02", "intf-01"],
    tags: ["vysilace", "cw", "ruseni"],
  },

  // -----------------------------------------------------------------------
  // Additional antenna types
  // -----------------------------------------------------------------------
  {
    id: "ground-plane",
    term: "Ground plane anténa",
    definition: "Vertikální anténa s radiály simulujícími zemnící rovinu. Impedance závisí na úhlu radiálů. Jednoduchá všesměrová anténa.",
    relatedLessonIds: ["ant-01"],
    tags: ["anteny"],
  },
  {
    id: "vertical",
    term: "Vertikální anténa",
    definition: "Svisle orientovaná anténa, typicky čtvrtvlnná (λ/4). Všesměrová v horizontální rovině, s nízkým úhlem vyzařování vhodným pro DX.",
    relatedLessonIds: ["ant-01"],
    tags: ["anteny"],
  },
  {
    id: "quad",
    term: "Quad anténa",
    definition: "Směrová anténa se čtvercovými smyčkami (obvod každé = 1λ). Podobný zisk jako Yagi, ale s větší plochou. Nižší citlivost na šum.",
    relatedLessonIds: ["ant-01"],
    tags: ["anteny"],
  },
  {
    id: "log-periodic",
    term: "Log-periodická anténa (LPDA)",
    definition: "Širokopásmová směrová anténa pokrývající velký rozsah frekvencí. Nižší zisk než Yagi, ale konstantní parametry přes celé pásmo.",
    relatedLessonIds: ["ant-01"],
    tags: ["anteny"],
  },
  {
    id: "parabolicka",
    term: "Parabolická anténa",
    definition: "Anténa s parabolickým reflektorem a ozářečem v ohnisku. Vysoký zisk a úzký svazek. Používá se na UKV a mikrovlnných pásmech.",
    relatedLessonIds: ["ant-01"],
    tags: ["anteny"],
  },
  {
    id: "magneticka-smycka",
    term: "Magnetická smyčka (mag loop)",
    definition: "Malá anténa tvořená vodivou smyčkou (obvod < λ/4) s ladicím kondenzátorem. Kompaktní, ale úzkopásmová a s omezeným výkonem.",
    relatedLessonIds: ["ant-01"],
    tags: ["anteny"],
  },

  // -----------------------------------------------------------------------
  // Antenna concepts
  // -----------------------------------------------------------------------
  {
    id: "zisk-anteny",
    term: "Zisk antény (dBi, dBd)",
    definition: "Míra směrovosti antény. dBi = vůči izotropnímu zářiči, dBd = vůči dipólu. Dipól má zisk 2,15 dBi = 0 dBd.",
    relatedLessonIds: ["ant-02"],
    tags: ["anteny", "zisk"],
  },
  {
    id: "f-b-pomer",
    term: "Poměr předek/záda (front-to-back)",
    definition: "Poměr vyzařování antény v hlavním a zpětném směru, vyjádřený v dB. Vyšší hodnota = lepší potlačení signálů zezadu.",
    relatedLessonIds: ["ant-02"],
    tags: ["anteny"],
  },
  {
    id: "sirka-svazku",
    term: "Šířka svazku (beamwidth)",
    definition: "Úhel mezi směry, kde výkon klesne na polovinu (-3 dB) oproti maxima vyzařování. Užší svazek = větší zisk.",
    relatedLessonIds: ["ant-02"],
    tags: ["anteny"],
  },
  {
    id: "polarizace",
    term: "Polarizace",
    definition: "Orientace vektoru elektrického pole elektromagnetické vlny. Vertikální, horizontální nebo kruhová. Obě stanice by měly mít stejnou polarizaci.",
    relatedLessonIds: ["ant-02", "theory-02"],
    tags: ["anteny", "em-vlny"],
  },
  {
    id: "erp-eirp",
    term: "ERP / EIRP",
    definition: "ERP = efektivní vyzářený výkon vztažený k dipólu. EIRP = vztažený k izotropnímu zářiči. EIRP = ERP + 2,15 dB. Předpisy obvykle limitují ERP.",
    relatedLessonIds: ["ant-02", "czech-law-05"],
    tags: ["anteny", "predpisy"],
  },

  // -----------------------------------------------------------------------
  // Feed lines
  // -----------------------------------------------------------------------
  {
    id: "koaxialni-kabel",
    term: "Koaxiální kabel",
    definition: "Nesymetrické napájecí vedení s vnitřním vodičem, dielektrikem a stíněním. Impedance 50 nebo 75 Ω. Hlavní typ vedení v radioamatérské praxi.",
    relatedLessonIds: ["ant-02"],
    tags: ["vedeni", "koax"],
  },
  {
    id: "twin-lead",
    term: "Twin-lead (dvoulinková vedení)",
    definition: "Symetrické napájecí vedení ze dvou rovnoběžných vodičů. Impedance typicky 300 nebo 450 Ω. Nižší ztráty než koax, ale citlivější na okolí.",
    relatedLessonIds: ["ant-02"],
    tags: ["vedeni"],
  },
  {
    id: "cinitel-zkraceni",
    term: "Činitel zkrácení (velocity factor)",
    definition: "Poměr rychlosti šíření signálu ve vedení k rychlosti světla. U koaxu typicky 0,66-0,82. Důležitý pro výpočet elektrické délky vedení.",
    relatedLessonIds: ["ant-02"],
    tags: ["vedeni"],
  },
  {
    id: "utlum-vedeni",
    term: "Útlum vedení (attenuation)",
    definition: "Ztráta výkonu signálu ve vedení, vyjádřená v dB na jednotku délky. Roste s frekvencí. Koaxiální kabely mají vyšší útlum než otevřená vedení.",
    relatedLessonIds: ["ant-02"],
    tags: ["vedeni"],
  },

  // -----------------------------------------------------------------------
  // Propagation modes
  // -----------------------------------------------------------------------
  {
    id: "troposfericky-ducting",
    term: "Troposférický ducting",
    definition: "Šíření VKV/UKV signálů ve vzduchových kanálech (ductech) vznikajících teplotní inverzí v troposféře. Umožňuje spojení na stovky km.",
    relatedLessonIds: ["prop-02"],
    tags: ["sireni"],
  },
  {
    id: "sporadicka-e",
    term: "Sporadická vrstva E (Es)",
    definition: "Nepravidelné ionizované oblasti ve vrstvě E (cca 100 km), odrážející signály 30-150 MHz. Běžná v létě, umožňuje neočekávaná VKV spojení.",
    relatedLessonIds: ["prop-02"],
    tags: ["sireni"],
  },
  {
    id: "aurora-sireni",
    term: "Auroální šíření",
    definition: "Odraz VKV signálů od ionizovaných oblastí polární záře. Signály mají charakteristický zkresený zvuk. Typicky na 2 m a 6 m.",
    relatedLessonIds: ["prop-02"],
    tags: ["sireni"],
  },
  {
    id: "meteor-scatter",
    term: "Meteor scatter",
    definition: "Šíření VKV signálů odrazem od ionizovaných stop meteorů. Krátké otevření (sekundy). Využívá se FT8/MSK144 pro automatická spojení.",
    relatedLessonIds: ["prop-02"],
    tags: ["sireni"],
  },
  {
    id: "povrchova-vlna",
    term: "Povrchová vlna (ground wave)",
    definition: "Šíření podél zemského povrchu. Dominantní na LF a nižších MF frekvencích. Dosah závisí na vodivosti povrchu.",
    relatedLessonIds: ["prop-01"],
    tags: ["sireni"],
  },
  {
    id: "prostorova-vlna",
    term: "Prostorová vlna (sky wave)",
    definition: "Šíření odrazem od ionosféry. Hlavní mechanismus dálkového KV spojení. Závisí na frekvenci, denní době a sluneční aktivitě.",
    relatedLessonIds: ["prop-01"],
    tags: ["sireni"],
  },
  {
    id: "nvis",
    term: "NVIS (Near Vertical Incidence Skywave)",
    definition: "Šíření téměř vertikálním odrazem od ionosféry. Anténa vyzařuje strmě vzhůru, signál pokrývá oblast v okruhu cca 300 km bez mrtvé zóny.",
    relatedLessonIds: ["prop-02"],
    tags: ["sireni"],
  },

  // -----------------------------------------------------------------------
  // Additional components
  // -----------------------------------------------------------------------
  {
    id: "zenerova-dioda",
    term: "Zenerova dioda",
    definition: "Dioda navržená pro provoz v závěrném průrazu při definovaném napětí. Používá se jako stabilizátor napětí v napájecích zdrojích.",
    relatedLessonIds: ["comp-02"],
    tags: ["soucastky", "polovodice"],
  },
  {
    id: "led",
    term: "LED (Light Emitting Diode)",
    definition: "Elektroluminiscenční dioda vyzařující světlo při průchodu proudu v propustném směru. Používá se jako indikátor v přístrojích.",
    relatedLessonIds: ["comp-02"],
    tags: ["soucastky", "polovodice"],
  },
  {
    id: "varikap",
    term: "Varikap (varactor)",
    definition: "Polovodičová dioda s kapacitou závislou na přiloženém závěrném napětí. Používá se k elektronickému ladění oscilátorů a filtrů.",
    relatedLessonIds: ["comp-02"],
    tags: ["soucastky", "polovodice"],
  },
  {
    id: "krystalovy-oscilator",
    term: "Krystalový oscilátor",
    definition: "Oscilátor využívající piezoelektrický krystal (křemen) jako rezonátor. Vysoce stabilní frekvence. Základ přesných frekvenčních normálů.",
    relatedLessonIds: ["tx-01", "comp-02"],
    tags: ["soucastky", "oscilator"],
  },
  {
    id: "pll",
    term: "PLL (Phase Locked Loop)",
    definition: "Fázový závěs - zpětnovazební obvod udržující výstupní frekvenci v přesném poměru ke krystalové referenci. Základ syntezátorů frekvence.",
    relatedLessonIds: ["tx-01", "circuits-02"],
    tags: ["obvody", "oscilator"],
  },
  {
    id: "dds",
    term: "DDS (Direct Digital Synthesis)",
    definition: "Přímá digitální syntéza frekvence. Generuje signál číslicově z tabulky vzorků. Jemné frekvenční kroky a rychlé přeladění.",
    relatedLessonIds: ["tx-01"],
    tags: ["obvody", "digitalni"],
  },
  {
    id: "operacni-zesilovac",
    term: "Operační zesilovač (op-amp)",
    definition: "Integrovaný obvod s vysokým zesílením a diferenčním vstupem. Základní stavební blok analogových obvodů: zesilovače, filtry, komparátory.",
    relatedLessonIds: ["comp-02", "circuits-01"],
    tags: ["soucastky", "obvody"],
  },

  // -----------------------------------------------------------------------
  // Digital signal processing
  // -----------------------------------------------------------------------
  {
    id: "adc",
    term: "ADC (analogově-digitální převodník)",
    definition: "Obvod převádějící analogový signál na digitální (vzorkování). Klíčový prvek moderních přijímačů a SDR.",
    relatedLessonIds: ["comp-02", "rx-01"],
    tags: ["digitalni", "soucastky"],
  },
  {
    id: "dac",
    term: "DAC (digitálně-analogový převodník)",
    definition: "Obvod převádějící digitální data na analogový signál. Používá se ve vysílačích s DDS a v DSP řetězcích.",
    relatedLessonIds: ["comp-02", "tx-01"],
    tags: ["digitalni", "soucastky"],
  },
  {
    id: "dsp",
    term: "DSP (Digital Signal Processing)",
    definition: "Číslicové zpracování signálu. Matematické operace nad vzorkovaným signálem: filtrace, demodulace, potlačení šumu. Základ moderních transceivérů.",
    relatedLessonIds: ["rx-01", "rx-02"],
    tags: ["digitalni", "prijimace"],
  },
  {
    id: "sdr",
    term: "SDR (Software Defined Radio)",
    definition: "Softwarově definované rádio. Přijímač nebo vysílač, kde většinu funkcí (filtrace, demodulace) provádí software místo analogových obvodů.",
    relatedLessonIds: ["rx-01"],
    tags: ["digitalni", "prijimace"],
  },

  // -----------------------------------------------------------------------
  // Safety
  // -----------------------------------------------------------------------
  {
    id: "uzemneni",
    term: "Uzemnění (grounding)",
    definition: "Vodivé spojení se zemí pro bezpečnost a správnou funkci stanic. Chrání před úrazem elektrickým proudem a zlepšuje funkci antén.",
    relatedLessonIds: ["safety-01"],
    tags: ["bezpecnost"],
  },
  {
    id: "ochrana-pred-bleskem",
    term: "Ochrana před bleskem",
    definition: "Soubor opatření proti poškození stanice bleskem: odpojení antén, bleskojistky, uzemnění stožárů. Prevence požáru a zničení zařízení.",
    relatedLessonIds: ["safety-01"],
    tags: ["bezpecnost"],
  },
  {
    id: "prvni-pomoc-uraz-proudem",
    term: "První pomoc při úrazu elektrickým proudem",
    definition: "Vypnout proud, odpojit postiženého od zdroje. Při zástavě dechu zahájit resuscitaci. Vždy volat záchrannou službu (155/112).",
    relatedLessonIds: ["safety-02"],
    tags: ["bezpecnost"],
  },

  // -----------------------------------------------------------------------
  // Measurements
  // -----------------------------------------------------------------------
  {
    id: "osciloskop",
    term: "Osciloskop",
    definition: "Měřicí přístroj zobrazující průběh napětí v čase. Umožňuje analyzovat tvar signálu, frekvenci, amplitudu a zkreslení.",
    relatedLessonIds: ["meas-01"],
    tags: ["mereni"],
  },
  {
    id: "spektralni-analyzator",
    term: "Spektrální analyzátor",
    definition: "Měřicí přístroj zobrazující rozložení výkonu signálu v frekvenční oblasti. Umožňuje detekci harmonických, intermodulací a parazitních signálů.",
    relatedLessonIds: ["meas-01"],
    tags: ["mereni"],
  },
  {
    id: "antenni-analyzator",
    term: "Anténní analyzátor",
    definition: "Přístroj měřící impedanci, PSV a rezonanční frekvenci antény. Umožňuje ladění a diagnostiku anténních systémů bez vysílání.",
    relatedLessonIds: ["meas-01", "ant-02"],
    tags: ["mereni", "anteny"],
  },
  {
    id: "wattmetr",
    term: "Wattmetr (měřič výkonu)",
    definition: "Přístroj měřící VF výkon procházející vedením. Průchozí wattmetr umožňuje současné měření dopředného a odraženého výkonu.",
    relatedLessonIds: ["meas-01"],
    tags: ["mereni"],
  },
  {
    id: "merit-pole",
    term: "Měřič intenzity pole (field strength meter)",
    definition: "Jednoduchý přístroj měřící relativní sílu elektromagnetického pole. Používá se při ladění antén a kontrole vyzařování.",
    relatedLessonIds: ["meas-01"],
    tags: ["mereni"],
  },
];
