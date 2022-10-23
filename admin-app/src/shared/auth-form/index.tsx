import React, { useState } from "react";
import { AuthFormInput } from "../components/form-input";
import {
  ButtonWrapper,
  FormWrapper,
  StyledForm,
  UnderTitle,
  Wrapper,
} from "./styled";
import { Title } from "./styled";
import { AuthFormSubmit } from "../components/form-submit";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { authAsync, IUserLogin } from "./redux/auth-form.slice";
import { Navigate } from "react-router";

export const AuthForm = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isAuth = !!token;
  const [loginInput, setLoginInput] = useState("");

  if (isAuth) {
    return <Navigate to={"/"}></Navigate>;
  }
  const onSubmit = async (values: IUserLogin) => {
    const result = await dispatch(authAsync(values));
    if (result.payload) {
      console.log(result.payload);
    }
  };

  console.log(token);
  return (
    <>
      <Wrapper>
        <Title>Sign In</Title>
        <UnderTitle>Welcome, we missed you</UnderTitle>
        <FormWrapper>
          <StyledForm name={"auth"}>
            <AuthFormInput onChange={setLoginInput}></AuthFormInput>
            <ButtonWrapper>
              <AuthFormSubmit
                onSubmit={() => onSubmit({ username: loginInput })}
              ></AuthFormSubmit>
            </ButtonWrapper>
          </StyledForm>
        </FormWrapper>
      </Wrapper>
    </>
  );
};
