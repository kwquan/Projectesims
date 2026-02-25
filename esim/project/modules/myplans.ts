const db = require("./pg")
const express = require('express')
const app = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/:username", async (req, res) => {
    const { username } = req.params

    const result = await db.query(
        "SELECT planid, country, data, duration, status, data_remaining, expires_at FROM esims WHERE userid = $1",
        [username]
    )
    res.json(result.rows);
})

app.put("/:id", async (req, res) => {
    const planid  = req.params['id']
    const { status, expires_at } = req.body

    await db.query(
        "UPDATE esims SET status = $1, expires_at = $2 WHERE planid = $3",
        [status, expires_at, planid]
    );
    res.send("Updated");
});

module.exports = app