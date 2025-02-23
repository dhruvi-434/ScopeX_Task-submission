// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { TestData } from '../utils/test-data';

test('verify login with valid credentials', async ({ page }) => {
  // Create instance of LoginPage with only page parameter
  const loginPage = new LoginPage(page);

  // Navigate to login page
  await page.goto('/');

  // Perform login
  await loginPage.login(TestData.login.email, TestData.login.password);

  // Verify successful login
  await expect(page.locator('text=Profile')).toBeVisible();
});