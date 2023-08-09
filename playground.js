//console.log("Hello OpenAI API");

const readline = require('readline')
const { generateChatCompletion } = require('./controllers/chatCompletionController');
const { generateImage, generateImageVariation } = require('./controllers/imageController');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

////////////// CHATCOMPLETION - START /////////////////////
// rl.question("Enter Prompt to Send for GPT3.5 ChatCompletion Model: \n", 
//             (user_role_content) => generateChatCompletion(user_role_content)
//             )
////////////// CHATCOMPLETION - END /////////////////////

////////////// IMAGE - START /////////////////////

//rl.question("Image description: \n",  (image_desc) => generateImage(image_desc))
generateImageVariation('./images/image.png');

////////////// IMAGE - END /////////////////
