const { Model } = require("sequelize");

class InputPrompt{
    constructor({prompt}){
        this.prompt = prompt;
    }
}

module.exports = InputPrompt;