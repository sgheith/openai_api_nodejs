const express = require('express')

const { generateChatCompletion } = require('./controllers/chatCompletionController');
const { generateImage } = require('./controllers/imageController');


// app setup
const app = express()
app.listen(4000, () => console.log('listening to requests on port 4000'))

// middleware
app.use(express.json());
app.use(express.static('public'))

// routes
app.post('/openai/intro/chatcompletion', generateChatCompletion)
app.post('/openai/intro/image_generate', generateImage)
