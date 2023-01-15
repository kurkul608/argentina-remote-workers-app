import React, { useCallback, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { Widget } from "../../../widget";
import {
  ChatListWrapper,
  ChatPhoto,
  ChatPhotoWrapper,
  ChatTitle,
} from "./styled";
import { getAllChats } from "../../redux/chat-list.slice";
import { useNavigate } from "react-router";
import { IChatInterface } from "../../../../interfaces/chat.interface";
import { SettingsSvg } from "../settings";

export const ChatListWidget = () => {
  const { list } = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllChats());
  }, []);
  console.log(list);
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (chat: IChatInterface) => navigate(`/chat/${chat.id}`, { replace: true }),
    [navigate]
  );
  console.log(list[0]);
  return (
    <>
      {/*<ChatListWrapper>*/}
      {/*  <Widget name={"Chat list widget"}>*/}
      {/*    <ChatListUL>*/}
      {/*      {list.map((chat) => (*/}
      {/*        <li key={`widget-chat-list--${chat.id}`}>*/}
      {/*          <Chat onClick={() => handleOnClick(chat)}>*/}
      {/*            <ChatPhotoWrapper>*/}
      {/*              <ChatPhoto>{chat.title[0].toUpperCase()}</ChatPhoto>*/}
      {/*            </ChatPhotoWrapper>*/}
      {/*            <ChatTitle>{chat.title}</ChatTitle>*/}
      {/*          </Chat>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ChatListUL>*/}
      {/*  </Widget>*/}
      {/*</ChatListWrapper>*/}
      {list.map((chat) => (
        <ChatListWrapper
          key={`widget-chat-list--${chat.id}`}
          style={{ minWidth: 280, width: "100%" }}
        >
          <Widget name={""} onClick={() => handleOnClick(chat)}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <ChatPhotoWrapper>
                  <ChatPhoto>{chat.title[0].toUpperCase()}</ChatPhoto>
                </ChatPhotoWrapper>
                <div>
                  <ChatTitle>{chat.title}</ChatTitle>
                  <span>32k subscribers</span>
                </div>
              </div>
              <SettingsSvg />
            </div>
          </Widget>
        </ChatListWrapper>
      ))}
    </>
  );
};
