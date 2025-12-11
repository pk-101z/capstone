import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import RestaurantDetail from "./pages/RestaurantDetail.jsx";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Capstone Project</h1>

      <nav style={{ margin: "1rem 0", display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>Home Page</div>
              <div style={{ marginTop: "1rem" }}>
                <Link to="/restaurant">Go to Restaurant Page</Link>
              </div>
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </div>
  );
}
export default App;
