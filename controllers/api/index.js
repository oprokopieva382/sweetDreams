const router = require("express").Router();
const userRoutes = require("./userRoutes");
const noteRoutes = require("./noteRoutes");
const videoRoutes = require("./videoRoutes");


router.use("/users", userRoutes);
router.use("/notes", noteRoutes);
router.use("/videos", videoRoutes);


module.exports = router;
