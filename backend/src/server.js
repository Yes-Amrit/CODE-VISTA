import express from 'express'
import { ENV } from './lib/env.js'
import path from "path"

const app = express()

const __dirname = path.resolve()


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

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
    });
}


const PORT = ENV.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
