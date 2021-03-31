const config = {

    development: {
        PORT: 5002,
        DB_CONNECTION: "mongodb://localhost/kindergarten",
        SALT_ROUNDS: 3,
        SECRET: "mechojubaja",
        COOKIE_NAME: "AUTH_SESSION"

    }, 
    production: {
        PORT: 80,
        DB_CONNECTION: "mongodb://localhost/kindergarten",
        SALT_ROUNDS: 8,
        SECRET: "mechojubaja",
        COOKIE_NAME: "AUTH_SESSION"

    }

}


module.exports = config[process.env.NODE_ENV.trim()];