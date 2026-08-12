# FUOMO Playwright Automation

Automation testing untuk FUOMO staging (https://fe-stage.fuomo.id) menggunakan **Playwright + TypeScript + Page Object Model + GitHub Actions**.

## Setup
npm ci
npx playwright install

## Run Tests
npm test              # headless (desktop + mobile)
npm run test:headed   # browser terlihat
npm run test:ui       # UI mode

## Report
npm run report        # buka HTML report

## Struktur
- `tests/homepage.spec.ts` — Scenario 1 & 2 (page load + main UI)
- `tests/navigation.spec.ts` — Scenario 3 (navigation)
- `pages/HomePage.ts` — Page Object Model

## Environment Variable
Lihat `.env.example`. Default: `BASE_URL=https://fe-stage.fuomo.id`

## CI/CD
Test berjalan otomatis via GitHub Actions (`.github/workflows/playwright.yml`) pada setiap push/PR, dengan retry, JUnit + HTML report, dan screenshot on-failure.