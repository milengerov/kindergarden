const router = require("express").Router();

const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const wishController = require("./controllers/wishController");
const kindergartenController = require("./controllers/kindergartenController");



router.use("/", homeController);
router.use("/auth", authController);
router.use("/desires", wishController);
router.use("/kindergartens", kindergartenController)


module.exports = router;