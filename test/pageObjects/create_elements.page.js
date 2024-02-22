
class CreateElements {

    get newBoardButton() { return $("div.board-tile.mod-add") }

    get newBoardNameInput() { return $('input[data-testid="create-board-title-input"]')}

    get newBoardCreateButton() { return $('button[data-testid="create-board-submit-button"]')}

    get newBoardDisplayName() { return $('h1[data-testid="board-name-display"]')}

    get warningBoardName() {return $('div.AOsf5x5baMpD1a p')}

    get openBoard() {return $('ul.boards-page-board-section-list').$$('li.boards-page-board-section-list-item')}

    get addAListButton() {return $('button[data-testid="list-composer-button"]')}

    get listNameInput() {return $('textarea.oe8RymzptORQ7h')}

    get addListButton() {return $('[data-testid="list-composer-add-list-button"]')}

    get namesList() {return $('ol#board').$$('li')}

    get boardList() {return $('ul.boards-page-board-section-list').$$('li')}

    get addCardButton() {return $$('button[data-testid="list-add-card-button"]')}

    get addNameCard() {return $('textarea.qJv26NWQGVKzI9')}

    get addEndCardButton() {return $('button[data-testid="list-card-composer-add-card-button"]')}

    get cardPosition() {return $$('li.bi0h3HALKXjfDq')[0].$$('a.NdQKKfeqJDDdX3')}

    get profile () { return $('[data-testid="header-member-menu-button"]')}

    get displayMenu () { return $('[data-testid="account-menu"]')}

    get logOutButton () { return $('[data-testid="account-menu-logout"]')}

    get logOutAtlassianButton () { return $('[data-testid="logout-button"]')}

    get optionsMenu () {return $('button[class="frrHNIWnTojsww GDunJzzgFqQY_3 bxgKMAm3lq5BpA HAVwIqCeMHpVKh SEj5vUdI3VvxDc"]')}

    get closeBoardButton () { return $('a[class="board-menu-navigation-item-link board-menu-navigation-item-link-v2 js-close-board"]')}

    get closeConfirmationButton() { return $('input[class="js-confirm full nch-button nch-button--danger"]')}

    get closeBoardTitle() {return $('h1[data-testid="close-board-big-message"]')}

    async createCard(cardname){
        await this.newBoardButton.waitForDisplayed()
        await this.newBoardButton.click()
        await this.newBoardNameInput.waitForDisplayed()
        await this.newBoardNameInput.setValue(cardname)
        await this.newBoardCreateButton.waitForDisplayed()
        await this.newBoardCreateButton.click()
    }

    async openFirstBoard(){
        await this.openBoard[0].waitForDisplayed()
        await this.openBoard[0].click()
    }

    async addNewlist(listname){
        await this.addAListButton.click()
        await this.listNameInput.setValue(listname)
        await this.addListButton.click()
    }

    async endSession(){
        await this.profile.waitForClickable({timeout:10000})
        await this.profile.click()
        await this.displayMenu.waitForDisplayed()
        await this.logOutButton.click()
        await this.logOutAtlassianButton.waitForClickable({timeout:10000})
        await this.logOutAtlassianButton.click()
    }

    async menuIsDisplayed() {
        const menu = await this.optionsMenu
        if (menu) {
            await menu.click()
        }
        await this.closeBoardButton.waitForClickable({timeout:10000})
        await this.closeBoardButton.click()
        await this.closeConfirmationButton.click()
    }

    async deleteBoard() {
        await this.openFirstBoard()
        await this.menuIsDisplayed()
    }
}



module.exports = new CreateElements;