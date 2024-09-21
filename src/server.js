const express = require("express")
const app = express()
const PORT = 3971

app.use("/confirm", (req, res) => {
    res.send("Hello Welcome to the server!")
})

app.listen(PORT, () => {
    console.log(`Server Started at 🚀 http://localhost:${PORT} `)
})