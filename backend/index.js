const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to Cosmos DB"))
  .catch((err) => console.error("❌ Connection error:", err));

// ✅ Enable CORS for all origins (or limit to Angular port)
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/auth", require("./routes/auth"));
// Add a simple hello world endpoint for troubleshooting
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

// app.use(express.static(path.join(__dirname, "../frontend/dist/frontend")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/frontend/index.html"));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
