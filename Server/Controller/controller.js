const path = require("path")

module.exports = {
    getHomePage: (req, res) => {
        res.sendFile(path.join(__dirname,`../../Client/index.html`))
    },
    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, `../../Client/style.css`))
    },
    getJavaScript: (req, res) => {
        res.sendFile(path.join(__dirname, `../../Client/main.js`))
    }
}