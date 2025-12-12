const API_URL = "http://localhost:3000/api/reviews";

export const getReviews = async (restaurantId) => {
  try {
    const res = await fetch(`${API_URL}?restaurantId=${restaurantId}`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching reviews:", err);
    return [];
  }
};

export const createReview = async (reviewData) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
    return await res.json();
  } catch (err) {
    console.error("Error creating review:", err);
    return null;
  }
};

export const updateReview = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Error updating review:", err);
    return null;
  }
};

export const deleteReview = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (err) {
    console.error("Error deleting review:", err);
    return null;
  }
};