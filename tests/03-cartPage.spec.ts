import {test,expect,BrowserContext, Page } from "playwright/test";
import { initializePages, login1, prod,cart1 } from './sharedPages';


test('Test:Verify the page title and URL of Cart Page', async ({ page}) => {
    

  await cart1.getTitle();
    }); 


function compareProductDetails(array1: any[], array2: any[]): boolean {
        
if (array1.length !== array2.length) {
    console.log("Arrays have different lengths");
    return false;
}
    
        
for (let i = 0; i < array1.length; i++) {
    const product1 = array1[i];
    const product2 = array2[i];
    
            
    if (
    product1.productName !== product2.productName ||
    product1.productDescription !== product2.productDescription ||
    product1.price !== product2.price
    ) {
    console.log(`Product mismatch at index ${i}:`);
    console.log(`Product 1:`, product1);
    console.log(`Product 2:`, product2);
    return false;
    }
    }
    
    return true; 
    }
test('Test:Verify whether the product details in the cart match with product details in Products page', async ({ page}) => {

   await cart1.getProductsInCart();
   console.log(cart1.cartproductDetails);
   console.log(prod.productDetails);
   const productDetailsinProductPage = prod.productDetails;
    const productDetailsinCartPage = cart1.cartproductDetails;


    const areProductsEqual = compareProductDetails(productDetailsinProductPage, productDetailsinCartPage);

    
    if (areProductsEqual) {
        console.log('The product details match between cart and product page.');
    } else {
        console.log('The product details do not match between cart and product page.');
    }

    
    expect(areProductsEqual).toBe(true);

});
     
test('Test:Remove the cheapest item from cart', async ({page}) => {

    await cart1.removecheapestItemToCart();
     
    }); 


test('Test:Navigate to CheckoutInformation Page', async ({page}) => {

await cart1.navigateToCheckoutInformationPage();
}); 


