const router = require("express").Router();
const Kindergarten = require("../models/Kindergarten");


router.get("/:currentRegion", (req, res) => {
    const region = req.params.currentRegion
    // console.log(region);
    const filter ={"Район": region};
    
    Kindergarten.find(filter)
        .then(kindergartens => {
            res.status(200).json(kindergartens)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })




    
});




module.exports = router;