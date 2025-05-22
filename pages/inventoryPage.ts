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
}
