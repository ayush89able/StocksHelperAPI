const BroughtStock = require('../models/BroughtStock')

exports.listAllBroughtStocks = (req, res) => {
    BroughtStock.find({}, (err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(stock)
    });
};


exports.buyStock = (req, res) => {
    let newBroughtStock = new BroughtStock(req.body);
    newBroughtStock.save((err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(201).json(stock)
    });
};

exports.getBroughtStock = (req, res) => {
    BroughtStock.findById(req.params.stockid, (err, stock) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(stock)
    })
}

exports.updateBroughtStock = (req, res) => {
    BroughtStock.findOneAndUpdate(
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

exports.deleteBroughtStock = (req, res) => {
    BroughtStock.remove({ _id: req.params.stockid }, (err, stock) => {
        if (err) {
            res.status(404).send(err)
        }
        res.status(200).json({ message: "Brought Stock successfully deleted" })
    })
}