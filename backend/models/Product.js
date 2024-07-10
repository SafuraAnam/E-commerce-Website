const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  rating: Number,
  reviews: String,
  title: String,
  description: String,
  currentPrice: Number,
  originalPrice: Number,
  discount: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
