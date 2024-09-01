import { Request, Response } from "express";
import mongoose from "mongoose";
import { Section } from "../models/section";
import { Board } from "../models/board";

export const createSection = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const section = new Section({ title });
    const board = await Board.findById(req.params.boardId);
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }

    // Type assertion for section._id
    board.sections.push(section._id as mongoose.Types.ObjectId);

    await section.save();
    await board.save();
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
