const express = require("express")
const app = express()
const PORT = 3000

const login = require("./login")
const register = require("./register")
const payment = require("./payment")
const myplans = require("./myplans")

app.use(express.static("frontend"))
app.use("/login", login)
app.use("/register", register)
app.use("/add", payment)
app.use("/esims", myplans)

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`)
})