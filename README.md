# FUOMO Playwright Automation

Automated end-to-end testing project for the FUOMO staging homepage using Playwright and TypeScript.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Chromium

## Test Environment

Default Base URL:

https://fe-stage.fuomo.id

The Base URL can be overridden using the `BASE_URL` environment variable.

## Project Structure

```text
fuomo-playwright-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   └── HomePage.ts
├── tests/
│   ├── homepage.spec.ts
│   └── navigation.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md