const mongoose = require('mongoose');
const initData = require("./data.js");
const  User=require("../models/user.js");

//connecting db
const MONGO_URL="mongodb://127.0.0.1:27017/drip-crew";

main()
  .then(()=>{console.log("connected to db");})
  .catch((err)=>{console.log(err);});

async function main(){
    await mongoose.connect(MONGO_URL);
}

// Function to initialize the database with sample data
const initDB = async () => {
    try {
        await User.deleteMany({});  // Clear the User collection
        await User.insertMany(initData.userData);  // Insert sample users
        console.log("data was initialized");
        console.log(initData.userData);
    } catch (err) {
        console.error("Error initializing data:", err);
    } 
};
initDB();