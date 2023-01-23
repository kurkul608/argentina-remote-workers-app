import React, { useCallback, useEffect } from "react";
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
	Subscribers,
	SvgWrapper,
	TextWrapper,
} from "./styled";
import { getAllChats } from "shared/chat/redux/chat-page/chat-list.slice";
import { IChatInterface } from "interfaces/chat.interface";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { RouteReplacer } from "shared/router/services/route-replacer";
import { getAuthToken } from "helpers/storage-parser";

export const ChatListWidget = () => {
	const { list } = useAppSelector((state) => state.chats);
	const dispatch = useAppDispatch();
	const token = getAuthToken();
	useEffect(() => {
		dispatch(getAllChats(token));
	}, []);
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
		<>
			{list.map((chat) => (
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
		</>
	);
};
