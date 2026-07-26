import express from "express";
import { loginAdmin } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

// Protected Profile Route
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Authorized",
    admin: req.admin,
  });
});

export default router;