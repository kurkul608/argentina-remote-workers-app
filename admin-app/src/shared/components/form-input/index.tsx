import React, { useState } from "react";
import {
  Input,
  FormInputWrapper,
  Placeholder,
  PlaceholderFilled,
} from "./styled";

interface IFormInputProps {
  onChange: any;
  placeholder: string;
  id: string;
}

export const FormInput = ({ onChange, placeholder, id }: IFormInputProps) => {
  const [value, setValue] = useState("");

  return (
    <>
      <FormInputWrapper>
        <Input
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          id={id}
          autoComplete={"off"}
        />
        {value.length ? (
          <PlaceholderFilled>{placeholder}</PlaceholderFilled>
        ) : (
          <Placeholder htmlFor={id}>{placeholder}</Placeholder>
        )}
      </FormInputWrapper>
    </>
  );
};
