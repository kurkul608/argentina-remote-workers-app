import express from "express";
import Chat from "../../../models/chat/chat.model";

export const chatRouter = express.Router();

chatRouter.route("/").get(async (req, res) => {
  const chats = await Chat.find();
  res.send({
    data: chats,
  });
});
