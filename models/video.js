'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Video.belongsTo(models.Category, {
          foreignKey: 'category_id',
          as: 'category'
      })
      models.Video.hasMany(models.Thumbnail, {
        foreignKey: 'video_id',
        as: 'thumbnails'
      });
    }
  };
  Video.init({
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Video',
    tableName: 'videos'
  });
  return Video;
};