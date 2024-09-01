import { Request, Response } from "express";
import mongoose from "mongoose";
import { Card } from "../models/card";
import { Section } from "../models/section";

export const createCard = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const card = new Card({ title, description });
    const section = await Section.findById(req.params.sectionId);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    // Type assertion for card._id
    section.cards.push(card._id as mongoose.Types.ObjectId);

    await card.save();
    await section.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
