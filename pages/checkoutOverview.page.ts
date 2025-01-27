import { Locator, Page } from "playwright";
import { products } from "./products.page";
import { expect } from "playwright/test";


export class checkoutOverview{
    readonly page:Page;
    
    public finalOverviewProductDetails: any[]=[];
    constructor(page:Page)
    {
       this.page=page;
    }
    
    async getTitle()
    {
        const cartPagetitle = await this.page.title();
        console.log('Page Title:', cartPagetitle);
        console.log('Page URL:', this.page.url());
    }
         



async getFinalProductsInCart() {
   
  
    const overviewItems = await this.page.locator('.cart_item');
  
    const count = await overviewItems.count();
    console.log(`Found ${count} products in cart.`);
  
    for (let i = 0; i < count; i++) {
        const finalcartItem = overviewItems.nth(i);
  
        const overviewPageprice = await finalcartItem.locator('.inventory_item_price').textContent();
        const overviewPageproductName = await finalcartItem.locator('.inventory_item_name').textContent();
        const overviewPageproductDescription = await finalcartItem.locator('.inventory_item_desc').textContent();
  
        console.log(`Product #${i + 1}: ${overviewPageproductName}, ${overviewPageproductDescription}, ${overviewPageprice}`);
    
        this.finalOverviewProductDetails.push({
          overviewPageproductName,
          overviewPageproductDescription,
          overviewPageprice
      });
  }
  return this.finalOverviewProductDetails;
  }  


async verifyTotalPrice()
{
    let totalPrice = 0;
    for(let i=0;i<this.finalOverviewProductDetails.length;i++)
    {
        const price=parseFloat(this.finalOverviewProductDetails[i].overviewPageprice.replace('$', '').trim());
        totalPrice += price;
    }
    
    const actualTotalPrice = parseFloat((await this.page.locator('//div[@class="summary_subtotal_label"]').textContent()).replace('Item total: $', '').trim());
    expect(totalPrice).toBe(actualTotalPrice);

    const tax=parseFloat((await this.page.locator('//div[@class="summary_tax_label"]').textContent()).replace('Item total: $', '').trim());
    const grandTotal=parseFloat((await this.page.locator('//div[@class="summary_total_label"]').textContent()).replace('Item total: $', '').trim());
    expect(actualTotalPrice+tax).toBe(grandTotal);
    await this.page.evaluate(() => {window.scrollTo(0, document.body.scrollHeight);});
}

async navigateToCheckoutCompletePage()
{
    await this.page.waitForTimeout(2000);
    
    const finishButton = this.page.locator('//div[@class="cart_footer"]//button[@id="finish"]');
    
    
    const buttonText = await finishButton.textContent();
    console.log(buttonText);

    
    await finishButton.click();

    
    try {
        await this.page.waitForNavigation({ waitUntil: 'load', timeout: 10000 });  // 10 seconds timeout
    } catch (error) {
        console.error('Error occurred while waiting for navigation:', error);
    }
}

}