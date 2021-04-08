const Wish = require("../models/Wish")

function create(wishData, user) {

    const wish = new Wish({...wishData, creator: user._id});
    return wish.save();
}

function getAll() {
    return Wish.find();
        
}

function getOne(id) {
    return Wish.findById(id);
        
}





module.exports = {
    create,
    getAll,
    getOne
}
