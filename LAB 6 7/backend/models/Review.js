const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model("Review", ReviewSchema);
