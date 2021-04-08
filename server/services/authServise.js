const bcrypt = require("bcrypt");

const { SALT_ROUNDS, SECRET, COOKIE_NAME } = require("../config/config")
const User = require("../models/User")



async function registerUser(userData) {
    console.log("userData", userData);

    const { email, password } = userData;


    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    let user = new User({
        password: hash,
        email,
    });
    

    const createdUser = await user.save();

    return createdUser;

}

async function getOne(id) {
    const user = await User.findById(id);
    return user;
}


module.exports = {
    registerUser,
    getOne
}