# Implementation Status

## Phase 1: App Scaffold — COMPLETE ✅

**Test Coverage:** 55 tests

### Chunk Summary
- **1.1** — Types (10 slide types, exam models, all interfaces)
- **1.2** — Content loader (thin wrappers over content/ imports)
- **1.3** — Progress store (Zustand + IndexedDB via idb-keyval)
- **1.4** — Preferences store (Zustand + localStorage)
- **1.5** — Session store (ephemeral Zustand)
- **1.6** — Shadcn UI components (9 installed + sonner)
- **1.7** — AppShell + BottomNav
- **1.8** — Header + PageContainer
- **1.9** — Layout wired into routes
- **1.10** — Exam engine (validateAnswer, calculateScore, generateExamSession, calculatePartScores, spaced repetition)

---

## Phase 2: Page Implementation — COMPLETE ✅

**Test Coverage:** 131 tests (11 test files)

All 14 routes wired. No placeholders remain.

- ✅ **2.1** Dashboard — ProgressRing, StatCard, weak areas, CTA buttons
- ✅ **2.2** Learn — TopicCard, TopicList grouped by exam part with completion %
- ✅ **2.3** Lesson page — SlideRenderer (all 10 slide types), SlideNav
- ✅ **2.4** Drill — FilterPanel, QuestionCard, AnswerInput, DrillSetup/Session/Results
- ✅ **2.5** Exam — ExamSetup, ExamSession (countdown + 5-min warning), ExamResults (pass/fail + part scores + saves history), ExamReview
- ✅ **2.6** Mistakes — MistakeCard with accuracy bar, sort by recent/most, filter by part
- ✅ **2.7** Glossary & Formulas — SearchBar, GlossaryList, Glossary (search), Formulas (grouped by category)
- ✅ **2.8** Settings — ThemeToggle, FontSizeToggle, ResetProgress (2-step confirm), JSON export

---

## Phase 3: Content + Polish — IN PROGRESS 🔄

See `~/.claude/plans/harec-phase-3.md` for full plan.

**Track A — Shell Polish — COMPLETE ✅ (143 tests)**
- ✅ **3.1** Fix `shuffleChoices` in ExamSession — Fisher-Yates shuffle, cached per-question in `useState`; bonus: fixed bad BottomNav import path (`@/../../` -> `@/../`)
- ✅ **3.2** Fix dark mode reactivity — `useSystemDark` hook subscribes to `matchMedia('prefers-color-scheme: dark')` change events; extracted `resolveIsDark()` for testability
- ✅ **3.3** Apply font size preference to CSS — `fontSizeClass()` applies `text-base`/`text-lg` to root div
- ✅ **3.4** Remove AppShell stub header — stub `<header>` removed; `<main>` padding removed (PageContainer owns padding); Header is full-width sticky

**Track B — Content Population (Quantic-quality redesign):**

New approach: lessons-first architecture with cross-linked knowledge graph. See `~/.claude/plans/woolly-sparking-toucan.md` for full strategy.

- ✅ **B1** Reference implementation: Technical Theory — 3 lessons (27 slides, all 9 slide types used), 22 questions with enrichment, 12 glossary terms, 9 formulas
- ✅ **B2** Complete Technical Part — 20 lessons, 135 questions, 39 glossary terms, 17 formulas across all 10 technical sections; 147 tests passing
- ✅ **B3** Operating Part — 19 lessons, 369 questions across 6 sections (frequencies 41q, phonetic 52q, skills 30q, q-codes 21q, abbreviations 140q, prefixes 85q); 147 tests passing, build clean
- ✅ **B4** Regulations Part — 10 lessons (itu-01..03, cept-01..02, czech-law-01..05), 80 questions (R-ITU-001..016, R-CEP-001..016, R-CZE-001..048); 147 tests passing
- ✅ **B5** Glossary + formulas + cross-link audit — glossary 40→197 terms, formulas 18→30, all cross-links verified (every lesson has relatedQuestionIds + exam-question slides, every question has relatedLessonIds)

---

## Verification

```bash
pnpm verify    # typecheck + lint + test (must pass before claiming done)
pnpm build     # build check
```
