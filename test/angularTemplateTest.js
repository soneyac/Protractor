let loginPage=require('../pages/loginPage');
describe("angulartemplatetesting",()=>{
    it("logintest",()=>{
        loginPage.getURL("https://angular-templates.io/login");
        browser.sleep(2000);
        loginPage.enterUsername("soneychandra@gmail.com");
        loginPage.enterPassword("KL11h+414");
        loginPage.clickbutton();
        
    });
});