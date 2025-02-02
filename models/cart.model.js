const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    products: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
}, {
    timestamps: true
})

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart