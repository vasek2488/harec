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

## Phase 3: Content + Polish — PENDING ⏳

See `~/.claude/plans/harec-phase-3.md` for full plan.

**Track A — Shell Polish:**
- ⏳ **3.1** Fix `shuffleChoices` in ExamSession
- ⏳ **3.2** Fix dark mode reactivity (system theme OS listener)
- ⏳ **3.3** Apply font size preference to CSS
- ⏳ **3.4** Remove AppShell stub header (double-header conflict)

**Track B — Content Population:**
- ⏳ **3.5** Questions: Part 1 — Radiokomunikační předpisy (~80 questions)
- ⏳ **3.6** Questions: Part 2 — Radiokomunikační provoz (~369 questions)
- ⏳ **3.7** Questions: Part 3 — Elektrotechnika (~135 questions)
- ⏳ **3.8** Lessons: Part 1
- ⏳ **3.9** Lessons: Parts 2 & 3
- ⏳ **3.10** Glossary + Formulas

---

## Verification

```bash
pnpm verify    # typecheck + lint + test (must pass before claiming done)
pnpm build     # build check
```
