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

const generateImageVariation = async (req, res) => {

  const image_variation = await openai.createImageVariation(
      fs.createReadStream(saveDecodedImage(req.body.image, './images/image.png')),
      1,
      "1024x1024"
    );

  //console.log(image_variation.data.data[0].url)

  res.status(200).json({
    url: image_variation.data.data[0].url
  })
}

const generateImageEdit = async (prompt, image, mask) => {

  const image_edit = await openai.createImageEdit(
      fs.createReadStream(image),
      prompt,
      fs.createReadStream(mask),
      1,
      "1024x1024"
    );

    console.log(image_edit.data.data[0].url)
  
   const imageUrl = image_edit.data.data[0].url;
    const outputPath = './images/image_edit_output.png';

    saveImageToPNG(imageUrl, outputPath);
  }

function saveDecodedImage(jsonData, fileName) {
  const base64Image = jsonData;
  const imageBuffer = Buffer.from(base64Image, 'base64');

  fs.writeFileSync(fileName, imageBuffer);

  return fileName;
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

module.exports = { generateImage, generateImageVariation, generateImageEdit}