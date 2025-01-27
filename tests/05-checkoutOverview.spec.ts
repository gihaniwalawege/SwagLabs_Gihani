import {test,expect,BrowserContext, Page } from "playwright/test";
import { initializePages, login1, prod,cart1,Checkoutoverviewpage } from './sharedPages';

test('Test:Verify Page Title of Checkout Overview page', async ({ page }) => {

   await Checkoutoverviewpage.getTitle();


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


test('Test:Verify the product details in checkout overview page are equal to product details in cart', async ({ page}) => {
    await cart1.getFinalProductsInCart();
    
    await Checkoutoverviewpage.getFinalProductsInCart();
    
   

    const productDetailsinCartPage = cart1.finalCartProductDetails;
    const productDetailsinOverviewPage = Checkoutoverviewpage.finalOverviewProductDetails;
    
    
        const areProductsEqual = compareProductDetails(productDetailsinCartPage, productDetailsinOverviewPage);
    
        
        if (areProductsEqual) {
            console.log('The product details match between cart and checkout overview page.');
        } else {
            console.log('The product details do not match between cart and overview page.');
        }
    
        
        expect(areProductsEqual).toBe(true);    
});

test('Test:Verify the total price in checkout overview page is equal to sum of prices of each products ', async ({ page }) => {

    await Checkoutoverviewpage.verifyTotalPrice();
 
 
 });

 test('Test:Navigate to checkout complete page ', async ({ page }) => {

    await Checkoutoverviewpage.navigateToCheckoutCompletePage();
 
 
 });