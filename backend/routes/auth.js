const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Signup route (was previously "register")
router.post("/signup", async (req, res) => {
  console.log("📥 Incoming signup data:", req.body);

  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: "Username already in use" });
    }

    const user = new User({
      email,
      password,
      username,
    });

    await user.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (err) {
    console.error("❌ Signup error:", err.message, err.stack);

    res.status(500).json({ error: "Server error" });
  }
});

// Login route
// routes/auth.js
router.post("/login", async (req, res) => {
  console.log("Received login data:", req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); // ✅ find by email
    if (!user) {
      return res.status(400).json({ error: "❌ Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "❌ Invalid email or password" });
    }

    // Include username in token payload
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "✅ Logged in", token, username: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Logout (optional for JWT clients)
router.post("/logout", (req, res) => {
  // Just clear token on client side in most cases
  res.json({ message: "✅ Logged out" });
});

module.exports = router;
