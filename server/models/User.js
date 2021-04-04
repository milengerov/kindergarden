const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    email: {
        require: true,
        unique: true,
        type: String

    },
    password: {
        type: String
    },
    wishes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Wish"
        }
    ]
});


module.exports = mongoose.model("User", userSchema);