import mongoose, { Document, Schema, Model } from "mongoose";

interface ICard extends Document {
  title: string;
  description?: string;
}

const cardSchema = new Schema<ICard>({
  title: { type: String, required: true },
  description: String,
});

export const Card: Model<ICard> = mongoose.model<ICard>("Card", cardSchema);
