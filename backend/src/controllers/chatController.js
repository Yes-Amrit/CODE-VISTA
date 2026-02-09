import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) { 
    try {
        // use clerkId for stream not mongoDB _id because we want to maintain the same user id across different services (clerk and stream) for easier integration and management.
        const token = chatClient.createToken(req.user.clerkId);

        res
        .status(200)
        .json({ 
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}