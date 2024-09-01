import mongoose, { Document, Schema, Model } from "mongoose";

interface IBoard extends Document {
  title: string;
  description?: string;
  sections: mongoose.Types.ObjectId[];
}

const boardSchema = new Schema<IBoard>({
  title: { type: String, required: true },
  description: String,
  sections: [{ type: Schema.Types.ObjectId, ref: "Section" }],
});

export const Board: Model<IBoard> = mongoose.model<IBoard>(
  "Board",
  boardSchema
);
