import { messageObserver } from "./observers/message.observer";
import { mainBot } from "../index";
import { newChatMemberObserver } from "./observers/new-chat-member.observer";
import { leftChatMemberObserver } from "./observers/left-chat-member.observer";
import { channelEditPostObserver } from "./observers/channel-edit-post.observer";
import { channelNewPostObserver } from "./observers/channel-new-post.observer";

export const mainBotStart = () => {
  const botName = process.env.BOT_NAME;
  if (botName && mainBot) {
    newChatMemberObserver(mainBot);
    leftChatMemberObserver(mainBot);
    channelEditPostObserver(mainBot);
    channelNewPostObserver(mainBot);
    messageObserver(mainBot);
  } else {
    throw new Error("Bot user token not found");
  }
};
