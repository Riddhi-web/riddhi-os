import express from "express";
import {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/educationController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Route
router.get("/", getEducations);

// Protected Routes
router.post("/", protect, createEducation);
router.put("/:id", protect, updateEducation);
router.delete("/:id", protect, deleteEducation);

export default router;