import React from "react";
import { ChatTopBar } from "shared/chat/components/chat-page/chat-top-bar";
import { WidgetWrapper } from "shared/widget/components/widget-wrapper";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { PageTitle } from "shared/components/title";
import { useAppSelector } from "redux/hooks";
import { ChatInfoWidget } from "shared/chat/components/chat-info-page";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
});

export const ChatPage = () => {
	const { chatInfo } = useAppSelector(selector);
	return (
		<>
			<PageTitle>
				<h3>{chatInfo?.title}</h3>
				<Breadcrumbs link={location.pathname} />
			</PageTitle>
			<ChatTopBar />
			<WidgetWrapper>
				<ChatInfoWidget />
			</WidgetWrapper>
		</>
	);
};
