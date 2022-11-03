import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { Widget } from "../../../widget";
import { ChatListWrapper } from "./styled";
import { getAllChats } from "../../redux/chat-list.slice";

export const ChatListWidget = () => {
  const chatList = useAppSelector((state) => state.chats.list);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllChats());
  }, []);
  return (
    <>
      <Widget name={"Chat list widget"}>
        <ChatListWrapper></ChatListWrapper>
      </Widget>
    </>
  );
};
