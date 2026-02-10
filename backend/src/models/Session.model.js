import mongoose from "mongoose"; 

const sessionSchema = new mongoose.Schema({
    problem: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true,
        enum: ["easy", "medium", "hard"],
    },
    host: {
        // this field is a reference to the User model, indicating which user is hosting the session. The ref property specifies the name of the model that this field references, allowing Mongoose to establish a relationship between the Session and User models.
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    participant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    status: {
        type: String,
        enum: ["active", "completed"],
        default: "active"
    },
    callId: {
        type: String,
        default:""
    }
}, { timestamps: true })

const Session = mongoose.model("Session", sessionSchema);  

export default Session; 