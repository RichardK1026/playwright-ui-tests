import { test, expect } from '@playwright/test';
import { CartProcess } from '../pages/CartProcess';

test.describe("Inventory Tests", () => 
{
    test("Add backpack to cart shows badge", async ({page}) => 
    {
        const cartProcess = new CartProcess(page);
        const { inventoryPage } = await cartProcess.cartProcessSteps();

        // Check if badge count shows
        await expect(inventoryPage.cartBadge).toHaveCount(1);
    });
    
    test("Remove backpack from the cart", async ({page}) =>
    {
        const cartProcess = new CartProcess(page);
        const { inventoryPage } = await cartProcess.cartProcessSteps();

        // Check if backpack is in cart
        await expect(inventoryPage.cartBadge).toHaveCount(1);

        // Remove backpack from cart
        await inventoryPage.removeBackpackFromCart();
        await expect(inventoryPage.cartBadge).toHaveCount(0);
    });
});