const User = require("./User");
const Note = require("./Note");
const Video = require("./Video");
const Book = require("./Book");
const SongLike = require("./SongLike");
const VideoLike = require("./VideoLike")
const BookLike = require('./BookLike')
const Song = require("./Song");


User.hasMany(Note, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Note.belongsTo(User, {
  foreignKey: "user_id",
});

Video.belongsToMany(User, {
  foreignKey: "video_id",
  through: VideoLike,
});
User.belongsToMany(Video, {
  foreignKey: "user_id",
  through: VideoLike,
});

User.belongsToMany(Song, {
  foreignKey: "user_id",
  through: SongLike
});

Song.belongsToMany(User, {
  foreignKey: "song_id",
  through: SongLike
});

User.belongsToMany(Book, {
  foreignKey: "user_id",
  through: BookLike
});

Book.belongsToMany(User, {
  foreignKey: "book_id",
  through: BookLike
});

module.exports = { User, Note, Video, Book, VideoLike, SongLike, Song, BookLike };