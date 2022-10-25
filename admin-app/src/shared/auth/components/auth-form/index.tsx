import React, { useState } from "react";
import { Input } from "../../../components/form-input";
import {
  ButtonWrapper,
  FormWrapper,
  StyledForm,
  UnderTitle,
  Wrapper,
} from "./styled";
import { Title } from "./styled";
import { Button } from "../../../components/form-button";
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

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginInput(e.target.value);
  return (
    <>
      <Wrapper>
        <Title>Sign In</Title>
        <UnderTitle>Welcome, we missed you</UnderTitle>
        <FormWrapper>
          <StyledForm name={"auth"}>
            <Input
              onChange={handleLogin}
              value={loginInput}
              id={"login"}
              name={"login"}
            />
            <ButtonWrapper>
              <Button
                onSubmit={() => onSubmit({ username: loginInput })}
                label={"Submit"}
              ></Button>
            </ButtonWrapper>
          </StyledForm>
        </FormWrapper>
      </Wrapper>
    </>
  );
};
