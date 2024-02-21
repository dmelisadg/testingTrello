const createElements = require('../pageObjects/create_elements.page')
const loginPage = require('../pageObjects/login.page')

describe('Creating elements in My new Trello account', () => {
    beforeEach(async () => {
        await loginPage.openTrello()
        await loginPage.setCredentials("testmelisadominguez@gmail.com", "TestMelisa-02142024.")
    })

    it('Create a new board', async function (){
        this.retries(1)
        const newName = 'My board nro '+ Math.floor(Math.random()*100)
        await createElements.createCard(newName)
        const boardName = await createElements.newBoardDisplayName.getText()
        expect(boardName).to.equal(newName)
    })

    it('Error message - create a new board',  async function (){
        this.retries(1)
        await createElements.createCard(' ')
        const errorBoardName = await createElements.warningBoardName.getText()
        expect(errorBoardName).to.equal('Board title is required')
    })

    it('Create a new list on "My new board" board', async ()=>{
        let newList = 'My list nro '+ Math.floor(Math.random()*100)
        await createElements.openFirstBoard()
        await createElements.addNewlist(newList)
        let listLength = await createElements.namesList.length
        let lastChildList = await createElements.namesList[listLength-1].$('h2')
        let textList = await lastChildList.getText()
        await browser.waitUntil(async ()=>{
            return (await  textList === newList)
        }, {
            timeout: 3500,
            timeoutMsg: 'Expected to be Equal'
        })
        expect(textList).to.equal(newList) // acá pasa algo con los nombres cuando se comparan
    })

    it('Create a new card in a existing random list', async ()=>{
        //open random list on the first board
        await createElements.openFirstBoard()
        await createElements.namesList[0].waitForDisplayed()
        await createElements.addCardButton[0].click()
        
        //creating a card with a random name
        const newCard = 'My card nro '+ Math.floor(Math.random()*100)
        await createElements.addNameCard.setValue(newCard)
        await createElements.addEndCardButton.click()
        await browser.pause(1000)

        // List of cards to verify the name
        const cardListLength = await createElements.cardPosition.length
        const cardLastChild = await createElements.cardPosition[cardListLength-1]
        const cardText = await cardLastChild.getText()
        expect(cardText).to.equal(newCard)
    })

    afterEach(async () => {
        await createElements.endSession()
    })
})