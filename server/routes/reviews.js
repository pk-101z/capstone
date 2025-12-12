const router = require("express").Router();

// TEMP in-memory reviews so everyone can build today
let reviews = [];
let nextReviewId = 1;

/**
 * GET /api/reviews
 * Optional query: ?restaurantId=1
 * - If restaurantId is provided, returns reviews for that restaurant
 * - Otherwise, returns ALL reviews
 */
router.get("/", (req, res) => {
  const { restaurantId } = req.query;

  if (restaurantId) {
    const filtered = reviews.filter(
      (r) => r.restaurantId === Number(restaurantId)
    );
    return res.json(filtered);
  }

  res.json(reviews);
});

/**
 * GET /api/reviews/user/:userId
 * Returns all reviews written by a specific user
 */
router.get("/user/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const userReviews = reviews.filter((r) => r.userId === userId);
  res.json(userReviews);
});

/**
 * POST /api/reviews
 * Body: { restaurantId, userId, username, rating, comment }
 */
router.post("/", (req, res) => {
  const { restaurantId, userId, username, rating, comment } = req.body;

  if (!restaurantId || !userId || !username || !rating) {
    return res
      .status(400)
      .json({
        error: "restaurantId, userId, username, and rating are required",
      });
  }

  const newReview = {
    id: nextReviewId++,
    restaurantId: Number(restaurantId),
    userId: Number(userId),
    username,
    rating: Number(rating),
    comment: comment || "",
    createdAt: new Date().toISOString(),
  };

  reviews.push(newReview);
  res.status(201).json(newReview);
});

/**
 * PUT /api/reviews/:id
 * Body: { rating?, comment? }
 * - Only updates rating/comment
 */
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { rating, comment } = req.body;

  const review = reviews.find((r) => r.id === id);
  if (!review) {
    return res.status(404).json({ error: "Review not found" });
  }

  if (rating !== undefined) review.rating = Number(rating);
  if (comment !== undefined) review.comment = comment;

  res.json(review);
});

/**
 * DELETE /api/reviews/:id
 */
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = reviews.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Review not found" });
  }

  const [deleted] = reviews.splice(index, 1);
  res.json(deleted);
});

module.exports = router;
