describe('First protractor test',function(){
    it('Get title', function(){
        browser.get('https://angularjs.org/');
        expect(browser.getTitle).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    })
})