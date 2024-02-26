class GetElement{

    oneDolarSign(selector){
        return $(selector)   
    }

    doubleDolarSign(selector){
        return $$(selector)   
    }


}

module.exports = new GetElement;