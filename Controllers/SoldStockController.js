const SoldStock = require('../models/SoldStock')

exports.listAllSoldStocks = (req, res) => {
    SoldStock.find({}, (err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(stock)
    });
};


exports.sellStock = (req, res) => {
    let newSoldStock = new SoldStock(req.body);
    newSoldStock.save((err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(201).json(stock)
    });
};

exports.getSoldStock = (req, res) => {
    SoldStock.findById(req.params.stockid, (err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(stock)
    })
}

exports.updateSoldStock = (req, res) => {
    SoldStock.findOneAndUpdate(
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

exports.deleteSoldStock = (req, res) => {
    SoldStock.remove({ _id: req.params.stockid }, (err, stock) => {
        if (err) {
            res.status(404).send(err)
        }
        res.status(200).json({ message: "Sold Stock successfully deleted" })
    })
}