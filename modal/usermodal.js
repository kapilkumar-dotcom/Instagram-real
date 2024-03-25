// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default value set to the current date/time
  },
});

// Define a virtual property for the digital clock representation of createdAt
userSchema.virtual('createdAtLocalString').get(function() {
    return this.createdAt.toLocaleString();
});

module.exports = mongoose.model("User", userSchema);
