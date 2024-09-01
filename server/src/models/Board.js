const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }],
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
