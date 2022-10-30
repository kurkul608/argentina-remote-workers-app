import { Message } from "node-telegram-bot-api";
import PinnedMessage from "../../models/pinned-message/pinned-message.model";

export const addPinnedMessage = async (message: Message) => {
  const pinnedMessage = await new PinnedMessage(message);
  await pinnedMessage.save();
  return pinnedMessage;
};
