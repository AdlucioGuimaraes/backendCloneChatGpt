//import OpenAI from "openai";
/*const {Configuration, OpenAIApi}= require('openai');
 console.log(openai);
module.exports = class openai{
    static Configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
          return new OpenAIApi(configuration);
    }
    static texCompletion({prompt}){
        console.log(prompt)
        return {
            model: "gpt-3.5-turbo-instruct",
            prompt: `${prompt}`,
            temperature: 1.1,
            max_tokens: 351,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        }
    }
}*/

const { OpenAI } = require('openai');

module.exports = class openai {
  static configuration(){
    return new OpenAI({ apiKey: process.env.OPEN_API_KEY });
  }

  static texCompletion({ prompt }) {
    return {
      model: 'gpt-3.5-turbo-instruct',
      prompt: `${prompt}`,
      temperature: 1.1,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }
}
//module.exports = openai;



