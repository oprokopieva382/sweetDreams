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
    video_url: "https://www.youtube.com/embed/USPJLg_mcps?si=zX9MraALXrlot5z7",
    title: "Align With What You Desire",
    author: "GM",
    run_time: 10
  },
  {
    video_url: "https://www.youtube.com/embed/YdDv_0kwsb8",
    title: "Sleep",
    author: "GM",
    run_time: 10
  },
  {
    video_url: "https://www.youtube.com/embed/aqyj_U79ejA?si=6LjinRLPPeukYSI-",
    title: "Cultivating Self-Love & Self-Acceptance",
    author: "GM",
    run_time: 16
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
  {
    video_url: "https://www.youtube.com/embed/GTdEJwVOxg0?si=_JWX5Gkhy1mCxrBf",
    title: "Inner Peace and Deep Relaxation",
    author: "GM",
    run_time: 20
  },
  {
    video_url: "https://www.youtube.com/embed/OfHsOmFZZyI?si=TJZTQ7mzGQz5aQNT",
    title: "Positive Affirmations. While You Sleep",
    author: "GM",
    run_time: 21
  },
  
  {
    video_url: "https://www.youtube.com/embed/2DXqMBXmP8Q?si=VKVMqlAoqVpRbYsO",
    title: "The Powerful Release of Letting Go!",
    author: "GM",
    run_time: 28
  },
 
];
const seedComments = () => Video.bulkCreate(videoData);
module.exports = seedComments;
