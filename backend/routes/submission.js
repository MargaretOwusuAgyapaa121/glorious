// const express = require("express");
// const router = express.Router();
// const db = require("../db");

// // POST /api/submit - save a registration
// router.post("/submit", (req, res) => {
//   const { name, email, phone, address } = req.body;

//   if (!name || !email || !phone || !address) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const sql = "INSERT INTO camp_db (name, email, phone, address) VALUES (?, ?, ?, ?)";
//   db.query(sql, [name, email, phone, address], (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ message: "Form submitted successfully!" });
//   });
// });

// // GET /api/submissions - get all registrations
// router.get("/submissions", (req, res) => {
//   db.query("SELECT * FROM camp_db ORDER BY id DESC", (err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(results);
//   });
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const db = require("../db"); // your MySQL connection

// POST /api/submit - save a registration
router.post("/submit", (req, res) => {
  // safety fallback if req.body is undefined
  const { name, email, phone, address } = req.body || {};

  // validate required fields
  if (!name || !email || !phone || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO list_db (name, email, phone, address) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, address], (err, result) => {
    if (err) {
      console.error("MySQL error:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Form submitted successfully!", id: result.insertId });
  });
});

// GET /api/submissions - get all registrations
router.get("/submissions", (req, res) => {
  db.query("SELECT * FROM list_db ORDER BY id DESC", (err, results) => {
    if (err) {
      console.error("MySQL error:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json(results);
  });
});

module.exports = router;
