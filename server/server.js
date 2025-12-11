const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow your Vite frontend (usually 5173) to call this API
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// TEMP DATA so Evan can work right now
const restaurants = [
  { id: 1, name: "Pho 24", location: "Downtown", avgRating: 4.5 },
  { id: 2, name: "Taco Loco", location: "East Side", avgRating: 3.8 },
  { id: 3, name: "Bella Pasta", location: "Uptown", avgRating: 4.2 },
];

// Simple health check (optional but nice)
app.get("/api/health", (req, res) => {
  res.json({ message: "OK" });
});

// 🚀 THIS is what Evan needs
app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
