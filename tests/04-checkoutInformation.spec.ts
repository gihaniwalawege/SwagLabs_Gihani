import {test,expect,BrowserContext, Page } from "playwright/test";
import { initializePages, login1, prod,checkoutInfo } from './sharedPages';


test('Test:Verify Page Title of Checkout Information page', async ({ page }) => {

   await checkoutInfo.getTitle();


});

test('Test:Enter checkout information and verify the mandatory behaviour of firstname, lastname and postalcode', async ({ page }) => {

   await checkoutInfo.enterCheckoutInfo();


});

test('Test:Navigate to checkout overview page', async ({ page }) => {

    await checkoutInfo.navigateToCheckoutOverviewPage();
    
 
 
 });