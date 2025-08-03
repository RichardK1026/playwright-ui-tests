import { Page } from '@playwright/test';

export class LoginPage 
{
    readonly page: Page;

    // Declare locators
    readonly usernameField;
    readonly passwordField;
    readonly loginButton;
    readonly errorMessage;

    constructor(page: Page)
    {
        this.page = page;

        // Locators
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]')
    }

    // Go to the testing website
    async gotoLoginPage()
    {
        await this.page.goto('/');
    }

    async login(username: string, password: string)
    {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}