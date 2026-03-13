import { test, expect } from '@playwright/test';

test.describe('@smoke Smoke tests for key pages', () => {
  test('should load the login page (login.html) successfully', async ({ page }) => {
    const response = await page.goto('/login.html');

    // Page should load successfully (HTTP 2xx) and have visible content
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(/\/login\.html$/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('should load the register page (register.html) successfully', async ({ page }) => {
    const response = await page.goto('/register.html');

    // Page should load successfully (HTTP 2xx) and have visible content
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(/\/register\.html$/);
    await expect(page.locator('body')).toBeVisible();
  });
});
