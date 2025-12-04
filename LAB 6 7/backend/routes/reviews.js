const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: "Помилка при створенні відгуку" });
  }
});

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Помилка при отриманні відгуків" });
  }
});

module.exports = router;
