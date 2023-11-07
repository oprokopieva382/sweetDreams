const sequelize = require("../config/connection")
const seedVideos = require("./videoData.js")
const seedAll = async () => {
    await sequelize.sync({ force: true })
await seedVideos()
process.exit(0)
}
seedAll()