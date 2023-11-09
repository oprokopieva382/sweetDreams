const { Video } = require("../models");
const videoData = [
  {
    video_url: "https://www.youtube.com/watch?v=aEqlQvczMJQ",
    title: "10 Minute Meditation for Sleep",
    author: "Goodful",
    run_time: "10"
  },
  {
    video_url: "videourl.com",
    title: "calming music",
    author: "john doe",
  },
  {
    video_url: "videourl.com",
    title: "calming music",
    author: "john doe",
  },
  {
    video_url: "videourl.com",
    title: "calming music",
    author: "john doe",
  },
  {
    video_url: "videourl.com",
    title: "calming music",
    author: "john doe",
  },
];
const seedComments = () => Video.bulkCreate(videoData);
module.exports = seedComments;
