import React from "react";
import {
	TopBarChatPhoto,
	TopBarWrapper,
} from "shared/chat/components/chat-top-bar/styled";
import { Widget } from "shared/widget";
import { Button } from "shared/components/button";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getAuthToken } from "helpers/storage-parser";
import { changeVisibleAsync } from "shared/chat/redux/chat-info-page/chat.slice";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chat: state.chat.chat,
	photos: state.chat.chat?.tgChatInfo.photos,
	token: getAuthToken(state.auth)!,
	isHidden: state.chat.chat?.isHidden,
});

export const ChatTopBar = () => {
	const dispatch = useAppDispatch();

	const { photos, chat, token, isHidden } = useAppSelector(selector);

	const handleClick = () => {
		chat &&
			dispatch(
				changeVisibleAsync({
					id: chat.tgChatInfo.chatInfo.id,
					isHidden: !!isHidden,
					token,
				})
			);
	};

	return (
		<>
			<Widget>
				<TopBarWrapper>
					<TopBarChatPhoto chatPhoto={photos?.small}>
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
						{/*@ts-ignore*/}
						{!photos?.small && chat?.tgChatInfo.chatInfo.title}
					</TopBarChatPhoto>
					<Button isDisabled={false} onClick={handleClick}>
						{isHidden ? "hidden" : "nothidden"}
					</Button>
				</TopBarWrapper>
				;
			</Widget>
			;
		</>
	);
};
