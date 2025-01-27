import {test,expect,BrowserContext, Page } from "playwright/test";
import { initializePages, login1, prod,checkoutInfo } from './sharedPages';


test('Get Page Title of Checkout Information page', async ({ page }) => {

   await checkoutInfo.getTitle();


});

test('Enter checkout information', async ({ page }) => {

   await checkoutInfo.enterCheckoutInfo();


});

test('Navigate to checkout overview page', async ({ page }) => {

    await checkoutInfo.navigateToCheckoutOverviewPage();
    
 
 
 });