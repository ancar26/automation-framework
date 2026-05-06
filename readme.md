# Automation Framework with Playwright

A personal project for practicing test automation on [practicesoftwaretesting.com](https://practicesoftwaretesting.com/).

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Getting Started

Install dependencies:
```bash
npm i
npm run test
```

Project structure:

pages/       - Page Object Models
fixtures/    - Custom test fixtures
auth/        - Auth setup (runs once before all tests)
tests/       - Test files

How it works


Auth runs once via auth.setup.ts and saves the session
Credentials are loaded from .env (not committed)
fixtures/index.ts extends Playwright's test with custom fixtures
Tests import from fixtures instead of @playwright/test