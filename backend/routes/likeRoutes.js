const express = require("express");
const { likePost, unlikePost } = require("../controllers/likeController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

//POST /likes/:postId
//Like a post
// Private (requires token)
router.post("/:postId", auth, likePost);

//DELETE /likes/:postId
//Unlike a post
// Private (requires token)
router.delete("/:postId", auth, unlikePost);

module.exports = router;
