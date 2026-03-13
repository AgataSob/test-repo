import { test, expect } from '@playwright/test';

test.describe('@smoke Smoke tests for key pages', () => {
  test('should load the login page (login.html) successfully', async ({ page }) => {
    const response = await page.goto('/login.html');

    // Page should load successfully (HTTP 2xx) and have visible content
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(/\/login\.html$/);
    await expect(page.locator('body')).toBeVisible();

    // Unique assertion: login page should include a login subtitle element
    await expect(page.getByTestId('login-subtitle')).toBeVisible();
  });

  test('should load the register page (register.html) successfully', async ({ page }) => {
    const response = await page.goto('/register.html');

    // Page should load successfully (HTTP 2xx) and have visible content
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(/\/register\.html$/);
    await expect(page.locator('body')).toBeVisible();

    // Unique assertion: register page should include a register subtitle element
    await expect(page.getByTestId('register-subtitle')).toBeVisible();
  });

  test('should load the docs page (docs.html) successfully', async ({ page }) => {
    const response = await page.goto('/docs.html');

    // Page should load successfully (HTTP 2xx) and have visible content
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(/\/docs\.html$/);
    await expect(page.locator('body')).toBeVisible();

    // Unique assertion: docs page should include the page header
    await expect(page.getByTestId('docs-header-title-col')).toBeVisible();
  });

  test('should load the swagger page (swagger.html) successfully', async ({ page }) => {
    const response = await page.goto('/swagger.html');

    // Page should load successfully (HTTP 2xx) and have visible content
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(/\/swagger\.html$/);
    await expect(page.locator('body')).toBeVisible();

    // Unique assertion: swagger page should include the embedded swagger UI iframe
    const swaggerFrame = page.locator('#swagger-frame');
    await expect(swaggerFrame).toBeVisible();
    await expect(swaggerFrame).toHaveAttribute('src', /swagger\/index\.html$/);
  });
});
