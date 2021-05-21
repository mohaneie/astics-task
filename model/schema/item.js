const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
    productName: { type: String, },
    price: { type: Number },
    qty: { type: Number }
}, { timestamps: true })

const item = mongoose.model('Item', itemSchema);

module.exports = item;