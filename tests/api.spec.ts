import {test, expect} from '../fixtures/index'
test('get product by id', async ({ request }) => {
    // request 1 - ia lista
    const listResponse = await request.get('https://api.practicesoftwaretesting.com/products');
    const listBody = await listResponse.json();
    const firstId = listBody.data[0].id;
  
    // request 2 - ia produsul după id
    const productResponse = await request.get(`https://api.practicesoftwaretesting.com/products/${firstId}`);
    const productBody = await productResponse.json();
  
    expect(productResponse.status()).toBe(200);
    expect(productBody.name).toBeTruthy();
  });