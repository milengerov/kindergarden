const express = require("express");

const app = express();
const PORT = 5002;


app.get("/", (req, res) => {
    res.send("server is working");
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});