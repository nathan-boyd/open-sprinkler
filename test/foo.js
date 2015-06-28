var assert = require('assert')

var phantom = require('phantom')
describe('browser', function(){
    it('should test browsers', function(){
        phantom.create(function (ph) {
            ph.createPage(function (page) {
                page.open("http://www.google.com", function (status) {
                    console.log("opened google? ", status);
                    page.evaluate(function () { return document.title; }, function (result) {
                        console.log('Page title is ' + result);
                        ph.exit();git
                    });
                });
            });
        });
    })
});

describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});
