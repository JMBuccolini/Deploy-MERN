const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  disponible: {
    type: Boolean,
  }
});

const Product = model('Product', ProductSchema);

module.exports = Product;
