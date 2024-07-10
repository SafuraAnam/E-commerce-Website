const mongoose = require("mongoose");
const Product = require("../models/Product");

//connecting db
const MONGO_URL = "mongodb://127.0.0.1:27017/drip-crew";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const products = [
  {
    image: "path/to/productImage.jpg",
    rating: 4.4,
    reviews: "5.3k",
    title: "Kook N Keech",
    description: "Typography Printed T-shirt",
    currentPrice: 516,
    originalPrice: 1099,
    discount: "53% OFF",
  },
  {
    image: "path/to/anotherProductImage.jpg",
    rating: 4.7,
    reviews: "3.2k",
    title: "Roadster",
    description: "Printed Round Neck T-shirt",
    currentPrice: 399,
    originalPrice: 799,
    discount: "50% OFF",
  },
  // Add more products as needed
];
// Function to initialize the database with sample data
const initDB = async () => {
  try {
    await Product.deleteMany({}); // Clear the User collection
    await Product.insertMany(products); // Insert the new products
    console.log("Data inserted");

    console.log(products);
  } catch (err) {
    console.error("Error initializing data:", err);
  }
};
initDB();
