const router = require("express").Router();
const userRoutes = require("./userRoutes");
const noteRoutes = require("./noteRoutes");
const videoRoutes = require("./videoRoutes");
const likeRoutes = require("./likeRoutes");
<<<<<<< HEAD
=======
const bookRoutes = require("./bookRoutes");
>>>>>>> main

router.use("/users", userRoutes);
router.use("/notes", noteRoutes);
router.use("/videos", videoRoutes);
router.use("/likes", likeRoutes);
<<<<<<< HEAD
=======
router.use("/books", bookRoutes);

>>>>>>> main

module.exports = router;
