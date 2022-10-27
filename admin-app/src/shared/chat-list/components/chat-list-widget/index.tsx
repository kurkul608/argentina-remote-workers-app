import React, { useEffect } from "react";
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
import { getChatsList } from "../../services/data";
import { getAllChats } from "../../redux/chat-list.slice";

export const ChatListWidget = () => {
  const chatList = useAppSelector((state) => state.chats.list);
  const dispatch = useAppDispatch();

  const item = [
    {
      id: 1,
      title: "Гейпорно",
    },
    {
      id: 2,
      title: "Я люблю большие члены",
    },
    {
      id: 3,
      title: "Школа #31",
    },
    {
      id: 4,
      title: "Дора",
    },
  ];

  useEffect(() => {
    getChatsList().then((data) => console.log(data));
    dispatch(getAllChats());
  }, []);
  return (
    <>
      <ChatListWrapper>
        <Widget name={"Chat list widget"}>
          <ChatListUL>
            {item.map((chat) => (
              <li key={`widget-chat-list--${chat.id}`}>
                <Chat>
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
