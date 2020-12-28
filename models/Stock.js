const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StockSchema = new Schema({
    stockName: {
        type: String,
        required: true
    },
    costPerUnit: {
        type: Number,
        required: true
    },
    numberOfUnits: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Stock", StockSchema)
