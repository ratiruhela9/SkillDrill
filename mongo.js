const mongoose = require('mongoose');


mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.log("❌ MongoDB Connection Error:", err));

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true
    },
    client: [
        {
            socketId: String,
            username: String,
            status: Boolean,
            expressions: { 
                neutral: Number,
                angry: Number,
                sad: Number,
                surprised: Number,
                happy: Number,
                disgusted: Number,
                fearful: Number
            }
        }
    ]
});

const feedbackSchema = new mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    info: [
        {
            by: String,
            roomId: String,
            expressions: { 
                neutral: Number,
                angry: Number,
                sad: Number,
                surprised: Number,
                happy: Number,
                disgusted: Number,
                fearful: Number
            },
            feedback: {
                work: {
                    score: Number,
                    comment: String
                },
                technical: {
                    score: Number,
                    comment: String
                },
                verbal: {
                    score: Number,
                    comment: String
                },
                enth: {
                    score: Number,
                    comment: String
                },
                addComt: {
                    comment: String
                }
            }
        }
    ]
});

const user = mongoose.model("user", newSchema);
const room = mongoose.model("room", roomSchema);
const feedback = mongoose.model("feedback", feedbackSchema);

module.exports = { user, room, feedback };
