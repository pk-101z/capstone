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
  { id: 1, name: "Chick-fil-A", location: "Downtown" },
  { id: 2, name: "Popeyes", location: "East Side" },
  { id: 3, name: "Zaxby's", location: "Uptown" },
  { id: 4, name: "Church's Chicken", location: "Midtown" },
  { id: 5, name: "Raising Cane's", location: "Campus" },
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
