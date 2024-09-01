const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  board: { type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true },
  title: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
});

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;
