import React from "react";
import { Input, InputWrapper, Title, Label, CheckBox } from "./styled";

export interface IFormCheckboxInput {
  title: string;
  name: string;
  handleChange: any;
  value: string;
}

export const FormCheckboxInput = ({
  title,
  name,
  handleChange,
  value,
}: IFormCheckboxInput) => {
  return (
    <InputWrapper>
      <Label htmlFor={title}>
        <Input
          type={"checkbox"}
          name={name}
          id={title}
          value={value}
          onChange={handleChange}
        />
        <CheckBox />
        <Title>{title}</Title>
      </Label>
    </InputWrapper>
  );
};
