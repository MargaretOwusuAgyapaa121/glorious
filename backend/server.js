
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const submissionsRoutes = require("./routes/submission");

// const app = express();
// // const PORT = 5000;
// const PORT = process.env.PORT || 5000;


// // Middlewares
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use("/api", submissionsRoutes);

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const submissionsRoutes = require("./routes/submission");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json()); // parse JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parse form data

// Routes
app.use("/api", submissionsRoutes);

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

