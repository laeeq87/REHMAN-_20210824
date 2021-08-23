'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thumbnail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Thumbnail.belongsTo(models.Video,
        {
          foreignKey: 'video_id',
          as: 'video'
      })
    }
  };
  Thumbnail.init({
    size: DataTypes.STRING,
    location: DataTypes.STRING,
    video_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Thumbnail',
    tableName: 'thumbnails'
  });
  return Thumbnail;
};