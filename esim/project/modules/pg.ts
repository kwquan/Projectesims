const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    //host: "localhost",
    host: "db",
    database: "esim",
    port: 5432,
    password: "12345"
})

client.connect().then(() => {console.log("connected to esim database")})
.catch(() => {console.log("cant connect to database")})

module.exports = client