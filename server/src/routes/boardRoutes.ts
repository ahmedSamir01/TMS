import { Router } from "express";
import { createBoard } from "../controllers/boardController";

const router = Router();

router.post("/:accountId", createBoard);

// Additional routes for boards...

export default router;
