import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();

// Middleware
app.use(clerkMiddleware()); 
app.use(express.json());

// CORS configuration - Use ENV.CLIENT_URL to allow your Render Frontend URL
app.use(cors({ 
  origin: ENV.CLIENT_URL, 
  credentials: true, 
  allowedHeaders: ["Content-Type", "Authorization"] 
}));

// API Routes
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/", (req, res) => {
  res.send("Code Vista API is running...");
});
// Health check for Render monitoring
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

const startServer = async () => {
  try {
    await connectDB();
    // Render uses ENV.PORT (default 10000)
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();