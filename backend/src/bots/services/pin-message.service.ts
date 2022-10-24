import TelegramBot from "node-telegram-bot-api";

export const pinMessageService = (
  bot: TelegramBot,
  chatId: string | number,
  messageId: number
) => {
  return bot.pinChatMessage(chatId, messageId);
};
