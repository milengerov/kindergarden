const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const routes = require("../routes")
const errorHandler = require("../middlewares/errorHandler")

const auth = require("../middlewares/auth");

function setupExpress(app) {
    app.use(cookieParser());
    app.use(cors({credentials: true, origin: "http://localhost:3000"}));
    app.use(express.json());
    app.use(auth);
    app.use("/api", routes);
    app.use(errorHandler);

}


module.exports = setupExpress;