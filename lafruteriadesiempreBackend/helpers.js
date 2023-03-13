const { ensureDir } = require('fs-extra');
const sharp = require('sharp');
const uuid = require('uuid');
const path = require('path');

const {UPLOADS_DIRECTORY} = process.env;


//Save photo to server
const uploadsDir = path.join(__dirname, UPLOADS_DIRECTORY);
async function savePhoto (img) {
    try {
        await ensureDir(uploadsDir);
        const sharpImg = sharp(img.data);
        sharpImg.resize(300,300);

        const imgName = `${uuid.v4()}.jpg`;
        const imgPath = path.join(uploadsDir, imgName);
        await sharpImg.toFile(imgPath);

        return imgName;
        
    } catch (error) {
        throw new Error("Error procesando la imagen");
    }
};

module.exports = {
    savePhoto
}