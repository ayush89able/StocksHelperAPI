var express = require('express')
const bodyParser = require("body-parser")
const stockController = require("./Controllers/StockController")
require('./config/db')
var app = express()

var port = process.env.PORT || 8001

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
    .route("/")
    .get((req, res) => {
        res.send("Please go to '/stocks' route")
    })

app
    .route("/stocks")
    .get(stockController.listAllStocks)
    .post(stockController.buyStock)

app
    .route("/stocks/:stockid")
    .get(stockController.getStock)
    .put(stockController.updateStock)
    .delete(stockController.deleteStock)

app.listen(port, () => {
    console.log(`server is running on http://localhost${port}`)
})