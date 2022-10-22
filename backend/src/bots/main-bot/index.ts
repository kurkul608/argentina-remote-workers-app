import TelegramApi from "node-telegram-bot-api";
import { messageObserver } from "./observers/message.observer";

export const mainBotStart = () => {
  const token = process.env.BOT_TOKEN;
  const botName = process.env.BOT_NAME;
  if (token && botName) {
    const bot = new TelegramApi(token, { polling: true });
    messageObserver(bot);
  } else {
    throw new Error("Bot user token not found");
  }
};
