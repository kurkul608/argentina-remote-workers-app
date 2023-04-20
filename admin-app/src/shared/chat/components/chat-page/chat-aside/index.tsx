import React from "react";
import {
	ChatBarImageWrapper,
	ChatBarTitle,
	ChatBarTitleWrapper,
	ChatLeftBarWrapper,
	ChatNavWrapper,
} from "shared/chat/components/chat-page/chat-aside/styled";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";

interface IChatLeftBar {
	isHidden: boolean;
	children?: React.ReactNode;
}

const selector = (state: IRootState) => ({
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
});

export const ChatAside = ({ isHidden, children }: IChatLeftBar) => {
	const { chatInfo } = useAppSelector(selector);
	return (
		<>
			{isHidden ? null : (
				<ChatLeftBarWrapper>
					<ChatBarTitleWrapper>
						<ChatBarImageWrapper />
						<ChatBarTitle>{chatInfo?.title}</ChatBarTitle>
					</ChatBarTitleWrapper>
					<ChatNavWrapper>{children}</ChatNavWrapper>
				</ChatLeftBarWrapper>
			)}
		</>
	);
};
