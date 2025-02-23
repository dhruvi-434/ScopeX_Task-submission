// pages/addingrecipient.ts
import { Page } from '@playwright/test';
import { Logger } from '../utils/logger';

export class AddingRecipient {
  private logger: Logger;
  page: any;

  constructor(page: Page) {
    this.page = page;
    this.logger = new Logger();
  }

  // Method to navigate to Recipients page
  async navigateToRecipients() {
    try {
      this.logger.info('Navigating to Recipients page');
      await this.page.click('a:has-text("Recipients")')
            await this.page.waitForSelector('text=Add recipient');
      // await this.page.screenshot({ path: 'screenshots/recipients-page.png' });
    } catch (error) {
      this.logger.error(`Failed to navigate to Recipients page: ${error}`);
      throw error;
    }
  }

  // Method to add a new recipient
  async addRecipient(nickname: string, ifscCode: string, accountNumber: string) {
    try {
      this.logger.info('Starting add recipient process');
      
      // Click Add recipient button
      await this.page.click('role=button[name="Add recipient"]')
      
      // Wait for the form to be visible
      await this.page.waitForSelector('text=Recipient nick name');
      
      // // Take screenshot before filling form
      // await this.page.screenshot({ path: 'screenshots/add-recipient-form.png' });
      
      // Fill recipient details
      await this.page.fill('input:below(:text("Recipient nick name"))', nickname);
      await this.page.fill('input:below(:text("IFSC Code"))', ifscCode);
      await this.page.fill('input[placeholder="Ex: 754521xxxx"]', accountNumber);
      
      // Take screenshot after filling form
      await this.page.screenshot({ path: 'screenshots/filled-recipient-form.png' });
      
      // Click Add recipient button to submit
      await this.page.click('role=button[name="Add recipient"]')
      
      // Wait for success or validation message
      await this.page.waitForSelector(`text=${nickname}`, { timeout: 5000 });
      
      this.logger.info('Recipient added successfully');
    } catch (error) {
      this.logger.error(`Failed to add recipient: ${error}`);
      throw error;
    }
  }
  
  }
