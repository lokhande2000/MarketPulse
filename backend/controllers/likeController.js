const Post = require('../models/postModel');

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    post.likesCount += 1;
    await post.save();
    res.json({ success: true, message: 'Post liked' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    post.likesCount -= 1;
    await post.save();
    res.json({ success: true, message: 'Post unliked' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
