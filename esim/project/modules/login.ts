const db = require("./pg")
const express = require('express')
const app = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/", async (req,res) => {
    const {username, password} = req.body
    try {
        //console.log(req.rows)
        const query = `select * from users where userid = $1 and password = $2`
        const values = [username, password]
        const result = await db.query(query, values)
        if(result.rows.length == 1){
            console.log("user found. login successful")
            return res.status(200).json({message: "Login successful"})
        }
        else{
            console.log("user not found. userid or password is incorrect")
            return res.status(401).json({message: "Login failed"})
        } 
    }catch(err){
        console.error(err)
        return res.status(500).json({message:"Server error"})
    }
})

module.exports = app