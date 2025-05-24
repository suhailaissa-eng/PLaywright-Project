import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { ItemDetailsPage } from '../pages/ItemDetailsPage';

test('Item details page shows correct info', async ({ page }) => {
    await page.goto('/inventory.html');

    const inventoryPage = new InventoryPage(page);
    const itemDetailsPage = new ItemDetailsPage(page);

    const firstItem = inventoryPage.getFirstItem();
    const itemName = await inventoryPage.getItemName(firstItem).innerText();
    const itemPrice = await inventoryPage.getItemPrice(firstItem).innerText();

    await inventoryPage.clickItemName(firstItem);

    await expect(page).toHaveURL(/inventory-item.html/);
    await expect(itemDetailsPage.name).toHaveText(itemName);
    await expect(itemDetailsPage.price).toHaveText(itemPrice);
    await expect(itemDetailsPage.description).toBeVisible();
});
