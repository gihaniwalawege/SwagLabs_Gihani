import { Page } from 'playwright';
import { login } from '../pages/login.page';
import { products } from "../pages/products.page";
import { cart } from '../pages/cart.page';
import { CheckoutInformation } from '../pages/checkoutInformation.page';
import { checkoutOverview } from '../pages/checkoutOverview.page';
import { checkoutComplete } from '../pages/checkoutComplete.page';

export let login1: login;
export let prod: products;
export let cart1:cart;
export let checkoutInfo:CheckoutInformation;
export let Checkoutoverviewpage:checkoutOverview;
export let checkoutCompletePage:checkoutComplete;

export const initializePages = async (page: Page) => {
  login1 = new login(page);
  prod = new products(page);
  cart1=new cart(page);
  checkoutInfo=new CheckoutInformation(page);
  Checkoutoverviewpage=new checkoutOverview(page);
  checkoutCompletePage=new checkoutComplete(page);
};


