import { Page } from "playwright";

export class login{

readonly page:Page;


private userName='//input[@id="user-name"]';
private passWord='//input[@id="password"]';
private loginButton='//input[@id="login-button"]';

constructor(page:Page)
{
    this.page=page;
}



  async navigateTo() {
      
      await this.page.goto('https://www.saucedemo.com/');
      await this.page.waitForLoadState('load');
      const title = await this.page.title();
      console.log('Page Title:', title); 
    
  }
     


async enterUsernameAndPassword(username:string,password:string)
{ 
  
  await this.page.fill(this.userName,username);
  await this.page.fill(this.passWord,password);
  
}

async clickLoginButton()
{
    await this.page.click(this.loginButton);     
}

}