import {test,expect,BrowserContext, Page } from "playwright/test";
import { initializePages, login1, prod,cart1,Checkoutoverviewpage, checkoutCompletePage } from './sharedPages';
import { checkoutComplete } from "../pages/checkoutComplete.page";

test('checkout complete page title', async ({ page }) => {

   await checkoutCompletePage.getTitle();


});
test('Verify success messages', async ({ page }) => {

    await checkoutCompletePage.verifySuccessMessage();
 
 
 });
 test('Navigate back to home', async ({ page }) => {

    await checkoutCompletePage.navigateToHomePage();
 
 
 });
 
