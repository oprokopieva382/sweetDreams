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

module.exports = router;
