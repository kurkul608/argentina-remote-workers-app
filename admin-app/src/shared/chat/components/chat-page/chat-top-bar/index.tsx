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
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
	photos: state.chat.chat?.tgChatInfo.photos,
	token: getAuthToken(state.auth)!,
	isHidden: state.chat.chat?.isHidden,
});

export const ChatTopBar = () => {
	const dispatch = useAppDispatch();
	const { photos, chatInfo, chatId, token, isHidden } =
		useAppSelector(selector);
	const handleClick = () => {
		dispatch(changeVisibleAsync({ id: chatId!, isHidden: !!isHidden, token }));
	};
	return (
		<>
			<Widget>
				<TopBarWrapper>
					<TopBarChatPhoto chatPhoto={photos?.small}>
						{!photos?.small && chatInfo?.title}
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
