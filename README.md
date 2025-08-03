# Playwright UI Tests

This project is a UI test automation suite built with **Playwright** and **TypeScript**, using the **Page Object Model (POM)** structure.

---

## What this project includes

- Automated tests for the login page (valid and invalid logins)
- Automated tests for the inventory page:
  - Adding an item to the cart
  - Removing an item from the cart
- Organized test structure using the Page Object Model
- HTML reporting and trace debugging built into Playwright

---

## Tech stack

- Playwright
- TypeScript
- Node.js
- Page Object Model

---

## Folder structure
playwright-ui-tests/
├── pages/
│ ├── LoginPage.ts
│ ├── InventoryPage.ts
│
├── tests/
│ ├── login.spec.ts
│ ├── inventory.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md

--- 

## Running the tests

Install dependencies:
```bash
npm install
npx playwright install

Run all tests:
npx playwright test

Run a specific test file:
npx playwright test tests/login.spec.ts

View an HTML report:
npx playwright show-report
