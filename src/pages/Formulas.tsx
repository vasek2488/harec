import { getFormulas } from "@/lib/content-loader";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import type { Formula } from "@/lib/types";

export function groupByCategory(formulas: Formula[]): Map<string, Formula[]> {
  const map = new Map<string, Formula[]>();
  for (const f of formulas) {
    const group = map.get(f.categoryId) ?? [];
    group.push(f);
    map.set(f.categoryId, group);
  }
  return map;
}

export function Formulas() {
  const allFormulas = getFormulas();
  const grouped = groupByCategory(allFormulas);

  return (
    <>
      <Header title="Vzorce" />
      <PageContainer>
        <div className="space-y-6 pb-24">
          {allFormulas.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-4xl">🔢</p>
              <p className="mt-3 font-medium">Vzorce se připravují</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Vzorce budou přidány v další fázi.
              </p>
            </div>
          ) : (
            Array.from(grouped.entries()).map(([categoryId, formulas]) => (
              <div key={categoryId}>
                <h2 className="mb-3 font-semibold capitalize">{categoryId}</h2>
                <div className="space-y-3">
                  {formulas.map((f) => (
                    <div
                      key={f.id}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="font-medium">{f.name}</p>
                          <p className="mt-1 font-mono text-lg text-primary">
                            {f.formula}
                          </p>
                          {f.unit && (
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              Jednotka: {f.unit}
                            </p>
                          )}
                        </div>
                      </div>

                      {f.variables.length > 0 && (
                        <div className="mt-3 space-y-1 border-t border-border pt-3">
                          {f.variables.map((v) => (
                            <div
                              key={v.symbol}
                              className="flex items-center gap-2 text-xs"
                            >
                              <span className="w-6 font-mono font-semibold">
                                {v.symbol}
                              </span>
                              <span className="flex-1 text-muted-foreground">
                                {v.name}
                              </span>
                              {v.unit && (
                                <span className="text-muted-foreground">
                                  [{v.unit}]
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </PageContainer>
    </>
  );
}
