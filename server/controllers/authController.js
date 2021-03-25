const router = require("express").Router();

const User = require("../models/User")


router.get("/", (req, res) => {
    res.json({
        message: "Auth Working!"
    });
});

router.post("/register", (req, res) => {
    // const userData = req.body;
    const usermock = {
        username: "Panayot",
        email: "panayot@abv.bg",
        password: "123456"
    };

    // let user = new User(userData);
    let user = new User(usermock);

    user.save()
        .then(createdUser => {
            console.log(createdUser);
            res.status(201).json(createdUser)
        })

})




module.exports = router;