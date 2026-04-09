# Project
Build a mobile-first web portal for preparing for the Czech radiotelegraphy / amateur radio exam.

# Product goals
The app must do more than drill questions. It must teach the underlying concepts in a structured way and then connect them to exam practice.

# Users
Primary user: one adult learner studying mostly on phone in short sessions.
Secondary use: quick revision before exam.

# Core principles
- Mobile-first UX
- Fast, clean, and simple
- No AI-slop design
- Short lessons, clear navigation
- Every lesson connects to related test questions
- Progress is saved locally
- Works well as an installable PWA
- Czech language UI by default
- Accessibility and readable typography matter

# MVP features
1. Topic-based structured course
2. Question drilling by category
3. Timed mock exam
4. Mistakes review
5. Glossary and formula sheet
6. Dashboard with progress and weak areas

# Tech preferences
- TypeScript
- React
- Tailwind
- Local persistence first
- No backend unless necessary

# Content architecture
Each lesson contains:
- title
- learning objective
- short explanation
- practical example
- common confusion
- 3 to 7 key points
- 3 comprehension questions
- links to related exam questions

Each question contains:
- id
- category
- wording
- answer choices
- correct answer
- explanation
- related lesson ids
- difficulty
- tags

# UX requirements
- thumb-friendly mobile navigation
- one-handed use
- large tap targets
- progress visible everywhere
- quick resume where user left off

# Development workflow
- Propose plan first
- Then scaffold project
- Then implement incrementally
- After each milestone, run tests and summarize what changed
- Prefer maintainable architecture over clever hacks
