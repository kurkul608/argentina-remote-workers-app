import TelegramBot from "node-telegram-bot-api";
import { isPrivate } from "../../../services/bots-services/chat-type-checker-service";
import { sendMessageService } from "../../services/send-message.service";
import { createNewChat } from "../../../db/services/chat";

export const newChatMemberObserver = (bot: TelegramBot) => {
  return bot.on("new_chat_members", async (ctx) => {
    const botName = process.env.BOT_NAME;

    const chatId = ctx.chat.id;
    if (ctx.new_chat_members) {
      if (ctx.new_chat_members?.find((member) => member.is_bot)) {
        const isItsMe = ctx.new_chat_members?.find(
          (member) => member.username === botName
        );

        if (isItsMe && !isPrivate(ctx.chat.type)) {
          await sendMessageService(bot, chatId, "Здарова удаленщики");
          await createNewChat(ctx.chat);
          return true;
        }
        const newUser = ctx.new_chat_members?.find(
          (member) => member.username !== botName
        );
        if (newUser && !isPrivate(ctx.chat.type)) {
          await bot.banChatMember(chatId, newUser.id.toString());
          return sendMessageService(bot, chatId, "Ботам здесь не рады");
        }
      }
    }
    if (isPrivate(ctx.chat.type)) {
      return sendMessageService(
        bot,
        chatId,
        "Привет, я работаю только в группах, а не в личных сообщениях"
      );
    }
  });
};
