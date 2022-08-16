module.exports = {
    getHomePage: (req, res) => {
        res.sendFile(path.join(__dirname,`../client/index.html`))
    },
    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, `../client/styles`))
    },
    getJavaScript: (req, res) => {
        res.sendFile(path.join(__dirname, `../../client/index.html`))
    }
}