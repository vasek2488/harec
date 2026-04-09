# Claude Code — Project Guide

## Critical documentation

Read before making changes:

- `docs/CHECKPOINT.md` — authoritative status
- `docs/ARCHITECTURE.md` — tech stack, data models, folder structure
- `docs/agent-rules.md` — mandatory safety rules
- `docs/repo-map.md` — documentation index
- `claude.md` — product specification and requirements

Always consult `docs/CHECKPOINT.md` first for current state.

## Verification

```bash
pnpm verify    # typecheck + lint + test
pnpm build     # build check
```

Before claiming ANY task complete:
1. Run `pnpm verify` → paste output
2. If UI change: test on mobile viewport (375px)
3. Count: how many times did you say "should work" without evidence? If > 0, STOP.

## Key patterns

- **Forkability boundary**: `content/` is exam-specific, `src/` is the reusable app shell
- `content/exam.config.ts` — the single file that defines what exam this portal serves
- Content files are TypeScript (not JSON) for type safety
- State: Zustand stores with IndexedDB persistence (progress) and localStorage (preferences)
- Routing: React Router v7, SPA mode
- Styling: Tailwind CSS 4 + Shadcn UI + oklch CSS variables
- No backend, no API — all data is local
- Czech UI by default, strings in `content/i18n/cs.ts`

## Architecture constraints

- Never hardcode exam-specific content in `src/` — always read from `content/`
- Components must be exam-agnostic — they render whatever data content-loader provides
- Mobile-first: test on 375px viewport minimum
- Offline-capable: all content bundled, no runtime fetches
- TypeScript strict mode: no `any`, no type assertions without justification

## Development workflow

- Propose plan first for non-trivial changes
- Run `pnpm verify` after every milestone
- Prefer maintainable architecture over clever hacks
- Keep design clean and premium but restrained — no gamification overload

## Deployment

- **Production URL**: https://harec.dg12.cz
- **Platform**: Cloudflare Pages
- **Deploy**: `pnpm build` then Cloudflare CLI or git-based deploy
