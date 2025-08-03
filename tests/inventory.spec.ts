import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'

test.describe("Inventory Tests", () => 
{
    test("Add backpack to cart shows badge", async ({page}) => 
    {
        // Create objects for login and inventory page process
        const login = new LoginPage(page)
        const inventoryPage = new InventoryPage(page)

        // Login process
        await login.gotoLoginPage()
        await login.login('standard_user', 'secret_sauce')

        // Add backpack to the cart
        await inventoryPage.addBackpackToCart()

        // Check if badge count shows
        await expect(inventoryPage.cartBadge).toHaveCount(1)
    })
    test("Remove backpack from the cart", async ({page}) =>
    {
        // Create objects for login and inventory page process
        const login = new LoginPage(page)
        const inventoryPage = new InventoryPage(page)

        // Login process
        await login.gotoLoginPage()
        await login.login('standard_user', 'secret_sauce')

        // Add backpack to the cart
        await inventoryPage.addBackpackToCart()
        await expect(inventoryPage.cartBadge).toHaveCount(1)

        // Remove backpack from cart
        await inventoryPage.removeBackpackFromCart()
        await expect(inventoryPage.cartBadge).toHaveCount(0)
    })
})