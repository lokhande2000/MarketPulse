const Comment = require("../models/commentModel");

exports.addComment = async (req, res) => {
  try {
    const comment = new Comment({
      postId: req.params.postId,
      userId: req.user.id,
      comment: req.body.comment,
    });
    await comment.save();
    res.json({
      success: true,
      commentId: comment._id,
      message: "Comment added successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.commentId);
    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
