import { useState } from "react";
import { getGlossary } from "@/lib/content-loader";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { SearchBar } from "@/components/glossary/SearchBar";
import { GlossaryList } from "@/components/glossary/GlossaryList";
import type { GlossaryTerm } from "@/lib/types";

export function filterGlossary(terms: GlossaryTerm[], query: string): GlossaryTerm[] {
  const q = query.trim().toLowerCase();
  if (!q) return terms;
  return terms.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q)
  );
}

export function Glossary() {
  const [query, setQuery] = useState("");
  const allTerms = getGlossary();
  const filtered = filterGlossary(allTerms, query);

  return (
    <>
      <Header title="Slovník" />
      <PageContainer>
        <div className="space-y-4 pb-24">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Hledat pojem…"
          />

          {allTerms.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-4xl">📖</p>
              <p className="mt-3 font-medium">Slovník se připravuje</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pojmy budou přidány v další fázi.
              </p>
            </div>
          ) : (
            <>
              {query && (
                <p className="text-xs text-muted-foreground">
                  {filtered.length} výsledků pro „{query}"
                </p>
              )}
              <GlossaryList terms={filtered} />
            </>
          )}
        </div>
      </PageContainer>
    </>
  );
}
