class GetElement{

    async oneDolarSign(selector){
        return await $(selector)   
    }

    async doubleDolarSign(selector){
        return await $$(selector)   
    }


}

module.exports = new GetElement;