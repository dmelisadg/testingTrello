const createElements = require('../pageObjects/create_elements.page')

describe('Creating elements in My new Trello account', () => {
    beforeEach(async () => {
        await createElements.openTrello()
        await createElements.setCredentials("testmelisadominguez@gmail.com", "TestMelisa-02142024.")
    })

    it.skip('Create a new board', async ()=>{
        const newName = 'My board nro '+ Math.floor(Math.random()*100)
        await createElements.createCard(newName)
        const boardName = await createElements.newBoardDisplayName.getText()
        expect(boardName).toEqual(newName)
    })

    it.skip('Error message - create a new board', async ()=>{
        await createElements.createCard(' ')
        const errorBoardName = await createElements.warningBoardName.getText()
        expect(errorBoardName).toHaveTextContaining('Board title is required')
    })

    it.skip('Create a new list on "My new board" board', async ()=>{
        const newList = 'My list nro '+ Math.floor(Math.random()*100)
        await createElements.openFirstBoard()
        await createElements.addNewlist(newList)
        const listLength = await createElements.namesList.length
        const lastChildList = await createElements.namesList[listLength-1].$('h2')
        const textList = await lastChildList.getText()
        expect(textList).toEqual(newList)
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
        expect(cardText).toEqual(newCard)
        //await browser.pause(5000)
    })
})