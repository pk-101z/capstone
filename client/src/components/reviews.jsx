import { useEffect, useState } from "react";
import { getReviews, createReview } from "../api/reviews";

function Reviews({ restaurantId, currentUser }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getReviews(restaurantId);
        setReviews(data);
      } catch (err) {
        console.error("Failed to load reviews", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [restaurantId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const newReview = {
      restaurantId,
      userId: currentUser.id,
      username: currentUser.username,
      rating,
      comment,
    };

    try {
      const created = await createReview(newReview);
      setReviews((prev) => [...prev, created]); // show new review right away
      setComment("");
      setRating(5);
    } catch (err) {
      console.error("Failed to create review", err);
    }
  };

  return (
    <div className="reviews-card">
      <h3>Top Reviews</h3>

      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p>No reviews yet. Be the first!</p>
      ) : (
        <ul className="reviews-list">
          {reviews.map((r) => (
            <li key={r.id} className="review-item">
              <strong>{r.username}</strong> – ⭐ {r.rating}/5
              <p>{r.comment}</p>
            </li>
          ))}
        </ul>
      )}

      <hr />

      {currentUser ? (
        <form onSubmit={handleSubmit} className="review-form">
          <h4>Write a review</h4>

          <label>
            Rating:{" "}
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>

          <br />

          <textarea
            placeholder="Tell us about the chicken..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Login to write a review.</p>
      )}
    </div>
  );
}

export default Reviews;