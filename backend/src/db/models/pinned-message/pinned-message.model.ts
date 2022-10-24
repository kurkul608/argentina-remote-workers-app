import mongoose from "mongoose";
import { Message } from "node-telegram-bot-api";
const Schema = mongoose.Schema;

const pinnedMessageSchema = new Schema<Message>({
  message_id: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  chat: { type: Schema.Types.ObjectId, ref: "Chat" },
});

export default mongoose.model("PinnedMessage", pinnedMessageSchema);
