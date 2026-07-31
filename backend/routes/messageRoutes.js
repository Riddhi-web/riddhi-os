import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createMessage,
  getMessages,
  markAsRead,
  deleteMessage,
} from "../controllers/messageController.js";

const router = express.Router();

// Public
router.post("/", createMessage);

// Admin
router.get("/", protect, getMessages);
router.put("/:id/read", protect, markAsRead);
router.delete("/:id", protect, deleteMessage);

export default router;