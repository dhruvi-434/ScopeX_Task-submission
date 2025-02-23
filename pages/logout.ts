// pages/logout.ts
import { Page } from '@playwright/test';
import { Logger } from '../utils/logger';

export class LogoutPage {
  private logger: Logger;
  page: any;

  constructor(page: Page) {
    this.page = page;
    this.logger = new Logger();
  }

  async logout() {
    try {
      this.logger.info('Starting logout process');
      
      // Click profile icon
      await this.page.click('a[role="tab"]:has-text("Profile")')
    //   await this.page.screenshot({ path: 'screenshots/profile-clicked.png' });
      
      // Click logout button and wait for dialog
      await this.page.click('div:has-text("Log out")')
      //   await this.page.screenshot({ path: 'screenshots/before-logout.png' });
      
      // Click OK on confirmation dialog
      await this.page.click('role=button[name=/ok/i]')
            
    //   // Wait for redirect to verify account page
    //   await this.page.waitForSelector('text=Verify account');
      
      this.logger.info('Logout successful');
    } catch (error) {
      this.logger.error(`Logout failed: ${error}`);
      throw error;
    }
  }
}