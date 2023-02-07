import React from "react";
import { ChatWidget } from "shared/chat/components/chat-messange-widget";
import { ChatTopBar } from "shared/chat/components/chat-top-bar";
import { WidgetWrapper } from "shared/widget/components/widget-wrapper";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { PageTitle } from "shared/components/title";
import { useAppSelector } from "redux/hooks";

export const ChatPage = () => {
	const { data } = useAppSelector((state) => state.chat);
	return (
		<>
			<PageTitle>
				<h3>{data.chatInfo.title}</h3>
				<Breadcrumbs link={location.pathname} />
			</PageTitle>
			<ChatTopBar />
			<WidgetWrapper>
				<ChatWidget />
			</WidgetWrapper>
		</>
	);
};
