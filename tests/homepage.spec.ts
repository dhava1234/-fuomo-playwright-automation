import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('FUOMO Homepage', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('Scenario 1 - Homepage loads successfully', async ({ page }) => {
    const response = await page.goto('/');

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    const title = await page.title();

    expect(title.trim()).not.toBe('');
  });

  test('Scenario 2 - Main UI elements are visible', async () => {
    await expect(homePage.logo).toBeVisible();

    await expect(homePage.navigation).toBeVisible();

    await expect(homePage.heroSection).toBeVisible();

    await expect(homePage.footer).toBeVisible();
  });
});