import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('FUOMO Navigation', () => {
  test('Scenario 3 - Find Creators navigation works', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    await expect(homePage.findCreatorsLink).toBeVisible();

    await homePage.findCreatorsLink.click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page).not.toHaveURL(/fe-stage\.fuomo\.id\/?$/);
  });
});