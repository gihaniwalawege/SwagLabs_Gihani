import {test,expect, BrowserContext, Page } from "playwright/test";
import { login } from '../pages/login.page';
import { products } from "../pages/products.page";
import { initializePages, login1, prod } from './sharedPages';


let page: Page;
let context: BrowserContext;


test.beforeAll(async ({ browser }) => {
    
    context = await browser.newContext();
    page = await context.newPage();
    await initializePages(page);
    

  });

  test.afterEach(async ({ page }) => {
    await page.close(); 
  });


test('Test1 login', async ({ page }) => {

await login1.navigateTo();
await login1.enterUsernameAndPassword('standard_user','secret_sauce');
await login1.clickLoginButton();


});











