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
import { IMapped } from "../../message/services/helpers";

interface IDropdownList {
  list: IMapped;
  handleChange: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  nameList: string;
  values: string[];
  placeHolder: string;
}
export const DropdownList = ({
  list,
  handleChange,
  nameList,
  values,
  placeHolder,
}: IDropdownList) => {
  const [isOpen, setIsOpen] = useState(false);
  function onClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  return (
    <>
      <DropdownWrapper onClick={() => setIsOpen(!isOpen)}>
        <OuterWrapper className={isOpen ? "active" : ""}>
          <Dropdown>
            {values.length
              ? values.map((item) => list[item].title).join(", ")
              : placeHolder}
          </Dropdown>
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
        <Table className={isOpen ? "" : "hidden"}>
          {Object.keys(list).map((item) => {
            return (
              <TableItem
                onClick={(e) => onClick(e)}
                key={`chat-${list[item].id}`}
              >
                <FormCheckboxInput
                  title={list[item].title}
                  value={list[item].id}
                  name={nameList}
                  handleChange={handleChange}
                />
              </TableItem>
            );
          })}
        </Table>
      </DropdownWrapper>
    </>
  );
};
