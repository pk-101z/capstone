const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const reviewRoutes = require('./routes/reviews');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use('/api/reviews', reviewRoutes);


const restaurants = [
  { id: 1, name: "Pho 24", location: "Downtown", avgRating: 4.5 },
  { id: 2, name: "Taco Loco", location: "East Side", avgRating: 3.8 },
  { id: 3, name: "Bella Pasta", location: "Uptown", avgRating: 4.2 },
];


app.get("/api/health", (req, res) => {
  res.json({ message: "OK" });
});


app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
