import React from "react";
import { Input, InputWrapper, Title, Label, CheckBox } from "./styled";

export interface IFormCheckboxInput {
  title: string;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  isChecked: boolean;
}

export const FormCheckboxInput = ({
  title,
  name,
  handleChange,
  value,
  isChecked,
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
          checked={isChecked}
        />
        <CheckBox />
        <Title>{title}</Title>
      </Label>
    </InputWrapper>
  );
};
