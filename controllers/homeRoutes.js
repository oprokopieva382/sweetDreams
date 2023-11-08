const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Note } = require("../models");

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

router.get("/meditation", withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    if (req.session.logged_in) {
      res.render("meditation");
      return;
    }

    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/boringbooks", withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    if (req.session.logged_in) {
      res.render("boringbooks");
      return;
    }

    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/yogamusic", withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    if (req.session.logged_in) {
      res.render("yogamusic");
      return;
    }

    res.render("login");
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
    const userData = await User.findByPk(req.session.user_id, {include: Note,
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

module.exports = router;
