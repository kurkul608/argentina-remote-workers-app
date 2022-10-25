import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { Widget } from "../../../widget";
import { ChatListWrapper } from "./styled";
import { getChatsList } from "../../services/data";
import { getAllChats } from "../../redux/chat-list.slice";
import { DropdownList } from "../../../components/dropdown-list";
import {
  addActiveChat,
  removeActiveChat,
} from "../../redux/active-chats.slice";

export const ChatListWidget = () => {
  const chatList = useAppSelector((state) => state.chats.list);
  const dispatch = useAppDispatch();
  const activeChats = useAppSelector((state) => {
    state.activeChats.list;
  });
  console.log(activeChats, "data");
  console.log(chatList, "chatlist");
  useEffect(() => {
    getChatsList().then((data) => console.log(data));
    dispatch(getAllChats());
  }, []);
  return (
    <>
      <Widget name={"Chat list widget"}>
        <ChatListWrapper>
          <DropdownList
            onRemove={removeActiveChat}
            onAdd={addActiveChat}
            tableItems={chatList}
          ></DropdownList>
        </ChatListWrapper>
      </Widget>
    </>
  );
};
