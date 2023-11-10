const { Song } = require("../models");
const songData = [
  {
    name: "Surreal Forest",
    source: "/assets/audio/04-Meydan-Surreal-Forest.mp3",
  },
  {
    name: "Ambient music nature",
    source: "/assets/audio/alex-productions-Ambient-music-nature.mp3",
  },
  {
    name: "Aqua Euphoria",
    source: "/assets/audio/Aqua-Euphoria-with-Lucentia.mp3",
  },
  {
    name: "Birds singing",
    source: "/assets/audio/birds-singing-calm-river-nature-ambient-sound.mp3",
  },
  {
    name: "Evening",
    source: "/assets/audio/Evening-Improvisation-with-Ethera.mp3",
  },
  {
    name: "In Stillness",
    source: "/assets/audio/in-stillness-tranquilium.mp3",
  },
  {
    name: "Away",
    source: "/assets/audio/Meydan-Away.mp3",
  },
  {
    name: "Freezing but warm",
    source: "/assets/audio/Meydan-Freezing-but-warm.mp3",
  },
  {
    name: "Ocean Wave",
    source: "/assets/audio/ocean-wave-ambient-boy.mp3",
  },
  {
    name: "Path On Shore",
    source: "/assets/audio/Our-Path-On-Shore.mp3",
  },
  {
    name: "Soul Searcher",
    source: "/assets/audio/sb_soulsearcher.mp3",
  },
  {
    name: "Stones",
    source: "/assets/audio/stones-future-forests.mp3",
  },
  {
    name: "Your Spirit",
    source: "/assets/audio/Your-Spirit.mp3",
  },
  {
    name: "Sleeping Forest",
    source: "/assets/audio/sleeping-forest.mp3",
  },
  {
    name: "Sea Of Thoughts",
    source: "/assets/audio/Sea-Of-Thoughts.mp3",
  },
  {
    name: "Relaxing meditation",
    source: "/assets/audio/relaxing-meditation.mp3",
  },
  {
    name: "Our Path On Shore",
    source: "/assets/audio/Our-Path-On-Shore.mp3",
  },
  {
    name: "Relax sounds",
    source: "/assets/audio/relax-sounds.mp3",
  },
  {
    name: "Journey Ends Here",
    source: "/assets/audio/Our-Journey-Ends-Here.mp3",
  },
  {
    name: "Meditative Rain",
    source: "/assets/audio/meditative-rain.mp3",
  },
  {
    name: "High Vibrations",
    source: "/assets/audio/high-vibrations.mp3",
  },
  {
    name: "Fly With Me",
    source: "/assets/audio/fly-with-me.mp3",
  },
  {
    name: "Dhaka",
    source: "/assets/audio/Dhaka.mp3",
  },
  {
    name: "A Day By The Sea",
    source: "/assets/audio/A-Day-By-The-Sea.mp3",
  },
];
console.log(Song);
const seedComments = () => Song.bulkCreate(songData);
module.exports = seedComments;
