import TelegramBot from "node-telegram-bot-api";

export const messageObserver = (bot: TelegramBot) => {
  const botName = process.env.BOT_NAME;
  return bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
  });
};
