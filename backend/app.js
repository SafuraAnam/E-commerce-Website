const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hi");
});


//Setting up the server at port 8080
const port =8080;
app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
});
