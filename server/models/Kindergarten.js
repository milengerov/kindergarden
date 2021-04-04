const mongoose = require("mongoose");

const kindergartenSchema = new mongoose.Schema({

    "Код на институцията": String,
    "Име на институцията": String,
    "Район": String,
    "Вид на институцията": String,
    "Вид на институцията - детайлен": String,
    "Вид на институцията според начина на финансиране": String,
    "Адрес": String,
    "Електронна поща": String,
    "Интернет страница": String

});


module.exports = mongoose.model("Kindergarten", kindergartenSchema);