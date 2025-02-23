// tests/addingrecipient.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AddingRecipient } from '../pages/addingrecipient';

test.describe('Adding Recipient Tests', () => {
  // Test data can be moved to test-data.ts file later
  const testData = {
    email: 'test@example.com',      // Replace with your test email
    password: 'testPassword123',     // Replace with your test password
    recipient: {
      nickname: 'John Test',
      ifscCode: 'KKBK0000123',
      accountNumber: '7545210001'
    }
  };

  test('should successfully add a new recipient', async ({ page }) => {
    // Initialize pages
    const loginPage = new LoginPage(page);
    const addingRecipient = new AddingRecipient(page);

    try {
      // Step 1: Login
      await loginPage.login(testData.email, testData.password);
      
      // Step 2: Navigate to Recipients page
      await addingRecipient.navigateToRecipients();
      
      // Step 3: Add a new recipient
      await addingRecipient.addRecipient(
        testData.recipient.nickname,
        testData.recipient.ifscCode,
        testData.recipient.accountNumber
      );
      
    //   // Take final screenshot
    //   await page.screenshot({ path: 'screenshots/recipient-added.png' });
      
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });

  test('should validate required fields when adding recipient', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addingRecipient = new AddingRecipient(page);

    await loginPage.login(testData.email, testData.password);
    await addingRecipient.navigateToRecipients();
    
    // Click Add recipient without filling any details
    await page.click('text=Add recipient');
    await page.click('button:text("Add recipient")');
    
    // Verify validation messages
    const validationMsg = await page.getByText('Please fill in all required fields').isVisible();
    expect(validationMsg).toBeTruthy();
  });
});