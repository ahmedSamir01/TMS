const asyncHandler = require("express-async-handler");
const Section = require("../models/Section");
const Board = require("../models/Board");

// @desc    Get all sections for a board
// @route   GET /api/boards/:boardId/sections
// @access  Private
const getSections = asyncHandler(async (req, res) => {
  const sections = await Section.find({ board: req.params.boardId }).populate(
    "cards"
  );
  res.json(sections);
});

// @desc    Create a new section
// @route   POST /api/boards/:boardId/sections
// @access  Private
const createSection = asyncHandler(async (req, res) => {
  const { title } = req.body;

  const section = new Section({
    board: req.params.boardId,
    title,
  });

  const createdSection = await section.save();
  res.status(201).json(createdSection);
});

// @desc    Update section
// @route   PUT /api/sections/:id
// @access  Private
const updateSection = asyncHandler(async (req, res) => {
  const section = await Section.findById(req.params.id);

  if (section) {
    section.title = req.body.title || section.title;

    const updatedSection = await section.save();
    res.json(updatedSection);
  } else {
    res.status(404);
    throw new Error("Section not found");
  }
});

// @desc    Delete section
// @route   DELETE /api/sections/:id
// @access  Private
const deleteSection = asyncHandler(async (req, res) => {
  const section = await Section.findById(req.params.id);

  if (section) {
    await section.remove();
    res.json({ message: "Section removed" });
  } else {
    res.status(404);
    throw new Error("Section not found");
  }
});

module.exports = { getSections, createSection, updateSection, deleteSection };
