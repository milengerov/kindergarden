const router = require("express").Router();


router.get("/", (req, res) => {
    res.json({
        message: "Auth Working!"
    });
});




module.exports = router;