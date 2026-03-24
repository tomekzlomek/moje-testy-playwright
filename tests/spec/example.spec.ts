import { test, expect } from '@playwright/test';
import { MainPage} from '../pages/MainPage';
import { INPUT } from '../utils/MainPageData';


test.describe("Test group", () => {

  test("Test one", async ({page}) => {

    const mainPage = new MainPage(page);

    test.step("Test step 1", async () => {
      await mainPage.clickLocator();
    });

    test.step("Test step 2", async () => {
      await expect(mainPage.locator).toHaveText(INPUT.TEXT1);
    });
  });
});
