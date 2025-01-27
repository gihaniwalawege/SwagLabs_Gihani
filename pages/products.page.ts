import { Page } from "playwright";
import { expect } from "playwright/test";

export class products{

readonly page:Page;
private selectDropDown='//select[@class="product_sort_container"]';
public productDetails: any[] = [];
constructor(page:Page)
{
    this.page=page;
}

async clickSortDropDown()
{await this.page.selectOption(this.selectDropDown, { value: 'hilo' });

const productsSortedList = await this.page.locator('//div[@id="inventory_container"]//div[@class="inventory_item"]//div[@class="inventory_item_price"]').all();

const firstPriceText = await productsSortedList[0].textContent();
let firstPriceValue = parseFloat(firstPriceText.replace('$', '').trim());

let isDescending = true;  // Set to true initially for descending order

for (let i = 1; i < productsSortedList.length; i++) {
    const priceText = await productsSortedList[i].textContent();
    const priceValue = parseFloat(priceText.replace('$', '').trim());

    // Check if the current price is greater than the previous one (for descending order)
    if (priceValue > firstPriceValue) {
        isDescending = false;  // Set to false if not descending
        break;
    }

    firstPriceValue = priceValue;  // Update the previous price for comparison
}

if (isDescending) {
    console.log('Products are sorted in descending order correctly');
} else {
    console.log('Products are not sorted in descending order');
}

expect(isDescending).toBe(true);
    }
    


async AddItemsToCart()
{
    const productsSortedList = await this.page.locator('//div[@id="inventory_container"]//div[@class="inventory_item"]//div[@class="inventory_item_price"]');
    this.productDetails = [];
    for (let i = await productsSortedList.count()-1 ; i >= await productsSortedList.count() - 3; i--) {

        const priceLocator = productsSortedList.nth(i);
        const addToCartButtonLocator = priceLocator.locator('xpath=../button');
        await addToCartButtonLocator.click();
        const price=await productsSortedList.nth(i).textContent();
        const productName=await productsSortedList.nth(i).locator('xpath=../../..').locator('//div[@class="inventory_item_name "]').textContent();
        const productDescription=await productsSortedList.nth(i).locator('xpath=../../..').locator('//div[@class="inventory_item_desc"]').textContent();
        this.productDetails.push({
            productName,
            productDescription,
            price
        });
        //console.log('Product Name: ' + productName + '\nProduct Description: ' + productDescription + '\nPrice: ' + price);
        
        const buttonName=await productsSortedList.nth(i).locator('xpath=../../..').locator('//button[@class="btn btn_secondary btn_small btn_inventory "]').textContent();
        await expect(buttonName).toContain('Remove');
    }
    console.log('Products are added to cart successfully');
    console.log('Add to Cart button text of added items are changed as Remove successfully');
    await this.processProductDetails(this.productDetails);
    return this.productDetails;

}
async processProductDetails(productDetails:any) {
    for (const detail of this.productDetails) {
        console.log(`Processing product:
            Name: ${detail.productName}
            Description: ${detail.productDescription}
            Price: ${detail.price}`);
        
 
    }


}

 
async NavigateToCart()
{
    
    
    await this.page.locator('//*[@id="shopping_cart_container"]').click();
    await this.page.waitForLoadState('domcontentloaded');

    
}

}