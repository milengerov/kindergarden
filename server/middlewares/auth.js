const jwt = require("jsonwebtoken");

const { SECRET } = require("../config/config")

function auth(req, res, next) {
    let authorizationHeader = req.get("Autorization");

    if (authorizationHeader) {
        let token = authorizationHeader.split(" ")[1];  //"Bearer 20iejas;lkdfj03wjfldj.sldfkjsldkfjlsdfsdf.sdfsdgdgf"

        try {
            let decoded = jwt.verify(token, SECRET);
            req.user = decoded;
        } catch (error) {
            return next();
        }



    }

    next();
}

module.exports = auth;