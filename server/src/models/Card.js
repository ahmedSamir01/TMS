const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
