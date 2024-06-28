const userModel = require("../models/userModels");

const signup = async (req, res) => {
  const { name, college, department, year, mobile, email, password } = req.body;
  try {
    const existingUser = await userModel.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await userModel.hashPassword(password);
    const result = await userModel.createUser({
      name,
      college,
      department,
      year,
      mobile,
      email,
      password: hashedPassword,
    });

    console.log("Document inserted:", result.insertedId);
    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error("Failed to insert document", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  signup,
};
