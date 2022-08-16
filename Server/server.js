const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()


const { getHomePage, getCSS } = require(`./Controller/controller.js`)


app.use(cors())
app.use(express.json())
app.use(express.static("client"))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, `../client/index.html`))
// })
app.get(`/`, getHomePage)
app.get(`/css`, getCSS)
app.get(`/js`, getJavaScript)

const port = process.env.PORT || 4000

app.listen(4000, console.log("Server is running on port 4000"))