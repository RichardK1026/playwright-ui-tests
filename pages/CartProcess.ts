import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CheckoutPage } from '../pages/CheckoutPage';

export class CartProcess
{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    /**
     * This method encapsulates the steps to process the cart.
     * It includes logging in and adding an item to the cart.
     */
    async cartProcessSteps()
    {
        // Grab the necessary page objects
        const login = new LoginPage(this.page);
        const inventoryPage = new InventoryPage(this.page);
        const checkoutPage = new CheckoutPage(this.page);

        // Login process
        await login.gotoLoginPage();
        await login.login('standard_user', 'secret_sauce');
        
        // Add backpack to the cart
        await inventoryPage.addBackpackToCart();

        // Return pages for chaining
        return { inventoryPage, checkoutPage };
    }
}