export class CartPage {
  constructor(public page) {}

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async removeItem(product: string) {
    await this.page.click(`[data-test="remove-${product}"]`);
  }
}
