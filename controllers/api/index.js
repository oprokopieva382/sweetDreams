const router = require("express").Router();
const userRoutes = require("./userRoutes");
const noteRoutes = require("./noteRoutes");
const videoRoutes = require("./videoRoutes");
const likeRoutes = require("./likeRoutes");


router.use("/users", userRoutes);
router.use("/notes", noteRoutes);
router.use("/videos", videoRoutes);
router.use("/likes", likeRoutes);


module.exports = router;
