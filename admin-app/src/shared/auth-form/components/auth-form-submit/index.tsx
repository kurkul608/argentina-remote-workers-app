import React from "react";
import { Submit } from "./styeld";

interface ISubmit {
  onSubmit: any;
}

export const AuthFormSubmit = ({ onSubmit }: ISubmit) => {
  return (
    <>
      <Submit
        type={"button"}
        placeholder={"Enter your username"}
        onClick={onSubmit}
      >
        Submit
      </Submit>
    </>
  );
};
