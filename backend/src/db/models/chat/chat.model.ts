import mongoose from "mongoose";
import { Chat } from "node-telegram-bot-api";
const Schema = mongoose.Schema;

const ChatSchema = new Schema<Chat>({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    }
});

export default mongoose.model("Chat", ChatSchema);