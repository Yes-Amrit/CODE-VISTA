import { requireAuth } from "@clerk/express";
import User from "../models/User.model.js";

export const protectRoute = [
    requireAuth(),
    async (req, res, next ) => {
        try {
            const clerkId = req.auth().userId;

            if(!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token"});

            const user = await User.findOne({ clerkId });

            if(!user) return res.status(404).json({ message: "User not found "})
            // attaching the user to the request object so that any route handler that comes after this middleware can access the authenticated user's information through req.user
            req.user = user;
            // if everything is fine, we call next() to pass control to the next middleware or route handler in the stack. This means that the user is authenticated and authorized to access the protected route.
            next();
        } catch (error) {
            console.error("Error in protectRoute middleware", error)
            res.status(500).json({ message: "Internal server error"});
        }
    },
];