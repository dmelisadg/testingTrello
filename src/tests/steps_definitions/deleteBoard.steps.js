const {When, Then} = require('@wdio/cucumber-framework');
const createElements = require('../../pageObjects/pages/create_elements.page');

When('I delete the first board', async function () {
    this.boardAfterClose = await createElements.deleteBoard();
  });
  
  Then('the board should be closed', function () {
    expect(this.boardAfterClose).to.include(' is closed.');
  });