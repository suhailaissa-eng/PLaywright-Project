import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';

test.describe('Add to Cart', () => {

  let inventory: InventoryPage;
  let cart: CartPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/inventory.html');
    inventory = new InventoryPage(page);
    cart = new CartPage(page);
  });


  test('Add item to cart and verify', async ({ page }) => {
    await inventory.addToCart('sauce-labs-backpack');
    await cart.openCart();
    await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
  });

  test('Add multiple items to cart and verify', async ({ page }) => {
  await inventory.addToCart('sauce-labs-backpack');
  await inventory.addToCart('sauce-labs-bike-light'); 
  await inventory.addToCart('sauce-labs-fleece-jacket');
  await cart.openCart();
  await expect(page.locator('.cart_item', { hasText: 'Sauce Labs Backpack' })).toBeVisible();
  await expect(page.locator('.cart_item', { hasText: 'Sauce Labs Bike Light' })).toBeVisible();
  await expect(page.locator('.cart_item', { hasText: 'Sauce Labs Fleece Jacket' })).toBeVisible();
});

});


