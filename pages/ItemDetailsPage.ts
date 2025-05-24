import { Page, Locator } from '@playwright/test';

export class ItemDetailsPage {
    name: Locator;
    description: Locator;
    price: Locator;
    addToCartButton: Locator;

    constructor(public page: Page) {
        this.name = page.locator('.inventory_details_name');
        this.description = page.locator('.inventory_details_desc');
        this.price = page.locator('.inventory_details_price');
        this.addToCartButton = page.locator('button');
    }

    async getName() {
        return this.name.textContent();
    }

    async getPrice() {
        return this.price.textContent();
    }
}
