const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SongLike extends Model { }

SongLike.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    // video_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "video",
    //     key: "id",
    //   },
    // },

    song_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "song",
        key: "id",
      },
    },

    // book_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: "book",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "songlike",
  }
);

module.exports = SongLike;
