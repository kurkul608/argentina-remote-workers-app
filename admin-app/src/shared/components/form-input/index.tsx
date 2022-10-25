import React, { useState } from "react";
import {
  Input,
  FormInputWrapper,
  Placeholder,
  PlaceholderFilled,
} from "./styled";

interface IFormInputProps {
  onChange: any;
}

export const FormInput = ({ onChange }: IFormInputProps) => {
  const [value, setValue] = useState("");

  return (
    <>
      <FormInputWrapper>
        <Input
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          id={"login"}
          autoComplete={"off"}
        />
        {value.length ? (
          <PlaceholderFilled>username</PlaceholderFilled>
        ) : (
          <Placeholder htmlFor={"login"}>username</Placeholder>
        )}
      </FormInputWrapper>
    </>
  );
};
