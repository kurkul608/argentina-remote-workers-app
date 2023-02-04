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
import { IChatInterface } from "interfaces/chat.interface";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { routeReplacer } from "shared/router/services/route-replacer";
import { getAuthToken } from "helpers/storage-parser";
import { InfiniteScroll } from "shared/components/infinite-scroll";
import { useTranslation } from "react-i18next";
import { Limits } from "constants/limits";
import { CircularProgress } from "@mui/material";

const CHATS_LIMIT = Limits.chatsPerPage;

export const ChatListWidget = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation("translation", {
		keyPrefix: "chatsPage",
	});
	const { list, token, hasMore, page, isLoading } = useAppSelector((state) => ({
		list: state.chats.list,
		token: getAuthToken(state.auth)!,
		total: state.chats.total,
		hasMore: state.chats.hasMore,
		page: state.chats.page,
		isLoading: state.chats.isLoading,
	}));
	const onScroll = () => {
		if (hasMore || !page) {
			dispatch(
				getAllChats({
					token,
					params: {
						limit: CHATS_LIMIT,
						page: page,
					},
				})
			);
		}
	};
	const navigate = useNavigate();
	const handleOnClick = useCallback(
		(chat: IChatInterface) =>
			navigate(
				routeReplacer(
					routeBuilder([Routes.admin, Routes.chat]),
					"chatId",
					chat.id
				),
				{ replace: true }
			),
		[navigate]
	);
	const handleOnClickSettings = useCallback(
		(chat: IChatInterface) =>
			navigate(
				routeReplacer(
					routeBuilder([Routes.admin, Routes.chatSettings]),
					"chatId",
					chat.id
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
					{list.map(({ chat, photos, chatMembersCount }) => (
						<ChatListWrapper key={`widget-chat-list--${chat.id}`}>
							<Widget name={""} onClick={() => handleOnClick(chat)}>
								<ChatWrapper>
									<TextWrapper>
										<ChatPhotoWrapper>
											<ChatPhoto chatPhoto={photos.small}>
												{!photos.small && chat.title[0].toUpperCase()}
											</ChatPhoto>
										</ChatPhotoWrapper>
										<ChatTitleWrapper>
											<ChatTitle>{chat.title}</ChatTitle>
											<Subscribers>{`${chatMembersCount} ${t(
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
