// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../modal/usermodal");

// Route for user registration
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || username.length < 5) {
      return res
        .status(400)
        .json({ message: "Username must be at least 5 characters long" });
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    // Create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
