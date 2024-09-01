const asyncHandler = require("express-async-handler");
const Card = require("../models/Card");
const Section = require("../models/Section");

// @desc    Get all cards for a section
// @route   GET /api/sections/:sectionId/cards
// @access  Private
const getCards = asyncHandler(async (req, res) => {
  const cards = await Card.find({ section: req.params.sectionId });
  res.json(cards);
});

// @desc    Create a new card
// @route   POST /api/sections/:sectionId/cards
// @access  Private
const createCard = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const card = new Card({
    section: req.params.sectionId,
    title,
    description,
  });

  const createdCard = await card.save();
  res.status(201).json(createdCard);
});

// @desc    Update card
// @route   PUT /api/cards/:id
// @access  Private
const updateCard = asyncHandler(async (req, res) => {
  const card = await Card.findById(req.params.id);

  if (card) {
    card.title = req.body.title || card.title;
    card.description = req.body.description || card.description;

    const updatedCard = await card.save();
    res.json(updatedCard);
  } else {
    res.status(404);
    throw new Error("Card not found");
  }
});

// @desc    Delete card
// @route   DELETE /api/cards/:id
// @access  Private
const deleteCard = asyncHandler(async (req, res) => {
  const card = await Card.findById(req.params.id);

  if (card) {
    await card.remove();
    res.json({ message: "Card removed" });
  } else {
    res.status(404);
    throw new Error("Card not found");
  }
});

module.exports = { getCards, createCard, updateCard, deleteCard };
