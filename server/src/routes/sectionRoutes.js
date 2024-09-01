const express = require("express");
const router = express.Router();
const {
  getSections,
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/sectionController");
const protect = require("../middleware/authMiddleware");

router
  .route("/:boardId/sections")
  .get(protect, getSections)
  .post(protect, createSection);

router.route("/:id").put(protect, updateSection).delete(protect, deleteSection);

module.exports = router;
