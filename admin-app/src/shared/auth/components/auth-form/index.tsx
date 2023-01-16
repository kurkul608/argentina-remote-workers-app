import React, { useLayoutEffect, useRef } from "react";
// import { Input } from "../../../components/form-input";
import {
  // ButtonWrapper,
  // FormWrapper,
  // StyledForm,
  // UnderTitle,
  Wrapper,
} from "./styled";
// import { Title } from "./styled";
// import { Button } from "../../../components/form-button";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
// import { authAsync, IUserLogin } from "../../redux/auth.slice";
import { useNavigate } from "react-router";
// import { useFormik } from "formik";
// import * as yup from "yup";
import { getBotToken } from "../../services/data";

export const AuthForm = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isAuth = !!token;

  const ref = useRef(null);

  // const t = (
  //   <>
  //     <script async src="https://telegram.org/js/telegram-widget.js?21" data-telegram-login="argentina_remote_test_bot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
  //     <script type="text/javascript">
  //       function onTelegramAuth(user) {
  //       alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
  //     }
  //     </script>
  //   </>
  // );
  const dataOnauth = (user: any) => {};

  useLayoutEffect(() => {
    getBotToken().then((botName) => {
      // @ts-ignore
      window.TelegramLoginWidget = {
        dataOnauth: (user: any) => dataOnauth(user),
      };

      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-widget.js?" + 21;
      script.setAttribute("data-telegram-login", botName);
      script.setAttribute("data-size", "large");
      // if (cornerRadius !== undefined) {
      //   script.setAttribute("data-radius", cornerRadius);
      // }
      script.setAttribute("data-request-access", "write");
      // script.setAttribute("data-userpic", usePic);
      // script.setAttribute("data-lang", lang);
      // if (dataAuthUrl !== undefined) {
      //   script.setAttribute("data-auth-url", dataAuthUrl);
      // } else {
      //   script.setAttribute(
      //       "data-onauth",
      //       "TelegramLoginWidget.dataOnauth(user)"
      //   );
      // }
      script.setAttribute(
        "data-onauth",
        "TelegramLoginWidget.dataOnauth(user)"
      );
      script.async = true;
      // @ts-ignore
      ref.current!.appendChild(script);
    });
  });
  // const userSchema = yup.object({
  //   username: yup
  //     .string()
  //     .required()
  //     .lowercase()
  //     .min(2)
  //     .max(20)
  //     .matches(
  //       /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
  //       "Remove incorrect symbols like @!#$%"
  //     ),
  // });

  // const { values, handleChange, handleSubmit, errors } = useFormik({
  //   initialValues: {
  //     username: "",
  //   },
  //   onSubmit: async (values: IUserLogin) => {
  //     const result = await dispatch(authAsync(values));
  //   },
  //   validationSchema: userSchema,
  //   validateOnChange: true,
  // });
  const navigate = useNavigate();
  if (isAuth) {
    navigate("/");
  }

  return (
    <>
      <Wrapper ref={ref}>
        <p style={{ color: "pink" }}>TEST</p>
        {/*<Title>Sign In</Title>*/}
        {/*<UnderTitle>Welcome, we missed you</UnderTitle>*/}
        {/*<FormWrapper>*/}
        {/*  <StyledForm onSubmit={handleSubmit}>*/}
        {/*    <Input*/}
        {/*      onChange={handleChange}*/}
        {/*      value={values.username}*/}
        {/*      id={"username"}*/}
        {/*      name={"username"}*/}
        {/*      placeHolderText={"username"}*/}
        {/*      errors={errors.username}*/}
        {/*    />*/}
        {/*    <ButtonWrapper></ButtonWrapper>*/}
        {/*    <Button*/}
        {/*      label={"Submit"}*/}
        {/*      type={"submit"}*/}
        {/*      isDisabled={!!Object.keys(errors).length}*/}
        {/*    ></Button>*/}
        {/*  </StyledForm>*/}
        {/*</FormWrapper>*/}
      </Wrapper>
    </>
  );
};
