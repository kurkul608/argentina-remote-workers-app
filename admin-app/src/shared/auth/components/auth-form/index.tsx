import React from "react";
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
import { useFormik } from "formik";

export const AuthForm = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isAuth = !!token;
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: async (values: IUserLogin) => {
      const result = await dispatch(authAsync(values));
      if (result.payload) {
        console.log(result.payload);
      }
    },
    validate: (values) => {
      if (!values.username) {
        errors.username = "Enter your telegram username";
      } else if (!/[A-z_1-9]*/g.test(values.username)) {
        errors.username = "Remove incorrect symbols like @!#$%";
      }
    },
  });
  if (isAuth) {
    return <Navigate to={"/"}></Navigate>;
  }
  console.log(values.username);
  return (
    <>
      <Wrapper>
        <Title>Sign In</Title>
        <UnderTitle>Welcome, we missed you</UnderTitle>
        <FormWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              value={values.username}
              id={"username"}
              name={"username"}
              placeHolderText={"username"}
              errors={errors.username}
            />
            <ButtonWrapper></ButtonWrapper>
            <Button label={"Submit"} type={"submit"}></Button>
          </StyledForm>
        </FormWrapper>
      </Wrapper>
    </>
  );
};
