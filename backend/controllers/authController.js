const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
        userId: user._id,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { username, bio, profilePicture } = req.body;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      username,
      bio,
      profilePicture,
    });
    res.json({ success: true, message: "Profile updated" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
