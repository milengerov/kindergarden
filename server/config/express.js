const express = require("express");
const cors = require("cors");

// const auth = require("../middlewares/auth");

function setupExpress (app) {
    app.use(express.json());
    app.use(cors());
    // app.use(auth);

}


module.exports = setupExpress;