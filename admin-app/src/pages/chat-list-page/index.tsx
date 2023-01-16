import React from "react";
import { ChatListWidget } from "../../shared/chat-list/components/chat-list-widget";
import { Title } from "../../shared/components/title";
import { useTranslation } from "react-i18next";

export const ChatListPage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
  return (
    <>
      <Title titleElement={<h3>{t("chats")}</h3>} />
      <ChatListWidget />
    </>
  );
};
