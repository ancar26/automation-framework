import { test, expect } from '../../fixtures/index';

test.describe('products, search, filters', () => {
    test('search for a product that should exist', async ({ productsPage }) => {
        await productsPage.goto();
        const searchForString = 'bolt'


        await productsPage.searchFor(searchForString);

        const foundString = await productsPage.getSearchCaption();
        const resultsFound = await productsPage.getResultsCount()
        expect(foundString).toContain(searchForString)
        expect(resultsFound).toBeTruthy();
    })
    test('search for a product that shouldnt exist', async ({productsPage }) => {
        await productsPage.goto()
        const nonExistentQuery = 'qwertyui'

        await productsPage.searchFor(nonExistentQuery);
        const foundString = await productsPage.getSearchCaption();
        expect(foundString).toContain(nonExistentQuery)

        // check no actual results:
        const resultsCount = await productsPage.getResultsCount();
        expect(resultsCount).toContain('0');

        //timing issue found, so searchFor function has to be adapted, we wait for API /search to finish
    })
})