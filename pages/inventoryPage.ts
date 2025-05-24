import { Locator } from "@playwright/test";

export class InventoryPage {
  constructor(public page) {}

  async addToCart(product: string) {
    await this.page.click(`[data-test="add-to-cart-${product}"]`);
  }

  async sortBy(option: string) {
    await this.page.selectOption('[data-test="product-sort-container"]', option);
  }

  async logout() {
    await this.page.click('#react-burger-menu-btn');
    await this.page.click('[data-test="logout-sidebar-link"]');
  }
  
  getFirstItem() {
    return this.page.locator('.inventory_item').first();
  }

  getItemName(item: Locator) {
    return item.locator('.inventory_item_name');
  }

  getItemPrice(item: Locator) {
    return item.locator('.inventory_item_price');
  }

  async clickItemName(item: Locator) {
    await item.locator('.inventory_item_name').click();
  }
}
