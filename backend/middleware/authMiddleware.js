const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = await req.header("authorization").split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

module.exports = auth;
