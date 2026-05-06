import { test, expect } from '../fixtures/index';

test.use({ storageState: { cookies: [], origins: [] } });

test('do login', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(process.env.USER_EMAIL as string, process.env.USER_PASSWORD as string);
  await expect(page).toHaveURL('/account');
});