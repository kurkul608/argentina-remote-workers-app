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
import {
	routeBuilder,
	routeBuilderWithReplace,
} from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { routeReplacer } from "shared/router/services/route-replacer";
import { getAuthToken } from "helpers/storage-parser";
import { InfiniteScroll } from "shared/components/infinite-scroll";
import { useTranslation } from "react-i18next";
import { Limits } from "constants/limits";
import { CircularProgress } from "@mui/material";
import { searchParamsGrabber } from "shared/router/services/search-params-grabber";
import { useLocation } from "react-router-dom";
import { searchParamsFinder } from "shared/router/services/search-params-finder";

export const ChatListWidget = () => {
	const dispatch = useAppDispatch();
	const locate = useLocation();
	const searchParams = searchParamsGrabber(locate.search);
	const isHidden = !!searchParamsFinder(searchParams, "isHidden");
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
						limit: Limits.chatsPerPage,
						page: page,
						isHidden: isHidden,
					},
				})
			);
		}
	};
	const navigate = useNavigate();
	const handleOnClick = useCallback(
		(chat: IChatInterface) =>
			navigate(
				routeBuilderWithReplace(
					[Routes.admin, Routes.chatList, Routes.chat],
					"chatId",
					chat.id
				)
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
							<Widget onClick={() => handleOnClick(chat)}>
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
