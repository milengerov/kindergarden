const express = require("express");

const config = require("./config/config");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler")


const app = express();
require("./config/express")(app)
require("./config/mongoose")(app);



app.use("/api", routes);

app.use(errorHandler);


app.listen(config.PORT, () => {
    // console.log(process.env.NODE_ENV);
    console.log(`Server is listening on port ${config.PORT}}`);
});