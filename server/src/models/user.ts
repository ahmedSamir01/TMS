import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

// Define the interface for the User document
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

// Create the User schema
const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Add the pre-save hook here, before defining the comparePassword method
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Add the comparePassword method to the schema
userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

// Create the User model
export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
