const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/videos')
    },
    filename: function (req, file, cb) {
      
      const mimeType = file.mimetype.toLowerCase();
      let ext ='';

      if (mimeType === 'video/mp4') {
        ext = 'mp4'
      } else if (mimeType === 'video/quicktime') {
        ext = 'mov'
      }

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
    }
  })

  const fileFilter = (req, file, cb) => {
    const mimeType = file.mimetype.toLowerCase();

    if (mimeType === 'video/mp4' || mimeType === 'video/quicktime') {
        cb(null, true)
    } else {
      cb(null, false)
      cb(new Error("Mime type is not supported"))
    }
  }
  
  const upload = multer({ storage: storage, limits: { fileSize: 200 * 1024 * 1024 }, fileFilter });

  module.exports = upload;