# Frontend Projects — React conversion

This folder contains 19 separate React apps. Each project keeps its original CSS and image assets; its interface and interactions now render through React components.

## Install once

Open a terminal in this folder and run:

```bash
npm install
```

## Run a project

Run one project at a time with its workspace name:

```bash
npm run dev --workspace=404-page
```

Replace `404-page` with another workspace name from the list:

- `404-page` — 404 PAGE
- `bookmark-saver` — BOOKMARK SAVER
- `coming-soon-ui` — COMING SOON UI
- `contact-form` — CONTACT FORM
- `contact-page` — CONTACT PAGE
- `currency-converter` — CURRENCY CONVERTER
- `drag-and-drop` — DRAG AND DROP
- `expense-tracker` — EXPENSE TRACKER
- `form-validator` — FORM VALIDATOR
- `github-finder` — GITHUB FINDER
- `newsletter-signup` — NEWSLETTER SIGNUP
- `password-generator` — PASSWORD GENERATOR
- `pricing-cards` — PRICING CARDS
- `quiz-game` — QUIZ GAME
- `random-color-pallete-generater` — RANDOM COLOR  PALLETE  GENERATER
- `recipe-finder` — RECIPE FINDER
- `scroll-progress` — SCROLL PROGRESS
- `team-members-showcase` — TEAM MEMBERS SHOWCASE
- `todo-app` — TODO APP

Each app also has `build` and `preview` scripts. For example: `npm run build --workspace=todo-app`.

The original `script.js` files are left in place for comparison; the running apps use the React components in `src/App.jsx`.

The GitHub Finder, Currency Converter, and Recipe Finder use their original public APIs and need an internet connection while running.
