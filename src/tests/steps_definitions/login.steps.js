const loginPage = require('./../../pageObjects/pages/login.page');
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the Trello Sign in Page', async function () {
  await loginPage.openTrello();
});

When('I sign in with {string} credentials', async function (credentialType) {
  let username, password;
  if (credentialType === 'valid') {
    username = loginPage.credentials().username;
    password = loginPage.credentials().password;
  } else {
    username = loginPage.randomCredentials().username;
    password = loginPage.randomCredentials().password;
  }

  if (credentialType === 'valid') {
    this.titleWelcome = await loginPage.loginToTrello(username, password);
  } else {
    this.errorMessage = await loginPage.loginToTrello(username, password);
  }
});

Then('I should see {string}', async function (expectedMessage) {
  let expectedTitle;
  if (expectedMessage === 'Test MelisaDG (testmelisadg)') {
    expectedTitle = (await loginPage.titleMessages()).successLogin;
    expect(this.titleWelcome).to.equal(expectedTitle);
  } else {
    expectedTitle = (await loginPage.titleMessages()).failedLogin;
    expect(this.errorMessage).to.equal(expectedTitle);
  }
});