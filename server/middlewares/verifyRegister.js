const User = require("../models/User")

function checkUpDuplicateEmail(req, res, next){
    User.findOne({email: req.body.email}, function(err, user) {
        if (err){
            res.status(500).json({message: err});
            return;
        }

        if (user) {
            res.status(400).json({message: "Email is already in use!"});
            return;
        }

        next();
    });
}

module.exports = checkUpDuplicateEmail;