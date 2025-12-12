// src/pages/TestRestaurant.jsx
import Reviews from "../components/reviews.jsx";

const TestRestaurant = () => {
  // fake logged-in user JUST for the demo page
  const currentUser = { id: 1, username: "devan" };
  const restaurantId = 1; // Chick-fil-A for your mock

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Chick-fil-A Reviews</h2>
      <Reviews restaurantId={restaurantId} currentUser={currentUser} />
    </div>
  );
};

export default TestRestaurant;
