import { Page } from '@playwright/test';

export class InventoryPage
{
    readonly page: Page

    readonly addBackpackToCartButton
    readonly cartBadge
    readonly cartLink
    readonly removeBackpackButton

    constructor(page: Page)
    {
        this.page = page

        // Locators
        this.addBackpackToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cartBadge = page.locator('.shopping_cart_badge') 
        this.cartLink = page.locator('.shopping_cart_link')
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
    }

    async addBackpackToCart()
    {
        await this.addBackpackToCartButton.click()
    }

    async removeBackpackFromCart()
    {
        await this.removeBackpackButton.click()
    }
}