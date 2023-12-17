const inputPrompt = require('../models/input-promptModel');
const openai = require("../config/openai");

module.exports = {
    async sendText(req, res){
        const api = openai.configuration();
        const inputModel = new inputPrompt(req.body);
        try{
            const response = await api.completions.create(
                openai.texCompletion(inputModel),
                
            )
            return res.status(200).json({
                sucess: true,
                data: response.choices[0].text
            });
        }catch(error){
            return res.status(400).json({
                sucess: false,
                error: error.res ? error.res.data:
               `Erro no servidor ${error}`
            })
        }
    }
}