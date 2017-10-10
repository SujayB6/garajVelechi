var EC = protractor.ExpectedConditions;
var homePage = function () {

    this.enterSearch = function(city) {
        return element(by.id("autocomplete")).sendKeys(city);
    };

    this.clickSearch = function() {
        var searchButton = element(by.css("[value='Search for Places to Stay']"));
        browser.wait(EC.elementToBeClickable(searchButton), 5000);
        return searchButton.click();
    };
};
module.exports = new homePage();