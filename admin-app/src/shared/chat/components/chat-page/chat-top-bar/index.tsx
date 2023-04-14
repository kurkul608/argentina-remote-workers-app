import React from "react";
import {
	TopBarChatPhoto,
	TopBarWrapper,
} from "shared/chat/components/chat-page/chat-top-bar/styled";
import { Widget } from "shared/widget";
import { Button } from "shared/components/button";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getAuthToken } from "helpers/storage-parser";
import { changeVisibleAsync } from "shared/chat/redux/chat-info-page/chat.slice";

export const ChatTopBar = () => {
	const dispatch = useAppDispatch();
	const { photos, chat, token, isHidden } = useAppSelector((state) => ({
		chat: state.chat.data.chat,
		photos: state.chat.data.photos,
		token: getAuthToken(state.auth)!,
		isHidden: state.chat.data.chat.isHidden,
	}));
	const handleClick = () => {
		dispatch(changeVisibleAsync({ id: chat.id, isHidden, token }));
	};
	return (
		<>
			<Widget>
				<TopBarWrapper>
					<TopBarChatPhoto chatPhoto={photos.small}>
						{!photos.small && chat.title}
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