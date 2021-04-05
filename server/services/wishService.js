const Wish = require("../models/Wish")

function create(wishData, user) {
    // console.log(wishData);
    const wish = new Wish(wishData, user._id);
    return wish.save();
}





module.exports = {
    create,
}
