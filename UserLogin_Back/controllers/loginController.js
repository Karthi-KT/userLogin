const jwt = require("jsonwebtoken");
const userModel = require("../models/userModels");

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isMatch = await userModel.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful.", token, user });
  } catch (err) {
    console.error("Login error", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  login,
};
