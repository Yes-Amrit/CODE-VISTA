import { requireAuth } from "@clerk/express";
import User from "../models/User.model.js";
import { clerkClient } from "@clerk/express"; // Ensure this is imported

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId; 
      let user = await User.findOne({ clerkId });

      if (!user) {
        console.log("User not in DB. Fetching from Clerk and creating record...");
        
        // 1. Fetch the full user object from Clerk
        const clerkUser = await clerkClient.users.getUser(clerkId);

        // 2. Extract the name and email
        const name = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "New User";
        const email = clerkUser.emailAddresses[0]?.emailAddress;

        // 3. Save to MongoDB (This satisfies your schema's requirements)
        user = await User.create({
          clerkId,
          name,
          email,
          profileImage: clerkUser.imageUrl || "",
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];