import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { Widget } from "../../../widget";
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
import { getAllChats } from "../../redux/chat-page/chat-list.slice";
import { IChatInterface } from "../../../../interfaces/chat.interface";
import { routeBuilder } from "../../../router/services/route-builder";
import { Routes } from "../../../router";
import { RouteReplacer } from "../../../router/services/route-replacer";

export const ChatListWidget = () => {
  const { list } = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllChats());
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
                  <Subscribers>{`32k subscribers`}</Subscribers>
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
