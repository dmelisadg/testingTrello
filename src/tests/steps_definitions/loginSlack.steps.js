const { Given, When, Then} = require('@wdio/cucumber-framework');
const loginPage = require('../../pageObjects/pages/login.page');


Given('I am on the Sign-in Trello page', async function () {
  await loginPage.openTrello();
});

Given('I login with Slack account {string}', async function (slackAccount) {
  await loginPage.loginWithSlack(slackAccount);
});

Then('I should see the {string} button', async function (buttonText) {
  const button = await loginPage.signInGmailButton(buttonText);
  expect(button).to.equal(buttonText);
});

When('I sign in with registered Gmail credentials', async function () {
  this.titleWelcome = await loginPage.loginSlackFromGmail(
    loginPage.credentials().username,
    loginPage.credentials().password
);
});

Then('I should see the title board', async function () {
  const titleMessage = await loginPage.titleMessages();
  expect(this.titleWelcome).to.equal(titleMessage.successLogin);
});