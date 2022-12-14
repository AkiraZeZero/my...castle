const express = require("express")
const cors = require("cors")
const app = express()


const { getHomePage, getCSS, getJavaScript } = require(`./Controller/controller`)


app.use(cors())
app.use(express.json())
app.use(express.static("Client"))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, `../client/index.html`))
// })
app.get(`/`, getHomePage)
app.get(`/css`, getCSS)
app.get(`/js`, getJavaScript)

const port = process.env.PORT || 4005

app.listen(port, console.log("Server is running on port 4005"))