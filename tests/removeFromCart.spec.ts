import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';

test('Remove item from cart', async ({ page }) => {
  await page.goto('/inventory.html');
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await inventory.addToCart('sauce-labs-bike-light');
  await cart.openCart();
  await cart.removeItem('sauce-labs-bike-light');
  await expect(page.locator('.cart_item')).toHaveCount(0);
});
