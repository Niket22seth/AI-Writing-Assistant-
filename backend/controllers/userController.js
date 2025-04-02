const User = require("../models/User");

exports.getTopUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ postCount: -1 }).limit(5);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
