const Wish = require("../models/Wish")

function create(wishData, user) {
    // console.log(wishData);
    const wish = new Wish(wishData, user._id);
    return wish.save();
}

function getAll() {
    return Wish.find();
        
}





module.exports = {
    create,
    getAll
}
