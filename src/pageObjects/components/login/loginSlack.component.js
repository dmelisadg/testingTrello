class LoginSlack {
	constructor() {
		this.slackButton = 'a#slackButton.slack-button.oauth-button';
		this.slackInputWorkSpace = 'input[data-qa="signin_domain_input"]';
		this.continueSlackButton = 'button[data-qa="submit_team_domain_button"]';
		this.googleLoginLabel = 'span.c-google_login__label';
		this.acceptCookies = '#onetrust-accept-btn-handler';
		this.passwordSlack = 'a[data-qa="sign_in_password_link"]';
		this.inputEmail = 'input#email';
		this.inputPassword = 'input#password';
		this.singIn = 'button#signin_btn';
		this.acceptContinueSlack =
			'.p-oauth_footer button.c-button.c-button--primary.c-button--medium.p-oauth_footer__accept_btn';
	}
}

module.exports = LoginSlack;
