import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import achievementRoutes from "./routes/achievementRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

dotenv.config();

const app = express();

// ===============================
// Connect MongoDB
// ===============================

connectDB();

// ===============================
// Middleware
// ===============================

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// Static Folder
// ===============================

app.use("/uploads", express.static("uploads"));

// ===============================
// Health Check
// ===============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 RIDDHI.OS Backend is Running...",
  });
});

// ===============================
// API Routes
// ===============================

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/analytics", analyticsRoutes);

// ===============================
// 404 Route
// ===============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// ===============================
// Global Error Handler
// ===============================

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 RIDDHI.OS Backend Started");
  console.log(`🌐 Port : ${PORT}`);
  console.log("=================================");
});