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
    image: "http://localhost:8080/assets/productImage.jpg",
    rating: 4.4,
    reviews: "5.3k",
    title: "Kook N Keech",
    description: "Typography Printed T-shirt",
    currentPrice: 516,
    originalPrice: 1099,
    discount: "53% OFF",
  },
  {
    image: "http://localhost:8080/assets/product4.jpg",
    rating: 4.7,
    reviews: "3.2k",
    title: "Roadster",
    description: "Printed Round Neck T-shirt",
    currentPrice: 399,
    originalPrice: 799,
    discount: "50% OFF",
  },
  {
    image: "http://localhost:8080/assets/product5.jpg",
    rating: 4.1,
    reviews: "1.2k",
    title: "Levis",
    description: "Solid V Neck T-shirt",
    currentPrice: 299,
    originalPrice: 899,
    discount: "45% OFF",
  },
  {
    image: "http://localhost:8080/assets/product2.jpg",
    rating: 3.9,
    reviews: "2.8k",
    title: "Tokyo Talkies",
    description: "Floral A-Line Midi Dress",
    currentPrice: 649,
    originalPrice: 1499,
    discount: "50% OFF",
  },
  {
    image: "http://localhost:8080/assets/product1.jpg",
    rating: 4.0,
    reviews: "9.0k",
    title: "Roadster",
    description: "Women Cargo Track Pants",
    currentPrice: 781,
    originalPrice: 2499,
    discount: "66% OFF",
  },
  {
    image: "http://localhost:8080/assets/product3.jpg",
    rating: 4.2,
    reviews: "1.4k",
    title: "DressBerry",
    description: "Pure Cotton Applique T-shirt",
    currentPrice: 599,
    originalPrice: 999,
    discount: "40% OFF",
  },
  {
    image: "http://localhost:8080/assets/product5.jpg",
    rating: 4.1,
    reviews: "1.2k",
    title: "Levis",
    description: "Solid V Neck T-shirt",
    currentPrice: 299,
    originalPrice: 899,
    discount: "45% OFF",
  },
  {
    image: "http://localhost:8080/assets/product2.jpg",
    rating: 3.9,
    reviews: "2.8k",
    title: "Tokyo Talkies",
    description: "Floral A-Line Midi Dress",
    currentPrice: 649,
    originalPrice: 1499,
    discount: "50% OFF",
  },  
  {
    image: "http://localhost:8080/assets/productImage.jpg",
    rating: 4.4,
    reviews: "5.3k",
    title: "Kook N Keech",
    description: "Typography Printed T-shirt",
    currentPrice: 516,
    originalPrice: 1099,
    discount: "53% OFF",
  },
  {
    image: "http://localhost:8080/assets/product1.jpg",
    rating: 4.0,
    reviews: "9.0k",
    title: "Roadster",
    description: "Women Cargo Track Pants",
    currentPrice: 781,
    originalPrice: 2499,
    discount: "66% OFF",
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
