import {test, expect} from '../fixtures/index';

test('get products', async ({productsPage, page})=> {

    await productsPage.goto();
  const productsCount=  await productsPage.getProductsCount();

 expect(productsCount).toBeGreaterThan(0);


})