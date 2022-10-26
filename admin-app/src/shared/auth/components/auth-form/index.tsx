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
import { FormikErrors, useFormik } from "formik";
import { object, string } from "yup";
// import * as Yup from "yup";

export const AuthForm = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isAuth = !!token;

  const userSchema = object({
    username: string()
      .required()
      .lowercase()
      .min(2)
      .max(20)
      .matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])/g),
  });

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
    validationSchema: userSchema,
    validate: (values: IUserLogin): FormikErrors<IUserLogin> => {
      if (!values.username) {
        errors.username = "Enter your telegram username";
      }

      if (
        !/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/gm.test(
          values.username
        )
      ) {
        errors.username = `Remove incorrect symbols like @!#$%`;
      } else {
        delete errors.username;
      }
      return errors;
    },
    validateOnChange: false,
  });
  if (isAuth) {
    return <Navigate to={"/"}></Navigate>;
  }

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
