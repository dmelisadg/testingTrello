const components = require('../components/index');

class CreateElements {
	// HELPERS
	randomName() {
		const newName = 'My element nro ' + Math.floor(Math.random() * 100);
		return newName;
	}

	// METHODS
	async openBoard(position) {
		await components.openBoard(position);
	}

	async boardName() {
		return await components.boardName();
	}

	async childElement(element, position) {
		return await components.childElement(element, position);
	}

	async elementLength(element) {
		return await components.elementLength(element);
	}

	async lastChildElement(element) {
		const length = await this.elementLength(element);
		const lastChildPosition = length - 1;
		const lastChildElement = this.childElement(element, lastChildPosition);
		return await lastChildElement;
	}

	async lastCardInAList(list) {
		return await components.lastCardInAList(list);
	}

	async addNewList(board) {
		await this.openBoard(board);
		const listName = this.randomName();
		await components.addNewList(listName);
		return listName;
	}

	async addNewCardToBoard(board, list) {
		await this.openBoard(board);
		const cardName = this.randomName();
		await components.addNewCard(cardName, list);
		return await cardName;
	}

	async createBoard(boardName) {
		await components.createBoard(boardName);
	}

	async endSession() {
		await components.openProfile();
		await components.logOutSession();
	}

	async deleteBoard() {
		return await components.deleteBoard();
	}
}

module.exports = new CreateElements();
