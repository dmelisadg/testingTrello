const Board = require('./boards/board.component');
const BoardClose = require('./boards/boardclosed.component');
const BoardCreation = require('./boards/boardcreation.component');
const BoardMenu = require('./boards/boardmenu.component')
const Header = require('./commons/header.component')
const LogOut = require('./profile/logout.component')
const LogOutAtlassian = require('./profile/logoutAtlassian.component')
const WorkSpace = require('./workspace/workspace.component')
const Login = require('./login/login.component')
const LoginSlack = require('./login/loginSlack.component')


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
    async setCredentials(username, password) {
        await $(this.login.inputEmail).waitForDisplayed()
        await $(this.login.inputEmail).setValue(username)
        await $(this.login.continue).click()
        await $(this.login.inputPassword).waitForDisplayed()
        await $(this.login.inputPassword).setValue(password)
        await $(this.login.loginButton).click()
    }

    async titles() {
        await browser.waitUntil(async () => {
            const isTitle = await $(this.login.errorBox).isExisting();
            return isTitle || await $(this.login.titleWelcomePage).isExisting();
        }, {
            timeout: 5000,
            timeoutMsg: 'There is no any selector after 1 second'
        });
        const isTitle = await $(this.login.errorBox).isExisting();
        return isTitle ? await $(this.login.errorBox).getText() : await $(this.login.titleWelcomePage).getAttribute('title');
    }

    async enableSlackLogin(workspace){
        await $(this.loginSlack.slackButton).click();
        await $(this.loginSlack.slackInputWorkSpace).waitForDisplayed();
        await $(this.loginSlack.slackInputWorkSpace).setValue(workspace);
        await $(this.loginSlack.continueSlackButton).click();
    }

    async googleLoginLabel(){
        return await $(this.loginSlack.googleLoginLabel).getText()
    }

    async loginFromGmail(username, password){
        const cookies = await $(this.loginSlack.acceptCookies)
        const isCookies = await cookies.isExisting()
        if (isCookies===true) {
            await cookies.click()
        }
        // await $(this.loginSlack.acceptCookies).click()
        await $(this.loginSlack.passwordSlack).click()
        await $(this.loginSlack.inputEmail).setValue(username);
        await $(this.loginSlack.inputPassword).setValue(password);
        await $(this.loginSlack.singIn).click()
        await $(this.loginSlack.acceptContinueSlack).click();
    }

    async openBoard(position) {
        await $(this.workspace.boardSection).$$(this.workspace.boardList)[position].click()
    }

    async boardName() {
        await $(this.board.boardName).waitForDisplayed()
        const board = await $(this.board.boardName).getText();
        return board
    }

    async warningBoardName() {
        await $(this.boardCreation.warningName).waitForDisplayed()
        const warning = await $(this.boardCreation.warningName).getText();
        return warning
    }

    async createBoard(boardName) {
        await $(this.workspace.newBoard).waitForDisplayed()
        await $(this.workspace.newBoard).click()
        await $(this.boardCreation.inputBoardName).waitForDisplayed()
        await $(this.boardCreation.inputBoardName).setValue(boardName)
        await $(this.boardCreation.createBoardSubmit).waitForDisplayed()
        await $(this.boardCreation.createBoardSubmit).click()
    }

    async menuIsDisplayed() {
        const menu = await $(this.board.meatballMenu)
        if (menu) {
            await menu.click()
        }
    }

    async closeBoard() {
        await $(this.boardMenu.closeSubmit).waitForClickable({ timeout: 10000 })
        await $(this.boardMenu.closeSubmit).click()
        await $(this.boardMenu.closeConfirmation).waitForClickable({ timeout: 10000 })
        await $(this.boardMenu.closeConfirmation).click()
    }

    async closeBoardName() {
        return await $(this.boardClose.closedBoardTitle).getText()
    }

    async deleteBoard() {
        await this.openBoard(0)
        await this.menuIsDisplayed()
        await this.closeBoard()
        return await this.closeBoardName()
    }

    async openProfile() {
        await $(this.header.profile).waitForClickable({ timeout: 10000 })
        await $(this.header.profile).click()
    }

    async logOutSession() {
        await $(this.logOut.displayMenu).waitForDisplayed()
        await $(this.logOut.logOutButton).click()
        await $(this.logOutAtlassian.logOut).waitForClickable({ timeout: 10000 })
        await $(this.logOutAtlassian.logOut).click()
    }

    async childrenArray(element) {
        const elementArray = await $(this.board.elementArray)
        return (element === 'card') ? await elementArray.$$(this.board.a) : await elementArray.$$(this.board.h2)
    }

    async elementLength(element) {
        const array = await this.childrenArray(element)
        return await array.length
    }

    async childElement(element, position) {
        const array = await this.childrenArray(element)
        return await array[position]
    }

    async addNewlist(listname) {
        await $(this.board.addAList).click()
        await $(this.board.inputListName).setValue(listname)
        await $(this.board.addListButton).click()
    }

    async addNewCard(cardname, list) {
        const elementArray = await $(this.board.elementArray)
        const addButtons = await elementArray.$$(this.board.addACard)[list]
        await addButtons.click()
        await $(this.board.inputCardName).setValue(cardname)
        await $(this.board.addCardButton).click()
    }

    async lastCardInAList(list) {
        const elementArray = await $(this.board.elementArray)
        const listsInBoard = await elementArray.$$(this.board.listsOfLists)[list]
        const cardsInList = await listsInBoard.$$(this.board.li)
        const lengthCardsInList = await cardsInList.length
        return await cardsInList[lengthCardsInList - 1].getText()
    }










}

module.exports = new Components; 