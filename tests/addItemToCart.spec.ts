import { test, expect } from '@playwright/test';
import { login } from './helpers/login';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';

test('Add item to cart and verify', async ({ page }) => {
  await login(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await inventory.addToCart('sauce-labs-backpack');
  await cart.openCart();
  await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
});
