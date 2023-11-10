const sequelize = require("../config/connection");
const seedVideos = require("./videoData.js");
const seedSongs = require("./songsData.js");
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedVideos();
  await seedSongs();
  process.exit(0);
};
seedAll();
