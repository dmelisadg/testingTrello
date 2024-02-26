const components = require('../components/index')

class CreateElements {

    // create newlist spec
   // get boardList() {return $$('ol#board li')}// board component


    // new card 
    get addCardButton() {return $$('button[data-testid="list-add-card-button"]')}// board component

    get addCardButton() {return $('button[data-testid="list-card-composer-add-card-button"]')}// board component

    get addNameCard() {return $('textarea.qJv26NWQGVKzI9')}// board component

    get cardPosition() {return $$('li.bi0h3HALKXjfDq')[0].$$('a.NdQKKfeqJDDdX3')}// board component
    
    // HELPERS
    randomName(){
        const newName = 'My element nro '+ Math.floor(Math.random()*100)
        return newName
    }

    // llamar selectores desde index
    async childrenArray(typeOfElement,position){
        const arrayLength = await components.childrenArray(typeOfElement,position)
        return arrayLength
        // let listLength = await components.cardList.length
        // let lastChildList = await components.cardList[listLength-1].$('h2')
        // let textList = await lastChildList.getText()
        // return textList
    }

    async openBoard(position){
        await components.openBoard(position)
    }

    async boardName(){
       return await components.boardName()
    }

    async warningBoardName(){
        return await components.warningBoardName()
     }
    
    async addNewlist(listname){
        await components.addNewlist(listname)
    }

    async createBoard(boardName){
        await components.createBoard(boardName)
    }

    async endSession(){
        await components.openProfile()
        await components.logOutSession()
    }

    async deleteBoard() {
        await components.deleteBoard()   
    }

}



module.exports = new CreateElements;