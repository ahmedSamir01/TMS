import { Request, Response } from "express";
import mongoose from "mongoose";
import { Board } from "../models/board";
import { Account } from "../models/account";

export const createBoard = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const board = new Board({ title, description });
    const account = await Account.findById(req.params.accountId);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Type assertion to make sure TypeScript understands the type of board._id
    account.boards.push(board._id as mongoose.Types.ObjectId);

    await board.save();
    await account.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
