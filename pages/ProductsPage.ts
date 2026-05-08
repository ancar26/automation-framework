import { Page } from '@playwright/test'

export class ProductsPage {
    constructor(private page: Page){}

    async goto() {
        await this.page.goto('/');
        await this.page.waitForSelector('[data-test^="product-"]');
    }
    
    // this assumes every product has a description
    async gotoProduct(productId: string) {
        await this.page.goto(`/product/${productId}`)
        await this.page.waitForSelector('[data-test="product-description"]');
    }

     getElement(dataTest: string) {
       return this.page.locator(`[data-test='${dataTest}']`);
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

    async getFilteredProducts(){
        await this.page.locator('[data-test="filter_completed"]').isVisible();
    }

    async clickButton(buttonIdentificator: string){
        await this.page.locator(`[data-test="${buttonIdentificator}"]`).click();
    }

    async fillInputField(dataTest: string, someText: string) {
       return await this.page.locator(`[data-test='${dataTest}']`).fill(someText)
    }
}