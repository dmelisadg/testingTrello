const createElements = require('./../../pageObjects/pages/create_elements.page');
const loginPage = require('./../../pageObjects/pages/login.page');

describe('Creating elements in My new Trello account', () => {
	beforeEach(async () => {
		await loginPage.openTrello();
		await loginPage.loginToTrello(
			loginPage.credentials().username,
			loginPage.credentials().password
		);
	});
	it('Create a new board', async function () {
		this.retries(1);
		const boardName = createElements.randomName();
		await createElements.createBoard(boardName);
		const boardNameText = await createElements.boardName();
		expect(boardNameText).to.equal(boardName);
	});
	it('Error message - create a new board', async function () {
		this.retries(1);
		await createElements.createBoard(' ');
		const warningBoardNameText = await createElements.boardName();
		expect(warningBoardNameText).to.equal('Board title is required');
	}); 
	it('Create a new list on a board', async () => {
		const listNewName = await createElements.addNewList(0);
		const lastChildElement = await createElements.lastChildElement('list');
		const textList = await lastChildElement.getText();
		expect(textList).to.equal(listNewName);
	});
	it('Create a new card on the first list', async () => {
		const cardNewName = await createElements.addNewCardToBoard(0, 0);
		const lastcardName = await createElements.lastCardInAList(0);
		expect(lastcardName).to.equal(cardNewName);
	});
	it('Delete first board', async () => {
		const boardAfterClose = await createElements.deleteBoard();
		expect(boardAfterClose).to.include(' is closed.');
	});

	afterEach(async () => {
		await createElements.endSession();
	});
});
