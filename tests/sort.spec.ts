import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';

test('Sort items A-Z and High to Low', async ({ page }) => {
  await page.goto('/inventory.html');
  const inventory = new InventoryPage(page);

  await inventory.sortBy('az');
  await expect(page.locator('.inventory_item_name').first()).toContainText('Sauce Labs Backpack');

  await inventory.sortBy('hilo');
  await expect(page.locator('.inventory_item_price').first()).toContainText('$49.99');
});
