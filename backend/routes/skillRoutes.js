import express from "express";
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";

import protect from "../middleware/authMiddleware.js";
const router = express.Router();

// Public Route
router.get("/", getSkills);

// Protected Routes
router.post("/", protect, createSkill);
router.put("/:id", protect, updateSkill);
router.delete("/:id", protect, deleteSkill);

export default router;