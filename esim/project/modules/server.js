var express = require("express");
var app = express();
var PORT = 3000;
var login = require("./login");
var register = require("./register");
var payment = require("./payment");
var myplans = require("./myplans");
app.use(express.static("frontend"));
app.use("/login", login);
app.use("/register", register);
app.use("/add", payment);
app.use("/esims", myplans);
app.listen(PORT, function () {
    console.log("Server running at https://localhost:".concat(PORT));
});
