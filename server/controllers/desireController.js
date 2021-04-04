const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        message: "des9ire Working!"
    });
    //TODO...
});


router.post("/create", (req, res, next) => {

    //TODO...
});




module.exports = router;