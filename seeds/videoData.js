const { Video } = require("../models");
const videoData = [
  
  {
    video_url: "https://www.youtube.com/embed/KOkpZxkuI7c",
    title: "6 Minute Relax and Sleep",
    author: "Wysa",
    run_time: 6
  },
  {
    video_url: "https://www.youtube.com/embed/aEqlQvczMJQ",
    title: "10 Minute Meditation for Sleep",
    author: "Goodful",
    run_time: 10
  },

  {
    video_url: "https://www.youtube.com/embed/YdDv_0kwsb8",
    title: "Sleep",
    author: "GM",
    run_time: 10
  },
  {
    video_url: "https://www.youtube.com/embed/Tr3Uw1UmTUk",
    title: "Your Best Sleep",
    author: "GM",
    run_time: 20
  },
  {
    video_url: "https://www.youtube.com/embed/ftmY7W3HWe4?si=1uwaxOZj7fQHN9bo",
    title: "Positive Sleep Guided Meditation",
    author: "GM",
    run_time: 20
  },
 
];
const seedComments = () => Video.bulkCreate(videoData);
module.exports = seedComments;
