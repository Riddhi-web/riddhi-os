import express from "express";
import {
  getSettings,
  updateSettings,
} from "../controllers/settingsController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Route
router.get("/", getSettings);

// Protected Route
router.put("/", protect, updateSettings);

export default router;