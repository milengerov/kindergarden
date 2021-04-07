const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema({

    currentKindergarten: {
        require: true,
        type: String

    },
    desiredKindergarten: {
        require: true,
        type: String
    },
    born: {
        require: true,
        type: String
    },
    firstName: {
        require: true,
        type: String
    },

    date: {
        type: Date
    },

    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});


module.exports = mongoose.model("Wish", wishSchema);