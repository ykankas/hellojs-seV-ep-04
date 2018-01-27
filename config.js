//config.js

exports.knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./esquema_inicial.db"
    },
    
useNullAsDefault: true
})