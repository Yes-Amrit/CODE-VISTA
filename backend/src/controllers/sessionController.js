import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.model.js";

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty) {
      return res.status(400).json({ message: "Problem and difficulty are required" });
    }

    // 1. Generate unique ID
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // 2. Try to create the Stream Video Call FIRST
    // If this fails, it jumps to catch, and NO session is created in DB
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty },
      },
    });

    // 3. Setup Chat Messaging
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
    });
    await channel.watch();

    // 4. ONLY save to MongoDB if the APIs above succeeded
    const session = await Session.create({ 
      problem, 
      difficulty, 
      host: userId, 
      callId, 
      roomKey: callId 
    });

    // 5. Success! Only one response sent.
    return res.status(201).json({ session });

  } catch (error) {
    console.error("CRITICAL ERROR in createSession:", error);
    // This ensures the frontend only gets the "Failed" message
    return res.status(500).json({ 
      message: "Failed to create session room", 
      error: error.message 
    });
  }
}

export async function getActiveSessions(_, res) {
  try {
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getActiveSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    // get sessions where user is either host or participant
    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status !== "active") {
      return res.status(400).json({ message: "Cannot join a completed session" });
    }

    // If host tries to join, just return success so they enter the room
    if (session.host.toString() === userId.toString()) {
       return res.status(200).json({ session });
    }

    // Check if session is full
    if (session.participant && session.participant.toString() !== userId.toString()) {
        return res.status(409).json({ message: "Session is full" });
    }

    // Update DB if user is a new participant
    if (!session.participant) {
        session.participant = userId;
        await session.save();
    }

    // Add member to Stream Chat
    // Wrap in try-catch because if the channel was deleted, this would throw a 500
    try {
        const channel = chatClient.channel("messaging", session.callId);
        await channel.addMembers([clerkId]);
    } catch (chatError) {
        console.error("Non-fatal chat error during join:", chatError.message);
    }

    res.status(200).json({ session });
  } catch (error) {
    console.error("Error in joinSession controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can end the session" });
    }

    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    // Update DB status first so the UI responds immediately
    session.status = "completed";
    await session.save();

    // Cleanup Stream resources
    try {
        const call = streamClient.video.call("default", session.callId);
        await call.delete({ hard: true });

        const channel = chatClient.channel("messaging", session.callId);
        await channel.delete();
    } catch (streamError) {
        console.error("Cleanup error (likely already deleted):", streamError.message);
    }

    res.status(200).json({ session, message: "Session ended successfully" });
  } catch (error) {
    console.error("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}