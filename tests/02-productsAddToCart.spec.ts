import {test,expect,BrowserContext, Page } from "playwright/test";
import { initializePages, login1, prod } from './sharedPages';


test('2-Click Product Sort Dropdown and verify whether the products are sorted in ascending order correctly', async ({ page }) => {

await prod.clickSortDropDown();


});

test('3-Add Three Highest Price products to Cart', async ({ page }) => {
    await prod.AddItemsToCart();
    
    
 
});

test('4-Navigate to Cart Page', async ({ page }) => {
        await prod.NavigateToCart();
});    
