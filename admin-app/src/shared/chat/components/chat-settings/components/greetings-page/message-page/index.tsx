import React from "react";
import { Wrapper } from "shared/chat/components/chat-settings/components/greetings-page/message-page/styled";
import { MessageBuilder } from "shared/chat/components/chat-bot/components/message-builder";
import { useAppSelector } from "redux/hooks";

export const MessagePage = () => {
	const { message } = useAppSelector(
		(state) => state.chatSettings.chatSettingsReducer.config.greetings
	);
	const { id } = useAppSelector((state) => state.chat.data.chatInfo);
	return (
		<Wrapper>
			<MessageBuilder
				name={"Greeting"}
				limit={10}
				messages={message}
				chatId={id}
			/>
		</Wrapper>
	);
};
