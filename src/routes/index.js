const router = require("express").Router();

router.use("/video", require("./video"));
router.use("/category", require("./category"));

module.exports = router;