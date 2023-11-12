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

    song_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "song",
        key: "id",
      },
    },
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
