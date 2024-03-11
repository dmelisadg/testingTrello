class Board {
	constructor() {
		this.boardPanel = 'ol#board li.T9JQSaXUsHTEzk';
		this.boardName = 'h1[data-testid="board-name-display"]';
		this.meatballMenu =
			'button[class="frrHNIWnTojsww GDunJzzgFqQY_3 bxgKMAm3lq5BpA HAVwIqCeMHpVKh SEj5vUdI3VvxDc"]';
		this.elementArray = '#board[data-testid="lists"]'; // multiple
		this.h2 = 'h2';
		this.a = '.bPNGI_VbtbXQ8v';
		this.listsOfLists = 'li.bi0h3HALKXjfDq'; // multiple
		this.cardsList = 'a.NdQKKfeqJDDdX3';
		this.li = 'li.T9JQSaXUsHTEzk';
		this.addAList = 'button[data-testid="list-composer-button"]';
		this.inputListName = 'textarea.oe8RymzptORQ7h';
		this.addListButton = 'button[data-testid="list-composer-add-list-button"]';
		this.addACard = 'button[data-testid="list-add-card-button"]'; // multiple
		this.inputCardName = 'textarea.qJv26NWQGVKzI9';
		this.addCardButton = 'button[data-testid="list-card-composer-add-card-button"]';
	}
}

module.exports = Board;
