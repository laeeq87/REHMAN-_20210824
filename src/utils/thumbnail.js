const ThumbnailGenerator = require('video-thumbnail-generator').default;

const generateThumbnail = async (sourcepath) => {

    const thumbnailFinal = [];
    const thumbnailPath = './public/thumbnails';

    const sizes = [
        {size: 64, dimension: "64x64"},
        {size: 128, dimension: "128x128"},
        {size: 256, dimension: "256x256"}
    ];

    const tg = new ThumbnailGenerator({
        sourcePath: sourcepath,
        thumbnailPath: thumbnailPath,
      });

    await Promise.all(sizes.map(async (s) => {
        const thumbnail = await tg.generateOneByPercent(90, { size: s.dimension }).catch(error => {
            return error;
        })
        thumbnailFinal.push({size: s.size, location: thumbnail });
      }));

     return thumbnailFinal;
  };


  module.exports = generateThumbnail;