import express from "express";
import { mainBot } from "../../../bots";
import { sendMessageService } from "../../../bots/main-bot/services/send-message.service";

export const messageRouter = express.Router();

messageRouter.route("/").post(async (req, res) => {
  const { chat_id, message } = req.body;
  if (mainBot) {
    await sendMessageService(mainBot, chat_id, message);
    res.send("success");
  } else {
    res.status(400).send("Bot is not ready");
  }
});
