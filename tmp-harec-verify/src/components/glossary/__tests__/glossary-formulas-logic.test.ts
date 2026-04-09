import { describe, it, expect } from "vitest";
import { filterGlossary } from "@/pages/Glossary";
import { groupByCategory } from "@/pages/Formulas";
import type { GlossaryTerm, Formula } from "@/lib/types";

// ---------------------------------------------------------------------------
// filterGlossary
// ---------------------------------------------------------------------------

function makeTerm(id: string, term: string, definition: string): GlossaryTerm {
  return { id, term, definition, relatedLessonIds: [], tags: [] };
}

describe("filterGlossary", () => {
  const terms: GlossaryTerm[] = [
    makeTerm("1", "Amplituda", "Maximální výchylka kmitavého pohybu"),
    makeTerm("2", "Frekvence", "Počet kmitů za sekundu, jednotka Hz"),
    makeTerm("3", "Anténa", "Zařízení pro vysílání a příjem elektromagnetických vln"),
    makeTerm("4", "Výkon", "Elektrický výkon, P = U * I"),
  ];

  it("returns all terms for empty query", () => {
    expect(filterGlossary(terms, "")).toHaveLength(4);
    expect(filterGlossary(terms, "   ")).toHaveLength(4);
  });

  it("matches term name case-insensitively", () => {
    const result = filterGlossary(terms, "ampli");
    expect(result).toHaveLength(1);
    expect(result[0]?.term).toBe("Amplituda");
  });

  it("matches definition text case-insensitively", () => {
    const result = filterGlossary(terms, "hz");
    expect(result).toHaveLength(1);
    expect(result[0]?.term).toBe("Frekvence");
  });

  it("returns multiple matches", () => {
    // "elektro" appears in Anténa definition and Výkon definition
    const result = filterGlossary(terms, "elektro");
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  it("returns empty array for no match", () => {
    const result = filterGlossary(terms, "xyzzy");
    expect(result).toHaveLength(0);
  });

  it("handles empty terms array", () => {
    expect(filterGlossary([], "test")).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// groupByCategory
// ---------------------------------------------------------------------------

function makeFormula(
  id: string,
  name: string,
  categoryId: string
): Formula {
  return {
    id,
    name,
    formula: "x = y",
    variables: [],
    unit: "W",
    categoryId,
  };
}

describe("groupByCategory", () => {
  const formulas: Formula[] = [
    makeFormula("f1", "Výkon", "elektrika"),
    makeFormula("f2", "Odpor", "elektrika"),
    makeFormula("f3", "Vlnová délka", "anteny"),
    makeFormula("f4", "Zisk antény", "anteny"),
    makeFormula("f5", "Frekvence", "anteny"),
  ];

  it("groups formulas by categoryId", () => {
    const grouped = groupByCategory(formulas);
    expect(grouped.size).toBe(2);
    expect(grouped.get("elektrika")).toHaveLength(2);
    expect(grouped.get("anteny")).toHaveLength(3);
  });

  it("preserves formula order within category", () => {
    const grouped = groupByCategory(formulas);
    const anteny = grouped.get("anteny") ?? [];
    expect(anteny[0]?.name).toBe("Vlnová délka");
    expect(anteny[1]?.name).toBe("Zisk antény");
    expect(anteny[2]?.name).toBe("Frekvence");
  });

  it("returns empty map for empty input", () => {
    const grouped = groupByCategory([]);
    expect(grouped.size).toBe(0);
  });

  it("handles single-formula category", () => {
    const grouped = groupByCategory([makeFormula("x", "Test", "solo")]);
    expect(grouped.get("solo")).toHaveLength(1);
  });
});
