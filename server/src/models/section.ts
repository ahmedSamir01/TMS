import mongoose, { Document, Schema, Model } from "mongoose";

interface ISection extends Document {
  title: string;
  cards: mongoose.Types.ObjectId[];
}

const sectionSchema = new Schema<ISection>({
  title: { type: String, required: true },
  cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
});

export const Section: Model<ISection> = mongoose.model<ISection>(
  "Section",
  sectionSchema
);
