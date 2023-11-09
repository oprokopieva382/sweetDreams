const router = require("express").Router();
const { Video } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const likeData = await Like.findAll({
      where: {
        user_id: req.session.user_id,
      },
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
router.post("/user/:id", async (req, res) => {
  try {
    
    console.trace(req.params.id);
    console.trace(req.session.user_id);

    const likeData = await Like.create({
      video_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.status(200).json(likeData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
