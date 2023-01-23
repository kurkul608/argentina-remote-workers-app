import React from "react";
import { ChatWidget } from "shared/chat/components/chat-messange-widget";
import { ChatTopBar } from "shared/chat/components/chat-top-bar";
import { WidgetWrapper } from "shared/widget/components/widget-wrapper";

export const ChatPage = () => {
	return (
		<>
			<ChatTopBar />
			<WidgetWrapper>
				<ChatWidget />
			</WidgetWrapper>
		</>
	);
};
