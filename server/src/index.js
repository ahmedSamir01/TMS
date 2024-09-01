const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const boardRoutes = require("./routes/boardRoutes");
const sectionRoutes = require("./routes/sectionRoutes");
const cardRoutes = require("./routes/cardRoutes");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/", authRoutes);
app.use("/", authRoutes);
app.use("/profile", userRoutes);
app.use("/boards", boardRoutes);
app.use("/boards", sectionRoutes);
app.use("/sections", cardRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
