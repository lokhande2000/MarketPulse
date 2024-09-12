const express = require('express');
const { addComment, deleteComment } = require('../controllers/commentController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// POST /comments/:postId
// Add a comment to a post
// Private (requires token)
router.post('/:postId', auth, addComment);

// DELETE /comments/:commentId
// Delete a comment by its ID
// Private (requires token)
router.delete('/:commentId', auth, deleteComment);

module.exports = router;
