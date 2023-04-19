import React from "react";
import {
	ChatBarImageWrapper,
	ChatBarTitle,
	ChatBarTitleWrapper,
	ChatLeftBarWrapper,
	ChatNavWrapper,
} from "shared/chat/components/chat-left-bar/styled";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";

interface IChatLeftBar {
	isHidden: boolean;
	children?: React.ReactNode;
}

const selector = (state: IRootState) => ({ chat: state.chat.chat });
export const ChatLeftBar = ({ isHidden, children }: IChatLeftBar) => {
	const { chat } = useAppSelector(selector);
	return (
		<>
			{isHidden ? null : (
				<ChatLeftBarWrapper>
					<ChatBarTitleWrapper>
						<ChatBarImageWrapper />
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
						{/*@ts-ignore*/}
						<ChatBarTitle>{chat?.tgChatInfo.chatInfo.title}</ChatBarTitle>
					</ChatBarTitleWrapper>
					<ChatNavWrapper>{children}</ChatNavWrapper>
				</ChatLeftBarWrapper>
			)}
		</>
	);
};
