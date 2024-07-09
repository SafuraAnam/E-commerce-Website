const express = require("express");
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const cors = require('cors');
const path = require('path');
// Middleware
// Enable CORS for all origins
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, '../frontend/drip-crew/src/assets')));

//CONNECTING DB
 const MONGO_URL="mongodb://127.0.0.1:27017/drip-crew";
main()
  .then(()=>{console.log("connected to db");})
  .catch((err)=>{console.log(err);});

async function main(){
    await mongoose.connect(MONGO_URL);
}


// Routes
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/",(req,res)=>{
    res.send("hi");
});

//Setting up the server at port 8080
const port =8080;
app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
});
