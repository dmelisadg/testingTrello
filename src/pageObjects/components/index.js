const Board = require('./boards/board.component');
const BoardClose = require('./boards/boardclosed.component');
const BoardCreation = require('./boards/boardcreation.component');
const BoardMenu = require('./boards/boardmenu.component')
const Header = require('./commons/header.component')
const LogOut = require('./profile/logout.component')
const LogOutAtlassian = require('./profile/logoutAtlassian.component')
const WorkSpace = require('./workspace/workspace.component')

class Components {
    constructor() {
        this.initBoard();
        this.initCommons();
        this.initLogOut();
        this.initWorkspace();
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

    async addNewlist(listname) {
        await $(this.board.addAList).click()
        await $(this.board.inputListName).setValue(listname)
        await $(this.board.addListButton).click()
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

    async deleteBoard() {
        await this.openBoard(0)
        await this.closeBoard()
    }

    async openProfile(){
        await $(this.header.profile).waitForClickable({timeout:10000})
        await $(this.header.profile).click()
    }

    async logOutSession(){
        await $(this.logOut.displayMenu).waitForDisplayed()
        await $(this.logOut.logOutButton).click()
        await $(this.logOutAtlassian.logOut).waitForClickable({timeout:10000})
        await $(this.logOutAtlassian.logOut).click()
    }

    // async cardArraySelector(){
    //     const allCards = await $$(this.board.cardArray)
    //     return allCards
    // }

    // async listArraySelector(){
    //     const allLists = await $$(this.board.listArray)
    //     return allLists
    // }


    async childrenArray(typeOfElement, position){
        let element;
        if(typeOfElement==='card'){
            // element = 'card' 
            element = await $$(this.board.cardArray)
        }else if(typeOfElement==='list'){
            // element = 'list'
            element = await $$(this.board.listArray)
        }else{
            element=typeOfElement + ' is not a type of element, please introduce "card" or "list"'
        }
        return element.length 
    }


}

module.exports = new Components; 