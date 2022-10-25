import React from "react";
import {
  StyledInput,
  InputWrapper,
  Placeholder,
  PlaceholderFilled,
} from "./styled";

interface IAuthFormProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
  id?: string;
  name: string;
  type?: string;
  placeHolderText?: string;
}

export const Input = ({
  onChange,
  value,
  id,
  type,
  name,
  placeHolderText,
}: IAuthFormProps) => {
  return (
    <>
      <InputWrapper>
        <StyledInput
          onChange={onChange}
          id={id}
          name={name}
          autoComplete={"off"}
          type={type || "text"}
        />
        {value && value.length ? (
          <PlaceholderFilled>{placeHolderText || ""}</PlaceholderFilled>
        ) : (
          <Placeholder htmlFor={id}>{placeHolderText || ""}</Placeholder>
        )}
      </InputWrapper>
    </>
  );
};
