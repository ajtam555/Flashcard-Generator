class Cloze {
    constructor(text, cloze) {
        this.text = text;
        this.cloze = cloze;

        this.getCloze = function() {
            return this.cloze;
        }
        this.getPartialCloze = function() {

        }
        this.getFullCloze = function() {

        }
        
    }
}

module.exports = ClozeCard;


var ClozeFlashCard = function (cloze, rest){
    this.cloze = cloze;
    this.rest = rest;
    this.getCloze = function(){
        return this.cloze;
    }
    this.getNonClozePart = function(){
        return "..." + this.rest;
    };
};

