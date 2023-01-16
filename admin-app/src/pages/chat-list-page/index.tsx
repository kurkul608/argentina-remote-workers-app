import React from "react";
import { ChatListWidget } from "../../shared/chat/components/chat-page";
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
