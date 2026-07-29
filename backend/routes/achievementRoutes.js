import express from "express";
import {
  getAchievements,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} from "../controllers/achievementController.js";

import  protect  from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getAchievements);

// Protected
router.post("/", protect, createAchievement);
router.put("/:id", protect, updateAchievement);
router.delete("/:id", protect, deleteAchievement);

export default router;