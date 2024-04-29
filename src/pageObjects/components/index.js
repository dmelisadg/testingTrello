const Board = require('./boards/board.component');
const BoardClose = require('./boards/boardclosed.component');
const BoardCreation = require('./boards/boardcreation.component');
const BoardMenu = require('./boards/boardmenu.component');
const Header = require('./commons/header.component');
const LogOut = require('./profile/logout.component');
const LogOutAtlassian = require('./profile/logoutAtlassian.component');
const WorkSpace = require('./workspace/workspace.component');
const Login = require('./login/login.component');
const LoginSlack = require('./login/loginSlack.component');

class Components {
	constructor() {
		this.initBoard();
		this.initCommons();
		this.initLogOut();
		this.initWorkspace();
		this.initLogin();
	}

	initBoard() {
		this.board = new Board();
		this.boardCreation = new BoardCreation();
		this.boardMenu = new BoardMenu();
		this.boardClose = new BoardClose();
	}

	initCommons() {
		this.header = new Header();
	}

	initLogOut() {
		this.logOut = new LogOut();
		this.logOutAtlassian = new LogOutAtlassian();
	}

	initWorkspace() {
		this.workspace = new WorkSpace();
	}

	initLogin() {
		this.login = new Login();
		this.loginSlack = new LoginSlack();
	}

	// HELPERS
	async waitDisplayedAndClick(selector) {
		await $(selector).waitForDisplayed({ timeout: 10000 });
		await $(selector).click();
	}

	async waitAndSetValue(selector, value) {
		await $(selector).waitForDisplayed({ timeout: 10000 });
		await $(selector).setValue(value);
	}

	async waitClickableAndClick(selector) {
		await $(selector).waitForClickable({ timeout: 10000 });
		await $(selector).click();
	}

	// METHODS
	async setCredentials(username, password) {
		const emailInputAtlassian = await $(this.login.inputEmailAtlassian);
		if (emailInputAtlassian) {
			await this.waitAndSetValue(this.login.inputEmailAtlassian, username);
			await $(this.login.loginButton).click();
		}
		else{
			await this.waitAndSetValue(this.login.inputEmail, username);
			await $(this.login.continue).click();
		}
		await this.waitAndSetValue(this.login.inputPassword, password);
		await $(this.login.loginButton).click();
	}

	async titles() {
		await browser.waitUntil(
			async () => {
				const isTitle = await $(this.login.errorBox).isExisting();
				return isTitle || (await $(this.login.titleWelcomePage).isExisting());
			},
			{
				timeout: 10000,
				timeoutMsg: 'There is no any selector after 10 seconds'
			}
		);
		const isTitle = await $(this.login.errorBox).isExisting();
		return isTitle
			? await $(this.login.errorBox).getText()
			: await $(this.login.titleWelcomePage).getAttribute('title');
	}

	async enableSlackLogin(workspace) {
		const slackButtonAtlassian = await $(this.loginSlack.slackButtonAtlassian);
		if (slackButtonAtlassian) {
			await slackButtonAtlassian.click();
		}
		else{
			await $(this.loginSlack.slackButton).click();
		}
		await this.waitAndSetValue(this.loginSlack.slackInputWorkSpace, workspace);
		await $(this.loginSlack.continueSlackButton).click();
	}

	async googleLoginLabel() {
		return await $(this.loginSlack.googleLoginLabel).getText();
	}

	async loginFromGmail(username, password) {
		const cookies = await $(this.loginSlack.acceptCookies);
		const isCookies = await cookies.isExisting();
		if (isCookies === true) {
			await cookies.click();
		}
		await $(this.loginSlack.passwordSlack).click();
		await $(this.loginSlack.inputEmail).setValue(username);
		await $(this.loginSlack.inputPassword).setValue(password);
		await $(this.loginSlack.singIn).click();
		await $(this.loginSlack.acceptContinueSlack).click();
		// await browser.pause(30000);
	}

	async openBoard(position) {
		await $(this.workspace.boardSection).$$(this.workspace.boardList)[position].click();
	}

	async boardName() {
		const boardCreationSuccess = await $(this.board.boardName);
		const boardCreationFailed = await $(this.boardCreation.warningName);
		const isBoardCreationFailed = await boardCreationFailed.isExisting();
		return isBoardCreationFailed === true
			? await boardCreationFailed.getText()
			: await boardCreationSuccess.getText();
	}

	async createBoard(boardName) {
		await this.waitDisplayedAndClick(this.workspace.newBoard);
		await this.waitAndSetValue(this.boardCreation.inputBoardName, boardName);
		await this.waitDisplayedAndClick(this.boardCreation.createBoardSubmit);
	}

	async menuIsDisplayed() {
		const menu = await $(this.board.meatballMenu);
		if (menu) {
			await menu.click();
		}
	}

	async closeBoard() {
		await this.waitClickableAndClick(this.boardMenu.closeSubmit);
		await this.waitClickableAndClick(this.boardMenu.closeConfirmation);
	}

	async closeBoardName() {
		return await $(this.boardClose.closedBoardTitle).getText();
	}

	async deleteBoard() {
		await this.openBoard(0);
		await this.menuIsDisplayed();
		await this.closeBoard();
		return await this.closeBoardName();
	}

	async openProfile() {
		await this.waitClickableAndClick(this.header.profile);
	}

	async logOutSession() {
		await $(this.logOut.displayMenu).waitForDisplayed();
		await $(this.logOut.logOutButton).click();
		await this.waitClickableAndClick(this.logOutAtlassian.logOut);
	}

	async childrenArray(element) {
		const elementArray = await $(this.board.elementArray);
		return element === 'card'
			? await elementArray.$$(this.board.a)
			: await elementArray.$$(this.board.h2);
	}

	async elementLength(element) {
		const array = await this.childrenArray(element);
		return await array.length;
	}

	async childElement(element, position) {
		const array = await this.childrenArray(element);
		return await array[position];
	}

	async addNewlist(listname) {
		await $(this.board.addAList).click();
		await $(this.board.inputListName).setValue(listname);
		await $(this.board.addListButton).click();
	}

	async addNewCard(cardname, list) {
		const elementArray = await $(this.board.elementArray);
		const addButtons = await elementArray.$$(this.board.addACard)[list];
		await addButtons.click();
		await $(this.board.inputCardName).setValue(cardname);
		await $(this.board.addCardButton).click();
	}

	async lastCardInAList(list) {
		const elementArray = await $(this.board.elementArray);
		const listsInBoard = await elementArray.$$(this.board.listsOfLists)[list];
		const cardsInList = await listsInBoard.$$(this.board.li);
		const lengthCardsInList = await cardsInList.length;
		return await cardsInList[lengthCardsInList - 1].getText();
	}
}

module.exports = new Components();