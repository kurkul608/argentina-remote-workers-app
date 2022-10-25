import React from "react";
import { Submit } from "./styeld";

interface ISubmit {
  onSubmit?: () => void;
  label: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ onSubmit, label, type }: ISubmit) => {
  return (
    <Submit
      type={type || "button"}
      placeholder={"Enter your username"}
      onClick={onSubmit}
    >
      {label}
    </Submit>
  );
};
