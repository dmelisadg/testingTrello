class Board {

    constructor() {
        //this.boardPanel = 'ol#board li';
        this.boardName = 'h1[data-testid="board-name-display"]';
        this.meatballMenu = 'button[class="frrHNIWnTojsww GDunJzzgFqQY_3 bxgKMAm3lq5BpA HAVwIqCeMHpVKh SEj5vUdI3VvxDc"]'; 
        this.listArray = 'li[data-testid="list-wrapper"]'; // este es multiple
        this.cardArray = 'div[data-testid="trello-card"] h2'; // este es multiple
        this.addAList = 'button[data-testid="list-composer-button"]';
        this.inputListName = 'textarea.oe8RymzptORQ7h'
        this.addListButton = 'button[data-testid="list-composer-add-list-button"]';
        this.addCard = 'button[data-testid="list-add-card-button"]'; // multiple
        this.addNameCard = 'textarea.qJv26NWQGVKzI9';
        this.addCardButton = 'button[data-testid="list-card-composer-add-card-button"]';
    }


}

module.exports = Board;