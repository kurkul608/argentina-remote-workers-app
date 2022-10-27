import React, { useState } from "react";
import {
  Dropdown,
  DropdownWrapper,
  Icon,
  OuterWrapper,
  Table,
  TableItem,
} from "./styled";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addActiveChat,
  removeActiveChat,
} from "../../chat-list/redux/active-chats.slice";
import { IChatInterface } from "../../../interfaces/chat.interface";

interface IDropdownList {
  onAdd: any;
  onRemove: any;
  tableItems: any[];
}
export const DropdownList = ({ tableItems }: IDropdownList) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.activeChats);
  function itemOnClick(e: any, item: IChatInterface) {
    e.stopPropagation();
    if (list) {
      console.log(list);
      // @ts-ignore
      if (list.find((chat, i) => chat[i].id === item.id)) {
        dispatch(removeActiveChat(item));
      }
    }
    dispatch(addActiveChat(item));
  }
  console.log(list, "test");

  console.log(tableItems);
  return (
    <>
      <DropdownWrapper onClick={() => setIsOpen(!isOpen)}>
        <OuterWrapper className={isOpen ? "active" : ""}>
          <Dropdown>{list.length ? list[0].title : ""}</Dropdown>
          <Icon className={isOpen ? "" : "closed"}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 0L9.33013 7.5H0.669873L5 0Z" fill="#F7B03E" />
            </svg>
          </Icon>
        </OuterWrapper>
        {isOpen ? (
          <Table>
            {tableItems.map((item) => {
              return (
                <TableItem
                  key={`chat-${item._id}`}
                  onClick={(e) => {
                    itemOnClick(e, item);
                  }}
                >
                  {item.title}
                </TableItem>
              );
            })}
          </Table>
        ) : null}
      </DropdownWrapper>
    </>
  );
};
