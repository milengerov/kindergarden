const mongoose = require("mongoose");
const { DB_CONNECTION } = require("./config")




function setupMongoose(app) {
    
    mongoose.connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once("open", () => console.log("Connected to db"));
}


module.exports = setupMongoose;