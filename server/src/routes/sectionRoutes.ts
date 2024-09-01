import { Router } from "express";
import { createSection } from "../controllers/sectionController";

const router = Router();

router.post("/:boardId", createSection);

// Additional routes for sections...

export default router;
