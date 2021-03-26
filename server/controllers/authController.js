const router = require("express").Router();
const bcrypt = require("bcrypt");


const {SALT_ROUNDS} = require("../config/config")
const User = require("../models/User")


router.get("/", (req, res) => {
    res.json({
        message: "Auth Working!"
    });
});

router.post("/register", async(req, res) => {
    // const usermock = {
    //     username: "Panayot",
    //     email: "panayot@abv.bg",
    //     password: "123456",

    // };
    // let user = new User(usermock);



    const {username, email, password, repeatpassword} = req.body;

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    let user = new User({
        username,
        password: hash,
        email,
    });

    user.save()
        .then(createdUser => {
            console.log(createdUser);
            res.status(201).json(createdUser)
        });

})




module.exports = router;