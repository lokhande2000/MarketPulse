const express = require("express");
const {
  register,
  login,
  getProfile,
  updateProfile,
} = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// POST /auth/register
// Register a new user
// Public
router.post("/register", register);

// POST /auth/login
// Login user and return JWT token
// Public
router.post("/login", login);

// GET /auth/profile/:userId
//  Get user profile by ID
// Private (requires token)
router.get("/profile/:userId", auth, getProfile);

//  PUT /auth/profile
//  Update user profile
//  Private (requires token)
router.put("/profile", auth, updateProfile);

module.exports = router;
