const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Note } = require("../../models");

router.post("/", withAuth, async (req, res) => {
  try {
    const newNote = await Note.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newNote);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;