import express from "express";
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getProjects);
router.get("/:id", getProject);

// Protected Routes
router.post("/", protect, createProject);
router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);

export default router;