const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema({

    email: {
        require: true,
        unique: true,
        type: String

    },
    password: {
        type: String
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});


module.exports = mongoose.model("Wish", wishSchema);