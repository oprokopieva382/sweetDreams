const router = require("express").Router();
const { Like } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const likeData = await Like.findAll({
      // where: {
      //   user_id: req.session.user_id,
      // },
    });

    if (!likeData) {
      res.status(404).json({ message: "No likes associated with this id!" });
      return;
    }

    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const likeData = await Like.create({
      user_id: req.session.user_id,
      video_id: req.body.video_id,
    });
    res.status(200).json(likeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get liked songs for a specific user
router.get("/songs/:songId", async (req, res) => {
  try {
    const likeData = await Like.findAll({
      where: {
        user_id: req.session.user_id,
        song_id: req.params.songId,
      },
      include: Song,
    });

    if (!likeData) {
      res.status(404).json({ message: "No liked songs found for this user!" });
      return;
    }

    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST Like a song
router.post("/songs/:songId", async (req, res) => {
  try {
    const existingLike = await Like.findOne({
      where: {
        song_id: req.params.songId,
        user_id: req.session.user_id,
      },
    });

    if (existingLike) {
      res.status(400).json({ message: "Song is already liked by the user." });
      return;
    }

    const likeData = await Like.create({
      song_id: req.params.songId,
      user_id: req.session.user_id,
    });
  
    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
