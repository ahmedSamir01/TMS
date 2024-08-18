import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the user router for user-related routes
app.use(router);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
