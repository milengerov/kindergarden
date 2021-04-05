const router = require("express").Router();

const { COOKIE_NAME } = require("../config/config")
const wishService = require("../services/wishService")

router.get("/", (req, res) => {
    res.json({
        message: "des9ire Working!"
    });
    //TODO...
});


router.post("/create", (req, res, next) => {
    // console.log(req.cookies[COOKIE_NAME]);
    // console.log(req.user);

    const user = req.user;
    const desireData = req.body;
    console.log("desireData +>>>",desireData);

    wishService.create(desireData, user)
        .then(createdWish => {
            console.log(createdWish);
            res.status(201).json(createdWish)
        })

    //TODO...
});




module.exports = router;