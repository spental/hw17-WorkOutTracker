const path = require("path");


// we ask the server to return the home page of the app//
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendfFle(path.join(__dirname, "../public/index.html"))
    })

    // we ask the server to return the static exercise html page//
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })


    // we ask the server to return the stats html page//
    app.get('/stats', (req,res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })

}