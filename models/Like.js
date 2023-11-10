const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Like extends Model {}

Like.init(
  {
   
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    video_id: {
        type: DataTypes.INTEGER,
        references: {
            model:"video",
            key: "id",
        }
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
          model:"book",
          key: "id",
      }
  }
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
