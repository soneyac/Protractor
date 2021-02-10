describe("Suite",function(){
    let firstTextBox;
    let secondTextBox;
    let GoButton;
    
    beforeEach(()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
        firstTextBox=element(by.model("first"));
        secondTextBox=element(by.model("second"));
        GoButton= element(by.css("[ng-click='doAddition()']"));
    });
    it("Add", function(){;
       firstTextBox.sendKeys("1");
        element(by.cssContainingText('option', '+')).click();
        secondTextBox.sendKeys("5");
        GoButton.click();
        browser.sleep(2000);
        let result=element(by.css('[class="ng-binding"]')).getText();
        expect(result).toEqual('6');
        
        
    });
    it('subtraction',function(){
       firstTextBox.sendKeys('9');
        element(by.cssContainingText('option', '-')).click();
        secondTextBox.sendKeys("5");
        GoButton.click();
        browser.sleep(2000);
        let result=element(by.css('[class="ng-binding"]')).getText();
        expect(result).toEqual('4');
    });
    it('multiplication',function(){
        firstTextBox.sendKeys('5');
         element(by.cssContainingText('option', '*')).click();
         secondTextBox.sendKeys("2");
         GoButton.click();
         browser.sleep(2000);
         let result=element(by.css('[class="ng-binding"]')).getText();
         expect(result).toEqual('10');
     });
     it('division',function(){
        firstTextBox.sendKeys('10');
         element(by.cssContainingText('option', '/')).click();
         secondTextBox.sendKeys("5");
         GoButton.click();
         browser.sleep(2000);
         let result=element(by.css('[class="ng-binding"]')).getText();
         expect(result).toEqual('2');
     });
     it('modulus',function(){
        firstTextBox.sendKeys('9');
         element(by.cssContainingText('option', '%')).click();
         secondTextBox.sendKeys("5");
         GoButton.click();
         browser.sleep(2000);
         let result=element(by.css('[class="ng-binding"]')).getText();
         expect(result).toEqual('4');
     });

});