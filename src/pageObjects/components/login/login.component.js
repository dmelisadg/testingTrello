class Login {
	constructor() {
		this.inputEmail = 'input#user.form-field';
		this.inputPassword = 'input#password';
		this.inputEmailAtlassian = 'input#username';
		this.inputPasswordAtlassian = 'input#password';
		this.continue = 'input#login.button';
		
		this.loginButton = 'button#login-submit';
		this.navBarWelcomePage = 'nav#header';
		this.titleWelcomePage = "div[data-testid='header-member-menu-avatar']";
		this.errorBox = "div[data-testid='form-error--content']";
	}
}

module.exports = Login;
