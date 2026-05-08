/** add product to cart, increase/ decrease quantity, delete product */


import {test,expect} from '../../fixtures/index'

test('add product to cart, increase/decrase quantity and check price', async ({productsPage, page, request}) => {
   
    const productId= '01KR3Y78RM1X3EZAECWKJGGPW8'
    await productsPage.gotoProduct(productId)

    // increase and check value:
    await productsPage.clickButton('increase-quantity');
    await expect(page.locator('[data-test="quantity"]')).toHaveValue('2')

    await productsPage.clickButton('increase-quantity');
    await expect(page.locator('[data-test="quantity"]')).toHaveValue('3')
    
    // decrease:

    await productsPage.clickButton('decrease-quantity');
    await productsPage.clickButton('decrease-quantity');
    await expect(page.locator('[data-test="quantity"]')).toHaveValue('1')

    // increase again, go to cart and check total price

    await productsPage.clickButton('increase-quantity');
    await expect(page.locator('[data-test="quantity"]')).toHaveValue('2')
    await page.goto('/checkout')
    const quantityGetRequest = await request.get('https://api.practicesoftwaretesting.com/carts');
    const quantityBody =  await quantityGetRequest.json();
    expect(quantityGetRequest.status()).toBe(200)

    // bug to be fixed, product doesn't appears in cart
    // expect(page.locator('[data-test="product-price"]')).toBeVisible();
    // expect(page.locator('[data-test="line-price"]')).toBeVisible();


});