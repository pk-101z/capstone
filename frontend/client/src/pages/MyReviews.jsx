import { useState } from "react";

export default function MyReviews() {
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editRating, setEditRating] = useState(5);

  function startEditing(review) {
    setEditingId(review.id);
    setEditText(review.text);
    setEditRating(review.rating);
  }

  function cancelEditing() {
    setEditingId(null);
    setEditText("");
    setEditRating(5);
  }

  async function saveEdit() {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === editingId
          ? { ...review, text: editText, rating: editRating }
          : review
      )
    );
    cancelEditing();
  }

  async function deleteReview(id) {
    const ok = window.confirm("Are you sure you want to delete this review?");
    if (!ok) return;

    setReviews((prev) => prev.filter((review) => review.id !== id));
  }

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
          {reviews.map((review) => {
            const isEditing = editingId === review.id;

            return (
              <div
                key={review.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  backgroundColor: "#fafafa",
                }}
              >
                <h2 style={{ margin: 0 }}>{review.restaurantName}</h2>

                {isEditing ? (
                  <>
                    <label style={{ display: "block", marginTop: "8px" }}>
                      Rating:{" "}
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={editRating}
                        onChange={(e) =>
                          setEditRating(Number(e.target.value))
                        }
                      />
                    </label>

                    <textarea
                      style={{ width: "100%", marginTop: "8px" }}
                      rows={3}
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />

                    <div style={{ marginTop: "8px" }}>
                      <button onClick={saveEdit} style={{ marginRight: "8px" }}>
                        Save
                      </button>
                      <button onClick={cancelEditing}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <p style={{ margin: "4px 0" }}>
                      Rating: {review.rating} / 5
                    </p>
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
                      <button
                        onClick={() => startEditing(review)}
                        style={{ marginRight: "8px" }}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteReview(review.id)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
