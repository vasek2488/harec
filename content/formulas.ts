import type { Formula } from "@/lib/types";

export const formulas: Formula[] = [
  // -----------------------------------------------------------------------
  // Category: zakladni (basic electrical)
  // -----------------------------------------------------------------------
  {
    id: "ohmuv-zakon",
    name: "Ohmův zákon",
    formula: "U = I × R",
    variables: [
      { symbol: "U", name: "Napětí", unit: "V" },
      { symbol: "I", name: "Proud", unit: "A" },
      { symbol: "R", name: "Odpor", unit: "Ω" },
    ],
    unit: "V",
    categoryId: "zakladni",
  },
  {
    id: "vykon-ui",
    name: "Výkon (z napětí a proudu)",
    formula: "P = U × I",
    variables: [
      { symbol: "P", name: "Výkon", unit: "W" },
      { symbol: "U", name: "Napětí", unit: "V" },
      { symbol: "I", name: "Proud", unit: "A" },
    ],
    unit: "W",
    categoryId: "zakladni",
  },
  {
    id: "vykon-i2r",
    name: "Výkon (z proudu a odporu)",
    formula: "P = I² × R",
    variables: [
      { symbol: "P", name: "Výkon", unit: "W" },
      { symbol: "I", name: "Proud", unit: "A" },
      { symbol: "R", name: "Odpor", unit: "Ω" },
    ],
    unit: "W",
    categoryId: "zakladni",
  },
  {
    id: "vykon-u2r",
    name: "Výkon (z napětí a odporu)",
    formula: "P = U² / R",
    variables: [
      { symbol: "P", name: "Výkon", unit: "W" },
      { symbol: "U", name: "Napětí", unit: "V" },
      { symbol: "R", name: "Odpor", unit: "Ω" },
    ],
    unit: "W",
    categoryId: "zakladni",
  },
  {
    id: "vlnova-delka",
    name: "Vlnová délka",
    formula: "λ = c / f",
    variables: [
      { symbol: "λ", name: "Vlnová délka", unit: "m" },
      { symbol: "c", name: "Rychlost světla", unit: "m/s" },
      { symbol: "f", name: "Frekvence", unit: "Hz" },
    ],
    unit: "m",
    categoryId: "zakladni",
  },
  {
    id: "vlnova-delka-mhz",
    name: "Vlnová délka (zjednodušeně)",
    formula: "λ [m] = 300 / f [MHz]",
    variables: [
      { symbol: "λ", name: "Vlnová délka", unit: "m" },
      { symbol: "f", name: "Frekvence", unit: "MHz" },
    ],
    unit: "m",
    categoryId: "zakladni",
  },
  {
    id: "kirchhoffuv-zakon-proudu",
    name: "Kirchhoffův zákon proudů",
    formula: "ΣI = 0",
    variables: [
      { symbol: "ΣI", name: "Součet proudů v uzlu", unit: "A" },
    ],
    unit: "A",
    categoryId: "zakladni",
  },
  {
    id: "seriovy-paralelni-odpor",
    name: "Sériový a paralelní odpor",
    formula: "R_s = R1 + R2 ; 1/R_p = 1/R1 + 1/R2",
    variables: [
      { symbol: "R_s", name: "Celkový odpor (sériově)", unit: "Ω" },
      { symbol: "R_p", name: "Celkový odpor (paralelně)", unit: "Ω" },
      { symbol: "R1", name: "První odpor", unit: "Ω" },
      { symbol: "R2", name: "Druhý odpor", unit: "Ω" },
    ],
    unit: "Ω",
    categoryId: "zakladni",
  },

  // -----------------------------------------------------------------------
  // Category: stridavy-proud (AC circuits)
  // -----------------------------------------------------------------------
  {
    id: "kapacitni-reaktance",
    name: "Kapacitní reaktance",
    formula: "Xc = 1 / (2πfC)",
    variables: [
      { symbol: "Xc", name: "Kapacitní reaktance", unit: "Ω" },
      { symbol: "f", name: "Frekvence", unit: "Hz" },
      { symbol: "C", name: "Kapacita", unit: "F" },
    ],
    unit: "Ω",
    categoryId: "stridavy-proud",
  },
  {
    id: "indukcni-reaktance",
    name: "Indukční reaktance",
    formula: "Xl = 2πfL",
    variables: [
      { symbol: "Xl", name: "Induktivní reaktance", unit: "Ω" },
      { symbol: "f", name: "Frekvence", unit: "Hz" },
      { symbol: "L", name: "Indukčnost", unit: "H" },
    ],
    unit: "Ω",
    categoryId: "stridavy-proud",
  },
  {
    id: "impedance",
    name: "Impedance",
    formula: "Z = √(R² + X²)",
    variables: [
      { symbol: "Z", name: "Impedance", unit: "Ω" },
      { symbol: "R", name: "Činný odpor", unit: "Ω" },
      { symbol: "X", name: "Reaktance", unit: "Ω" },
    ],
    unit: "Ω",
    categoryId: "stridavy-proud",
  },
  {
    id: "efektivni-napeti",
    name: "Efektivní napětí",
    formula: "U_rms = U_peak / √2",
    variables: [
      { symbol: "U_rms", name: "Efektivní napětí", unit: "V" },
      { symbol: "U_peak", name: "Špičkové napětí", unit: "V" },
    ],
    unit: "V",
    categoryId: "stridavy-proud",
  },
  {
    id: "seriova-paralelni-kapacita",
    name: "Sériová a paralelní kapacita",
    formula: "1/C_s = 1/C1 + 1/C2 ; C_p = C1 + C2",
    variables: [
      { symbol: "C_s", name: "Celková kapacita (sériově)", unit: "F" },
      { symbol: "C_p", name: "Celková kapacita (paralelně)", unit: "F" },
      { symbol: "C1", name: "První kapacita", unit: "F" },
      { symbol: "C2", name: "Druhá kapacita", unit: "F" },
    ],
    unit: "F",
    categoryId: "stridavy-proud",
  },

  // -----------------------------------------------------------------------
  // Category: obvody (circuits)
  // -----------------------------------------------------------------------
  {
    id: "rezonancni-kmitocet",
    name: "Rezonanční kmitočet",
    formula: "f = 1 / (2π√(LC))",
    variables: [
      { symbol: "f", name: "Rezonanční frekvence", unit: "Hz" },
      { symbol: "L", name: "Indukčnost", unit: "H" },
      { symbol: "C", name: "Kapacita", unit: "F" },
    ],
    unit: "Hz",
    categoryId: "obvody",
  },
  {
    id: "q-faktor",
    name: "Činitel jakosti",
    formula: "Q = f₀ / B",
    variables: [
      { symbol: "Q", name: "Činitel jakosti", unit: "-" },
      { symbol: "f₀", name: "Rezonanční frekvence", unit: "Hz" },
      { symbol: "B", name: "Šířka pásma (−3 dB)", unit: "Hz" },
    ],
    unit: "-",
    categoryId: "obvody",
  },
  {
    id: "delic-napeti",
    name: "Dělič napětí",
    formula: "Uout = Uin × R2 / (R1 + R2)",
    variables: [
      { symbol: "Uout", name: "Výstupní napětí", unit: "V" },
      { symbol: "Uin", name: "Vstupní napětí", unit: "V" },
      { symbol: "R1", name: "Horní rezistor", unit: "Ω" },
      { symbol: "R2", name: "Dolní rezistor", unit: "Ω" },
    ],
    unit: "V",
    categoryId: "obvody",
  },
  {
    id: "sirka-pasma-z-q",
    name: "Šířka pásma z činitele jakosti",
    formula: "B = f₀ / Q",
    variables: [
      { symbol: "B", name: "Šířka pásma", unit: "Hz" },
      { symbol: "f₀", name: "Rezonanční frekvence", unit: "Hz" },
      { symbol: "Q", name: "Činitel jakosti", unit: "-" },
    ],
    unit: "Hz",
    categoryId: "obvody",
  },
  {
    id: "casova-konstanta-rc",
    name: "Časová konstanta RC",
    formula: "τ = R × C",
    variables: [
      { symbol: "τ", name: "Časová konstanta", unit: "s" },
      { symbol: "R", name: "Odpor", unit: "Ω" },
      { symbol: "C", name: "Kapacita", unit: "F" },
    ],
    unit: "s",
    categoryId: "obvody",
  },

  // -----------------------------------------------------------------------
  // Category: anteny
  // -----------------------------------------------------------------------
  {
    id: "delka-dipolu",
    name: "Délka půlvlnného dipólu",
    formula: "l [m] = 150 / f [MHz]",
    variables: [
      { symbol: "l", name: "Délka dipólu", unit: "m" },
      { symbol: "f", name: "Frekvence", unit: "MHz" },
    ],
    unit: "m",
    categoryId: "anteny",
  },
  {
    id: "psv-vypocet",
    name: "PSV (SWR)",
    formula: "PSV = (1 + |Γ|) / (1 − |Γ|)",
    variables: [
      { symbol: "PSV", name: "Poměr stojatých vln", unit: "-" },
      { symbol: "Γ", name: "Koeficient odrazu", unit: "-" },
    ],
    unit: "-",
    categoryId: "anteny",
  },
  {
    id: "ctvrtvlnny-vertikal",
    name: "Délka čtvrtvlnného vertikálu",
    formula: "l [m] = 75 / f [MHz]",
    variables: [
      { symbol: "l", name: "Délka vertikálu", unit: "m" },
      { symbol: "f", name: "Frekvence", unit: "MHz" },
    ],
    unit: "m",
    categoryId: "anteny",
  },
  {
    id: "ztrata-volnym-prostorem",
    name: "Ztráta volným prostorem (FSPL)",
    formula: "L [dB] = 32,4 + 20×log₁₀(f) + 20×log₁₀(d)",
    variables: [
      { symbol: "L", name: "Ztráta volným prostorem", unit: "dB" },
      { symbol: "f", name: "Frekvence", unit: "MHz" },
      { symbol: "d", name: "Vzdálenost", unit: "km" },
    ],
    unit: "dB",
    categoryId: "anteny",
  },

  // -----------------------------------------------------------------------
  // Category: mereni
  // -----------------------------------------------------------------------
  {
    id: "db-vykon",
    name: "Decibel (výkonový)",
    formula: "dB = 10 × log₁₀(P2/P1)",
    variables: [
      { symbol: "P1", name: "Referenční výkon", unit: "W" },
      { symbol: "P2", name: "Měřený výkon", unit: "W" },
    ],
    unit: "dB",
    categoryId: "mereni",
  },
  {
    id: "db-napeti",
    name: "Decibel (napěťový)",
    formula: "dB = 20 × log₁₀(U2/U1)",
    variables: [
      { symbol: "U1", name: "Referenční napětí", unit: "V" },
      { symbol: "U2", name: "Měřené napětí", unit: "V" },
    ],
    unit: "dB",
    categoryId: "mereni",
  },
  {
    id: "dbm-na-watty",
    name: "Převod dBm na watty",
    formula: "P [mW] = 10^(dBm / 10)",
    variables: [
      { symbol: "P", name: "Výkon", unit: "mW" },
      { symbol: "dBm", name: "Výkon v dBm", unit: "dBm" },
    ],
    unit: "mW",
    categoryId: "mereni",
  },

  // -----------------------------------------------------------------------
  // Category: sireni (propagation)
  // -----------------------------------------------------------------------
  {
    id: "radiovy-horizont",
    name: "Rádiový horizont",
    formula: "d [km] = 3,57 × √h [m]",
    variables: [
      { symbol: "d", name: "Vzdálenost horizontu", unit: "km" },
      { symbol: "h", name: "Výška antény", unit: "m" },
    ],
    unit: "km",
    categoryId: "sireni",
  },
  {
    id: "skip-distance",
    name: "Vzdálenost přeskoku (skip distance)",
    formula: "d_skip = 2 × h_iono × tan(θ)",
    variables: [
      { symbol: "d_skip", name: "Vzdálenost přeskoku", unit: "km" },
      { symbol: "h_iono", name: "Výška ionosférické vrstvy", unit: "km" },
      { symbol: "θ", name: "Úhel dopadu", unit: "°" },
    ],
    unit: "km",
    categoryId: "sireni",
  },

  // -----------------------------------------------------------------------
  // Category: vysilace (transmitters)
  // -----------------------------------------------------------------------
  {
    id: "erp",
    name: "Efektivní vyzářený výkon (ERP)",
    formula: "ERP = P_tx × G_ant / L_nap",
    variables: [
      { symbol: "ERP", name: "Efektivní vyzářený výkon", unit: "W" },
      { symbol: "P_tx", name: "Výkon vysílače", unit: "W" },
      { symbol: "G_ant", name: "Zisk antény", unit: "-" },
      { symbol: "L_nap", name: "Ztráty napáječe", unit: "-" },
    ],
    unit: "W",
    categoryId: "vysilace",
  },
  {
    id: "ucinnost",
    name: "Účinnost vysílače",
    formula: "η = P_out / P_in × 100 %",
    variables: [
      { symbol: "η", name: "Účinnost", unit: "%" },
      { symbol: "P_out", name: "Výstupní výkon", unit: "W" },
      { symbol: "P_in", name: "Vstupní výkon", unit: "W" },
    ],
    unit: "%",
    categoryId: "vysilace",
  },
];
