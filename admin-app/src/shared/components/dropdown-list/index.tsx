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

export interface IDropdownOption {
  key: string;
  label: string;
  value: string;
}

interface IDropdownList {
  list: IDropdownOption[];
  handleChange: (e: React.ChangeEvent<any>) => void;
  nameList: string;
  selectedValues: Array<number | string>;
  placeHolder: string;
}
export const DropdownList = ({
  list,
  handleChange,
  nameList,
  selectedValues,
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
            {selectedValues.length
              ? list
                  .filter((x) => selectedValues.includes(x.value))
                  .map((x) => x.label)
                  .join(", ")
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
          {list.map((item) => {
            return (
              <TableItem onClick={(e) => onClick(e)} key={item.key}>
                <FormCheckboxInput
                  title={item.label}
                  value={item.value}
                  name={nameList}
                  handleChange={handleChange}
                  isChecked={
                    !!selectedValues.find(
                      (value) => value.toString() === item.value.toString()
                    )
                  }
                />
              </TableItem>
            );
          })}
        </Table>
      </DropdownWrapper>
    </>
  );
};
