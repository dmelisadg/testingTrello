const loginPage = require('../pageObjects/login.page');

class CreateElements {

    get newBoardButton() { return $("div.board-tile.mod-add") }

    get newBoardNameInput() { return $('input[data-testid="create-board-title-input"]')}

    get newBoardCreateButton() { return $('button[data-testid="create-board-submit-button"]')}

    get newBoardDisplayName() { return $('h1[data-testid="board-name-display"]')}

    get warningBoardName() {return $('span[class="O45xR3m3EpkbfR"]')}

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

    openTrello() {
        return loginPage.openTrello()
    }
    setCredentials(username, password) {
        return loginPage.setCredentials(username, password)
    }

    async createCard(cardname){
        await this.newBoardButton.click()
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

}



module.exports = new CreateElements;