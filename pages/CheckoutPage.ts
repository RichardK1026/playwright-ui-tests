import { Page, expect } from '@playwright/test';

export class CheckoutPage
{
    readonly page: Page;

    readonly cartButton;
    readonly checkoutButton;
    readonly firstNameCheckout;
    readonly lastNameCheckout;
    readonly zipCodeCheckout;
    readonly continueButton;
    readonly finishButton;
    readonly orderConfirmation;
    readonly backHomeButton;
    readonly checkoutError;

    constructor(page: Page)
    {
        this.page = page;

        // Locators
        this.cartButton = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameCheckout = page.getByPlaceholder('First Name');
        this.lastNameCheckout = page.getByPlaceholder('Last Name');
        this.zipCodeCheckout = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.orderConfirmation = page.locator('[data-test="complete-header"]');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
        this.checkoutError = page.locator('[data-test="error"]');
    }

    async shoppingCartCheckout()
    {
        await this.cartButton.click();
        await this.checkoutButton.click();
    }

    async fillCheckoutInfo(firstName: string, lastName: string, zipCode: string)
    {
        await this.firstNameCheckout.fill(firstName);
        await this.lastNameCheckout.fill(lastName);
        await this.zipCodeCheckout.fill(zipCode);
    }

    async clickContinue()
    {
        await this.continueButton.click();
    }

    async clickFinish()
    {
        await this.finishButton.click();
    }

    async IsOrderConfirmed()
    {
        await expect(this.orderConfirmation).toContainText('Thank you for your order!');
    }

    async clickBackHome()
    {
        await this.backHomeButton.click();
    }
}