const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Note, Video, Song } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    if (req.session.logged_in) {
      res.redirect("profile");
      return;
    }

    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/meditation", withAuth, async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    //go get all the videos from db
    const videos = await Video.findAll({
      where: { run_time: req.params.type },
      order: [["run_time", "ASC"]],
    });
    //get the video objects out of the array
    const allVideos = videos.map((video) => video.get({ plain: true }));
    //show the meditation page and give it all of the video data
    res.render("meditation", { allVideos });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/boringbooks", withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    res.render("boringbooks");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/yogamusic", withAuth, async (req, res) => {
  try {
    const allSongs = await Song.findAll();

    const data = allSongs.map((song) => song.get({ plain: true }));

    res.render("yogamusic", {
      allSongs: data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/mynotes", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      include: Note,
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("mynotes", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/mysongs", withAuth, async (req, res) => {
  try {
    const likedSongs = await Like.findAll({
      where: { user_id: req.session.user_id },
      include: Song,
    });

    res.render("mysongs", { likedSongs });
  } catch (error) {
    console.error("Error occurred while fetching liked songs", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
