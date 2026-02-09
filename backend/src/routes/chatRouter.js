import express from "express";
import { getStreamToken } from "../controllers/chatController.js";
import { protectRoute } from '../middleware/protectRoute.js'

const router = express.Router();

//importing the protectRoute middleware to secure the chat routes, ensuring that only authenticated users can access them.
router.get("/token", protectRoute, getStreamToken);

export default router;
