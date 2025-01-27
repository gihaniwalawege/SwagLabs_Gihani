import {test,expect,BrowserContext, Page } from "playwright/test";
import { initializePages, login1, prod,cart1,Checkoutoverviewpage, checkoutCompletePage } from './sharedPages';
import { checkoutComplete } from "../pages/checkoutComplete.page";

test('Test:Verify checkout complete page title', async ({ page }) => {

   await checkoutCompletePage.getTitle();


});
test('Test:Verify success messages after placing the order successfully', async ({ page }) => {

    await checkoutCompletePage.verifySuccessMessage();
 
 
 });
 test('Test:Navigate back to home', async ({ page }) => {

    await checkoutCompletePage.navigateToHomePage();
 
 
 });
 
