import React from "react";
import { AuthInput } from "./styled";

interface IAuthFormProps {
  onChange: any;
}

export const AuthFormInput = ({ onChange }: IAuthFormProps) => {
  return (
    <>
      <AuthInput
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={"Enter your username"}
      ></AuthInput>
    </>
  );
};
