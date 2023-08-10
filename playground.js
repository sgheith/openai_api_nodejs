//console.log("Hello OpenAI API");

const readline = require('readline')
const { generateChatCompletion } = require('./controllers/chatCompletionController');
const { generateImage, generateImageVariation, generateImageEdit } = require('./controllers/imageController');
const { generateTranscription, generateTranslation } = require('./controllers/audioController');
const { generatEembedding, cosineSimilarity } = require('./controllers/embeddingController');

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
//generateTranslation("./audio/german.mp3")
//generateTranslation("./audio/Fairouz.mp3")

////////////// AUDIO - END /////////////////////

////////////// EMBEDDINGS - START /////////////////////
rl.question("Enter Text to Eembed: \n", 
    (text) => generatEembedding(text).then( 
          embedding => console.log(embedding)
       )
)

// text1 = "Cow"
// text2 = "Goat"
text1 = "Capital"
text2 = "Capitol"

//const text1 = 'Hello, World!';
//const text2 = 'OpenAI is awesome!';
//const text3 = 'I feel well today!';

//text1 = 'The boy playing in the street';
//text2 = 'The kid having fun in the raod';
//text2 = 'It is a wonderfull morning';

//text1 = "The doctor made an operation"
//text2 = "The doctor made two operations"
//text2 = "The surgent made a surgery"
//text2 = "The engineer fixed the motor"
//text2 = "Did the engineer fix the motor?"

generatEembedding(text1)
  .then( embedding1 => {
    //console.log(embedding)
    generatEembedding(text2).then( embedding2 => {
      //console.log(embedding)
      console.log(cosineSimilarity(embedding1, embedding2))  
  })
})

////////////// EMBEDDINGS - END /////////////////////