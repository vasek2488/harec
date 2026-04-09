# Agent Safety Rules

Mandatory for any agent working in this repository.

## 1. Preserve by default
Do not delete, move, rename, or overwrite files unless explicitly requested.

## 2. Protected paths
- `docs/**`
- `content/**` (exam-specific data — changes need justification)
- any `*.md` file not created during the current task

## 3. File Impact Summary before structural changes
Before any structural change, output a summary:
1. Create
2. Modify
3. Move/Rename
4. Delete

If Delete or Move/Rename is non-empty, stop and wait for approval.

## 4. Dangerous commands are forbidden by default
No `git clean`, `git reset --hard`, recursive delete, force checkout, etc.

## 5. Prefer additive edits
Add or edit over delete. If unsure, leave the file and report uncertainty.

## 6. Fork boundary respect
Never hardcode exam-specific content in `src/`. All exam content lives in `content/`.

## 7. Verification before completion
Run `pnpm verify` before claiming any task complete. Evidence before assertions.
