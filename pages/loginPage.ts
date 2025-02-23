// pages/loginPage.ts
import { Page } from '@playwright/test';
import { Logger } from '../utils/logger';

export class LoginPage {
  private logger: Logger;
  page: any;

  constructor(page: Page) {
    this.page = page;
    this.logger = new Logger();  // Initialize logger inside constructor
  }

  async login(email: string, password: string) {
    try {
      this.logger.info('Starting login process');
      
      // Wait for login form to be visible
      await this.page.waitForSelector('input[placeholder="Enter here"]');
      
      // Fill login form
      // await this.page.waitForSelector('div:has-text("Email") + input[placeholder="Enter here"]');
      await this.page.fill('div:has-text("Email") + input[placeholder="Enter here"]', email);
      await this.page.fill('div:has-text("Password") + input[placeholder="Enter here"]', password);      
      // Take screenshot before clicking login
      await this.page.screenshot({ path: 'screenshots/before-login.png' });
      
      // Click login button
      await this.page.click('button:text("Log In")');
      
      // // Wait for successful login
      // await this.page.waitForSelector('text=Profile');
      
      this.logger.info('Login successful');
    } catch (error) {
      this.logger.error(`Login failed: ${error}`);
      throw error;
    }
  }
}