const asyncHandler = require("express-async-handler");
const Board = require("../models/Board");

// @desc    Get all boards for a user
// @route   GET /api/boards
// @access  Private
const getBoards = asyncHandler(async (req, res) => {
  const boards = await Board.find({ user: req.user._id }).populate("sections");
  res.json(boards);
});

// @desc    Create a new board
// @route   POST /api/boards
// @access  Private
const createBoard = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const board = new Board({
    user: req.user._id,
    title,
    description,
  });

  const createdBoard = await board.save();
  res.status(201).json(createdBoard);
});

// @desc    Update board
// @route   PUT /api/boards/:id
// @access  Private
const updateBoard = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (board) {
    board.title = req.body.title || board.title;
    board.description = req.body.description || board.description;

    const updatedBoard = await board.save();
    res.json(updatedBoard);
  } else {
    res.status(404);
    throw new Error("Board not found");
  }
});

// @desc    Delete board
// @route   DELETE /api/boards/:id
// @access  Private
const deleteBoard = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (board) {
    await board.remove();
    res.json({ message: "Board removed" });
  } else {
    res.status(404);
    throw new Error("Board not found");
  }
});

module.exports = { getBoards, createBoard, updateBoard, deleteBoard };
