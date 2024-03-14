const { When, Then} = require('@wdio/cucumber-framework');
const createElements = require('../../pageObjects/pages/create_elements.page');

When('I create a new card on the first list of the board', async function () {
    this.cardNewName = await createElements.addNewCardToBoard(0, 0);
  });
  
Then('I should see the new card in the first list', async function () {
    const lastCardName = await createElements.lastCardInAList(0);
    expect(lastCardName).to.equal(this.cardNewName);
  });