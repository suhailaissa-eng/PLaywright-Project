import { test, expect } from '@playwright/test';

test('Checkout flow', async ({ page }) => {
  
  await page.goto('/inventory.html');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'Test');
  await page.fill('[data-test="lastName"]', 'User');
  await page.fill('[data-test="postalCode"]', '12345');

  
  const continueButton = page.locator('[data-test="continue"]');
  await continueButton.waitFor({ state: 'visible' });
  await continueButton.click();

  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
  
});


