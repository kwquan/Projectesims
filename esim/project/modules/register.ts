const db = require("./pg")
const express = require('express')
const app = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use(express.static("frontend"))

app.post("/", async (req,res) => {
    const {username, password} = req.body
    const checkQuery = `SELECT * from users WHERE userid = $1`
    const insertQuery = 'INSERT INTO users (userid, password) VALUES ($1, $2) RETURNING *'
    const checkvalue = [username]
    const values = [username, password]
    const checkresult = await db.query(checkQuery, checkvalue)
    if (checkresult.rows.length == 1) {
        return res.status(409).json({message: "user already exists!"})
    }
    else{
        try {
            const result = await db.query(insertQuery, values)
            console.log('Row inserted:', result.rows[0])
            return res.status(201).json({message: "new user added to database"})
    } catch (err) {
            console.error(err);
    }
    }
})

module.exports = app