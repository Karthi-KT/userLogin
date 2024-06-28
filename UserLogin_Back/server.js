const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

const userRoutes = require("./routes/userRoutes");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the Student Portal!");
});

// Use /user for user-related routes
app.use("/user", userRoutes);

// Courses route (assuming 'courses' variable is defined elsewhere)
app.get("/courses", (req, res) => {
  res.json(courses);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
