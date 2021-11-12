const { Pool } = require("pg");

module.exports = new Pool({
    user: "postgres",
    password: "senha123",
    host: "localhost",
    port: 5433,
    database: "launchstoredb" 
})