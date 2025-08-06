# Playwright UI Tests

This project is a UI test automation suite built with **Playwright** and **TypeScript**, using the **Page Object Model** structure.

---

## Features Covered

### **Login page**
- Valid login redirects to the inventory page  
- Invalid login displays proper error messages  

### **Inventory page**
- Adding an item to the cart updates the badge  
- Removing an item updates the badge  

### **Checkout process**
- Filling in user information  
- Completing the checkout process  
- Verifying the success message  

### **Uses Playwright test runner with:**
- Page Object Model for reusable components  
- Built-in HTML reports and trace debugging  

---

## Tech stack

- Playwright
- TypeScript
- Node.js
- Page Object Model

---

```text
playwright-ui-tests/
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   └── checkout.spec.ts
│
├── CartProcess.ts
├── playwright.config.ts
├── package.json
└── README.md

--- 

## How to run

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
