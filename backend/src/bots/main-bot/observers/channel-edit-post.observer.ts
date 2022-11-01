import TelegramBot from "node-telegram-bot-api";
import { createNewChat, findOneChatByParams } from "../../../db/services/chat";

export const channelEditPostObserver = (bot: TelegramBot) => {
  return [
    bot.on("edited_channel_post", async (ctx) => {
      const chat = ctx.chat;
      const isOldChat = await findOneChatByParams({ id: chat.id });
      if (!isOldChat) {
        const newChat = await createNewChat(chat);
        await newChat.save();
      }
    }),
    bot.on("edited_channel_post_text", async (ctx) => {
      const chat = ctx.chat;
      const isOldChat = await findOneChatByParams({ id: chat.id });
      if (!isOldChat) {
        const newChat = await createNewChat(chat);
        await newChat.save();
      }
    }),
    bot.on("edited_channel_post_caption", async (ctx) => {
      const chat = ctx.chat;
      const isOldChat = await findOneChatByParams({ id: chat.id });
      if (!isOldChat) {
        const newChat = await createNewChat(chat);
        await newChat.save();
      }
    }),
  ];
};
