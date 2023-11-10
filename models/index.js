const User = require("./User");
const Note = require("./Note");
const Video = require("./Video");
const Like = require("./Like");

User.hasMany(Note, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Note.belongsTo(User, {
  foreignKey: "user_id",
});

// User.hasMany(Video, {
//   foreignKey: "user_id",
//   through: Like,
//   onDelete: "CASCADE",
// });

Video.belongsToMany(User, {
  through: Like,
  foreignKey: "user_id"
});

module.exports = { User, Note, Video, Like };
