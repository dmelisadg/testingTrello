const components = require('../components/index');
const page = require('./page');

class LoginPage {
  // HELPERS
  randomCredentials () {
    const credentials = {
      username: Math.floor(Math.random() * 1000) + '***$%' + '@gmail.com',
      password: Math.floor(Math.random() * 1000) + '***$%'
    };
    return credentials;
  }

  credentials () {
    const credentials = {
      username: 'testmelisadominguez@gmail.com',
      password: 'TestMelisa-02142024.'
    };
    return credentials;
  }

  titleText () {
    const title = {
      boardTitle: 'Test MelisaDG (testmelisadg)',
      errorMessage: 'Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.'
    };
    return title;
  }

  // METHODS
  openTrello () {
    return page.openLogin();
  }

  async loginToTrello (username, password) {
    await components.setCredentials(username, password);
    return await components.titles();
  }

  async titleMessages () {
    const message = {
      successLogin: this.titleText().boardTitle,
      failedLogin: this.titleText().errorMessage
    };
    return message;
  }

  async loginWithSlack (workspace) {
    await components.enableSlackLogin(workspace);
  }

  async signInGmailButton () {
    return await components.googleLoginLabel();
  }

  async loginSlackFromGmail (username, password) {
    await components.loginFromGmail(username, password);
    return await components.titles();
  }
}
module.exports = new LoginPage();
