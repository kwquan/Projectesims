const db = require("./pg")
const express = require('express')
const app = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

async function createid(country) {
    let abv = ""
    const countryMap = new Map()
    countryMap.set("Japan", "JP")
    countryMap.set("Korea", "KR")
    countryMap.set("Taiwan", "TW")
    abv = countryMap.get(country)
    const value = [country]
    const Query = `SELECT count(*) from esims WHERE country = $1`
    const result = await db.query(Query, value)
    const count = parseInt(result.rows[0].count)
    return abv + String(count + 1)
}

app.post("/", async (req,res) => {
    const {username, country, data, duration, status, data_remaining, expires_at} = req.body
    const planid = await createid(country)
    const insertQuery = 'INSERT INTO esims (userid, planid, country, data, duration, status, data_remaining, expires_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
    const values = [username, planid, country, data, duration, status, data_remaining, expires_at]
    try {
            const result = await db.query(insertQuery, values)
            console.log('Row inserted:', result.rows[0])
            return res.status(201).json({message: "new plans added to database"})
    } catch (err) {
            console.error(err);
    }
    }
)

module.exports = app