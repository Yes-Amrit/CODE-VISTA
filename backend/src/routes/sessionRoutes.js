import express from "express";
import {
  createSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
  endSession,
  deleteSession,
} from "../controllers/sessionController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// Create session
router.post("/", protectRoute, createSession);

// Get sessions
router.get("/active", protectRoute, getActiveSessions);
router.get("/my-recent-session", protectRoute, getMyRecentSessions);

// Get session by ID
router.get("/:id", protectRoute, getSessionById);

// 🔐 Join session using ROOM KEY (not :id anymore)
router.post("/join", protectRoute, joinSession);

// End session
router.post("/:id/end", protectRoute, endSession);

// 🗑 Delete session (only host)
router.delete("/:id", protectRoute, deleteSession);

export default router;
