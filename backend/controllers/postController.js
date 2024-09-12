const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  const { stockSymbol, title, description, tags } = req.body;
  try {
    const post = new Post({
      stockSymbol,
      title,
      description,
      tags,
      userId: req.user.id,
    });
    await post.save();
    res.json({
      success: true,
      postId: post._id,
      message: "Post created successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  const { stockSymbol, tags, sortBy } = req.query;
  try {
    let query = {};
    if (stockSymbol) query.stockSymbol = stockSymbol;
    if (tags) query.tags = { $in: tags.split(",") };
    const posts = await Post.find(query).sort(
      sortBy === "likes" ? { likesCount: -1 } : { createdAt: -1 }
    );
    res.json(posts);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate(
      "userId",
      "username"
    );
    res.json(post);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
