import express from "express";
import dotenv from "dotenv";
import accountRoutes from "./routes/accountRoutes";
import boardRoutes from "./routes/boardRoutes";
import sectionRoutes from "./routes/sectionRoutes";
import cardRoutes from "./routes/cardRoutes";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/accounts", accountRoutes);
app.use("/boards", boardRoutes);
app.use("/sections", sectionRoutes);
app.use("/cards", cardRoutes);

export default app;
