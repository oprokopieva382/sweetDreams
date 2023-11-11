const sequelize = require("../config/connection");
const seedVideos = require("./videoData.js");
const seedBooks = require("./bookData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedVideos();
  await seedBooks();
  process.exit(0);
};
seedAll();
