const page = require('./page')

class LoginPage {
    // setCredentials
    get enterEmail() { return $('input#user.form-field') }

    get enterPassword() { return $('input#password') }

    get continueButton() { return $('input#login.button') }

    get loginButton() { return $('button#login-submit') }

    get navBarWelcomePage() { return $('nav#header') }

    get titleWelcomePage() { return $("div[data-testid='header-member-menu-avatar']") }

    get errorBox() { return $("div[data-testid='form-error--content']") }
 
 
    // Slack
    get slackButton() { return $('a#slackButton.slack-button.oauth-button') }

    get continueSlackButton() { return $('button[data-qa="submit_team_domain_button"]') }

    //get continueSlackWorkSpaceButton() { return $('button[data-qa="submit_team_domain_button"]') }

    get slackInputWorkSpace() { return $('input[data-qa="signin_domain_input"]') }

    get passwordSlackButton() { return $('a[data-qa="sign_in_password_link"]') }

    get emailField() { return $('input#email') }

    get passwordField() { return $('input#password') }

    get buttonSignIn() { return $('button#signin_btn') }

    get signInGmailButton() { return $('span.c-google_login__label') }

    get emailGmailAccount() { return $('input#identifierId') }

    get nextGmailButton() { return $('#identifierNext') }

    get emailGmailPassword() { return $('input[name="Passwd"]') }

    get nextGmailPaswordButton() { return $('#passwordNext') }

    get nextSlackButton() { return $$('span.VfPpkd-vQzf8d')[1] }


    get acceptContinueSlackButton() { return $('.p-oauth_footer button.c-button.c-button--primary.c-button--medium.p-oauth_footer__accept_btn') }

    get cookiesButton() { return $('#onetrust-accept-btn-handler') }

    openTrello() {
        return page.openLogin()
    }

    async setCredentials(username, password) {
        await this.enterEmail.waitForDisplayed();
        await this.enterEmail.setValue(username);
        await this.continueButton.waitForClickable({ timeout: 20000 });
        await this.continueButton.click();
        await this.enterPassword.waitForDisplayed();
        await this.enterPassword.setValue(password);
        await this.loginButton.waitForClickable({ timeout: 20000 });
        await this.loginButton.click();
    }

    async loginWithSlack(workspace) {
        await this.slackButton.click();
        await this.slackInputWorkSpace.waitForDisplayed();
        await this.slackInputWorkSpace.setValue(workspace);
        await this.continueSlackButton.click();
    }

    async loginSlackFromGmail(username, password) {
        await this.cookiesButton.waitForClickable({ timeout: 20000 });
        await this.cookiesButton.click()
        await this.passwordSlackButton.waitForClickable({ timeout: 20000 });
        await this.passwordSlackButton.click()
        await this.emailField.setValue(username);
        await this.passwordField.setValue(password);
        await this.buttonSignIn.waitForClickable({ timeout: 20000 });
        await this.buttonSignIn.click()
        await this.acceptContinueSlackButton.waitForClickable({ timeout: 20000 });
        await this.acceptContinueSlackButton.click();
    }

}
module.exports = new LoginPage;
