import React from "react";
import {
	ChatBarImageWrapper,
	ChatBarTitle,
	ChatBarTitleWrapper,
	ChatLeftBarWrapper,
	ChatNavWrapper,
} from "shared/chat/components/chat-page/chat-aside/styled";
import { useAppSelector } from "redux/hooks";

interface IChatLeftBar {
	isHidden: boolean;
	children?: React.ReactNode;
}

export const ChatAside = ({ isHidden, children }: IChatLeftBar) => {
	const { chatInfo } = useAppSelector((state) => state.chat.data);
	return (
		<>
			{isHidden ? null : (
				<ChatLeftBarWrapper>
					<ChatBarTitleWrapper>
						<ChatBarImageWrapper />
						<ChatBarTitle>{chatInfo.title}</ChatBarTitle>
					</ChatBarTitleWrapper>
					<ChatNavWrapper>{children}</ChatNavWrapper>
				</ChatLeftBarWrapper>
			)}
		</>
	);
};
