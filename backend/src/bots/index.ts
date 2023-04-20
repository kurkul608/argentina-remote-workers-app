import dotenv from "dotenv";
import TelegramApi from "node-telegram-bot-api";

dotenv.config();
const token = process.env.BOT_TOKEN;
export const mainBot = token
  ? new TelegramApi(token, { polling: true })
  : undefined;
