const router = require("express").Router();
const { SongLike, VideoLike, BookLike, Song } = require("../../models");

//GET all liked video request
router.get("/videolikes", async (req, res) => {
  try {
    const likeData = await VideoLike.findAll({
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

//CREATE liked video request
router.post("/videolike", async (req, res) => {
  try {
    const likeData = await VideoLike.create({
      user_id: req.session.user_id,
      video_id: req.body.video_id,
    });
    res.status(200).json(likeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//CREATE liked song request
router.post("/songlike", async (req, res) => {
  try {
    const likeData = await SongLike.create({
      user_id: req.session.user_id,
      song_id: req.body.song_id,
    });
    res.status(200).json(likeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all liked songs
router.get("/songs", async (req, res) => {
  try {
    const likeData = await SongLike.findAll();

    if (!likeData) {
      res.status(404).json({ message: "No liked songs found for this user!" });
      return;
    }

    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE liked song request by id
router.delete("/songlike/:id", async (req, res) => {
  try {
    const songData = await SongLike.destroy({
      where: {
        song_id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!songData) {
      res.status(404).json({ message: "No song found with this id!" });
      return;
    }

    res.status(200).json(songData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//CREATE liked book request
router.post("/booklike", async (req, res) => {
  try {
    const likeData = await bookLike.create({
      user_id: req.session.user_id,
      book_id: req.body.book_id,
    });
    res.status(200).json(likeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all liked books
router.get("/books", async (req, res) => {
  try {
    const likeData = await BookLike.findAll();

    if (!likeData) {
      res.status(404).json({ message: "No liked books found for this user!" });
      return;
    }

    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE liked book request by id
router.delete("/booklike/:id", async (req, res) => {
  try {
    const bookData = await BookLike.destroy({
      where: {
        book_id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: "No book found with this id!" });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
