import React from "react";
import { ChatListWidget } from "shared/chat/components/chat-page";
import { PageTitle } from "shared/components/title";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { useLocation, useSearchParams } from "react-router-dom";
import { WidgetWrapper } from "shared/widget/components/widget-wrapper";

export const ChatListPage = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const isHiddenChatPage = !!searchParams.get("isHidden");
	return (
		<>
			<PageTitle>
				<h3>{t("chats")}</h3>
				<Breadcrumbs link={location.pathname} />
			</PageTitle>
			<WidgetWrapper>
				<ChatListWidget isHiddenChatList={isHiddenChatPage} />
			</WidgetWrapper>
		</>
	);
};
