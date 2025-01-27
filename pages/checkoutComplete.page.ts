import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class checkoutComplete{

readonly page:Page;

constructor(page:Page)
{
   this.page=page;
}

async getTitle()
{
    const checkoutcompletePagetitle =  this.page.title();
    console.log('Page Title:', checkoutcompletePagetitle);
    console.log('Page URL:', this.page.url());
}

async verifySuccessMessage()
{
    const thankyouMessage=await this.page.locator('//div[@id="checkout_complete_container"]//h2[@class="complete-header"]').textContent();
    const confirmMessage=await this.page.locator('//div[@class="complete-text"]').textContent();
    expect(thankyouMessage).toBe('Thank you for your order!');
    expect(confirmMessage).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
}

async navigateToHomePage()
{
    


    await this.page.waitForTimeout(2000);
    
    const backToHome = this.page.locator('//button[@id="back-to-products"]');
   
    await backToHome.click();

    
    //try {
   //     await this.page.waitForNavigation({ waitUntil: 'load', timeout: 10000 });
   // } catch (error) {
   //     console.error('Error occurred while waiting for navigation:', error);
  //  }
}
}