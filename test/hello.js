var Browser = require('zombie'),
    browser = new Browser();

describe('Loads pages', function(){

    it('Google.com', function(done){

        browser.visit("http://www.google.com", function () {
            browser.assert.status(200);
            done();
        });
    });

});
