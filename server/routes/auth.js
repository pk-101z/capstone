const router = require("express").Router();

// TEMP in-memory users so we can finish today.
let users = [];
let nextId = 1;

// POST /api/auth/register
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  const existing = users.find((u) => u.username === username);
  if (existing) {
    return res.status(409).json({ error: "Username already taken" });
  }

  const newUser = { id: nextId++, username, password };
  users.push(newUser);

  const token = `fake-token-${newUser.id}`;

  res.status(201).json({
    user: { id: newUser.id, username: newUser.username },
    token,
  });
});

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = `fake-token-${user.id}`;

  res.json({
    user: { id: user.id, username: user.username },
    token,
  });
});

module.exports = router;
