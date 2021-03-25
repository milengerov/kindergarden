const express = require("express");

const config = require("./config/config");
console.log(config);


const app = express();
require("./config/express")(app)
require("./config/mongoose")(app);


app.get("/", (req, res) => {
    res.json({
        message: "Working!"
    });
});


app.listen(config.PORT, () => {
    // console.log(process.env.NODE_ENV);
    console.log(`Server is listening on port ${config.PORT}}`);
});