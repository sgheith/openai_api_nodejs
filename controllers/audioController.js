const axios = require('axios');
const fs = require('fs');

const openai = require('../config/openaiConfig')


const generateTranscription = async (audio_file) => {

  const transcript = await openai.createTranscription(
    fs.createReadStream(audio_file),
    "whisper-1"
  );

  console.log(transcript.data.text)

}

const generateTranslation = async (audio_file) => {

  const translation = await openai.createTranslation(
    fs.createReadStream(audio_file),
    "whisper-1"
  );

  console.log(translation.data.text)

}

module.exports = { generateTranscription, generateTranslation }