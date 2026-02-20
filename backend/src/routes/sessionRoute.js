import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createSession,
  endSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
} from "../controllers/sessionController.js";

const router = express.Router();

// Static routes FIRST
router.get("/active", protectRoute, getActiveSessions);
router.get("/my-recent", protectRoute, getMyRecentSessions);

// Base POST route
router.post("/", protectRoute, createSession);

// Dynamic ID routes LAST
router.get("/:id", protectRoute, getSessionById);
router.post("/:id/join", protectRoute, joinSession);
router.post("/:id/end", protectRoute, endSession);

export default router;