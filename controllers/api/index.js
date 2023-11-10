const router = require("express").Router();
const userRoutes = require("./userRoutes");
const noteRoutes = require("./noteRoutes");
const videoRoutes = require("./videoRoutes");
const homeRoutes = require("../homeRoutes");

router.use("/users", userRoutes);
router.use("/notes", noteRoutes);
router.use("/videos", videoRoutes);
router.use("/home", homeRoutes);

module.exports = router;
