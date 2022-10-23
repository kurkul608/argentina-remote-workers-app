import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { Widget } from "../../../widget";

export const ChatListWidget = () => {
  const chatList = useAppSelector((state) => state.chats.list);
  return (
    <>
      <Widget
        name={"Chat list widget"}
        list={chatList.map((element) => (
          <>{element}</>
        ))}
      />
    </>
  );
};
