// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TestRestaurant from "./pages/TestRestaurant.jsx";

function App() {
  return (
    <div
      style={{
        fontFamily: "Courier New",
        margin: "2rem",
      }}
    >
      <h1>Chicken Review App</h1>

      <nav
        style={{
          marginBottom: "2rem",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/test">Test Reviews</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<TestRestaurant />} />
      </Routes>
    </div>
  );
}

export default App;