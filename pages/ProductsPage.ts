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

    async searchFor(queryString: string) {
        await this.page.locator('[data-test="search-query"]').fill(queryString);
        await Promise.all([
          this.page.waitForResponse('**/products**'),
          this.page.keyboard.press('Enter'),
        ]);
    }

    async getSearchCaption(): Promise<string> {
       return await this.page.locator('[data-test="search-caption"]').textContent() || '';
    }

    async getResultsCount(): Promise<string> {
        return await this.page.locator('[data-testid="search-result-count"]').textContent() || "";
    }

    async selectFilterByCategory(categoryName: string) {
        await this.page.getByLabel(categoryName).click();
    }

    async selectFilterByBrand(){

    }

    async getFilteredProducts(){
        await this.page.locator('[data-test="filter_completed"]').isVisible();
    }
}