import React from "react";
import { useNavigate, useParams } from "react-router";
import { Routes } from "shared/router";
import { routeBuilder } from "shared/router/services/route-builder";
import { Widget } from "shared/widget";
import { useAppDispatch } from "redux/hooks";
import { logIn } from "shared/auth/redux/auth.slice";

export const AuthTokenWidget = () => {
	const authToken = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	if (authToken.token) {
		localStorage.setItem("auth", authToken.token);
		dispatch(logIn(localStorage.getItem("auth")));
	}
	setTimeout(() => {
		return navigate(routeBuilder([Routes.admin]));
	}, 3000);
	return (
		<Widget name={""}>
			Мужык, ты через 3 секунды авторизуешься )))))00))0)000
		</Widget>
	);
};
