let loginPage= function(){

    let UserNane=element(by.cssContainingText('.placeholder','YOUR EMAIL'));
    let Password=element(by.cssContainingText('.placeholder','YOUR PASSWORD'));
    let LoginButton=element(by.cssContainingText('.type','submit'));
    //let url=("https://angular-templates.io/login");
    this.getURL = function(url){
    browser.get(url);
    };
    this.enterUsername= function(uname){
        UserNane.sendKeys(uname);
    };
    this.enterPassword= function(pass){
        Password.sendKeys(pass);
    };
    this.clickbutton=function(){
        LoginButton.click();
    };
};
module.exports= new loginPage();
