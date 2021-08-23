const upload = require("../utils/upload");
const  uploadFile = upload.single("video");
const multer = require("multer");
const { successResponse, errorResponse } = require("../utils/response")


/**
 * This middleware handles database authentication after the JWT authorization
 * passes.
 *
 * @param {object} request
 * @param {object} response
 * @param {function} next
 */
 module.exports = (req, res, next) => {
     
    uploadFile(req, res, (err) => {
        
        console.log('middleware error', err)

        if (err instanceof multer.MulterError) {  // A Multer error occurred when uploading.
            return res.json(errorResponse(400, err.message, err))
        } else if (err) {
            return res.json(errorResponse(400, err.message, err))
        }
        next()
    })
  };
