import TelegramBot from "node-telegram-bot-api";
import { createNewChat, findOneChatByParams } from "../../../db/services/chat";

export const channelNewPostObserver = (bot: TelegramBot) => {
  return bot.on("channel_post", async (ctx) => {
    const chat = ctx.chat;
    const isOldChat = await findOneChatByParams({ id: chat.id });
    if (!isOldChat) {
      const newChat = await createNewChat(chat);
      await newChat.save();
    }
  });
};
