import { test, expect } from '@playwright/test';

test('@smoke should load Rolnopol homepage with correct page title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Rolnopol/);
});

test('@smoke should render Rolnopol application with visible page content', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Rolnopol/);

  await expect(page.locator('body')).toBeVisible();
});
