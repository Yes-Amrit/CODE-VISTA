import express from 'express'
import { ENV } from './lib/env.js'
import path from "path"
import { connectDB } from './lib/db.js'
import cors from "cors"
import { serve } from "inngest/express"
import { inngest, functions } from './lib/inngest.js'
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from "./routes/chatRouter.js"

const app = express()

const __dirname = path.resolve()

//middleware
app.use(express.json())
// credentials:true meaning??=> server allows a browser to include cookies on request
app.use(cors({origin: ENV.CLIENT_URL, credentials:true}))

app.use(clerkMiddleware())              // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions}))
app.use("/api/chat", chatRoutes)

app.get("/health", (req, res) => {         
    res
    .status(200)
    .json({msg:"success from api"});
});

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// This block of code is responsible for serving the frontend application in production. It checks if the environment is set to "production" and if so, it serves the static files from the "frontend/dist" directory. Additionally, it includes a 404 handler to catch any requests that do not match existing routes and respond with a JSON message indicating that the route was not found.

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    // 404 handler (Express 5 safe)
    app.use((req, res) => {
        res.status(404).json({ message: "Route not found" });
    });
}

const PORT = process.env.PORT || 3000;

const startServer = async() => {
    try {
        await connectDB();;
        app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
    } catch (error) {
        console.error("💥 Error starting the server", error);
    }
}

startServer();