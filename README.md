# FUOMO Playwright Automation

Automated end-to-end testing project for the FUOMO staging homepage using Playwright and TypeScript.

## Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript
- **Runtime:** Node.js
- **CI/CD:** GitHub Actions

## Test Environment

- **Default Base URL:** `https://fe-stage.fuomo.id`
- The Base URL can be overridden using the `BASE_URL` environment variable.

## Project Structure

```text
fuomo-playwright-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml       # GitHub Actions CI pipeline
├── pages/
│   └── HomePage.ts              # Page Object Model
├── tests/
│   ├── homepage.spec.ts         # Homepage test scenarios
│   └── navigation.spec.ts       # Navigation test scenario
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies and scripts
├── package-lock.json
├── .env.example                 # Environment variable example
├── .gitignore
└── README.md