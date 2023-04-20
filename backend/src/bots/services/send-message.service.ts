import TelegramBot from "node-telegram-bot-api";

export const sendMessageService = (
  bot: TelegramBot,
  chatId: string | number,
  message: string
) => {
  return bot.sendMessage(chatId, message);
};
