const axios = require('axios');
const fs = require('fs');

const openai = require('../config/openaiConfig')

const generateImage = async (req, res) => {

  const image = await openai.createImage({
    prompt: req.body.prompt,
    n: 1,
    size: '1024x1024'
  })

  //console.log(image.data.data[0].url)

  const imageUrl = image.data.data[0].url;
  const outputPath = './images/image.png';
  
  //saveImageToPNG(imageUrl, outputPath);

  res.status(200).json({
    url: image.data.data[0].url
  })
}

const generateImageVariation = async (image) => {

  const image_variation = await openai.createImageVariation(
      fs.createReadStream(image),
      1,
      "1024x1024"
    );

  console.log(image_variation.data.data[0].url)

  const imageUrl = image_variation.data.data[0].url;
  const outputPath = './images/image_variation.png';

  saveImageToPNG(imageUrl, outputPath);
}

async function saveImageToPNG(imageUrl, outputPath) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    fs.writeFileSync(outputPath, Buffer.from(response.data, 'binary'));
    console.log('Image saved successfully!');
  } catch (error) {
    console.error('Error saving the image:', error);
  }
}

module.exports = { generateImage, generateImageVariation }