<!-- Written by Euron Code after each task. It is rewritten automatically: put your own rules in
     another file in .euron/rules/. -->

# Learned in this project

- Lint / type check: `cd "D:/Projects/teddypups-website-clone" && npx tsc --noEmit 2>&1 | head -30` works here (passed 1x, last 2026-11-24). Use it to verify changes.
- Lint / type check: `cd D:/Projects/teddypups-website-clone && npx tsc --noEmit src/components/header.tsx 2>&1 | head -30` works here (passed 1x, last 2026-11-24). Use it to verify changes.
- Build: `npm run build 2>&1` works here (passed 3x, last 2026-11-24). Use it to verify changes.
- Build: `npm run build` works here (passed 2x, last 2026-11-24). Use it to verify changes.

## Security (from .euron/security/assessment.md)
- This code base has had: html inserted without escaping (xss) (SEC050). Render text, or sanitise the HTML (DOMPurify / bleach) before inserting it. Do not add more; fix the existing ones when you touch those files.
