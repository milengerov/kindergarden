const router = require("express").Router();

const { COOKIE_NAME } = require("../config/config")
const wishService = require("../services/wishService")
const isAuth = require("../middlewares/isAuth")

// router.get("/", (req, res) => {
//     res.json({
//         message: "des9ire Working!"
//     });
//     //TODO...
// });

router.get("/", (req, res, next) => {
    wishService.getAll()
        .then(wishes => {
            res.status(200).json(wishes)
        })
        .catch(next)
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

router.post("/:id/delete", isAuth, (req, res, next) => {
    const id = req.params.id
    const userId = req.user._id
    wishService.getOne(id)
        .then(wish => {
            if (wish.creator != userId) {
                res.status(401).json({ message: "401 Unauthorized!" });
                return
            }

            wishService.deleteOne(id)
                .then(deletedWish => {
                    console.log(deletedWish);
                    res.status(200).json({ message: "Post deleted successfully!" })
                })
                .catch(next)

        })
        .catch(next)
});








router.post("/create", isAuth, (req, res, next) => {
    // console.log(req.cookies[COOKIE_NAME]);
    // console.log(req.user);


    const user = req.user;
    const desireData = req.body;
    console.log("desireData +>>>", desireData);
    console.log("user +>>>", user);

    wishService.create({ ...desireData, date: new Date() }, user)
        .then(createdWish => {
            console.log(createdWish);
            res.status(201).json(createdWish)
        })


});




module.exports = router;