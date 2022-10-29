import React, { useState } from "react";
import {
  Dropdown,
  DropdownWrapper,
  Icon,
  OuterWrapper,
  Table,
  TableItem,
} from "./styled";

import { FormCheckboxInput } from "../form-checkbox-input";

interface IDropdownList {
  list: any[];
  handleChange: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  nameList: string;
}
export const DropdownList = ({
  list,
  handleChange,
  nameList,
}: IDropdownList) => {
  const [isOpen, setIsOpen] = useState(false);
  function onClick(e: any) {
    e.stopPropagation();
  }
  return (
    <>
      <DropdownWrapper onClick={() => setIsOpen(!isOpen)}>
        <OuterWrapper className={isOpen ? "active" : ""}>
          <Dropdown>{"test"}</Dropdown>
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
            {list.map((item) => {
              return (
                <TableItem onClick={(e) => onClick(e)} key={`chat-${item._id}`}>
                  <FormCheckboxInput
                    title={item.title}
                    name={nameList}
                    handleChange={handleChange}
                  ></FormCheckboxInput>
                </TableItem>
              );
            })}
          </Table>
        ) : null}
      </DropdownWrapper>
    </>
  );
};
