const sharp = require('sharp');

exports.process = async (imagePath) => {
    const processedImagePath = './image';
    await sharp(imagePath)
        .resize(800)
        .grayscale()
        .toFile(processedImagePath);
    return processedImagePath;
};
