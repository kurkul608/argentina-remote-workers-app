import React from "react";
import { Input, InputWrapper, Title, Label, CheckBox } from "./styled";

export interface IFormCheckboxInput {
  title: string;
  name: string;
  handleChange: any;
  value: any;
  id?: string;
}

export const FormCheckboxInput = ({
  title,
  name,
  handleChange,
  value,
}: IFormCheckboxInput) => {
  return (
    <InputWrapper>
      <Label htmlFor={value}>
        <Input
          type={"checkbox"}
          name={name}
          id={value}
          value={value}
          onChange={handleChange}
        />
        <CheckBox />
        <Title>{title}</Title>
      </Label>
    </InputWrapper>
  );
};
