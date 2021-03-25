const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        require: true,
        unique: true,
        type: String
    },
    email: {
        require: true,
        unique: true,
        type: String

    },
    password: {
        type: String
    }

});


module.exports = mongoose.model("User", userSchema);