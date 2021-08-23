const models = require("../../models")
const generateThumbnail = require("../utils/thumbnail");
const { successResponse, errorResponse } = require("../utils/response")

module.exports = class VideoController {

    /**
     * This will upload the new video file in the system.
     *
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
     static async uploadVideo(req, res, next) {

        try {
            const { title: videoTitle, category } = req.body;
            const { path: filePath , filename}  = req.file;
            const thumbnails =  await generateThumbnail(filePath);
            const thumbnailData = [];

            const createVideo = await models.Video.create({ title: videoTitle, location: filename, category_id: parseInt(category)}).catch(err => {
                console.log('error==>', err);
                res.json(errorResponse(400, 'error saving video', err));
            })
            

            if (createVideo.dataValues) {

                const createdVideoId = createVideo.dataValues.id;

                thumbnails.map((t) => {
                    thumbnailData.push({ "size": t.size,  "location": t.location, "video_id": createdVideoId })
                });

                if (thumbnailData.length === 0) {
                    return res.json(errorResponse(400, 'error creating video thumbnails'));
                }

                 await models.Thumbnail.bulkCreate(thumbnailData).catch(err => {
                    return res.json(errorResponse(400, 'error saving video thumbnails', err));
                })

                return res.json(successResponse(201, "video uploaded successfully ", createVideo))
            }
        } catch (error) {
            return res.json(errorResponse(400, 'error uploading video', error));
        }

    }

     /**
     * This will upload the new video file in the system.
     *
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
      static async getAllVideos(req, res, next) {
        try {
            const videos = await models.Video.findAll({
                include: [
                    {
                        model: models.Thumbnail, 
                        as: 'thumbnails'
                    },
                    {
                        model: models.Category, 
                        as: 'category'
                    },
                ]
            }).catch(err => {

                res.json(errorResponse(400, 'error getting video', err));
            });

            res.json(successResponse(200, 'success', videos))

        } catch (error) {
            return res.json(errorResponse(400, 'error uploading video', error));
        }

    }
}