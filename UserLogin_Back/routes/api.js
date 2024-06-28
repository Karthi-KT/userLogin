const express = require("express");
const router = express.Router();
const db = require("../db");

// GET route to fetch all items
router.get("/items", async (req, res) => {
  try {
    const database = await db.getDb();
    const items = await database.collection("items").find({}).toArray();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Error fetching items", error });
  }
});

// POST route to add a new item
router.post("/items", async (req, res) => {
  try {
    const newItem = req.body;
    const database = await db.getDb();
    const result = await database.collection("items").insertOne(newItem);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: "Error adding item", error });
  }
});

module.exports = router;
