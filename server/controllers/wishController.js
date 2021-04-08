const router = require("express").Router();

const { COOKIE_NAME } = require("../config/config")
const wishService = require("../services/wishService")

// router.get("/", (req, res) => {
//     res.json({
//         message: "des9ire Working!"
//     });
//     //TODO...
// });

router.get("/", (req, res) => {
    wishService.getAll()
        .then(wishes => {
            res.status(200).json(wishes)
        })
        .catch()
});

router.get("/:id", (req, res, next) => {
    const id = req.params.id
    wishService.getOne(id)
        .then(wish => {
            console.log(wish);
            res.status(200).json(wish)
        })
        .catch(next)
});


router.post("/create", (req, res, next) => {
    // console.log(req.cookies[COOKIE_NAME]);
    // console.log(req.user);

    const user = req.user;
    const desireData = req.body;
    console.log("desireData +>>>", desireData);
    console.log("user +>>>", user);

    wishService.create({...desireData, date: new Date()}, user)
        .then(createdWish => {
            console.log(createdWish);
            res.status(201).json(createdWish)
        })

    //TODO...
});




module.exports = router;