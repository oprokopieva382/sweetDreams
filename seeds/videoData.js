const { Video } = require("../models/Video");
const videoData = [
  {
    video_url: "videourl.com",
    description: "calming music",
    author: "john doe",
  },
  {
    video_url: "videourl.com",
    description: "calming music",
    author: "john doe",
  },
  {
    video_url: "videourl.com",
    description: "calming music",
    author: "john doe",
  },
  {
    video_url: "videourl.com",
    description: "calming music",
    author: "john doe",
  },
  {
    video_url: "videourl.com",
    description: "calming music",
    author: "john doe",
  },
];
const seedComments = () => Video.bulkCreate(videoData);
module.exports = seedComments;
