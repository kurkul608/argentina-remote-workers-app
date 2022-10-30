import TelegramBot from "node-telegram-bot-api";
import { isPrivateOrChannel } from "../../../services/bots-services/chat-type-checker-service";
import { sendMessageService } from "../../services/send-message.service";
import { createNewChat, findOneChatByParams } from "../../../db/services/chat";

export const messageObserver = (bot: TelegramBot) => {
  const botName = process.env.BOT_NAME;

  return bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    if (msg.new_chat_members) {
      if (msg.new_chat_members?.find((member) => member.is_bot)) {
        const isItsMe = msg.new_chat_members?.find(
          (member) => member.username === botName
        );

        if (isItsMe && !isPrivateOrChannel(msg.chat.type)) {
          await sendMessageService(bot, chatId, "Здарова удаленщики");
          await createNewChat(msg.chat);
          return true;
        }
        const newUser = msg.new_chat_members?.find(
          (member) => member.username !== botName
        );
        if (newUser && !isPrivateOrChannel(msg.chat.type)) {
          await bot.banChatMember(chatId, newUser.id.toString());
          return sendMessageService(bot, chatId, "Ботам здесь не рады");
        }
      }
    }
    if (isPrivateOrChannel(msg.chat.type)) {
      return sendMessageService(
        bot,
        chatId,
        "Привет, я работаю только в группах, а не в личных сообщениях"
      );
    }

    if (
      msg.left_chat_member?.is_bot &&
      msg.left_chat_member?.username === botName
    ) {
      const chat = await findOneChatByParams({ id: chatId });
      if (chat) {
        return chat.remove();
      }
      return true;
    }
  });
};
