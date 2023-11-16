import { Locator, Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async optionSelector(typeOfName: string, to: string) {
        const test = this.page.locator(`//div//input[@placeholder="${typeOfName}"]`);
        await test.fill(to);
    }
}