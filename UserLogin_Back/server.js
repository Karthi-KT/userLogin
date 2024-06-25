const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Import cors module
const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Function to read students data from JSON file
function readStudentsData() {
  const filePath = path.join(__dirname, "students.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Use cors middleware
app.use(cors());

// Endpoint to get students data
app.get("/api/students", (req, res) => {
  const students = readStudentsData();
  res.json(students);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
