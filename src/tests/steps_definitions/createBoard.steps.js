const { Given, When, Then} = require('@wdio/cucumber-framework');
const loginPage = require('../../pageObjects/pages/login.page');
const createElements = require('../../pageObjects/pages/create_elements.page');

Given('I am logged into my Trello account', async function () {
    await loginPage.openTrello();
    await loginPage.loginToTrello(
      loginPage.credentials().username,
      loginPage.credentials().password
    );
  });
  Then('I logged out to session', async function () {
    await createElements.endSession();
  })
  
  When('I create a new board with a random name', async function () {
    this.boardName = createElements.randomName();
    await createElements.createBoard(this.boardName);
  });
  
  Then('I should see the new board', async function () {
    const boardNameText = await createElements.boardName();
    assert.equal(boardNameText, this.boardName, 'Board name should not be null')
  });

  When('I attempt to create a new board with an empty title', async function () {
    await createElements.createBoard(' ');
  });

  Then('I should see an error message indicating that the board title is required', async function () {
    const boardNameText = await createElements.boardName();
    assert.equal(boardNameText, 'Board title is required', 'Error message should indicate that the board title is required');
  });
