const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class VideoLike extends Model { }

VideoLike.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    video_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "video",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "videolike",
  }
);

module.exports = VideoLike;