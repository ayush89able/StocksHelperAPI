const Stock = require('../models/Stock')

exports.listAllStocks = (req, res) => {
    Stock.find({}, (err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(stock)
    });
};


exports.buyStock = (req, res) => {
    let newStock = new Stock(req.body);
    newStock.save((err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(201).json(stock)
    });
};

exports.getStock = (req, res) => {
    Stock.findById(req.params.stockid, (err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(stock)
    })
}

exports.updateStock = (req, res) => {
    Stock.findOneAndUpdate(
        { _id: req.params.stockid },
        req.body,
        { new: true },
        (err, stock) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).json(stock)
        }
    )
}

exports.deleteStock = (req, res) => {
    Stock.remove({ _id: req.params.stockid }, (err, stock) => {
        if (err) {
            res.status(404).send(err)
        }
        res.status(200).json({ message: "Stock successfully deleted" })
    })
}