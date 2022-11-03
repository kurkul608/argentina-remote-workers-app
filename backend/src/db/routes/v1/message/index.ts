import express from "express";
import { mainBot } from "../../../../bots";
import { sendMessageService } from "../../../../bots/services/send-message.service";
import { pinMessageService } from "../../../../bots/services/pin-message.service";
import { addPinnedMessage } from "../../../services/pinned-mesage";
import { findOneChatByParams } from "../../../services/chat";

export const messageRouter = express.Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Send message by bot.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chat_ids:
 *                 type: Array<string>
 *                 description: Chat ids array.
 *                 example: [115]
 *               message:
 *                 type: string
 *                 description: Message text.
 *                 example: Message text
 *               pin_message:
 *                 type: boolean
 *                 description: Pin message or not.
 *                 example: true
 */
messageRouter.route("/").post(async (req, res) => {
  const { chat_ids, message, pin_message } = req.body;
  if (mainBot) {
    for (const chat_id of chat_ids) {
      const tgMessage = await sendMessageService(mainBot, chat_id, message);
      if (pin_message) {
        const pinResult = await pinMessageService(
          mainBot,
          chat_id,
          tgMessage.message_id
        );
        if (pinResult) {
          const chat = await findOneChatByParams({ id: tgMessage.chat.id });
          if (chat) {
            await addPinnedMessage({ ...tgMessage, chat: chat });
          }
        }
      }
    }

    res.send("success");
  } else {
    res.status(400).send("Bot is not ready");
  }
});
