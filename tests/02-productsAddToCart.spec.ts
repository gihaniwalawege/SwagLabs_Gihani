import {test,expect,BrowserContext, Page } from "playwright/test";
import { initializePages, login1, prod } from './sharedPages';


test('Test:Click Product Sort Dropdown and verify whether the products are sorted in descending order correctly', async ({ page }) => {

await prod.clickSortDropDown();


});

test('Test:Add Three Lowest Price products to Cart and Verify Add to Cart button name changed to Remove', async ({ page }) => {
    await prod.AddItemsToCart();
    
    
 
});

test('Test:Navigate to Cart Page', async ({ page }) => {
        await prod.NavigateToCart();
});    
