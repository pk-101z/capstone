import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import restaurants from "../data/restaurants";
import "./RestaurantDetail.css";

function RestaurantDetail() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const [showAllReviews, setShowAllReviews] = useState(false);

  if (!restaurant) {
    return (
      <div className="restaurant-detail">
        <h2>Restaurant not found</h2>
        <Link to="/restaurant" className="back-link">
          Back to Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="restaurant-detail">
      <Link to="/restaurant" className="back-link">
        ← Back to Restaurants
      </Link>

      <div className="restaurant-header">
        <h1>{restaurant.name}</h1>
        <div className="restaurant-info">
          <div>
            <p>
              <strong>Address:</strong> {restaurant.address}
            </p>
            <p>
              <strong>Hours:</strong> {restaurant.hours}
            </p>
          </div>
          <div>
            <p>
              <strong>Rating:</strong> {restaurant.rating} ⭐
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <h2>About</h2>
        <div className="characteristics">
          {restaurant.characteristics.map((char, i) => (
            <span key={i} className="characteristic-tag">
              {char}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Menu</h2>
        <ul className="menu-list">
          {restaurant.menu.map((item, i) => (
            <li key={i} className="menu-item">
              <strong>{item.name}</strong>
              <span className="menu-price">{item.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="reviews-header">
          <h2 style={{ margin: 0 }}>Reviews</h2>
          <div className="reviews-button-group">
            <button className="write-review-btn">Write a Review</button>
            <button
              className="view-all-reviews-btn"
              onClick={() => setShowAllReviews(true)}
            >
              View All Reviews
            </button>
          </div>
        </div>

        <div className="reviews-container">
          {restaurant.reviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-header">
                <span className="review-author">{review.author}</span>
                <span className="review-rating">
                  {"⭐".repeat(review.rating)}
                </span>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      {showAllReviews && (
        <div className="modal-overlay" onClick={() => setShowAllReviews(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>All Reviews for {restaurant.name}</h2>
              <button
                className="modal-close-btn"
                onClick={() => setShowAllReviews(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-reviews">
              {restaurant.reviews.map((review, i) => (
                <div key={i} className="review-card">
                  <div className="review-header">
                    <span className="review-author">{review.author}</span>
                    <span className="review-rating">
                      {"⭐".repeat(review.rating)}
                    </span>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantDetail;
