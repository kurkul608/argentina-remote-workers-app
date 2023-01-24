import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { logIn } from "shared/auth/redux/auth.slice";
export const AuthTokenComponent = () => {
	const { token: authTokenParams } = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (authTokenParams) {
			localStorage.setItem("auth", authTokenParams);
			dispatch(logIn(authTokenParams));
			navigate("/admin");
		}
	}, [authTokenParams]);
	return <></>;
};
