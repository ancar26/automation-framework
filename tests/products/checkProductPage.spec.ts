import {test, expect} from '../../fixtures/index';

test.beforeEach(async ({productsPage, request}) => {
    const response = await request.get('https://api.practicesoftwaretesting.com/products')
    const body = await response.json();
    const firstProductId = body.data[0].id

    await productsPage.gotoProduct(firstProductId)
})

test('open up a product and check elements', async ({ productsPage, request}) => {
    // check product details/ properties
    await expect(productsPage.getElement('product-name')).toBeVisible();
    await expect(productsPage.getElement('co2-rating-badge')).toBeVisible();
    await expect(productsPage.getElement('decrease-quantity')).toBeVisible();
    await expect(productsPage.getElement('increase-quantity')).toBeVisible();
    await expect(productsPage.getElement('add-to-cart')).toBeVisible();
    await expect(productsPage.getElement('add-to-favorites')).toBeVisible();
    await expect(productsPage.getElement('add-to-compare')).toBeVisible();
    //etc
})
test('add product in card: checkout', async({productsPage, request,page}) => {
    await productsPage.clickButton('add-to-cart');
    await expect(page.locator('.toast-container')).toBeVisible()
    await expect(page.locator('.toast-container')).toContainText(' Product added to shopping cart. ')
    await productsPage.clickButton('nav-cart');
    await expect(page).toHaveURL('/checkout')
    // check product is added:
    await expect(productsPage.getElement('product-title')).toBeVisible();

    // now i can add some API check to validate same product ID i was on got added in the cart

    //  const responseProductAddedInCart = await request.get(`https://api.practicesoftwaretesting.com/carts/${cartItemId}`)
    // expect(responseProductAddedInCart.status()).toBe(200);
 })
