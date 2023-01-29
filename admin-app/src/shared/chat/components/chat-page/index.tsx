import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { Widget } from "shared/widget";
import {
	ChatListWrapper,
	ChatPhoto,
	ChatPhotoWrapper,
	ChatTitle,
	ChatTitleWrapper,
	ChatWrapper,
	StyledChatList,
	Subscribers,
	SvgWrapper,
	TextWrapper,
} from "./styled";
import { getAllChats } from "shared/chat/redux/chat-page/chat-list.slice";
import { IChat, IChatInterface } from "interfaces/chat.interface";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { RouteReplacer } from "shared/router/services/route-replacer";
import { getAuthToken } from "helpers/storage-parser";
import { InfiniteScroll } from "shared/components/infinite-scroll";

export const ChatListWidget = () => {
	const { list, auth, total } = useAppSelector((state) => ({
		list: state.chats.list,
		auth: state.auth,
		total: state.chats.total,
	}));
	const [mass, setMass] = useState([] as IChat[]);
	const dispatch = useAppDispatch();
	const token = getAuthToken(auth)!;
	const [page, setPage] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const limit = 4;
	const offset = limit * page;
	useEffect(() => {
		setMass((mass) => [...mass, ...list]);
	}, [list]);
	// console.log(total);
	const next = () => {
		if (hasMore) {
			dispatch(
				getAllChats({
					token,
					query: {
						limit,
						offset,
					},
				})
			);
		}
		setPage(page + 1);
		if (offset >= total - 1 && page !== 0) {
			setHasMore(false);
		}
	};
	const navigate = useNavigate();
	const handleOnClick = useCallback(
		(chat: IChatInterface) =>
			navigate(
				RouteReplacer(
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
				RouteReplacer(
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
				loader={<h3>Loading...</h3>}
				endMessage={<span>All chats was loaded</span>}
				hasMore={hasMore}
				callback={next}
			>
				{mass.map(({ chat }) => (
					<ChatListWrapper key={`widget-chat-list--${chat.id}`}>
						<Widget name={""} onClick={() => handleOnClick(chat)}>
							<ChatWrapper>
								<TextWrapper>
									<ChatPhotoWrapper>
										<ChatPhoto>{chat.title[0].toUpperCase()}</ChatPhoto>
									</ChatPhotoWrapper>
									<ChatTitleWrapper>
										<ChatTitle>{chat.title}</ChatTitle>
										<Subscribers>{"32k subscribers"}</Subscribers>
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
			</InfiniteScroll>
		</StyledChatList>
	);
};
