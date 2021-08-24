const models = require("../../models")
const { successResponse, errorResponse } = require("../utils/response")


module.exports = class CategoriesController {

    /**
     * This function will create categories in the database 
     * if categories already exist then it will do nothing 
     * if there are no categories in the system then it will create all the categories in the system for once
     *
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
     static async createCategories() {

        try {
            const categories = await models.Category.findAll().catch(err => {
                return err;
            });

            if (categories.length === 0) {
            await models.Category.bulkCreate([
                { title: 'Exercise', description: 'All the video related to Excercsde, Health & Fitness' },
                { title: 'Education', description: 'All the video related to Education, Learning & Personal Grooming' },
                { title: 'Recipe', description: 'All the video related to Food' }
            ]).catch(err => {
                return err;
            })
            return true;
            }
            return false;

        } catch (err) {
            return err;
        }
    }

        /**
     * This Function will find all the categories
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
    static async getAllCategories(req, res, next) {

        try {
            const categories = await models.Category.findAll().catch(err => {
                return res.json(errorResponse(404, "categories not found"))
            });

            if (categories.length > 0) {
                return res.json(successResponse(200, "success", categories))
            }
        } catch (err) {
            return res.json(errorResponse(400, "error getting categories", err))
        }
    }
}