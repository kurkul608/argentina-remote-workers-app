import React from "react";
import { ChatListWidget } from "../../shared/chat-list/components/chat-list-widget";
import { SendMessageWidget } from "../../shared/message/components/send-message-widget";

export const MainPage = () => {
  return (
    <>
      <ChatListWidget />
      <SendMessageWidget />
    </>
  );
};
