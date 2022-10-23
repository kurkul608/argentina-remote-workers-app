import { messageObserver } from "./observers/message.observer";
import { mainBot } from "../index";

export const mainBotStart = () => {
  const botName = process.env.BOT_NAME;
  if (botName && mainBot) {
    messageObserver(mainBot);
  } else {
    throw new Error("Bot user token not found");
  }
};
