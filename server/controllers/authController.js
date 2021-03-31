const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const { SALT_ROUNDS, SECRET, COOKIE_NAME } = require("../config/config")
const User = require("../models/User")

const verifyRegister = require("../middlewares/verifyRegister")


router.get("/", (req, res) => {
    res.json({
        message: "Auth Working!"
    });
});

router.post("/register", verifyRegister, async (req, res, next) => {
    { // const usermock = {
        //     username: "Panayot",
        //     email: "panayot@abv.bg",
        //     password: "123456",

        // };
        // let user = new User(usermock);
    }

    const { email, password } = req.body;

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    let user = new User({
        password: hash,
        email,
    });

    user.save()
        .then(createdUser => {
            console.log(createdUser);
            res.status(201).json(createdUser)
        })
        .catch(err => {
            next(err);
        });

});

router.post("/login", async (req, res, next) => {

    console.log(req.body);
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw { message: "Invalid email!" }
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid == false) {
            throw { message: "Invalid password" }
        }

        let token = jwt.sign({
            user: user.email,
            _id: user._id
        }, SECRET);

        jwt.verify(token, SECRET, (error, decoded) => {
            if (error) {
                res.clearCookie(COOKIE_NAME)
            }
            else {
                req.use = decoded;
                res
                    .status(200)
                    .json({
                        _id: user._id,
                        token,
                        user: user.email
                    });
            }
        });

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }




    // User.findOne({ email })
    //     .then(user => {
    //         console.log("user:.....");
    //         console.log(user);

    //         let token = jwt.sign({
    //             user: user.email,
    //             _id: user._id
    //         }, SECRET);

    //         res.status(200).json({
    //             _id: user._id, 
    //             token,
    //             user: user.email
    //         })

    //     })
    //     .catch(next);

})


router.get("/logout", (req, res, next) => {

})

module.exports = router;