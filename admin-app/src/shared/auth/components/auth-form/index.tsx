import React, { useRef } from "react";
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

// import { authAsync, IUserLogin } from "../../redux/auth.slice";
import { useNavigate } from "react-router";
import { getAuthToken } from "helpers/storage-parser";
// import { useFormik } from "formik";
// import * as yup from "yup";

export const AuthForm = () => {
	const token = getAuthToken();
	const isAuth = !!token.length;

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
