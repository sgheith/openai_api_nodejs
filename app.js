const express = require('express')

const { generateChatCompletion } = require('./controllers/chatCompletionController');
const { generateImage, generateImageVariation, generateImageEdit } = require('./controllers/imageController');


// app setup
const app = express()
app.listen(4000, () => console.log('listening to requests on port 4000'))

// middleware
// You can set it to a larger size (like '50mb') if you anticipate receiving larger payloads.
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'))

// routes
app.post('/openai/intro/chatcompletion', generateChatCompletion)
app.post('/openai/intro/image_generate', generateImage)
app.post('/openai/intro/image_variation', generateImageVariation)
app.post('/openai/intro/image_edit', generateImageEdit)
