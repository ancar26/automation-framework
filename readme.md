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

pages/ - Page Object Models
fixtures/ - Custom test fixtures
auth/ - Auth setup (runs once before all tests)
tests/ - Test files

How it works

Auth runs once via auth.setup.ts and saves the session
Credentials are loaded from .env (not committed)
fixtures/index.ts extends Playwright's test with custom fixtures
Tests import from fixtures instead of @playwright/test

# Automation Plan:

1. Critical user journeys :

Auth: register, login, logout, forgot password
Product discovery: search, filter, sort, pagination
Product detail: view, compare, add to favorites
Cart: add/remove/update quantity
Checkout: end-to-end flow

2. High risk areas — complexity & integrations

Checkout — payment, inventory, order confirmation
Search + filters combinate — edge cases multe
Cart calculations — price × quantity, discounts, totals

3. Non-functional:

Localization — different languages, date formats, currency
Responsiveness — mobile vs desktop
Performance — page load times

4. what to automate, and what not to automate?

- to automate flows repetitive, regression, happy paths, API layer
- not to automate: exploratory, UI pixel-perfect checks, one-off scenarios
