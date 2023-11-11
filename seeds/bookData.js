//FREIDA

const { Book } = require("../models");
const bookData = [
  
  {
      name: "About the Brothers Grimm",
      source: "./assets/books/About_the_Brothers_Grimm.mp3",
  },
  {
    name: "Ashputtel",
    source: "./assets/books/Ashputtel.mp3",
},
{
  name: "Briar Rose",
  source: "./assets/books/Briar_Rose.mp3",
},{
  name: "Clever Elsie",
  source: "./assets/books/Clever_Elsie.mp3",
},{
  name: "About the Brothers Grimm",
  source: "./assets/books/About_the_Brothers_Grimm.mp3",
},{
  name: "Hansel and Gretel",
  source: "./assets/books/Hansel_and_Gretel.mp3",
},{
  name: "Jorinda and Jorindel",
  source: "./assets/books/Jorinda_and_Jorindel.mp3",
},{
  name: "King Grisly-Beard",
  source: "./assets/books/King_Grisly-Beard.mp3",
},{
  name: "Mother Holle",
  source: "./assets/books/Mother_Holle.mp3",
},{
  name: "Old Sultan",
  source: "./assets/books/Old_Sultan.mp3",
},{
  name: "Rumpelstiltskin",
  source: "./assets/books/Rumpelstiltskin.mp3",
},{
  name: "Snowdrop",
  source: "./assets/books/Snowdrop.mp3" ,
},{
  name: "The Dog and the Sparrow",
  source: "./assets/books/The_Dog_and_the_Sparrow.mp3",
},{
  name: "The Elves and the Shoemaker",
  source: "./assets/books/The_Elves_and_the_Shoemaker.mp3",
},{
  name: "The Fisherman and his Wife",
  source: "./assets/books/The_Fisherman_and_his_Wife.mp3",
},{
  name: "The Twelve Dancing Princesses",
  source: "./assets/books/The_Twelve_Dancing_Princesses.mp3",
},
];
const seedComments = () => Book.bulkCreate(bookData);
module.exports = seedComments;
