import { test, expect } from '../../fixtures/index';

test('can add a product to cart and see checkout summary fields', async ({ page, productsPage }) => {
  await productsPage.goto();

  await expect(page.locator('[data-test="nav-home"]')).toBeVisible();
  await expect(page.locator('[data-test^="product-"]').first()).toBeVisible();

  await page.locator('[data-test^="product-"]').first().click();
  await expect(page.locator('[data-test="product-description"]')).toBeVisible();

  await page.locator('[data-test="increase-quantity"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();

  await expect(page.locator('[data-test="line-price"]')).toBeVisible();
  await expect(page.locator('[data-test="cart-total"]')).toBeVisible();
  await expect(page.locator('[data-test="proceed-1"]')).toBeVisible();
});

test('contact form shows validation for short message', async ({ page, productsPage }) => {
  await productsPage.goto();
  await page.locator('[data-test="nav-contact"]').click();

  await expect(page.locator('[data-test="subject"]')).toBeVisible();
  await expect(page.locator('[data-test="message"]')).toBeVisible();

  await page.locator('[data-test="subject"]').selectOption('warranty');
  await page.locator('[data-test="message"]').fill('too short');
  await page.locator('[data-test="contact-submit"]').click();

  await expect(page.getByText('Message must be minimal 50')).toBeVisible();
});