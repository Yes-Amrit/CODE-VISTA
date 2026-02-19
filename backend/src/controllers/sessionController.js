import crypto from "crypto";
import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.model.js";

const generateRoomKey = () => {
  return crypto.randomBytes(4).toString("hex");
};

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty) {
      return res
        .status(400)
        .json({ message: "Problem and difficulty are required" });
    }

    const callId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substr(7)}`;

    const roomKey = generateRoomKey();

    const session = await Session.create({
      problem,
      difficulty,
      callId,
      host: userId,
      roomKey,
    });

    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: {
          problem,
          difficulty,
          sessionId: session._id.toString(),
        },
      },
    });

    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();

    res.status(201).json({ session });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating session", error: error.message });
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
    console.log("Error in getActiveSessions controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getMyRecentSessions(req, res){
  try {
    const userId = req.user._id;

    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session)
      return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function joinSession(req, res) {
  try {
    const { roomKey } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!roomKey)
      return res.status(400).json({ message: "Room key is required" });

    const session = await Session.findOne({ roomKey });

    if (!session)
      return res.status(404).json({ message: "Invalid room key" });

    if (session.status !== "active") {
      return res
        .status(400)
        .json({ message: "Cannot join a completed session" });
    }

    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({
        message: "Host cannot join their own session as participant",
      });
    }

    if (session.participant)
      return res.status(409).json({ message: "Session is full" });

    session.participant = userId;
    await session.save();

    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in joinSession controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session)
      return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Only the host can end the session" });
    }

    if (session.status === "completed") {
      return res
        .status(400)
        .json({ message: "Session is already completed" });
    }

    const call = streamClient.video.call("default", session.callId);
    await call.deleteRecording({ hard: true });

    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete();

    session.status = "completed";
    await session.save();

    res
      .status(200)
      .json({ session, message: "Session ended successfully" });
  } catch (error) {
    console.log("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session)
      return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Only the host can delete this session" });
    }

    await Session.findByIdAndDelete(id);

    res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    console.log("Error in deleteSession controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}