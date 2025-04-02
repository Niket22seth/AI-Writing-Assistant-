const Post = require("../models/Post");
const Comment = require("../models/Comment");

exports.getTrendingPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username")
      .sort({ comments: -1 })
      .limit(5);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFeed = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(20);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
