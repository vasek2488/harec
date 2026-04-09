# HAREC Exam Prep Portal — Architecture

## Tech Stack

| Area | Technology |
|------|-----------|
| Framework | Vite 6 + React 19 |
| Language | TypeScript 5.9 (strict) |
| Routing | React Router 7 |
| State | Zustand 5 |
| Persistence | IndexedDB (idb-keyval) + localStorage |
| Styling | Tailwind CSS 4 + Shadcn UI |
| Icons | Lucide React |
| Testing | Vitest |
| PWA | vite-plugin-pwa |
| Deployment | Cloudflare Pages |
| Package manager | pnpm 10 |
| Node | 22 |

## Forkability

The app is designed to be forked for different exams (shooting license, maritime radio, etc.). The fork boundary is the `content/` directory:

| To fork | Action |
|---------|--------|
| New exam content | Replace `content/lessons/`, `content/questions/`, `content/glossary.ts`, `content/formulas.ts` |
| Exam identity & rules | Edit `content/exam.config.ts` |
| Theme accent | Set `theme.accentColor` in exam config |
| UI language | Override `content/i18n/` strings |
| App shell | **Do not touch** `src/` |

## Data Flow

All content is static TypeScript, bundled by Vite at build time.
All user state is persisted locally (IndexedDB for progress, localStorage for preferences).
No server, no API, no authentication.

## State Stores

| Store | Persistence | Purpose |
|-------|------------|---------|
| `progress-store` | IndexedDB via idb-keyval | Lesson completion, question stats (spaced rep), exam history |
| `session-store` | None (ephemeral) | Active drill/exam: question IDs, current index, answers, timestamps |
| `preferences-store` | localStorage | Theme, font size, last section, drill filter settings |

## Folder Structure (as-built)

```
content/              ← FORK BOUNDARY — exam-specific data
  exam.config.ts      ← exam identity, parts/sections, rules (time, pass%), theme
  lessons/
    index.ts          ← exports lessons: Lesson[]
  questions/
    index.ts          ← exports questions: Question[]
  glossary.ts         ← exports glossary: GlossaryTerm[]
  formulas.ts         ← exports formulas: Formula[]
  i18n/
    cs.ts             ← Czech UI strings

src/                  ← REUSABLE APP SHELL
  lib/
    types.ts          ← all TypeScript interfaces (10 slide types, Question, ExamResult, etc.)
    content-loader.ts ← thin wrappers over content/ imports
    exam-engine.ts    ← validateAnswer, calculateScore, generateExamSession,
                         calculatePartScores, calculateNextReviewDate
    utils.ts          ← cn() from Shadcn
  stores/
    progress-store.ts ← Zustand + IndexedDB; recordAnswer, markLessonComplete, saveExamResult
    session-store.ts  ← Zustand ephemeral; startSession, recordAnswer, navigation, endSession
    preferences-store.ts ← Zustand + localStorage; setTheme, setFontSize, updateDrillSettings
  components/
    ui/               ← Shadcn primitives (button, card, badge, progress, dialog, drawer,
                         tabs, radio-group, checkbox, switch, select, scroll-area, separator)
    layout/
      AppShell.tsx    ← root layout, dark mode class, BottomNav
      BottomNav.tsx   ← 5-item bottom navigation + More menu
      Header.tsx      ← sticky top bar; back button when title prop given
      PageContainer.tsx ← max-width wrapper with horizontal padding
    dashboard/
      ProgressRing.tsx  ← SVG circular progress indicator
      StatCard.tsx      ← icon + value + label card
    learn/
      TopicCard.tsx     ← lesson card with completion % and estimated time
      TopicList.tsx     ← groups TopicCards by exam part
      SlideRenderer.tsx ← renders all 10 slide types (explain/fill-blank/select-answer/
                           highlight/reveal/order/match/slider/pool-pick/exam-question)
      SlideNav.tsx      ← prev/next navigation + progress bar
    drill/
      FilterPanel.tsx   ← part/section chips, mistakes/difficult toggles, question count
      QuestionCard.tsx  ← question wording + progress indicator
      AnswerInput.tsx   ← radio-style choices with correct/wrong feedback colors
    mistakes/
      MistakeCard.tsx   ← question, correct answer, accuracy bar, Procvičit + Lekce CTAs
    glossary/
      SearchBar.tsx     ← controlled search input
      GlossaryList.tsx  ← renders GlossaryTerm cards with lesson links
    settings/
      ThemeToggle.tsx   ← 3-way segmented control (system/light/dark)
      FontSizeToggle.tsx ← 2-way segmented control (normal/large)
      ResetProgress.tsx  ← destructive button with 2-step confirmation
  pages/
    Dashboard.tsx       ← overview stats, weak areas, CTA buttons
    Learn.tsx           ← lesson list grouped by part
    LessonPage.tsx      ← slide-by-slide lesson player
    DrillSetup.tsx      ← filter config + start button
    DrillSession.tsx    ← active drill: Q+A, feedback, spaced-rep recording
    DrillResults.tsx    ← score, part breakdown, wrong answer review
    ExamSetup.tsx       ← exam rules display + start button
    ExamSession.tsx     ← countdown timer, free Q navigation, answer selection
    ExamResults.tsx     ← pass/fail, part breakdown, saves to progress-store
    ExamReview.tsx      ← all questions with answer highlights + explanations
    Mistakes.tsx        ← sorted/filtered mistake list (exports sortMistakes, filterByPart)
    Glossary.tsx        ← search-filtered glossary (exports filterGlossary)
    Formulas.tsx        ← category-grouped formula sheet (exports groupByCategory)
    Settings.tsx        ← appearance + data management (exports buildExportData)
  routes.tsx            ← createBrowserRouter; all 14 routes wired, no placeholders
  App.tsx               ← RouterProvider entry point
  main.tsx              ← React DOM mount
```

## Routes

| Path | Page | Notes |
|------|------|-------|
| `/` | Dashboard | Progress stats, weak areas |
| `/learn` | Learn | Topic list grouped by exam part |
| `/learn/:lessonId` | LessonPage | 10 slide types |
| `/drill` | DrillSetup | Filter panel |
| `/drill/session` | DrillSession | Redirects to /drill if no active session |
| `/drill/results` | DrillResults | Redirects to /drill if no session data |
| `/exam` | ExamSetup | Exam rules |
| `/exam/session` | ExamSession | Countdown timer; redirects to /exam if no session |
| `/exam/results` | ExamResults | Saves result once on mount |
| `/exam/review` | ExamReview | Reads session-store answers |
| `/mistakes` | Mistakes | Reads progress-store questionStats |
| `/glossary` | Glossary | Reads content-loader |
| `/formulas` | Formulas | Reads content-loader |
| `/settings` | Settings | Reads/writes preferences-store |

## Test Files (11 files, 131 tests)

| File | What it tests |
|------|--------------|
| `src/lib/__tests__/content-loader.test.ts` | Content loader functions |
| `src/lib/exam-engine.test.ts` | validateAnswer, calculateScore, generateExamSession, calculatePartScores, spaced repetition |
| `src/stores/__tests__/progress-store.test.ts` | recordAnswer, saveExamResult, markLessonComplete, toggleDifficult |
| `src/components/learn/__tests__/TopicList.test.ts` | Lesson grouping by exam part |
| `src/components/learn/__tests__/SlideRenderer.test.ts` | All 10 slide type renderers |
| `src/components/drill/__tests__/drill-logic.test.ts` | DrillSetup filter logic |
| `src/components/dashboard/__tests__/StatCard.test.tsx` | StatCard display |
| `src/components/dashboard/__tests__/ProgressRing.test.tsx` | ProgressRing SVG |
| `src/pages/__tests__/exam-logic.test.ts` | formatTime, calculateScore/Parts, answer persistence |
| `src/components/mistakes/__tests__/mistakes-logic.test.ts` | sortMistakes, filterByPart |
| `src/components/glossary/__tests__/glossary-formulas-logic.test.ts` | filterGlossary, groupByCategory |
| `src/components/settings/__tests__/settings-logic.test.ts` | buildExportData, reset state machine |
