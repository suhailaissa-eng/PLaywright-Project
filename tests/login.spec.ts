import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { login } from './helpers/login';
import dotenv from 'dotenv';
dotenv.config();

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const username = process.env.SAUCEDEMO_USER!;
  const password = process.env.SAUCEDEMO_PASS!;

  await loginPage.login(username, password);

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


test.skip('Login with valid credentials uses helper', async ({ page }) => {
    await login(page);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


