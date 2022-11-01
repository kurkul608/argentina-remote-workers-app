import TelegramBot from "node-telegram-bot-api";
import { findOneChatByParams } from "../../../db/services/chat";

export const leftChatMemberObserver = (bot: TelegramBot) => {
  return bot.on("left_chat_member", async (ctx) => {
    const botName = process.env.BOT_NAME;
    const chatId = ctx.chat.id;

    if (
      ctx.left_chat_member?.is_bot &&
      ctx.left_chat_member?.username === botName
    ) {
      const chat = await findOneChatByParams({ id: chatId });
      if (chat) {
        return chat.remove();
      }
      return true;
    }
  });
};
