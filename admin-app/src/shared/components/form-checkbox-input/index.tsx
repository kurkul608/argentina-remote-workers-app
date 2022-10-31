import React from "react";
import { Input, InputWrapper, Title, Label } from "./styled";

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
      <Input
        type={"checkbox"}
        name={name}
        id={title}
        value={title}
        onChange={handleChange}
      ></Input>
      <Label htmlFor={title}>
        <Title>{title}</Title>
      </Label>
    </InputWrapper>
  );
};
