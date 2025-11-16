const express = require("express");
const router = express.Router();
const db = require("../db");

// POST /api/submit - save a registration
router.post("/submit", (req, res) => {
  const { name, email, phone, address } = req.body;

  if (!name || !email || !phone || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO applications (name, email, phone, address) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, address], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Form submitted successfully!" });
  });
});

// GET /api/submissions - get all registrations
router.get("/submissions", (req, res) => {
  db.query("SELECT * FROM applications ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
