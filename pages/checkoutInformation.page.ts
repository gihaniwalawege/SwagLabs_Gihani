import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class CheckoutInformation{

readonly page:Page;

constructor(page:Page)
{
   this.page=page;
}

async getTitle()
{
    const checkoutInfoPagetitle = await this.page.title();
    console.log('Page Title:', checkoutInfoPagetitle);
    console.log('Page URL:', this.page.url());
}

async enterCheckoutInfo()
{
   
   await this.page.locator('//input[@id="continue"]').click();
   const errorTXT=await this.page.locator('//div[@class="error-message-container error"]').textContent();
   expect(errorTXT).toBe('Error: First Name is required');
   await this.page.reload();

   await this.page.locator('//input[@id="first-name"]').fill('Gihani');
   await  this.page.locator('//input[@id="postal-code"]').fill('80650');
   await this.page.locator('//input[@id="continue"]').click();
   const errorTXT2=await this.page.locator('//div[@class="error-message-container error"]').textContent();
   expect(errorTXT2).toBe('Error: Last Name is required');
   await this.page.reload();

   await this.page.locator('//input[@id="first-name"]').fill('Gihani');
   await this.page.locator('//input[@id="last-name"]').fill('Walawege');
   await  this.page.locator('//input[@id="postal-code"]').clear();
   await this.page.locator('//input[@id="continue"]').click();
   const errorTXT3=await this.page.locator('//div[@class="error-message-container error"]').textContent();
   expect(errorTXT3).toBe('Error: Postal Code is required');
   await this.page.reload();

   await this.page.locator('//input[@id="first-name"]').fill('Gihani');
   await this.page.locator('//input[@id="last-name"]').fill('Walawege');
   await  this.page.locator('//input[@id="postal-code"]').fill('80650');

   

}

async navigateToCheckoutOverviewPage()
{
    

        await this.page.locator('//input[@id="continue"]').click();
        await this.page.waitForLoadState('domcontentloaded');
        
    
}
}