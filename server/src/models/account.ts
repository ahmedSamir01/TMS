import mongoose, { Document, Schema, Model } from "mongoose";

interface IAccount extends Document {
  info: {
    name: string;
    email: string;
    [key: string]: any;
  };
  boards: mongoose.Types.ObjectId[];
}

const accountSchema = new Schema<IAccount>({
  info: {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  boards: [{ type: Schema.Types.ObjectId, ref: "Board" }],
});

export const Account: Model<IAccount> = mongoose.model<IAccount>(
  "Account",
  accountSchema
);
