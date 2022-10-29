import React from "react";
import { Input, InputWrapper, Title, Label, CheckBox } from "./styled";

export interface IFormCheckboxInput {
  title: string;
  name: string;
  handleChange: any;
}

export const FormCheckboxInput = ({
  title,
  name,
  handleChange,
}: IFormCheckboxInput) => {
  return (
    <InputWrapper>
      <Label htmlFor={title}>
      <Input
        type={"checkbox"}
        name={name}
        id={title}
        value={title}
        onChange={handleChange}
      ></Input>
        <CheckBox />
        <Title>{title}</Title>
      </Label>
    </InputWrapper>
  );
};
