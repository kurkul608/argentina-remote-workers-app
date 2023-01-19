import React from "react";
import {
	ChatBarImageWrapper,
	ChatBarTitle,
	ChatBarTitleWrapper,
	ChatLeftBarWrapper,
	ChatNavWrapper,
} from "shared/chat/components/chat-left-bar/styled";
import { useAppSelector } from "redux/hooks";

interface IChatLeftBar {
	isHidden: boolean;
	children?: React.ReactNode;
}

export const ChatLeftBar = ({ isHidden, children }: IChatLeftBar) => {
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
