import React from "react";
import { ChatWidget } from "shared/chat/components/chat-messange-widget";
import { ChatTopBar } from "shared/chat/components/chat-top-bar";
import { WidgetWrapper } from "shared/widget/components/widget-wrapper";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { PageTitle } from "shared/components/title";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chat: state.chat.chat,
});
export const ChatPage = () => {
	const { chat } = useAppSelector(selector);
	return (
		<>
			<PageTitle>
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/*@ts-ignore*/}
				<h3>{chat?.tgChatInfo.chatInfo.title}</h3>
				<Breadcrumbs link={location.pathname} />
			</PageTitle>
			<ChatTopBar />
			<WidgetWrapper>
				<ChatWidget />
			</WidgetWrapper>
		</>
	);
};
