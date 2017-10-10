// var p = require('relative-path');
// var homePage = require(p('../pages/home_page'));

module.exports = function () {
    this.Given(/^As a room77 user I launch room77 app$/, function (callback) {
        browser.get("https://www.room77.com");
        browser.waitForAngular();
        callback();
    });

    this.When(/^I search hotels with "([^"]*)"$/, function (city, callback) {
        homePage.enterSearch(city).then(function () {
            homePage.clickSearch().then(function () {
                callback();
            })
        })
    });

    this.Then(/^I should see "([^"]*)" alert$/, function (loc, callback) {
        alert = browser.switchTo().alert().accept().then(callback());
    });
};
