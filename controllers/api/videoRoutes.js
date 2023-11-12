const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Video } = require("../../models");

//GET all video request
router.get("/", withAuth, async (req, res) => {
  try {
    const newVideo = await Video.findAll(
      );

    res.status(200).json(newVideo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;