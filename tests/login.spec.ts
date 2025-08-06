import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => 
{
    test('Valid login redirects to inventory page', async ({page}) =>
    {
        // Create a new object (login) 
        const login = new LoginPage(page);

        // Goes to page and fills username and password fields
        await login.gotoLoginPage();
        await login.login('standard_user', 'secret_sauce');
        
        // Should be in inventory page after login 
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('Invalid login gives error', async ({page}) => 
    {
        // Create a new object (login) 
        const login = new LoginPage(page);
        
        // Goes to page and fills username and password fields
        await login.gotoLoginPage();
        await login.login('wrong_username', 'wrong_password');
        
        // Should give error message with specified message
        await expect(login.errorMessage).toBeVisible();
        await expect(login.errorMessage).toHaveText(
            "Epic sadface: Username and password do not match any user in this service"
        );
    });
});