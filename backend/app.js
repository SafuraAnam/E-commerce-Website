const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
const path = require("path");
const Product = require("./models/Product");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  "/assets",
  express.static(path.join(__dirname, "../frontend/drip-crew/src/assets"))
);

// Connecting to DB
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

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("joinRoom", ({ userId, contactId }) => {
    const room = [userId, contactId].sort().join("-");
    socket.join(room);
    console.log(`User ${userId} joined room ${room}`);
  });

  socket.on("sendMessage", ({ room, message }) => {
    console.log(`Message received in room ${room}: ${message}`);
    io.to(room).emit("receiveMessage", message);
  });

  socket.on("sendProduct", ({ room, product }) => {
    console.log(`Product received in room ${room}`);
    io.to(room).emit("receiveProduct", product);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Routes
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Setting up the server at port 8080
const port = 8080;
server.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
