import {test, expect} from '../../fixtures/index';

test.describe('verify filters', () => {
    test('filter by sustainability filter option and check product results', async ({productsPage})=>{
        await productsPage.goto();
        const ecoFilter = ' Show only eco-friendly products'
        await productsPage.selectFilterByCategory(ecoFilter)

        const productCount = await productsPage.getProductsCount()
        expect(productCount).toBeGreaterThan(0);

    })

    test('filter by a brand filter and check product results', async ({productsPage})=>{
        await productsPage.goto();
        const brandFilter = ' ForgeFlex Tools'
        await productsPage.selectFilterByCategory(brandFilter)

        const productCount = await productsPage.getProductsCount()
        expect(productCount).toBeGreaterThan(0);

    })
})