import React, { useCallback, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { Widget } from "../../../widget";
import {
	Chat,
	ChatListUL,
	ChatListWrapper,
	ChatPhoto,
	ChatPhotoWrapper,
	ChatTitle,
} from "./styled";
import { getAllChats } from "../../redux/chat-list.slice";
import { useNavigate } from "react-router";
import { IChatInterface } from "../../../../interfaces/chat.interface";

export const ChatListWidget = () => {
	const { list } = useAppSelector((state) => state.chats);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getAllChats());
	}, []);
	const navigate = useNavigate();
	const handleOnClick = useCallback(
		(chat: IChatInterface) => navigate(`/chat/${chat.id}`, { replace: true }),
		[navigate]
	);
	return (
		<>
			<ChatListWrapper>
				<Widget name={"Chat list widget"}>
					<ChatListUL>
						{list.map((chat) => (
							<li key={`widget-chat-list--${chat.id}`}>
								<Chat onClick={() => handleOnClick(chat)}>
									<ChatPhotoWrapper>
										<ChatPhoto>{chat.title[0].toUpperCase()}</ChatPhoto>
									</ChatPhotoWrapper>
									<ChatTitle>{chat.title}</ChatTitle>
								</Chat>
							</li>
						))}
					</ChatListUL>
				</Widget>
			</ChatListWrapper>
		</>
	);
};
