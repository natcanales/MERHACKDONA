const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        // enum?
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product