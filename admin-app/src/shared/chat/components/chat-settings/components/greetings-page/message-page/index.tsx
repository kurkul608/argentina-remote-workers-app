import React from "react";
import { Wrapper } from "shared/chat/components/chat-settings/components/greetings-page/message-page/styled";
import { MessageBuilder } from "shared/chat/components/chat-bot/components/message-builder";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	id: state.chat.chat?.tgChatInfo.chatInfo.id,
});
export const MessagePage = () => {
	const { message } = useAppSelector(
		(state) => state.chatSettings.chatSettingsReducer.config.greetings
	);
	const { id } = useAppSelector(selector);
	return (
		<Wrapper>
			<MessageBuilder
				name={"Greeting"}
				limit={10}
				messages={message}
				chatId={id || 0}
			/>
		</Wrapper>
	);
};
