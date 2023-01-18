import React from "react";
import { ChatListWidget } from "shared/chat/components/chat-page";
import { PageTitle } from "shared/components/title";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { useLocation } from "react-router-dom";

export const ChatListPage = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	const location = useLocation();
	return (
		<>
			<PageTitle>
				<h3>{t("chats")}</h3>
				<Breadcrumbs link={location.pathname} />
			</PageTitle>
			<ChatListWidget />
		</>
	);
};
