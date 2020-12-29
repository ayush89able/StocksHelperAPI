var express = require('express')
const bodyParser = require("body-parser")
const broughtStockController = require("./Controllers/BroughtStockController")
const soldStockController = require("./Controllers/SoldStockController")
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
    .route("/stocks/broughtStocks")
    .get(broughtStockController.listAllBroughtStocks)
    .post(broughtStockController.buyStock)

app
    .route("/stocks/broughtStocks/:stockid")
    .get(broughtStockController.getBroughtStock)
    .put(broughtStockController.updateBroughtStock)
    .delete(broughtStockController.deleteBroughtStock)

app
    .route("/stocks/soldStocks")
    .get(soldStockController.listAllSoldStocks)
    .post(soldStockController.sellStock)

app
    .route("/stocks/soldStocks/:stockid")
    .get(soldStockController.getSoldStock)
    .put(soldStockController.updateSoldStock)
    .delete(soldStockController.deleteSoldStock)

app.listen(port, () => {
    console.log(`server is running on http://localhost${port}`)
})