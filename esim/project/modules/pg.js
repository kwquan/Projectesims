var Client = require('pg').Client;
var client = new Client({
    user: "postgres",
    //host: "localhost",
    host: "db",
    database: "esim",
    port: 5432,
    password: "12345"
});
client.connect().then(function () { console.log("connected to esim database"); })
    .catch(function () { console.log("cant connect to database"); });
module.exports = client;
