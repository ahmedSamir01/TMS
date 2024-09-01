import { Router } from "express";
import { getAccount } from "../controllers/accountController";

const router = Router();

router.get("/:id", getAccount);

// Additional routes for accounts...

export default router;
