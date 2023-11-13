const router = require("express").Router();
const withAuth = require("../utils/auth");
const {
  User,
  Note,
  Video,
  Song,
  Book,
  SongLike,
  VideoLike,
  BookLike
} = require("../models");


//Homepage render(project entry)
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login with redirect to profile page
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

//Meditation page render
router.get("/meditation", withAuth, async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    //go get all the videos from db
    const videos = await Video.findAll({
      // where: {
      //   run_time: req.params.type
      // },
      order: [["run_time", "ASC"]],
    });
    //get the video objects out of the array
    const allVideos = videos.map((video) => video.get({ plain: true }));
    //show the meditation page and give it all of the video data
    res.render("meditation", {
      allVideos,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Boring books page render
router.get("/boringbooks", withAuth, async(req, res) => {
   try {
     const allBooks = await Book.findAll();

     const data = allBooks.map((book) => book.get({ plain: true }));

     res.render("boringbooks", {
       allBooks: data,
     });
   } catch (err) {
     res.status(500).json(err);
   }
});

//Yoga music page render
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

//Yoga music page render
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        { model: Video, through: VideoLike },
        { model: Song, through: SongLike },
      ],
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    console.log(user);

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//My video page render with data display(navbar)
router.get("/myvideo", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      include: { model: Video, through: VideoLike },
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    console.log(user);

    res.render("myvideos", {
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//My notes page render with data display(navbar)
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

//My songs page render with data display(navbar)
router.get("/mysongs", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: { model: Song, through: SongLike },
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });
    // console.log(user);
    res.render("mysongs", { likedSongs: user });
  } catch (error) {
    console.error("Error occurred while fetching liked songs", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//My books page render with data display(navbar)
router.get("/mybooks", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: { model: Book, through: BookLike },
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });
    // console.log(user);
    res.render("mybooks", {
      likedBooks: user
    });
  } catch (error) {
    console.error("Error occurred while fetching liked books", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;