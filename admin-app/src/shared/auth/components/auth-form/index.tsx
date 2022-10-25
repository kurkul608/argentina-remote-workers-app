import React, { useState } from "react";
import { FormInput } from "../../../components/form-input";
import {
  ButtonWrapper,
  FormWrapper,
  StyledForm,
  UnderTitle,
  Wrapper,
} from "./styled";
import { Title } from "./styled";
import { ButtonSubmit } from "../../../components/form-submit";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { authAsync, IUserLogin } from "../../redux/auth.slice";
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
  return (
    <>
      <Wrapper>
        <Title>Sign In</Title>
        <UnderTitle>Welcome, we missed you</UnderTitle>
        <FormWrapper>
          <StyledForm name={"auth"}>
            <FormInput
              onChange={setLoginInput}
              placeholder={"username"}
              id={"auth"}
            ></FormInput>
            <ButtonWrapper>
              <ButtonSubmit
                onSubmit={() => onSubmit({ username: loginInput })}
                buttonText={"Submit"}
              ></ButtonSubmit>
            </ButtonWrapper>
          </StyledForm>
        </FormWrapper>
      </Wrapper>
    </>
  );
};
