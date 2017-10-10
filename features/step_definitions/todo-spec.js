var todospec =  function() {
    this.Given(/^I go to "([^"]*)"$/, function (url, callback) {
             // Write code here that turns the phrase above into concrete actions
             console.log("This is the URL "+url);
             browser.get(url).then(callback);
           });
    this.When(/^I add "([^"]*)" in the task field$/, function (stringInDoubleQuotes, callback) {
           // Write code here that turns the phrase above into concrete actions
           var textBoxElem = element(by.model('todoList.todoText'));
           var scrollIntoView = function () {
             arguments[0].scrollIntoView();
           }
           browser.executeScript(scrollIntoView, textBoxElem);
           element(by.model('todoList.todoText')).sendKeys(stringInDoubleQuotes);
           element(by.css('[value="add"]')).click();
           callback(null, 'pending');;
         });

         this.When(/^I click the add button$/, function (callback) {
           // Write code here that turns the phrase above into concrete actions
           var todoList = element.all(by.repeater('todo in todoList.todos'));
               expect(todoList.count()).toEqual(3);
               expect(todoList.get(2).getText()).toEqual('write first protractor test');
               callback(null, 'pending');;
         });

         this.Then(/^I should see my new task in the list$/, function (callback) {
           // Write code here that turns the phrase above into concrete actions
           // You wrote your first test, cross it off the list
           todoList.get(2).element(by.css('input')).click();
           var completedAmount = element.all(by.css('.done-true'));
           expect(completedAmount.count()).toEqual(2);
           callback(null, 'pending');;
         });
};
module.exports = todospec;
