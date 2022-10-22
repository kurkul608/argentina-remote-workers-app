import React from "react";
import { AuthFormInput } from "./components/auth-form-input";
import {
  ButtonWrapper,
  FormWrapper,
  Label,
  StyledForm,
  Submit,
  UnderTitle,
  Wrapper,
} from "./styled";
import { Title } from "./styled";

export const AuthForm = () => {
  return (
    <>
      <Wrapper>
        <Title>Sign In</Title>
        <UnderTitle>Welcome, we missed you</UnderTitle>
        <FormWrapper>
          <StyledForm name={"auth"}>
            <Label form={"auth"}>username</Label>
            <AuthFormInput></AuthFormInput>
            <ButtonWrapper>
              <Submit type={"submit"}>Submit</Submit>
            </ButtonWrapper>
          </StyledForm>
        </FormWrapper>
      </Wrapper>
    </>
  );
};
