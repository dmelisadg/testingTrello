const loginPage = require('./../../pageObjects/pages/login.page');
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the Trello Sign in Page', async function () {
  await loginPage.openTrello();
});

When('I sign in with {string} credentials', async function (credentialType) {
  const username = (credentialType === 'valid') ? loginPage.credentials().username : loginPage.randomCredentials().username;
  const password = (credentialType === 'valid') ? loginPage.credentials().password : loginPage.randomCredentials().password;
  if (credentialType === 'valid') {
    this.titleWelcome = await loginPage.loginToTrello(username, password);
  } else {
    this.errorMessage = await loginPage.loginToTrello(username, password);
  }
});

Then('I should see {string}', async function (expectedMessage) {
  const expectedTitle = (expectedMessage === 'Test MelisaDG (testmelisadg)') ? (await loginPage.titleMessages()).successLogin : (await loginPage.titleMessages()).failedLogin;
  if (expectedMessage === 'Test MelisaDG (testmelisadg)') {
    expect(this.titleWelcome).to.equal(expectedTitle);
  } else {
    expect(this.errorMessage).to.equal(expectedTitle);
  }
});