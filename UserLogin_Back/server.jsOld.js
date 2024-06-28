const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./db");
const app = express();
app.use(bodyParser.json());

const SECRET_KEY = "your-secret-key"; // Use environment variable in production

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Student Portal!");
});

// Register new user
app.post("/signup", async (req, res) => {
  const { name, college, department, year, mobile, email, password } = req.body;
  try {
    const myDb = await db.getDb();
    const collection = myDb.collection("testApplication");

    // Check if the user already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const result = await collection.insertOne({
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
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const myDb = await db.getDb();
    const collection = myDb.collection("testApplication");

    // Find the user by email
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate a JWT
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful.", token, user });
  } catch (err) {
    console.error("Login error", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Courses route
app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/signup", async (req, res) => {
  const { name, college, department, year, mobile, email, password } = req.body;
  try {
    const myDb = await db.getDb();
    const collection = myDb.collection("testApplication");

    const result = await collection.insertOne({
      name,
      college,
      department,
      year,
      mobile,
      email,
      password,
    });
    console.log("Document inserted:", result.insertedId);
  } catch (err) {
    console.error("Failed to insert document", err);
  }
  res.json("Data recieved Successfully");
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
