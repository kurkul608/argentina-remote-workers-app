import React from "react";
import { ChatListWidget } from "shared/chat/components/chat-page";
import { PageTitle } from "shared/components/title";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { WidgetWrapper } from "shared/widget/components/widget-wrapper";

export const ChatListPage = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	return (
		<>
			<PageTitle>
				<h3>{t("chats")}</h3>
				<Breadcrumbs link={location.pathname} />
			</PageTitle>
			<WidgetWrapper>
				<ChatListWidget />
			</WidgetWrapper>
		</>
	);
};
