import { Request, Response } from "express";
import { Account } from "../models/account";

export const getAccount = async (req: Request, res: Response) => {
  try {
    const account = await Account.findById(req.params.id).populate("boards");
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Additional CRUD operations for accounts...
