const jwt = require("jsonwebtoken");

const { SECRET, COOKIE_NAME } = require("../config/config")

function auth(req, res, next) {
    // let authorizationHeader = req.get("Autorization");
    const token = req.cookies[COOKIE_NAME]
    // console.log(token);

    if (token) {
        // let token = authorizationHeader.split(" ")[1];  //"Bearer 20iejas;lkdfj03wjfldj.sldfkjsldkfjlsdfsdf.sdfsdgdgf"
        
        try {
            let decodedUser = jwt.verify(token, SECRET);
            req.user = decodedUser;
            console.log("decodedUser: ",decodedUser);
        } catch (error) {
            return next();
        }
    }

    next();
}

module.exports = auth;