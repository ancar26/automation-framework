import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page){}

    async goto() {
        await this.page.goto('/auth/login');
    }

    async login(username: string, password: string) {
        await this.page.fill('[data-test="email"]', username);
        await this.page.fill('[data-test="password"]', password);
        await this.page.click('[data-test="login-submit"]');
    }   
}