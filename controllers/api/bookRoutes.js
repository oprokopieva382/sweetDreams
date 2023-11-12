const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Book } = require("../../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const bookData = await Book.findAll();

    const books = bookData.map(book => book.get({plain:true}))
    //res.status(200).json(newbook);
    res.render('boringbooks', {books})
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;