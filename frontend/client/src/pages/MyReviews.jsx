const mockReviews = [
  {
    id: 1,
    restaurantName: "Chick-fil-A",
    rating: 5,
    text: "Food was great and service was fast.",
    createdAt: "2025-02-01",
  },
  {
    id: 2,
    restaurantName: "Popeyes",
    rating: 4,
    text: "Chicken was crispy but the line was long.",
    createdAt: "2025-02-03",
  },
];

export default function MyReviews() {
  const reviews = mockReviews;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>My Reviews</h1>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px 16px",
              }}
            >
              <h2 style={{ margin: 0 }}>{review.restaurantName}</h2>
              <p style={{ margin: "4px 0" }}>Rating: {review.rating} / 5</p>
              <p style={{ margin: "4px 0" }}>{review.text}</p>
              <p
                style={{
                  margin: "4px 0",
                  fontSize: "0.9rem",
                  color: "#555",
                }}
              >
                {review.createdAt}
              </p>

              <div style={{ marginTop: "8px" }}>
                <button style={{ marginRight: "8px" }}>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
