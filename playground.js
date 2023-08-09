//console.log("Hello OpenAI API");

const readline = require('readline')
const { generateChatCompletion } = require('./controllers/chatCompletionController');
const { generateImage, generateImageVariation, generateImageEdit } = require('./controllers/imageController');
const { generateTranscription, generateTranslation } = require('./controllers/audioController');

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
//generateImageVariation('./images/image.png');

//A sunlit indoor lounge area with a pool containing star
//rl.question("Enter Output Image description: \n",  (image_desc) => generateImageEdit(image_desc, './images/image_edit_original.png', './images/image_edit_mask.png'))

////////////// IMAGE - END /////////////////

////////////// AUDIO - START /////////////////////

//generateTranscription("./audio/rr.mp3")
generateTranslation("./audio/german.mp3")
//generateTranslation("./audio/Fairouz.mp3")

////////////// AUDIO - END /////////////////////