const router = require("express").Router();
const CategoriesController = require("../controllers/categoriesController");

// Categories Endpoints
router.get('/', CategoriesController.getAllCategories);

module.exports = router;