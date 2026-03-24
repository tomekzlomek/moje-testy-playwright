import { Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly locator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locator = page.locator("test");

  }

  async clickLocator(): Promise<void> {
    await this.locator.click();
  }

}