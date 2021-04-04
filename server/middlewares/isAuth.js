function isAuth(req, res, next) {
    //if auth middleware has attached user to req:
    if (!req.user) {
        res.status(401).json({message: "Not authorized!"})
    }
    
    next();
}

module.exports = isAuth