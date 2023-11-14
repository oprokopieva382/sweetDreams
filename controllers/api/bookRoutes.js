const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Book } = require("../../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const newBook = await Book.findAll(
      );

    res.status(200).json(newBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;