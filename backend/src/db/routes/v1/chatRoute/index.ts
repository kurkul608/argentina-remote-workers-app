import express from "express";
import Chat from "../../../models/chat/chat.model";

export const chatRouter = express.Router();
/**
 * @swagger
 * v1/chat/:
 *   get:
 *     summary: Get all bot chats
 *     description: Get all bot chats.
 */
chatRouter.route("/").get(async (req, res) => {
  const chats = await Chat.find();
  res.send({
    data: chats,
  });
});
