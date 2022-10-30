import React from "react";
import {
  StyledInput,
  InputWrapper,
  Placeholder,
  PlaceholderFilled,
  Error,
  OuterWrapper,
} from "./styled";

interface IAuthFormProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
  id?: string;
  name: string;
  type?: string;
  placeHolderText?: string;
  errors?: any;
}

export const Input = ({
  onChange,
  value,
  id,
  type,
  name,
  placeHolderText,
  errors,
}: IAuthFormProps) => {
  console.log(value);
  console.log(errors);
  return (
    <>
      <OuterWrapper>
        <InputWrapper className={errors ? "invalid" : ""}>
          <StyledInput
            onChange={onChange}
            id={id}
            name={name}
            autoComplete={"off"}
            type={type || "text"}
          />
          {value && value.length ? (
            <PlaceholderFilled className={errors ? "invalid-text" : ""}>
              {placeHolderText || ""}
            </PlaceholderFilled>
          ) : (
            <Placeholder className={errors ? "invalid-text" : ""} htmlFor={id}>
              {placeHolderText || ""}
            </Placeholder>
          )}
        </InputWrapper>
        {errors ? <Error className={"invalid-text"}>{errors}</Error> : null}
      </OuterWrapper>
    </>
  );
};
