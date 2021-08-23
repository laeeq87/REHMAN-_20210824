const router = require("express").Router();
const VideoController = require("../controllers/videoController");
const upload = require("../utils/upload");
const uploadFile = require("../middlewares/uploadFile")

//Video App Endpoints
router.get('/',uploadFile, VideoController.getAllVideos);
router.post('/upload',uploadFile, VideoController.uploadVideo);


module.exports = router;