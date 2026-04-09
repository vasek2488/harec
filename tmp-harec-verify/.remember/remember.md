# Handoff

## State
Phase 2 complete — all 8 chunks done, 131 tests passing, no placeholders remain. All 14 routes wired to real pages. docs/CHECKPOINT.md, docs/ARCHITECTURE.md, docs/IMPLEMENTATION-STATUS.md all updated. Phase 3 plan written at `~/.claude/plans/harec-phase-3.md`.

## Next
1. **Chunks 3.1–3.4 (Track A polish)** — fix shuffleChoices in ExamSession, dark mode reactivity, font size CSS application, remove AppShell stub header. Fast session, do all 4.
2. **Chunk 3.5+ (Track B content)** — populate questions (Part 1 first: ~80 questions in `content/questions/regulations/`). Read plan for file structure and question shape.

## Context
- Content files are all empty: `content/questions/index.ts`, `content/lessons/index.ts`, `content/glossary.ts`, `content/formulas.ts`
- AppShell has a double-header bug: renders its own `<h1>HAREC</h1>` stub AND RootLayout also renders `<Header />` — both are sticky top bars stacking
- Tests use no `@testing-library/react` — pure vitest logic tests only
- Stores are in `src/stores/` (plural)
