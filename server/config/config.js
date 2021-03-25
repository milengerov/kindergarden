const config = {

    development: {
        PORT: 5002,
        DB_CONNECTION: "mongodb://localhost/kindergarten",

    }, 
    production: {
        PORT: 80,
        DB_CONNECTION: "mongodb://localhost/kindergarten",

    }

}


module.exports = config[process.env.NODE_ENV.trim()];