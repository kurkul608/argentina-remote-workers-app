import React from "react";
import { Submit } from "./styeld";

interface ISubmit {
  onSubmit?: () => void;
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({ onSubmit, label, type, disabled }: ISubmit) => {
  return (
    <Submit
      type={type || "button"}
      placeholder={"Enter your username"}
      onClick={onSubmit}
      disabled={disabled}
    >
      {label}
    </Submit>
  );
};
