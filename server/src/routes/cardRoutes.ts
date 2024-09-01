import { Router } from "express";
import { createCard } from "../controllers/cardController";

const router = Router();

router.post("/:sectionId", createCard);

// Additional routes for cards...

export default router;
