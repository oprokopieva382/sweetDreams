const { Video } = require("../models");
const videoData = [
  
  {
    video_url: "https://www.youtube.com/embed/KOkpZxkuI7c",
    title: "6 Minute Relax and Sleep",
    author: "Wysa",
    run_time: "6"
  },
  {
    video_url: "https://www.youtube.com/embed/aEqlQvczMJQ",
    title: "10 Minute Meditation for Sleep",
    author: "Goodful",
    run_time: "10"
  },

  {
    video_url: "https://www.youtube.com/embed/YdDv_0kwsb8",
    title: "Sleep",
    author: "GM",
    run_time: "10"
  },
  {
    video_url: "https://www.youtube.com/embed/Tr3Uw1UmTUk",
    title: "Your Best Sleep",
    author: "john doe",
    run_time: "20"
  },
  {
    video_url: "videourl.com",
    title: "calming music",
    author: "john doe",
  },
];
const seedComments = () => Book.bulkCreate(bookData);
module.exports = seedComments;
