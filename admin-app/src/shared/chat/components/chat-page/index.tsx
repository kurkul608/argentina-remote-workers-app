import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { Widget } from "shared/widget";
import {
	ChatListWrapper,
	ChatPhoto,
	ChatPhotoWrapper,
	ChatsWrapper,
	ChatTitle,
	ChatTitleWrapper,
	ChatWrapper,
	StyledChatList,
	Subscribers,
	SvgWrapper,
	TextWrapper,
} from "./styled";
import { getAllChats } from "shared/chat/redux/chat-page/chat-list.slice";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { routeReplacer } from "shared/router/services/route-replacer";
import { getAuthToken } from "helpers/storage-parser";
import { InfiniteScroll } from "shared/components/infinite-scroll";
import { useTranslation } from "react-i18next";
import { Limits } from "constants/limits";
import { CircularProgress } from "@mui/material";
import { IChat } from "shared/chat/interfaces/chat.interface";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	list: state.chats.list,
	token: getAuthToken(state.auth)!,
	total: state.chats.total,
	hasMore: state.chats.hasMore,
	page: state.chats.page,
	isLoading: state.chats.isLoading,
});

export const ChatListWidget = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation("translation", {
		keyPrefix: "chatsPage",
	});
	const { list, token, hasMore, page, isLoading } = useAppSelector(selector);
	const onScroll = () => {
		if (hasMore || !page) {
			dispatch(
				getAllChats({
					token,
					params: {
						limit: Limits.chatsPerPage,
						page: page,
					},
				})
			);
		}
	};
	const navigate = useNavigate();
	const handleOnClick = useCallback(
		(chat: IChat) =>
			navigate(
				routeReplacer(
					routeBuilder([Routes.admin, Routes.chat]),
					"chatId",
					chat.tgChatInfo.chatInfo.id
				),
				{ replace: true }
			),
		[navigate]
	);
	const handleOnClickSettings = useCallback(
		(chat: IChat) =>
			navigate(
				routeReplacer(
					routeBuilder([Routes.admin, Routes.chatSettings]),
					"chatId",
					chat.tgChatInfo.chatInfo.id
				),
				{ replace: true }
			),
		[navigate]
	);
	return (
		<StyledChatList>
			<InfiniteScroll
				loader={<CircularProgress />}
				endMessage={<span>All chats was loaded</span>}
				isLoading={isLoading}
				callback={onScroll}
			>
				<ChatsWrapper>
					{list.map((chat) => (
						<ChatListWrapper
							key={`widget-chat-list--${chat.tgChatInfo.chatInfo.id}`}
						>
							<Widget onClick={() => handleOnClick(chat)}>
								<ChatWrapper>
									<TextWrapper>
										<ChatPhotoWrapper>
											<ChatPhoto chatPhoto={chat.tgChatInfo.photos.small}>
												{!chat.tgChatInfo.photos.small &&
													// eslint-disable-next-line @typescript-eslint/ban-ts-comment
													// @ts-ignore
													chat.tgChatInfo.chatInfo.title[0].toUpperCase()}
											</ChatPhoto>
										</ChatPhotoWrapper>
										<ChatTitleWrapper>
											{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
											{/*// @ts-ignore*/}
											<ChatTitle>{chat.tgChatInfo.chatInfo.title}</ChatTitle>
											<Subscribers>{`${chat.tgChatInfo.chatMembersCount} ${t(
												"count"
											)}`}</Subscribers>
										</ChatTitleWrapper>
									</TextWrapper>
									<SvgWrapper
										onClick={(e) => {
											e.stopPropagation();
											handleOnClickSettings(chat);
										}}
									>
										Settings
									</SvgWrapper>
								</ChatWrapper>
							</Widget>
						</ChatListWrapper>
					))}
				</ChatsWrapper>
			</InfiniteScroll>
		</StyledChatList>
	);
};
