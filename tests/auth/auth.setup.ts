import { test as setup } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../../.auth/user.json');

setup('auth', async ({page})=> {
    await page.goto('/auth/login');
    await page.fill('[data-test="email"]', process.env.USER_EMAIL as string);
    await page.fill('[data-test="password"]', process.env.USER_PASSWORD as string)
    await page.click('[data-test="login-submit"]')

    await page.waitForURL('/account')
    await page.context().storageState({path: authFile}) 
})