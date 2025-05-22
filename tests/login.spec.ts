import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import dotenv from 'dotenv';
dotenv.config();

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const username = process.env.SAUCEDEMO_USER!;
  const password = process.env.SAUCEDEMO_PASS!;

  await loginPage.login(username, password);

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
