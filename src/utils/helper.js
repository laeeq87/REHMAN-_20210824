const CategoriesController = require('../controllers/categoriesController');

const createCategories = async () => {
    try {
        const categories = await CategoriesController.createCategories();
        return categories;
    } catch (error) {
        console.log('error ', error)
    }
}

module.exports = createCategories;