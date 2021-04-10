const Wish = require("../models/Wish")

function create(wishData, user) {

    const wish = new Wish({...wishData, creator: user._id});
    return wish.save();
}

function getAll(options) {
    return Wish.find(options);
        
}

function getOne(id) {
    return Wish.findById(id);
        
}

function deleteOne(id) {
    return Wish.findByIdAndDelete(id);
}

function editOne(id, desireData) {
    return Wish.findByIdAndUpdate(id, desireData);
}




module.exports = {
    create,
    getAll,
    getOne,
    deleteOne,
    editOne
}
