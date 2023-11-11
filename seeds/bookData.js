//FREIDA

const { Book } = require("../models");
const bookData = [
  
  {
      name: "About the Brothers Grimm",
      source: "./assets/books/About_the_Brothers_Grimm.mp3",
  },
];
const seedComments = () => Book.bulkCreate(bookData);
module.exports = seedComments;
