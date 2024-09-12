const express = require("express");
const {
  createPost,
  getPosts,
  getSinglePost,
  deletePost,
} = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// @route   POST /posts
// @desc    Create a new stock-related post
// @access  Private (requires token)
router.post("/", auth, createPost);

// GET /posts
// Get all posts (can include query parameters for filtering/sorting)
// Public
router.get("/", getPosts);

// GET /posts/:postId
// Get a single post by its ID
// Public
router.get("/:postId", getSinglePost);

// DELETE /posts/:postId
// Delete a post by its ID
// Private (requires token)
router.delete("/:postId", auth, deletePost);

module.exports = router;
