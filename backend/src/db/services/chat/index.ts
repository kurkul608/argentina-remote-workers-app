import TelegramBot from "node-telegram-bot-api";
import Chat from "../../models/chat/chat.model";

export const createNewChat = async (chat: TelegramBot.Chat) => {
  const newChat = await new Chat(chat);
  await newChat.save();
  return newChat;
};

export const findOneChatByParams = (params: Partial<TelegramBot.Chat>) => {
  return Chat.findOne(params);
};
