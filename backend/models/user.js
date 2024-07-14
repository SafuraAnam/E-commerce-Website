const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// User Schema
const userSchema = new Schema({
  name: String,
  avatar: String,
  isBdayComing: Boolean,
  isStreak: Boolean,
  streakCount: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
