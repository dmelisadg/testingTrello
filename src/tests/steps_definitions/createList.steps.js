const { When, Then} = require('@wdio/cucumber-framework');
const createElements = require('../../pageObjects/pages/create_elements.page');

When('I create a new list on a board', async function () {
  this.listNewName = await createElements.addNewList(0);
});

Then('I should see the new list on the board', async function () {
  const lastChildElement = await createElements.lastChildElement('list');
  const textList = await lastChildElement.getText();
  expect(textList).to.equal(this.listNewName);
});