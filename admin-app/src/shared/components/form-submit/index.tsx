import React from "react";
import { Submit } from "./styeld";

interface ISubmit {
  onSubmit: any;
  buttonText: string;
}

export const ButtonSubmit = ({ onSubmit, buttonText }: ISubmit) => {
  return (
    <>
      <Submit type={"button"} onClick={onSubmit}>
        {buttonText}
      </Submit>
    </>
  );
};
