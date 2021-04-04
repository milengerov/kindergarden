const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const { SALT_ROUNDS, SECRET, COOKIE_NAME } = require("../config/config")
const User = require("../models/User")

const authService = require("../services/authServise")

const verifyRegister = require("../middlewares/verifyRegister");



router.get("/", (req, res) => {
    res.json({
        message: "Auth Working!"
    });
});

router.post("/register", verifyRegister, (req, res, next) => {
    console.log("controller -> ", req.body);

    authService.registerUser(req.body)
        .then(createdUser => {
            console.log(createdUser);
            res.status(201).json(createdUser)
        })
        .catch(next);

});

// router.post("/register", verifyRegister, async (req, res, next) => {

//     console.log(req.body);
//     const { email, password } = req.body;

//     let salt = await bcrypt.genSalt(SALT_ROUNDS);
//     let hash = await bcrypt.hash(password, salt);

//     let user = new User({
//         password: hash,
//         email,
//     });

//     console.log(user);

//     user.save()
//         .then(createdUser => {
//             console.log(createdUser);
//             res.status(201).json(createdUser)
//         })
//         .catch(err => {
//             next(err);
//         });

// });

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

        res
            .status(200)
            .cookie(COOKIE_NAME, token, {httpOnly: true, secure: true})
            .json({
                message: "Logged in successfully!",
                _id: user._id,
                token,
                email: user.email
            });

        

    }
    catch (error) {
        res.status(500).json({ message: error.message });
        // next({status: 404, message: "No such user or password!"})
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


router.get('/logout', (req, res) => {
    res.cookie(COOKIE_NAME, "", {httpOnly: true, secure: true});
    res.status(200).json({ message: 'Successfully logged out' })
});

module.exports = router;