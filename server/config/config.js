const config = {

    development: {
        PORT: 5002,
        DB_CONNECTION: "mongodb://localhost/kindergarten",
        SALT_ROUNDS: 3,

    }, 
    production: {
        PORT: 80,
        DB_CONNECTION: "mongodb://localhost/kindergarten",
        SALT_ROUNDS: 8,

    }

}


module.exports = config[process.env.NODE_ENV.trim()];