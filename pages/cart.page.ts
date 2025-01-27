import { Locator, Page } from "playwright";
import { products } from "./products.page";

export class cart{

readonly page:Page;
public cartproductDetails: any[] = [];
public finalCartProductDetails: any[] =[];
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
 
async getProductsInCart() {
   
  
  const cartItems = await this.page.locator('.cart_item'); // Get all cart items

  const count = await cartItems.count();
  console.log(`Found ${count} products in cart.`);

  for (let i = 0; i < count; i++) {
      const cartItem = cartItems.nth(i);

      const price = await cartItem.locator('.inventory_item_price').textContent();
      const productName = await cartItem.locator('.inventory_item_name').textContent();
      const productDescription = await cartItem.locator('.inventory_item_desc').textContent();

      console.log(`Product #${i + 1}: ${productName}, ${productDescription}, ${price}`);
  
      this.cartproductDetails.push({
        productName,
        productDescription,
        price
    });
}
return this.cartproductDetails;
}

async getProductsFromCart()
{
  const productsSortedListCart = await this.page.locator('//div[@class="inventory_item_price"]');

  let minPriceValue = Infinity;  // Initialize with Infinity to find the minimum
  let minPriceLocator: Locator;
  
  const productCount = await productsSortedListCart.count();
  
  for (let i = 0; i < productCount; i++) {
      const priceLocator = productsSortedListCart.nth(i);
    
      const priceText = await priceLocator.textContent();
      const priceValue = parseFloat(priceText.replace('$', '').trim());
    
      if (priceValue < minPriceValue) {
          minPriceValue = priceValue;
          minPriceLocator = priceLocator;
      }
  }
  
  if (minPriceLocator) {
      const addToCartButtonLocator = minPriceLocator.locator('xpath=../button');
      await addToCartButtonLocator.click();
      console.log('Product with lowest price added to cart successfully');
  } else {
      console.log('No products found');
  }
      }


async getFinalProductsInCart() {
   
  
        const finalcartItems = this.page.locator('.cart_item'); 
        
        const count = await finalcartItems.count();
        console.log(`Found ${count} products in cart.`);
      
        for (let i = 0; i < count; i++) {
            const finalcartItem = finalcartItems.nth(i);
      
            const finalprice = await finalcartItem.locator('.inventory_item_price').textContent();
            const finalproductName = await finalcartItem.locator('.inventory_item_name').textContent();
            const finalproductDescription = await finalcartItem.locator('.inventory_item_desc').textContent();
      
            console.log(`Product #${i + 1}: ${finalproductName}, ${finalproductDescription}, ${finalprice}`);
        
            this.finalCartProductDetails.push({
              finalproductName,
              finalproductDescription,
              finalprice
          });
      }
      return this.finalCartProductDetails;
      }  


async navigateToCheckoutInformationPage()
{

    await this.page.locator('//button[@id="checkout"]').click();
    await this.page.waitForLoadState('domcontentloaded');
}




}


