import express from 'express'
import { ENV } from './lib/env.js'
import path from "path"
import { connectDB } from './lib/db.js'
import cors from "cors"
import { serve } from "inngest/express"
import { inngest } from './lib/inngest.js'

const app = express()

const __dirname = path.resolve()

//middleware
app.use(express.json())
// credentials:true meaning??=> server allows a browser to include cookies on request
app.use(cors({origin: ENV.CLIENT_URL, credentials:true}))

app.use("/api/inngest", serve({ client: inngest, functions}))
app.get("/health", (req, res) => {
    res
    .status(200)
    .json({msg:"success from api"});
});

app.get("/books", (req, res) => {
    res
    .status(200)
    .json({msg:"This is the book's endpoints"});
})

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


//make our app ready for deployment

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