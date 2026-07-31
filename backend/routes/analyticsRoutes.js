import express from "express";
import {
  getAnalytics,
  trackVisit,
  trackResumeDownload,
} from "../controllers/analyticsController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/visit", trackVisit);
router.post("/resume-download", trackResumeDownload);

// Admin Route
router.get("/", protect, getAnalytics);

export default router;