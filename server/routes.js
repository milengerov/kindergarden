const router = require("express").Router();

const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const desireController = require("./controllers/desireController");
const kindergartenController = require("./controllers/kindergartenController");


router.use("/", homeController);
router.use("/auth", authController);
router.use("/desire", desireController);
router.use("/kindergartens", kindergartenController)


module.exports = router;