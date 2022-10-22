import { ChatType } from "node-telegram-bot-api";

export const isPrivateOrChannel = (chatType: ChatType) => {
  return chatType === "channel" || chatType === "private";
};
