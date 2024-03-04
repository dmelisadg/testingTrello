const components = require('../components/index')
const page = require('./page')

class LoginPage {

    // Slack
    get slackButton() { return $('a#slackButton.slack-button.oauth-button') }

    get continueSlackButton() { return $('button[data-qa="submit_team_domain_button"]') }

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

    //HELPERS
    randomCredentials(){
        const credentials = {
            username:Math.floor(Math.random()*1000)+'***$%'+'@gmail.com',
            password:Math.floor(Math.random()*1000)+'***$%'
        }
        return credentials
    }

    credentials(){
        const credentials = {
            username:'testmelisadominguez@gmail.com',
            password:'TestMelisa-02142024.'
        }
        return credentials
    }
    titleText(){
        const title = {
            boardTitle:'Test MelisaDG (testmelisadg)',
            errorMessage:'Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.'
        }
        return title
    }

    //METHODS
    openTrello() {
        return page.openLogin()
    }

    async loginToTrello(username, password) {
        await components.setCredentials(username, password)
        return await components.titles()
    }

    async titleMessages(){
        const message = {
            successLogin : this.titleText().boardTitle,
            failedLogin: this.titleText().errorMessage
        }
        return message
    }

    async loginWithSlack(workspace) {
        await components.enableSlackLogin(workspace)
    }
    async signInGmailButton(){
        return await components.googleLoginLabel()
    }

    async loginSlackFromGmail(username, password) {
        await components.loginFromGmail(username, password)
        return await components.titles()
    }

}
module.exports = new LoginPage;
