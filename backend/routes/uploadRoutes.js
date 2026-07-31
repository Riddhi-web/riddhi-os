import express from "express";
import {
  uploadProfileImage,
  uploadResume,
  deleteProfileImage,
  deleteResume,
} from "../controllers/uploadController.js";

import {
  uploadProfile,
  uploadResume as uploadResumeMiddleware,
} from "../middleware/uploadMiddleware.js";

import protect  from "../middleware/authMiddleware.js";

const router = express.Router();

// Upload Profile Image
router.post(
  "/profile",
  protect,
  uploadProfile.single("profileImage"),
  uploadProfileImage
);

// Upload Resume
router.post(
  "/resume",
  protect,
  uploadResumeMiddleware.single("resume"),
  uploadResume
);

// Delete Profile Image
router.delete(
  "/profile",
  protect,
  deleteProfileImage
);

// Delete Resume
router.delete(
  "/resume",
  protect,
  deleteResume
);

export default router;