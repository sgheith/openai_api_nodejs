const axios = require('axios');
const fs = require('fs');

const openai = require('../config/openaiConfig')


const generateTranscription = async (req, res) => {

  const transcript = await openai.createTranscription(
    fs.createReadStream(saveDecodedAudio(req.body.audio_file, './audio/audio.mp3')),
    "whisper-1"
  );

  //console.log(transcript.data.text)

  res.status(200).json({
    text: transcript.data.text
  })

}

const generateTranslation = async (req, res) => {

  const translation = await openai.createTranslation(
    fs.createReadStream(saveDecodedAudio(req.body.audio_file, './audio/audio.mp3')),
    "whisper-1"
  );

  //console.log(translation.data.text)
  res.status(200).json({
    text: translation.data.text
  })
}

function saveDecodedAudio(jsonData, fileName) {
  const base64Audio = jsonData;
  const audioBuffer = Buffer.from(base64Audio, 'base64');

  fs.writeFileSync(fileName, audioBuffer);

  return fileName;
}

module.exports = { generateTranscription, generateTranslation }