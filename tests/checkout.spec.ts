import { test, expect } from '@playwright/test';
import { CartProcess } from '../pages/CartProcess';

test.describe("Checkout Tests", async () => 
{
    test("Checkout item in cart", async ({page}) => 
    {
        const cartProcess = new CartProcess(page);
        const { checkoutPage } = await cartProcess.cartProcessSteps();

        // Navigate to checkout
        await checkoutPage.shoppingCartCheckout();
        
        // Fill in info and press continue
        await checkoutPage.fillCheckoutInfo('Richard', 'Kim', '12345');
        await checkoutPage.clickContinue();

        // Click finish and go back to home page
        await checkoutPage.clickFinish();
        checkoutPage.IsOrderConfirmed();
        
        await checkoutPage.clickBackHome();
    });

    test("Show error when first name is missing", async ({ page }) => 
    {
        const cartProcess = new CartProcess(page);
        const { checkoutPage } = await cartProcess.cartProcessSteps();

        await checkoutPage.shoppingCartCheckout();

        // Fill only last name and zip, leave first name blank
        await checkoutPage.lastNameCheckout.fill('Kim');
        await checkoutPage.zipCodeCheckout.fill('12345');

        await checkoutPage.continueButton.click();

        // Assert error message
        await expect(checkoutPage.checkoutError).toContainText('First Name is required');
    });
});