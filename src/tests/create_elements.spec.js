const { childrenArray } = require('../pageObjects/components')
const createElements = require('../pageObjects/pages/create_elements.page')
const loginPage = require('../pageObjects/pages/login.page')

describe('Creating elements in My new Trello account', () => {
    beforeEach(async () => {
        await loginPage.openTrello()
        await loginPage.setCredentials("testmelisadominguez@gmail.com", "TestMelisa-02142024.")
    })
    
    it('test components', async () =>{
        await createElements.openBoard(0)
        console.log(await createElements.childrenArray('list',0))
        // const board= await createElements.boardName()
        // expect(board).to.equal('nuevoBoard')
        //await createElements.createBoard('nuevo board')
        //await createElements.deleteBoard()
    })

    it.skip('Create a new board', async function (){
        this.retries(1)
        const boardName = createElements.randomName()
        await createElements.createBoard(newName)
        const boardNameText = await createElements.boardName()
        expect(boardNameText).to.equal(boardName)
    }) // LISTA

    it.skip('Error message - create a new board',  async function (){
        this.retries(1)
        await createElements.createBoard(' ')
        const warningBoardNameText = await createElements.warningBoardName()
        expect(warningBoardNameText).to.equal('Board title is required')
    }) // LISTA

    it.skip('Create a new list on a board', async ()=>{
        await createElements.openBoard(0)
        const listName = createElements.randomName()
        await createElements.addNewlist(listName)
        
        // llamar desde page
        let listLength = await createElements.cardList.length
        let lastChildList = await createElements.cardList[listLength-1].$('h2')
        let textList = await lastChildList.getText()


        //helper
        await browser.waitUntil(async ()=>{
            return (await  textList === listName)
        }, {
            timeout: 3500,
            timeoutMsg: 'Expected to be Equal'
        })

        //
        expect(textList).to.equal(newList) // acá pasa algo con los nombres cuando se comparan
    }) 

    it.skip('Create a new card in a existing random list', async ()=>{
        //open random list on the first board
        await createElements.openBoard(0)
        await createElements.boardList[0].waitForDisplayed()
        
        //creating a card with a random name
        await createElements.addCardButton[0].click()
        const newCard = 'My card nro '+ Math.floor(Math.random()*100)
        await createElements.addNameCard.setValue(newCard)
        await createElements.addCardButton.click()
        await browser.pause(1000)

        // List of cards to verify the name
        const cardListLength = await createElements.cardPosition.length
        const cardLastChild = await createElements.cardPosition[cardListLength-1]
        
        const cardText = await cardLastChild.getText()
        expect(cardText).to.equal(newCard)
    })
    it.skip('Delete first board', async () => {
        await createElements.deleteBoard()
        const boardAfterClose = await createElements.closeBoardTitle.getText()
        expect(boardAfterClose).to.include(' is closed.')
    })

    afterEach(async () => {
        await createElements.endSession()
    })
})