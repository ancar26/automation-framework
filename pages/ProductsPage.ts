import { Page } from '@playwright/test'

export class ProductsPage {
    constructor(private page: Page){}

    async goto() {
        await this.page.goto('/');
        await this.page.waitForSelector('[data-test^="product-"]');

    }
    
    async getProductsCount(): Promise<number> {
       return await this.page.locator('[data-test^="product-"]').count()
    }
}