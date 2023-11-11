const router = require("express").Router();
const userRoutes = require("./userRoutes");
const noteRoutes = require("./noteRoutes");
const videoRoutes = require("./videoRoutes");
const likeRoutes = require("./likeRoutes");
const bookRoutes = require("./bookRoutes");

router.use("/users", userRoutes);
router.use("/notes", noteRoutes);
router.use("/videos", videoRoutes);
router.use("/likes", likeRoutes);
router.use("/books", bookRoutes);


module.exports = router;
