// tests/logout.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LogoutPage } from '../pages/logout';
import { TestData } from '../utils/test-data';

test('verify logout functionality', async ({ page }) => {
  // Initialize pages
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  // Navigate to application
  await page.goto('/');

  // Login first
  await loginPage.login(TestData.login.email, TestData.login.password);

  // Verify successful login
  await expect(page.locator('text=Profile')).toBeVisible();

  // Perform logout
  await logoutPage.logout();

  // Verify successful logout
  await expect(page.locator('text=Verify account')).toBeVisible();
});