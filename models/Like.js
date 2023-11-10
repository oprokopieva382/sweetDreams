const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Like extends Model {}

Like.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
      video_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "video",
          key: "id",
        },
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "song",
          key: "id",
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "like",
  }
);

module.exports = Like;
