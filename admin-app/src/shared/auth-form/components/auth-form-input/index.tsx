import React, { useState } from "react";
import {
  AuthInput,
  AuthInputWrapper,
  Placeholder,
  PlaceholderFilled,
} from "./styled";

interface IAuthFormProps {
  onChange: any;
}

export const AuthFormInput = ({ onChange }: IAuthFormProps) => {
  const [value, setValue] = useState("");

  return (
    <>
      <AuthInputWrapper>
        <AuthInput
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          id={"login"}
          autoComplete={"off"}
        />
        {value.length === 0 ? (
          <Placeholder htmlFor={"login"}>username</Placeholder>
        ) : (
          <PlaceholderFilled>username</PlaceholderFilled>
        )}
      </AuthInputWrapper>
    </>
  );
};
